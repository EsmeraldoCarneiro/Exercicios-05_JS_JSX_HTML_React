import React, { Component } from 'react';

/**
 * Componente Retangulo
 * Demonstra como atualizar o estado através de um método personalizado.
 */
class Retangulo extends Component {
  constructor(props) {
    super(props);

    // O state guarda as informações base para o cálculo da área.
    this.state = {
      comprimento: 8,
      largura: 5
    };

    /* BINDING: Necessário para que o método 'mudarLargura' 
       consiga acessar o 'this.setState' ao ser disparado pelo botão.
    */
    this.mudarLargura = this.mudarLargura.bind(this);
  }

  // Método responsável por alterar apenas a largura no estado
  mudarLargura() {
    /* setState: altera a largura para 6. 
       O React preserva o comprimento (8) e atualiza apenas a largura.
    */
    this.setState({
      largura: 6
    });
  }

  render() {
    // Extraímos os valores do estado para facilitar o cálculo
    const { comprimento, largura } = this.state;

    /* CÁLCULO DINÂMICO:
       Toda vez que o state muda, o render() é executado novamente.
       Assim, a 'area' é recalculada automaticamente com os valores mais recentes.
    */
    const area = comprimento * largura;

    return (
      <div style={{ 
        padding: '20px', 
        backgroundColor: '#fff', 
        borderRadius: '8px', 
        border: '1px solid #ddd',
        textAlign: 'center' 
      }}>
        {/* Exibição da mensagem com o cálculo da área */}
        <p style={{ fontSize: '1.2rem', color: '#2c3e50' }}>
          A área do retângulo é: <strong>{area}</strong>
        </p>

        {/* O evento onClick chama o nosso método personalizado */}
        <button 
          onClick={this.mudarLargura}
          style={{
            padding: '10px 20px',
            backgroundColor: '#646cff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginTop: '10px'
          }}
        >
          Mudar largura
        </button>
      </div>
    );
  }
}

export default Retangulo;