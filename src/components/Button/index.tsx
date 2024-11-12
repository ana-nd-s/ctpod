import {ActivityIndicator, Pressable, StyleSheet, Text} from 'react-native';

import {COLORS} from 'constants/colors';
import React from 'react';

interface IButtonComponentProps {
  title: string;
  variant: 'primary' | 'secondary';
  isLoading?: boolean;
  onPress?: () => void;
}

const ButtonComponent: React.FC<IButtonComponentProps> = props => {
  const {title, isLoading, onPress} = props;
  return (
    <Pressable style={styles.button} disabled={isLoading} onPress={onPress}>
      {isLoading ? (
        <ActivityIndicator size={'small'} color={COLORS.white} />
      ) : (
        <Text style={styles.buttonTitle}>{title}</Text>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 48,
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    width: '100%',
  },
  buttonTitle: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
  },
});

export default ButtonComponent;
