import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';

interface ILayoutProps {
  TopComponent: React.ComponentType<any>;
  BottomComponent: React.ReactNode;
  darkMode: boolean;
}

const Layout: React.FC<ILayoutProps> = props => {
  const {TopComponent, BottomComponent, darkMode} = props;

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.scrollContainer}
      overScrollMode="never"
      keyboardShouldPersistTaps="handled">
      <View style={styles.container}>
        <View
          style={[
            styles.topSection,
            darkMode ? styles.darkBg : styles.lightBg,
          ]}>
          {TopComponent && <TopComponent />}
        </View>
        <View style={styles.bottomSection}>
          {BottomComponent && BottomComponent}
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Layout;
