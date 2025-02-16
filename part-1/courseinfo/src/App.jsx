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

const Content = ({part1, exercises1, part2, exercises2, part3, exercises3})=> {
  return (
    <>
      <Part1 part1={part1} exercises1={exercises1}/>
      <Part2 part2={part2} exercises2={exercises2}/>
      <Part3 part3={part3} exercises3={exercises3}/>
    </>
  )

}

// Total
const Total = ({exercises1, exercises2, exercises3})=> {
  return       <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
}

// App
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header courseName = {course} />

      <Content 
        part1={part1}
        exercises1={exercises1}
        part2={part2}
        exercises2={exercises2}
        part3={part3}
        exercises3={exercises3}
      />

      <Total 
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
    </div>
  )
}

export default App