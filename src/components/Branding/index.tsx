import {Image, ImageBackground, Text} from 'react-native';

import React from 'react';
import logoImage from '@images/logo.png';
import podImage from '@images/ctpod.png';
import {styles} from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useTranslation} from 'react-i18next';

const Branding: React.FC = () => {
  const {t} = useTranslation();
  const insets = useSafeAreaInsets();
  return (
    <ImageBackground
      style={{
        ...styles.container,
        paddingTop: insets.top,
      }}
      source={podImage}
      resizeMode="cover">
      <Image source={logoImage} style={styles.logoImg} />
      <Text style={styles.title}>{t('BRANDING')}</Text>
    </ImageBackground>
  );
};

export default Branding;
