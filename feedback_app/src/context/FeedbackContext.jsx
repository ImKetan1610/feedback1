import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
    const [ feedback, setFeedback ] = useState([])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item : {},
        edit : false
    })

    //Delete feedback
    const deleteFeedback = ( id ) => {
        if(window.confirm("Are you sure you want to delete?")){
          setFeedback(feedback.filter((item)=>item.id !== id))
        }
    }

    //Add feedback
    const addFeedback = ( newFeedback ) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback])
    }

    //update feedback item
    const updateFeedback = (id, updItem) => {
        // setFeedback(feedback.map((item) => (item.id === id ? {...item, ...updItem} : item)))
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