import { createContext, useState, useEffect } from 'react'

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
    const [ isLoading, setIsLoading ] = useState(true)
    const [ feedback, setFeedback ] = useState([])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item : {},
        edit : false
    })


    useEffect(()=>{
        fetchFeedback();
    }, [])

    //Fetch feedback
    const fetchFeedback = async () => {
        const response = await fetch('/feedback?_sort=id&_order=desc');
        const data = await response.json();
        setFeedback(data);
        setIsLoading(false);
    }

    //Delete feedback
    const deleteFeedback = async ( id ) => {
        if(window.confirm("Are you sure you want to delete?")){
            await fetch (`/feedback/${id}`,{
                method: "DELETE"
            })

          setFeedback(feedback.filter((item)=>item.id !== id))
        }
    }

    //Add feedback
    const addFeedback = async ( newFeedback ) => {
        const response = await fetch("/feedback", {
            method: 'POST',
            headers : {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(newFeedback),
        })
        const data = await response.json();

        setFeedback([data, ...feedback])
    }

    //update feedback item
    const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map((item) => (item.id === id ? {...item, ...updItem} : item)))
        // console.log(id, updItem)
    }

    //Set item to be updated 
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit : true
        })
    }

    return ( 
        <FeedbackContext.Provider value = {{
            feedback,
            isLoading,
            deleteFeedback,
            addFeedback,
            editFeedback,
            feedbackEdit,
            updateFeedback
        }}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext;



{/* when we used the data from backend we don't need this hardcoded data to be passed in useState
        {
            id: 1,
            text: "This is a feedback item 1",
            rating: 10
        },
        {
            id: 2,
            text: "This is a feedback item 2",
            rating: 9
        },
        {
            id: 3,
            text: "This is a feedback item 3",
            rating: 8
        },
    */}