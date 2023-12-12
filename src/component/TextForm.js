import React, { useState } from 'react'


export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert("Converted to UpperCase", "success ")
  }

  const handleLowClick = () => {
    let newText = text.toLowerCase()
    setText(newText)
    props.showAlert("Converted to LowerCase", "success ")
  }

  const handleClearClick = () => {
    let newText = ' '
    setText(newText)
    props.showAlert("Clear Text", "success ")
  }

  const handleFirstUpperClick = () => {
    let words = text.split(' ')
    let updateWord = words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    setText(updateWord)
    props.showAlert("Convert all first letter in capital", "success ")
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(text)
    props.showAlert("Copied to Clipboard", "success ")
  }

  const handleExtraSpaces = () => {
    const removeExtraSpace = text.trim().split(' ')
      .filter(word => word !== '')
    const updateExtraSpace = removeExtraSpace.join(' ')

    setText(updateExtraSpace)
    props.showAlert("Extra spaces removed", "success ")
  }

 const handleOnChange = (event) => {
    setText(event.target.value)
  }

  const [text, setText] = useState('');
  // setText("new Text");

  return (
    <>
      <div className="container" 
      style={{
        color: props.mode === 'dark' ? 'white':'black'}}>
        <h1 className='mb-4'>{props.heading}</h1>
        <div className="mb-3 ">
          <textarea className='form-control' value={text} onChange={handleOnChange}
           style={{backgroundColor: props.mode === 'dark' ? '#222221':'white' ,
            color: props.mode=== 'dark' ? 'white':'black'
          }} 
            id='myBox' rows="8" ></textarea>
        </div>
        
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick} >Convert to UpperCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to LowerCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleFirstUpperClick}>FirstUpper</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Space</button>
      </div>
      <div className="container my-4" style={{backgroundColor: props.mode === 'dark' ? '#042743':'white'}} >
        <h2>Your text summery</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length}  4532324 characters</p>
        <p>{0.08 * text.split(" ").filter((element)=>{return element.length!==0}).length}Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length >0 ? text:"Nothing to preview"}</p>
      </div>
    </>
  )
}
