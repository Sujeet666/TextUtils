import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted into Upperercase!", "success");
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted into Lowercase!", "success");

    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text cleared!", "success");

    }
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!", "success");

    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");

    }


    const [text, setText] = useState("");
    return (
        <>
            <div className='container my-4' style={{color: props.mode==='light'?'black':'white'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} 
                   style={{backgroundColor: props.mode==='light'?'white':'#767d82',color: props.mode==='light'?'black':'white'}} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear the Text</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy the Text</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>

            <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
                <h3>Your text Summary</h3>
                <p className='count my-1'>►  {text.split(" ").length} words and {text.length} characters</p>
                <p className='readtime'>►  {0.008 * text.split(" ").length} Minutes to read </p>
                <h3>Preview</h3>
                <p>►  {text.length>0?text:"Enter something to previewit here."}</p>
            </div>
        </>

    )
} 