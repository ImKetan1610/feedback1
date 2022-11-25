
import { motion, AnimatePresence } from "framer-motion"
// import PropTypes from "prop-types"              //as we are not using feedback as prop here thus no need of propTypes
import FeedbackItem from "./FeedbackItem"
import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"
import Spinner from "./Shared/Spinner"


function FeedbackList ( ) {  
{/*removed feedback from here because when we used context, we are not accessing feedback by prop drilling*/}

    const { feedback, isLoading } = useContext(FeedbackContext)

    if(!isLoading && (!feedback || feedback.length === 0)){
        return (
            <p>No Feedback Yet</p>
        )
    }

    return isLoading ? <Spinner /> : (
        <div className="feedback-List">
            <AnimatePresence>
                {feedback.map((item) => (
                    <motion.div key = {item.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} >
                        <FeedbackItem key={ item.id } item={ item } />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>  
    )

    // return <div className="feedback-List">
    //         {feedback.map((item) => (
    //             <FeedbackItem key={item.id} item={item} handleDelete = { handleDelete } />
    //         ))}
    //     </div>    
}

//as we are not using feedback as prop here thus no need of propTypes
// FeedbackList.propTypes = {
//     feedback : PropTypes.arrayOf(
//         PropTypes.shape({
//             id : PropTypes.string.isRequired,
//             text : PropTypes.string.isRequired,
//         })
//     )
// }

export default FeedbackList;