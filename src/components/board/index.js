import React from 'react';
import { View } from 'react-native';
import Square from '../square';
import styles from './styles'

const Board = ({ turns, checkTurn }) => {
  return (
    <View style={styles.container}>
      <View style={styles.board}>
        <View style={styles.row}>
          <Square squareID={0} squareValue={turns[0]} setTurn={checkTurn} />
          <Square squareID={1} squareValue={turns[1]} setTurn={checkTurn} />
          <Square squareID={2} squareValue={turns[2]} setTurn={checkTurn} />
        </View>
        <View style={styles.row}>
          <Square squareID={3} squareValue={turns[3]} setTurn={checkTurn} />
          <Square squareID={4} squareValue={turns[4]} setTurn={checkTurn} />
          <Square squareID={5} squareValue={turns[5]} setTurn={checkTurn} />
        </View>
        <View style={styles.row}>
          <Square squareID={6} squareValue={turns[6]} setTurn={checkTurn} />
          <Square squareID={7} squareValue={turns[7]} setTurn={checkTurn} />
          <Square squareID={8} squareValue={turns[8]} setTurn={checkTurn} />
        </View>
      </View>
    </View>
  );
};

export default Board;
