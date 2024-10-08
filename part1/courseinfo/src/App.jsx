import './App.css'

const Total = (props)  => {
  return (
    <div>
      <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
    </div>
  )
}
const Part = (props)  => {
  return (
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  )
}

const Content = (props)  => {
  return (
    <div>
      <Part part={props.parts[0].name} exercises={props.parts[0].exercises}></Part>
      <Part part={props.parts[1].name} exercises={props.parts[1].exercises}></Part>
      <Part part={props.parts[2].name} exercises={props.parts[2].exercises}></Part>
    </div>
  )
}
const Header = (props) => { 
  return (
    <div>
      <h1>
        {props.title}
      </h1>
    </div>
  )
}

function App() {
  const course = 'Half Stack application development'
  const parts = [
    { name: 'Fundamentals of React', exercises: 10 },
    { name: 'Using props to pass data', exercises: 7 },
    { name: 'State of a component', exercises: 14 },
  ]  
  return (
    <>     
      <div>
      <Header title={course}></Header>
      <Content parts={parts}></Content>
      <Total parts={parts}></Total>
    </div>
    </>
  )
}

export default App
