
import Header from "./components/Header";
// import FeedbackItem from "./components/FeedbackItem";
import {useState} from "react";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";

const App = () => {
const [feedback, setFeedback] = useState(FeedbackData)
  return (
    <>
    <Header />
    <div className="app">
      <FeedbackList feedback={feedback}/>
    </div>
    </>
  )
};


export default App;