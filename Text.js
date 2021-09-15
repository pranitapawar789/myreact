import React , {useState} from 'react'


export default function Text(props) {
    
const [text, setText] = useState('Enter text here');
 const handleClick = ()=> {
    console.log("click")
    setText(text.toUpperCase());
}
const handleOnchange = (e)=> {
    setText(e.target.value);
}
    return (
        <>
        <div>
            <h3>{props.title} </h3>
            <textarea row="6" value={text} onChange={handleOnchange}></textarea>
        </div>
        <button onClick={handleClick}>Upper Case</button>
        <p>{text}</p>
        </>
    )
}
