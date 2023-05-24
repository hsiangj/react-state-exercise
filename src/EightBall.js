import './EightBall.css';
import React, {useState} from  'react';

const EightBall = (props) => {
  const genRandomIndex = () => Math.floor(Math.random() * props.answers.length);
  const [color, setColor] = useState('black');
  const [msg, setMsg] = useState('Think of a Question');
  const [greenCount, setGreenCount] = useState(0);
  const [goldenrodCount, setGoldenrodCount] = useState(0);
  const [redCount, setRedCount] = useState(0);
  let newColor;

  const genAnswer = () => {
    const idx = genRandomIndex();
    let {msg, color} = props.answers[idx];
    setMsg(msg)
    setColor(color)
    newColor = color;
    colorCount()
  }
  const colorCount = () => {
    if (newColor === 'green') setGreenCount(greenCount+1);
    if (newColor === 'goldenrod') setGoldenrodCount(goldenrodCount+1);
    if (newColor === 'red') setRedCount(redCount+1);
  }

  const reset = () => {
    setColor('black');
    setMsg('Think of a Question');
    setGreenCount(0);
    setGoldenrodCount(0);
    setRedCount(0);
  }

  return (
    <div className="EightBall">
      <div className="EightBall-ball" style={{backgroundColor: color}} onClick={genAnswer}>
      <p>{msg}</p>
      </div>
      <p>Green #: {greenCount}  &nbsp;
         Goldenrod #: {goldenrodCount} &nbsp;
         Red #: {redCount} </p>
      <button onClick={reset}>Reset</button>
    </div>
    
    

  )
}

EightBall.defaultProps = {
  answers: [
    { msg: "It is certain.", color: "green" },
    { msg: "It is decidedly so.", color: "green" },
    { msg: "Without a doubt.", color: "green" },
    { msg: "Yes - definitely.", color: "green" },
    { msg: "You may rely on it.", color: "green" },
    { msg: "As I see it, yes.", color: "green" },
    { msg: "Most likely.", color: "green" },
    { msg: "Outlook good.", color: "green" },
    { msg: "Yes.", color: "green" },
    { msg: "Signs point to yes.", color: "goldenrod" },
    { msg: "Reply hazy, try again.", color: "goldenrod" },
    { msg: "Ask again later.", color: "goldenrod" },
    { msg: "Better not tell you now.", color: "goldenrod" },
    { msg: "Cannot predict now.", color: "goldenrod" },
    { msg: "Concentrate and ask again.", color: "goldenrod" },
    { msg: "Don't count on it.", color: "red" },
    { msg: "My reply is no.", color: "red" },
    { msg: "My sources say no.", color: "red" },
    { msg: "Outlook not so good.", color: "red" },
    { msg: "Very doubtful.", color: "red" },
  ]
}



export default EightBall;