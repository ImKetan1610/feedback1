
import { useState } from "react";
import Header from "./components/Header";
// import FeedbackItem from "./components/FeedbackItem";
import feedbackData from "./data/feedbackData" 
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"

function App() {
  const [feedback, setFeedback] = useState(feedbackData)

  const deleteFeedback = ( id ) => {
    if(window.confirm("äre you sure you want to delete?")){
      setFeedback(feedback.filter((item)=>item.id !== id))
    }
    
  }

  return (
    <>
      {/* <Header text= "my text" bgcolor="red" textcolor = "smokewhite" />              props can be passed like this, if not passed then take the defaultone only */}
      <Header />
      {/* <FeedbackItem /> */}
      <div className='container'>
        <FeedbackForm />
        <FeedbackStats feedback = {feedback} />
        <FeedbackList feedback={feedback}  handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
