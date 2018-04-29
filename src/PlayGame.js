import React, { Component } from 'react'
import getWeb3 from "./util/web3/getWeb3";
import Game from './../build/contracts/Game.json'

class PlayGame extends Component {
  constructor(props, context) {
    super(props, context);
    this.Game = null;
    this.state = {
      currentQuestion: '',
      currentGuess: '',
      round: 0,
      contractAddress: this.props.params.gameAddress
    }
  }

  componentDidMount() {
    const contractAddress = this.props.params.gameAddress;
    getWeb3
      .then((result) => {
        const web3 = result.payload.web3Instance;

        // TODO: change this to the real contract
        window.Game = new web3.eth.Contract(
          Game.abi,
          contractAddress
        );

        window.GameMethods = window.Game.methods;
      })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.error(err)
      });
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <p>Play Game</p>
          </div>
        </div>
      </div>
    );
  }
}

export default PlayGame
