import React, {useState} from 'react'

export default function TextForm(props) {
    const capitalizeText = (text) => {
        return text.toLowerCase().replace(/^(.)|\s+(.)/g, function($1) {
          return $1.toUpperCase();
        });
      }

    const handleOnchange = (event) => {
        setText(event.target.value)
    }
    const handleUPcase = () => {
        setText(text.toUpperCase())
    }
    const handleLowCase = () => {
        setText(text.toLowerCase())
    }
    const handleClearText = () => {
        setText('')
    }
    const handleCapitalize = () => {
        var capitalizedText = capitalizeText(text)
        setText(capitalizedText)
    }

    const [text, setText] = useState('')

  return (
    <>
    <div>
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="exampleFormControlTextarea1" onChange={handleOnchange} value={text} rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1 my-1" onClick={handleUPcase}>Convert to UPPERCASE</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleLowCase}>Convert to lowercase</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleCapitalize}>Capitalize</button>
      <button className="btn btn-danger mx-1 my-1" onClick={handleClearText}>Clear Text</button>

    </div>
    <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} Words, {text.length} Characters</p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>

        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
  )
}
