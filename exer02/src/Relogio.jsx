import React, { Component } from 'react';

/**
 * Componente Relogio
 * Demonstra como armazenar um objeto Date no state e formatá-lo.
 */
class Relogio extends Component {
  constructor(props) {
    super(props);

    // Inicializamos o state com a data/hora atual do sistema
    // O 'new Date()' captura o carimbo de data/hora do momento da execução.
    this.state = {
      date: new Date()
    };
  }

  render() {
    // Extraímos a data do state
    const { date } = this.state;

    /* A variável 'date' no estado contém muitas informações (ano, mês, dia, etc).
       Para este exercício, usamos o método toLocaleTimeString('pt-BR') que:
       1. Extrai apenas o horário.
       2. Formata de acordo com o padrão brasileiro (HH:mm:ss).
       3. Garante que números menores que 10 tenham o zero à esquerda (ex: 08:05:03).
    */
    const horaFormatada = date.toLocaleTimeString('pt-BR');

    return (
      <div style={{ 
        padding: '20px', 
        backgroundColor: '#fff', 
        borderRadius: '8px',
        textAlign: 'center',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ color: '#2c3e50', margin: 0 }}>Olá, React!</h2>
        <p style={{ fontSize: '1.2rem', color: '#646cff' }}>
          Agora é <strong>{horaFormatada}</strong>
        </p>
      </div>
    );
  }
}

export default Relogio;
