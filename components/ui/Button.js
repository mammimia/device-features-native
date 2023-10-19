import { Pressable, StyleSheet, Text } from 'react-native';
import { Colors } from '../../constants/colors';

function Button({ onPress, children }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary800,
    paddingVertical: 8,
    paddingHorizontal: 12,
    margin: 4,
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.15,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 2,
    borderRadius: 4
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    color: Colors.primary50
  },
  pressed: {
    opacity: 0.75
  }
});

export default Button;
