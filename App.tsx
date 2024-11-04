import {Platform, StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import NavigationRoot from './src/navigation';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      {Platform.OS === 'android' && (
        <StatusBar translucent={true} backgroundColor="rgba(0,0,0,0.2)" />
      )}
      <NavigationContainer>
        <NavigationRoot />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
