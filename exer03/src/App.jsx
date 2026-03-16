import './App.css'
import React, { Component } from 'react';

/**
 * Componente de Classe Principal: App
 * Gerencia um estado dinâmico (contador) e métodos para alterá-lo.
 */
class App extends Component {
  constructor(props) {
    super(props);

    // O State aqui armazena o contador. 
    // Como ele começa em 0, a interface exibirá 0 inicialmente.
    this.state = {
      contador: 0
    };

    /* No React (Classes), precisamos fazer o 'bind' dos métodos para que 
       o 'this' funcione corretamente dentro das funções de clique.
    */
    /* BINDING (Vinculação):
       Em classes, as funções de clique perdem a referência do 'this'.
       O bind garante que, quando o botão for clicado, a função saiba que
       ela pertence a ESTA classe e consiga acessar 'this.setState'.
    */
    this.incrementar = this.incrementar.bind(this);
    this.decrementar = this.decrementar.bind(this);
  }

  // Método executado ao clicar no botão 'Incrementa'
  incrementar() {
    /* IMPORTANTE: Nunca altere o state diretamente (ex: this.state.contador++).
       Sempre use o setState para que o React saiba que deve renderizar a tela novamente.
    */
    this.setState({
      /* this.setState: É a única forma correta de atualizar o estado.
         Ele avisa ao React: "O dado mudou, por favor, redesenhe a tela!".
      */
      contador: this.state.contador + 1
    });
  }

  // Método executado ao clicar no botão 'Decrementa'
  decrementar() {
    this.setState({
      contador: this.state.contador - 1
    });
  }

  render() {
    return (
      <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        
        {/* SEÇÃO DO ENUNCIADO: Seu padrão visual de estudos */}
        <section style={{ 
          backgroundColor: '#0e0909', 
          padding: '10px', 
          marginBottom: '20px', 
          borderLeft: '5px solid #646cff',
          color: 'white' 
        }}>
          <strong>Enunciado do Exercício:</strong>
          <p>
            Crie um contador com valor inicial 0. Renderize dois botões: 
            "Incrementa" e "Decrementa". Ao clicar, o número deve ser atualizado.
          </p>
        </section>

        <hr />

        {/* SEÇÃO DA RESOLUÇÃO */}
        <section style={{ marginTop: '20px', textAlign: 'center' }}>
          <h2 style={{ color: '#fdfdfd', fontSize: '1.1rem', textTransform: 'uppercase' }}>
            Resolução:
          </h2>

          <div style={{ margin: '20px 0' }}>
            {/* O evento onClick recebe a referência da nossa função de incremento */}
            <button 
              onClick={this.incrementar} 
              style={styles.botao}
            >
              Incrementa
            </button>

            <span style={styles.texto}>
              O valor do contador é: <strong>{this.state.contador}</strong>
            </span>

            {/* O evento onClick recebe a referência da nossa função de decremento */}
            <button 
              onClick={this.decrementar} 
              style={styles.botao}
            >
              Decrementa
            </button>
          </div>
        </section>

      </div>
    );
  }
}

// Objeto de estilos para manter o App.jsx limpo
const styles = {
  botao: {
    padding: '10px 20px',
    fontSize: '1rem',
    cursor: 'pointer',
    backgroundColor: '#646cff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    margin: '0 10px'
  },
  texto: {
    fontSize: '1.2rem',
    color: '#cc9ee7'
  }
};

export default App;