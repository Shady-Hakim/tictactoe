import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  square: {
     width: 80, 
     height: 80,
     marginVertical: 5,
     marginHorizontal: 5, 
     justifyContent: 'center',
     alignItems: 'center',
     borderWidth: 1,
     borderColor: '#fff'
  },
  squareValue: {
    fontSize: 40,
    color: '#fff'
  }
});