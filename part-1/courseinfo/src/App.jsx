// Header
const Header = ({courseName})=>{
  return (
    <h1>{courseName}</h1>
  )
  
}

// Content
const Part1 = ({part1, exercises1})=> {
  return <p>{part1} {exercises1}</p>
}

const Part2 = ({part2, exercises2})=> {
  return <p>{part2} {exercises2}</p>
}

const Part3 = ({part3, exercises3})=> {
  return <p>{part3} {exercises3}</p>
}

const Content = ({parts})=> {
  return (
    <>
      <Part1 part1={parts[0].name} exercises1={parts[0].exercises}/>
      <Part2 part2={parts[1].name} exercises2={parts[1].exercises}/>
      <Part3 part3={parts[2].name} exercises3={parts[2].exercises}/>
    </>
  )

}

// Total
const Total = ({parts})=> {
  let totalExercises = parts.reduce((accumulator, part)=> accumulator + part.exercises, 0);
  return  <p>Number of exercises {totalExercises}</p>
}

// App
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
    return (
    <div>
      <Header courseName = {course.name} />

      <Content parts = {course.parts}/>

      <Total parts = {course.parts}/>
    </div>
  )
}

export default App