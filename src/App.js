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

  addComment = () => {
    const newComment = {
      name: 'Luiz',
      email: 'exemplo@mail.com',
      date: new Date(),
      message: 'E ai, galera'
    }

    this.setState({
      comments: [...this.state.comments, newComment]
    })
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
            date={comment.date}
            message={comment.message}
          />
        })}
        <button onClick={this.addComment}>Adicionar comentário</button>
      </div>
    )
  }
}

export default App;
