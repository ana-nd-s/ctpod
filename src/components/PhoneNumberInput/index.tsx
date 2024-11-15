import React, {useRef} from 'react';

import {Appearance} from 'react-native';
import {COLORS} from 'constants/colors';
import PhoneInput from 'react-native-phone-number-input';
import {styles} from './styles';

interface IPhoneNumberInputProps {
  value: string;
  onChange: (value: string) => void;
  setCountryCode: React.Dispatch<React.SetStateAction<string>>;
}

const PhoneNumberInput: React.FC<IPhoneNumberInputProps> = props => {
  const {value, onChange, setCountryCode} = props;

  const isDarkColorScheme = Appearance.getColorScheme() === 'dark';

  const phoneInput = useRef<PhoneInput>(null);

  return (
    <PhoneInput
      ref={phoneInput}
      withDarkTheme={isDarkColorScheme}
      defaultValue={value}
      defaultCode="IN"
      layout="first"
      onChangeText={text => {
        onChange(text);
        setCountryCode(phoneInput.current?.getCallingCode() || '');
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
