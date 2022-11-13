import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles'

const Square = ({ squareID, squareValue, setTurn }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.square} onPress={() => setTurn(squareID)} disabled={squareValue ? true : ""}>
        <Text style={styles.squareValue}>{squareValue}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Square