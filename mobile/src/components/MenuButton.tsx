import React from 'react';
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

interface MenuButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
}

export default function MenuButton({ title, onPress }: MenuButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.8}>
      <AntDesign name="barschart" size={24} color="#fff" style={{ position: 'absolute', left: 16, top: 16 }} />
      <Text style={styles.text}>{title}</Text>
      <AntDesign name="right" size={24} color="#fff" style={{ position: 'absolute', right: 16, top: 16 }} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#145291',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
