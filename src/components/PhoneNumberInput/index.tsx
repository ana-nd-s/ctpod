import {Appearance} from 'react-native';
import {COLORS} from 'constants/colors';
import PhoneInput from 'react-native-phone-number-input';
import React from 'react';
import {styles} from './styles';

interface IPhoneNumberInputProps {
  value: string;
  onChange: (value: string) => void;
}

const PhoneNumberInput: React.FC<IPhoneNumberInputProps> = props => {
  const {value, onChange} = props;

  const isDarkColorScheme = Appearance.getColorScheme() === 'dark';

  return (
    <PhoneInput
      withDarkTheme={isDarkColorScheme}
      defaultValue={value}
      defaultCode="IN"
      layout="first"
      onChangeText={text => {
        onChange(text);
      }}
      placeholder="010 886 4738"
      textInputProps={{
        placeholderTextColor: COLORS.placeholder,
      }}
      containerStyle={[styles.resetDefaultStyle, styles.container]}
      textContainerStyle={[styles.resetDefaultStyle, styles.textContainer]}
      textInputStyle={[
        styles.resetDefaultStyle,
        styles.textContainer,
        styles.fontStyle,
      ]}
      codeTextStyle={[styles.codeText, styles.fontStyle]}
    />
  );
};

export default PhoneNumberInput;
