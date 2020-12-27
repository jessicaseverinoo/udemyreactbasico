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
    ],
    newComment: {
      name: '',
      email: '',
      message: ''
    }
  }

  addComment = (e) => {
    e.preventDefault()

    const newComment = { ...this.state.newComment, date: new Date() }

    this.setState({ comments: [...this.state.comments, newComment],
                    newComment: { name: '', email: '', message: '' }})
  }

  enterValue = e => {
    const { name, value } = e.target
    this.setState({ newComment: { ...this.state.newComment, [name]: value } })
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

        <form method='post'
              onSubmit={this.newComment}>
          <h2>Adicionar comentário</h2>
          <div>
            <label for='name'>
              Nome</label>
            <input id='name'
                   type='text'
                   name='name'
                   onChange={this.enterValue}
                   value={this.state.newComment.name}
                   placeholder='Digite seu nome' />
          </div>
          <div>
            <label for='email'>
              Email</label>
            <input id='email'
                   type='text'
                   name='email'
                   onChange={this.enterValue}
                   value={this.state.newComment.email}
                   placeholder='Digite seu email' />
          </div>
          <div>
            <label for='message'>
              Message</label>
            <textarea id='message'
                      type='textarea'
                      name='message'
                      rows='4'
                      onChange={this.enterValue}
                      value={this.state.newComment.message}
                      placeholder='Digite sua mensagem'></textarea>
          </div>
          <button type='submit'>
            Adicionar comentário
          </button>
        </form>
      </div>
    )
  }
}

export default App;
