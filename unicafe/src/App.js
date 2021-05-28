import React, { useState } from 'react'
import Button from './button'
import Statistics from './Statistics'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allRatings, setAll] = useState([])
  
  // handle each event and save each click to the allRatings array 
  const handleGoodClick = () => {
    setAll(allRatings.concat(1))
    setGood(good + 1)
  } 
  const handleNeutralClick = () => {
    setAll(allRatings.concat(1))
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    setAll(allRatings.concat(1))
    setBad(bad + 1)
  }
// Sum the number of clicks registered in the allRatings array
  const sumRatings = allRatings.reduce((a,b) => a + b, 0)
  
  return (
    <div className="App">
      <h1>
        Give feedback here
      </h1>
  
      <Button handleClick={handleGoodClick} text={good} />
      <Button handleClick={handleNeutralClick} text={neutral} />
      <Button handleClick={handleBadClick} text={bad} />

      <h2>Statistics</h2>
      <table>
        <Statistics text="good" value={good} />
        <Statistics text="neutral" value={neutral} />
        <Statistics text="bad" value={bad} />

      <tr>
        <td>all</td> 
        <td>{sumRatings} </td>
      </tr>
      <tr>
        <td>average</td> 
        <td>{sumRatings/3}</td>
      </tr>
      <tr>
        <td>positive</td> 
        <td>{good/100 * sumRatings}%</td>
      </tr>
      </table>
    </div>
  );
}

export default App;
