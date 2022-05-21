
import Header from "./components/Header";
// import FeedbackItem from "./components/FeedbackItem";
import {useState} from "react";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
// import Card from "./components/shared/Card";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import { v4 as uuidv4 } from "uuid";

const App = () => {
const [feedback, setFeedback] = useState(FeedbackData)

  const addFeedback = (newFeedback) => {
    newFeedback.id= uuidv4();
    setFeedback([newFeedback, ...feedback])
  }

  const deleteFeedback = (id) => {
    if(window.confirm("Are you sure you want to delete this comment?")){
      return (
        setFeedback(feedback.filter((item) => item.id !== id))
      )
    }
  }
  
  
  return (
    <>
      <Header />
        <div className="container">
          <FeedbackForm handleAdd={addFeedback}/>
          <FeedbackStats feedback={feedback} />
          <FeedbackList feedback={feedback}
          handleDelete={deleteFeedback}/>
        </div>
    </>
  )
};


export default App;