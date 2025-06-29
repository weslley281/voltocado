import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

export default function LoadingSpinner() {
  return (
    <View style={styles.overlay}>
      <ActivityIndicator size="large" color="#145291" />
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
});
