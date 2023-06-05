import React, { useState } from 'react'


export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("Button clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase.", "success")
    }

    const handleToLower = () => {

        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase.", "success")
    }

    const handleOnChange = (event) => {

        // console.log("On Change");
        setText(event.target.value);
    }

    const handletoCapitalize = () => {

        let arr = text.split(" ");

        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        
        }
        setText(arr.join(" "));

       props.showAlert("Converted to Capitalize.", "success")
    }

    const handleClear = () => {

        setText('');
        props.showAlert("All text cleared.", "success")
    }

    const [text, setText] = useState('');

    return (
        <>
            <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
                <h3>Enter the text to analyze</h3>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#04203c':'white', color:props.mode==='dark'?'white':'black', border:props.mode==='dark'?'2px solid white':'2px solid black'}} value={text} rows="8"></textarea>
                </div>

                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleToLower}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handletoCapitalize}>Convert to Capitalize</button>
                <button className="btn btn-primary mx-2" onClick={handleClear}>Clear All</button>

            </div>
            <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
                <h3>Your text summary...</h3>
                <p>{text.split(" ").length} words and {text.length} characters.</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Enter some text to preview..."}</p>
            </div>
        </>
    )
}
