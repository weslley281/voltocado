import React from 'react';
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

interface GenericButtonProps {
    title: string;
    color: string;
    icon: any;
    size: number;
    button: 'primary' | 'secondary';
    onPress: (event: GestureResponderEvent) => void;
}

export default function GenericButton({ title, button, icon, color, size, onPress }: GenericButtonProps) {
    const buttonStyle = button === 'primary' ? styles.buttonPrimary : styles.buttonSecondary;
    return (
    <TouchableOpacity style={buttonStyle} onPress={onPress} activeOpacity={0.8}>
            <FontAwesome5 name={icon} size={size} color={color} style={{ position: 'absolute', left: 16, top: 16 }} />
            <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    buttonPrimary: {
        backgroundColor: '#157de6',
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
    buttonSecondary: {
        backgroundColor: '#888b8f',
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
    title: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
    }
});
