// import PropTypes from 'prop-types' //as we are not using feedback as prop here thus no need of propTypes
import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"


function FeedbackStats () {

    const { feedback } = useContext(FeedbackContext)

    //Calculate Rating Avg
    let average = feedback.reduce((acc,cur) => {
        return acc + cur.rating
    }, 0) / feedback.length

    console.log (average)
    average = average.toFixed(1).replace(/[.,]0$/, '')

    return (
        <div className = 'feedback-stats'>
            <h4>{feedback.length} Reviews</h4>
            <h4>Average Rating: { isNaN(average) ? 0 : average }</h4>
        </div>
    )
}

// as we are not using feedback as prop here thus no need of propTypes
// FeedbackStats.propTypes = {
//     feedback: PropTypes.array.isRequired,
// }

export default FeedbackStats;