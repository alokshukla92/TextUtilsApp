import React, {useState} from 'react'

export default function TextForm(props) {

    const handleOnchange = (event) => {
        setText(event.target.value)
    }
    const handleUPcase = () => {
        setText(text.toUpperCase())
    }

    const [text, setText] = useState("Enter text here")

  return (
    <div>
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="exampleFormControlTextarea1" onChange={handleOnchange} value={text} rows="8"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUPcase}>Convert to UPPERCASE</button>
    </div>

  )
}
