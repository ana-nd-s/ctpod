import {Alert, Image, StyleSheet, Text, View} from 'react-native';
import {LoginRequest, VerifyOtpRequest} from 'types/auth';
import React, {useState} from 'react';
import {login, resendOtp, verifyOtp} from 'services/auth';

import BootomSheet from 'components/BottomSheet';
import Branding from '@components/Branding';
import ButtonComponent from 'components/Button';
import {COLORS} from 'constants/colors';
import Layout from '@components/Layout';
import LoginForm from './Form';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import OTPLoader from './Loader';
import {OtpInput} from 'react-native-otp-entry';
import {RootStackParamList} from 'types/navigation';
import cancelImg from '@assets/icons/cancel-round.png';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import { useDispatch } from 'react-redux';
import { setAuthToken } from 'store/authSlice';

type ProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Profile'
>;

const Login: React.FC = () => {
  const dispatch = useDispatch()
  const {t} = useTranslation();
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  const [showOTPScreen, setShowOtpScreen] = useState(false);
  const [inProg, setInProg] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);
  const [incorrectOtp, setIncorrectOtp] = useState(false);
  const [phone, setPhone] = useState<string>('');
  const [countryCode, setCountryCode] = useState<string>('');
  const [otp, setOtp] = useState<string>('');

  /**
   * handles user login and send an otp to the user phone
   */
  const handleLogin = async () => {
    setInProg(true);
    const formData: LoginRequest = {phone, countryCode};
    try {
      const result = await login(formData);
      if (result.statusCode === 200) {
        setShowOtpScreen(true);
        setInProg(false);
      }
    } catch (error: any) {
      setInProg(false);
      Alert.alert('Error', error);
    }
  };

  /**
   * handles otp verification
   */
  const handleVerifyOtp = async () => {
    setIsLoading(true);
    const formData: VerifyOtpRequest = {phone, otp, countryCode};
    try {
      const result = await verifyOtp(formData);
      if (result.statusCode === 200) {
        const accessToken = result.data.accessToken;
        const refreshToken = result.data.refreshToken;
        dispatch(setAuthToken({accessToken, refreshToken}))
        setIsLoading(false);
        setShowOtpScreen(false);
        navigation.navigate('Profile');
      }
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      setIncorrectOtp(true);
    }
  };

  /**
   * handles resend otp
   */
  const handleResendOtp = async () => {
    setIncorrectOtp(false);
    if (phone && countryCode) {
      const formData: LoginRequest = {phone, countryCode};
      try {
        const result = await resendOtp(formData);
        if (result.statusCode === 200) {
          console.log(result);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };
 
  return (
    <>
      <Layout
        TopComponent={Branding}
        BottomComponent={
          <LoginForm
            isLoading={inProg}
            phone={phone}
            setPhone={setPhone}
            setCountryCode={setCountryCode}
            onLogin={handleLogin}
          />
        }
        darkMode={true}
      />
      <BootomSheet open={showOTPScreen} onClose={() => setShowOtpScreen(false)}>
        <View style={styles.container}>
          {!incorrectOtp ? (
            <>
              <Text style={styles.title}>{t('OTP_TITLE')}</Text>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>{t('OTP_LABEL')}</Text>
                <OtpInput
                  numberOfDigits={6}
                  onTextChange={text => setOtp(text)}
                  theme={{
                    pinCodeContainerStyle: styles.pinCodeContainer,
                    pinCodeTextStyle: styles.pinCodeText,
                    focusedPinCodeContainerStyle:
                      styles.focusedPinCodeContainer,
                    focusStickStyle: styles.focusStick,
                  }}
                />
              </View>
              {isLoading ? (
                <OTPLoader />
              ) : (
                <ButtonComponent
                  onPress={handleVerifyOtp}
                  title={t('VERIFY')}
                  variant="primary"
                />
              )}
            </>
          ) : (
            <View style={styles.incorrectOtpcontainer}>
              <Image source={cancelImg} />
              <Text style={styles.incorrectOtpTitle}>{t('OTP_ERROR')}</Text>
              <Text style={styles.incorrectOtpInfo}>
                {t('OTP_ERROR_MESSAGE')}
              </Text>
              <ButtonComponent
                onPress={handleResendOtp}
                title={t('RESEND_AGAIN')}
                variant="primary"
              />
            </View>
          )}
        </View>
      </BootomSheet>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 24,
  },
  incorrectOtpcontainer: {
    paddingTop: 16,
    alignItems: 'center',
    width: '100%',
    paddingBottom: 24,
  },
  inputContainer: {
    paddingBottom: 32,
  },
  title: {
    fontSize: 24,
    color: COLORS.header,
    fontWeight: 700,
    lineHeight: 28.8,
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    lineHeight: 20,
    color: COLORS.label,
  },
  pinCodeContainer: {
    height: 44,
    width: 44,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderColor: COLORS.border,
    borderRadius: 8,
  },
  pinCodeText: {
    fontSize: 16,
    lineHeight: 24,
    color: COLORS.black,
  },
  focusedPinCodeContainer: {
    borderColor: COLORS.border,
  },
  focusStick: {
    backgroundColor: COLORS.border,
    height: 24,
  },
  incorrectOtpTitle: {
    color: COLORS.black,
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '500',
    marginVertical: 16,
  },
  incorrectOtpInfo: {
    fontSize: 13,
    color: COLORS.label,
    textAlign: 'center',
    marginBottom: 16,
  },
});

export default Login;
