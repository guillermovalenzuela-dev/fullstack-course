import { useState } from 'react'
import './App.css'

const StatisticLine = ({text,value}) => {
  return(
    <tr>
      <td><strong>{text}</strong></td>
      <td>{value}</td>
    </tr>
  )
}
const Button = ({ handleClick, text }) => { 
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Statistics = ({good,neutral,bad,all,average, positive}) => {
  if (good=== 0 && neutral === 0 && bad === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <div>
      <table>
      <tbody>
        <StatisticLine text="good" value ={good} />
        <StatisticLine text="neutral" value ={neutral} />
        <StatisticLine text="bad" value ={bad} />
        <StatisticLine text="all" value ={all} />
        <StatisticLine text="average" value ={average} />
        <StatisticLine text="positive" value ={positive + ' %'} />
        </tbody>  
      </table>
      
    </div>
  )
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGoodClick = () => {
    const newGood = good + 1;  
    const newAll = all + 1;   
    const newAverage = (newGood - bad) / newAll;  
    const newPositive = newGood / newAll * 100;
    setGood(newGood);
    setAll(newAll);
    setAverage(newAverage);
    setPositive(newPositive);
  }
  const handleNeutralClick = () => {
    const newAll = all + 1;
    const newNeutral = neutral + 1;    
    const newPositive = good / newAll * 100;
    setAll(newAll);
    setNeutral(newNeutral);
    setPositive(newPositive);
  }
  const handleBadClick = () => {
    const newBad= bad + 1;  
    const newAll = all + 1;   
    const newAverage = (good - newBad) / newAll;  
    const newPositive = good / newAll * 100;
    setBad(newBad);
    setAll(newAll);
    setAverage(newAverage);
    setPositive(newPositive);
  }

  return (
    <>
      <h1>Give feedback</h1>
      <div>
        <Button handleClick={handleGoodClick} text='good' />
        <Button handleClick={handleNeutralClick} text='neutral' />
        <Button handleClick={handleBadClick} text='bad' />
      </div>
      <h1>Statistics</h1>
      <div>
        <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive} ></Statistics>
      </div>
    </>
  )
}

export default App
