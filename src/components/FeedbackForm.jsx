import Card from "./shared/Card";
import {useState} from "react";
import Button from "./Button";
import RatingSelect from "./RatingSelect";

const FeedbackForm = ({ handleAdd }) => {
  const [text, setText] = useState('');
  const[btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(null);

  const handleTextChange = (e) => {
    if(text === '') {
      setBtnDisabled(true)
      setMessage(null)
  } else if (text !== '' && text.trim().length < 10) {
      setMessage("More than 10 characters required...")
      setBtnDisabled(true)
  } else {
      setMessage(null)
      setBtnDisabled(false)
  }
    setText(e.target.value)
}

  const handleSubmit = (e) => {
    e.preventDefault();
    if(text.trim().length > 10) {
      const newFeedback = {
        text: text,
        rating: rating,
      }
      handleAdd(newFeedback)
      setText('')
    }

  }

  return (
    <Card className="">
      <form onSubmit={handleSubmit}>
        <h2>How would you rate us?</h2>
        <RatingSelect select={(rating) => setRating(rating)}/>
        <div className="input-group">
          <input 
            onChange={handleTextChange} 
            type="text" 
            placeholder="write a review" required
            value={text} />
          <Button type="submit" isDisabled={btnDisabled}>Send</Button>
        </div>
        {message && <div className="message">{message}</div> }
      </form>

    </Card>
   
  )
}

export default FeedbackForm;