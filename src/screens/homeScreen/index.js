import React, {useState} from 'react';
import Board from '../../components/board';
import {
    Text,
    View,
    Modal,
    TouchableOpacity
  } from 'react-native';
  import styles from './styles'

export default Home = () => {

  const [xTurn, changeTurn] = useState(true);
  const [endGame, setEndGame] = useState(false);
  const [modal, toggleModal] = useState(false);

  const [result, setResult] = useState('');

  const [turns, setTurn] = useState({});

  const togglePlayer = () => changeTurn(!xTurn);

  const newGame = () => {
    setTurn({});
    setEndGame(false);
    toggleModal(false);
    changeTurn(true);
  };

  const finishGame = () => {
    setEndGame();
    toggleModal(!modal)
  };

  function checkWinner() {
    const winningCriteria = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningCriteria.length; i++) {
      const [a, b, c] = winningCriteria[i];
      if (turns[a] === turns[b] && turns[b] === turns[c] && a in turns && b in turns && c in turns) {
        setResult(xTurn ? 'Player 1 won' : 'Player 2 won');
        finishGame();
      }
    }

    if (Object.keys(turns).length === 9) {
      setResult('Tie Game!');
      finishGame();
    }
  }

  function checkTurn(value) {
    const tempTurns = turns;
    tempTurns[value] = xTurn ? 'X' : 'O';

    setTurn({ ...tempTurns });

    checkWinner();
    togglePlayer();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Tic Tac Toe</Text>
      {!endGame && (
        <Board
          turns={turns}
          checkTurn={checkTurn}
        />
      )}
      <Modal animationType={'slide'} visible={modal}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.resultText}>{result}</Text>
            <TouchableOpacity style={styles.purpleButton} onPress={newGame}>
              <Text style={styles.buttonText}>Start a new game</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

