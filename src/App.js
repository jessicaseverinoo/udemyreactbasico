import React from 'react'

import Comment from './components/Comment/index'

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Meu Projeto</h1>
      <Comment
        name='Jessica'
        email='jessica.severino@accurate.com.br'
        data={new Date(2020, 12, 27)}
        message='Olá, tudo bem?'
      />

      <Comment
        name='Alana'
        email='tmcalana@outlook.com'
        data={new Date(2020, 12, 27)}
        message='Olá, tudo bem?'
      />

      <Comment
        name='Gabriel'
        email='gabrielseverino10@outlook.com'
        data={new Date(2020, 12, 27)}
        message='Olá, tudo bem?'
      />
    </div>
  );
}

export default App;
