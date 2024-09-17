import { useState } from 'react'
import './App.css'

function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));


  const getRandomAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  };
  const voteForAnecdote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };

  const getAnecdoteWithMostVotes = () => {
    const maxVotes = Math.max(...votes);    
    const maxVotesIndex = votes.indexOf(maxVotes); 
    return anecdotes[maxVotesIndex];
  };

  return (
    <>
      <div>
      <h2>Anecdote of the Day</h2>
        <p>{anecdotes[selected]}</p>
        <p>Has {votes[selected]} votes</p>
        <button onClick={voteForAnecdote}>Vote</button>
        <button onClick={getRandomAnecdote}>Next Anecdote</button>        
      </div>
      <h2>Anecdote with Most Votes</h2>
        {Math.max(...votes) > 0 ? (
          <div>
            <p>{getAnecdoteWithMostVotes()}</p>
            <p>Has {Math.max(...votes)} votes</p>
          </div>
        ) : (
          <p>No votes yet.</p>
        )}
    </>
  )
}

export default App
