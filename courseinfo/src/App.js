import React from 'react';
import Header from './header'
import Content from './content'
import Part from './part'
import Total from './total'

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
      <Header course={course.name}  />
      <Content>
        <Part parts = {course.parts[0]['name']} exercises = {course.parts[0]['exercises']} />
        <Part parts = {course.parts[1]['name']} exercises = {course.parts[1]['exercises']} />
        <Part parts = {course.parts[2]['name']} exercises = {course.parts[2]['exercises']} />
      </Content>
      <Total total={course.parts[0]['exercises'] + course.parts[1]['exercises'] + course.parts[2]['exercises']} />
      
    </div>
  )
}

export default App