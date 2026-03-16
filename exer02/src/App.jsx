import './App.css'
import React, { Component } from 'react';
import Relogio from './Relogio'; // Importando o componente Relogio

class App extends Component {
  render() {
    return (
      <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        
        {/* SEÇÃO DO ENUNCIADO: Padrão das atividades */}
        <section style={{ 
          backgroundColor: '#0e0909', 
          padding: '10px', 
          marginBottom: '20px', 
          borderLeft: '5px solid #646cff',
          color: 'white' 
        }}>
          <strong>Enunciado do Exercício:</strong>
          <p>
            Crie um componente de classe chamado "Relogio", utilizando o objeto 
            <strong> state</strong> com a chave <strong>date: new Date()</strong>. 
            Exiba a mensagem: "Olá, React! Agora é HH:MM:SS".
          </p>
        </section>

        <hr />

        {/* SEÇÃO DA RESOLUÇÃO */}
        <section style={{ marginTop: '20px' }}>
          <h2 style={{ color: '#333', fontSize: '1.1rem', textTransform: 'uppercase' }}>
            Resolução:
          </h2>
          
          {/* O componente Relogio é chamado e executa sua lógica interna de tempo */}
          <Relogio />
        </section>

      </div>
    );
  }
}

export default App;