import './App.css'
import React, { Component } from 'react';
import Identificacao from './Identificacao'; // Importando o componente com State

class App extends Component {
  render() {
    return (
      <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        
        {/* SEÇÃO DO ENUNCIADO: Padrão de todas as atividades */}
        <section style={{ 
          backgroundColor: '#0e0909', 
          padding: '10px', 
          marginBottom: '20px', 
          borderLeft: '5px solid #646cff',
          color: 'white' 
        }}>
          <strong>Enunciado do Exercício:</strong>
          <p>
            Crie um componente de classe chamado "Identificacao", utilizando o objeto 
            <strong> state</strong> com as chaves: nome, sobrenome e idade. 
            Renderize esses valores na tela.
          </p>
        </section>

        <hr />

        {/* SEÇÃO DA RESOLUÇÃO */}
        <section style={{ marginTop: '20px' }}>
          <h2 style={{ color: '#f5f5f5', fontSize: '1.2rem', textTransform: 'uppercase' }}>
            Resolução:
          </h2>
          {/* Note que não passamos nenhuma Prop. 
              O componente Identificacao já possui seus dados internamente no State. 
          */}
          {/* O componente Identificacao gerencia seus próprios dados internamente */}
          <Identificacao />
        </section>

      </div>
    );
  }
}

export default App;