
import { useState } from "react";
import Card from "./Shared/Card";
import Button from "./Shared/Button";


function FeedbackForm () {
    const [text,setText]= useState('');
    const handleTextChange = (e) => {
        setText(e.target.value)
    }

    return (
        <Card>
            <form>
                <h2>How would you rate your service with us?</h2>
                {/* @todo - rating select component */}
                <div className="input-group">
                    <input onChange = {handleTextChange} type="text" placeholder='Write a Review' value={text} />
                    <Button type="submit">Send</Button> 
                    {/* no need to pass version, isDisableed it takes the default values */}
                </div>
            </form>
        </Card>
    )
}

export default FeedbackForm;
