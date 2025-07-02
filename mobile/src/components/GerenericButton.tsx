import React from 'react';
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

interface GenericButtonProps {
    title: string;
    color: string;
    icon: any;
    size: number;
    button: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
    onPress: (event: GestureResponderEvent) => void;
}

export default function GenericButton({ title, button, icon, color, size, onPress }: GenericButtonProps) {
    const buttonStyles: Record<GenericButtonProps['button'], any> = {
        primary: styles.buttonPrimary,
        secondary: styles.buttonSecondary,
        success: styles.buttonSuccess,
        danger: styles.buttonDanger,
        warning: styles.buttonWarning,
    };

    const selectedStyle = buttonStyles[button];

    return (
    <TouchableOpacity style={selectedStyle} onPress={onPress} activeOpacity={0.8}>
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
    buttonSuccess: {
        backgroundColor: '#28a745',
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
    buttonDanger: {
        backgroundColor: '#dc3545',
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
    buttonWarning: {
        backgroundColor: '#ffc107',
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
