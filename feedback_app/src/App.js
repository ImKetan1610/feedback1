
import { useState } from "react";
import Header from "./components/Header";
// import FeedbackItem from "./components/FeedbackItem";
import feedbackData from "./data/feedbackData" 
import FeedbackList from "./components/FeedbackList"

function App() {
  const [feedback, setFeedback] = useState(feedbackData)
  return (
    <>
      {/* <Header text= "my text" bgcolor="red" textcolor = "smokewhite" />              props can be passed like this, if not passed then take the defaultone only */}
      <Header />
      {/* <FeedbackItem /> */}
      <div className='container'>
        <FeedbackList feedback={feedback} />
      </div>
    </>
  );
}

export default App;
