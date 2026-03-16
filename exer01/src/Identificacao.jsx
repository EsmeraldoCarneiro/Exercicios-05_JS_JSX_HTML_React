import React, { Component } from 'react';

/**
 * Identificacao - Componente de Classe
 * Este componente demonstra o uso do objeto 'state' para armazenar
 * dados internos que pertencem exclusivamente a ele.
 */
class Identificacao extends Component {
  // O constructor é o primeiro método executado ao criar o componente
  constructor(props) {
    super(props); // Necessário para herdar funcionalidades de React.Component
                  // super(props) executa o construtor da classe pai (React.Component)
                  // Sem isso, o 'this' não funcionaria dentro do construtor

    // Inicialização do objeto state
    this.state = {
      nome: "Esmeraldo",     // Chave: nome, Valor: string
      sobrenome: "Junior",   // Chave: sobrenome, Valor: string
      idade: 44              // Chave: idade, Valor: number
    };
  }

  render() {
    /* Aqui fazemos a 'Desestruturação' (Destructuring).
       Retiramos nome, sobrenome e idade de dentro de 'this.state' 
       para não precisar escrever 'this.state.nome' toda vez no HTML.
    */
    const { nome, sobrenome, idade } = this.state;

    return (
      // Estilização simples para exibir os dados de forma limpa
      <div style={{ 
        padding: '15px', 
        lineHeight: '1.8', 
        backgroundColor: '#4e4b4b', 
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)' 
      }}>
        {/* Renderização dos valores armazenados no State */}
        <p><strong>Nome:</strong> {nome}</p>
        <p><strong>Sobrenome:</strong> {sobrenome}</p>
        <p><strong>Idade:</strong> {idade} anos</p>
      </div>
    );
  }
}

export default Identificacao;