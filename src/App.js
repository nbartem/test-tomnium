import React from 'react';
import getRates from './getRates';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      base: '',
      rates: [],
      timestamp: '',
      valid: true,
    };
  }
  componentDidMount() {
    getRates().then(data => {
        this.setState(state => ({
          base: data.base,
          rates: data.rates,
          timestamp: data.timestamp,
          valid: data.valid,
        }));
      });
  }
  render() {
    const rates = this.state.rates,
      timestamp = this.state.timestamp,
      base = this.state.base,
      valid = this.state.valid;
    let id = 0;
    return (
      <div>
        <h1>{base}</h1>
        <p>Timestamp: {timestamp}</p>
        {valid ? null : <p>Information is not valid</p>}

        <div className="flexbox">
          <div>{Object.keys(rates).map(key => (
            <p key={Object.keys(rates).indexOf(key)}>{key}</p>
          ))}</div>          
          <div>{Object.values(rates).map(value => {            
            id++;
            return <p key={id}>{value.toFixed(3)}</p>
          })}</div>
        </div>
      </div>
    );
  }
}

export default App;
