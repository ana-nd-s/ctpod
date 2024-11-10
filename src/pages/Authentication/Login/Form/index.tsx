import {StyleSheet, Text, View} from 'react-native';

import ButtonComponent from '@components/Button';
import PhoneNumberInput from 'components/PhoneNumberInput';
import React from 'react';
import {useTranslation} from 'react-i18next';

interface ILoginForm {
  phone: string;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
  setCountryCode: React.Dispatch<React.SetStateAction<number | undefined>>;
  onLogin: () => void;
}

const LoginForm: React.FC<ILoginForm> = props => {
  const {phone, setPhone, setCountryCode, onLogin} = props;
  const {t} = useTranslation();

  return (
    <>
      <Text style={styles.title}>{t('LOGIN_MESSAGE')}</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>{t('PHONE_NUMBER')}</Text>
        <PhoneNumberInput
          value={phone}
          onChange={setPhone}
          setCountryCode={setCountryCode}
        />
      </View>
      <ButtonComponent title="Login" variant="primary" onPress={onLogin} />
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: '#353131',
    lineHeight: 28.8,
    fontWeight: '700',
  },
  inputContainer: {
    paddingTop: 24,
    paddingBottom: 32,
  },
  label: {
    fontSize: 14,
    color: '#344054',
    marginBottom: 8,
  },
});
export default LoginForm;
