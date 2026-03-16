import './App.css'
import React, { Component } from 'react';
import Retangulo from './Retangulo'; // Importando o componente de lógica

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
            Crie um componente de classe "Retangulo" com state (comprimento: 8, largura: 5). 
            Crie o método "mudarLargura()" para alterar o valor para 6. 
            Renderize a área e um botão para mudar a largura.
          </p>
        </section>

        <hr />

        {/* SEÇÃO DA RESOLUÇÃO */}
        <section style={{ marginTop: '20px' }}>
          <h2 style={{ color: '#ffffff', fontSize: '1.1rem', textTransform: 'uppercase' }}>
            Resolução:
          </h2>
          
          {/* O evento onClick chama o nosso método personalizado */}
          <Retangulo />
        </section>

      </div>
    );
  }
}

export default App;