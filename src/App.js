import React, { Component } from 'react'

import Comment from './components/Comment/index'

import './App.css';

class App extends Component {
  state = {
    comments: [
      {
        name: 'Jessica',
        email: 'exemplo@mail.com',
        date: new Date(2020, 12, 27),
        message: 'Olá, tudo bem?'
      },
      {
        name: 'Alana',
        email: 'exemplo@mail.com',
        date: new Date(2020, 12, 27),
        message: 'Olá, tudo bem?'
      },
      {
        name: 'Gabriel',
        email: 'exemplo@mail.com',
        date: new Date(2020, 12, 27),
        message: 'Olá, tudo bem?'
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Meu Projeto</h1>
        {this.state.comments.map((comment, index) => {
          <Comment
            key={index}
            name={comment.name}
            email={comment.email}
            data={comment.date}
            message={comment.message}
          />
        })}
      </div>
    )
  }
}

export default App;
