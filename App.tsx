import {Platform, StatusBar} from 'react-native';
import React, {useEffect, useState} from 'react';
import {persistor, store} from 'store';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import NavigationRoot from './src/navigation';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App: React.FC = () => {
  const [token, setToken] = useState<string | null>('');
  useEffect(() => {
    console.warn('App.js useEffect calling', token);
    AsyncStorage.getItem('token').then(authToken => {
      setToken(authToken);
    });
  }, [token]);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          {Platform.OS === 'android' && (
            <StatusBar translucent={true} backgroundColor="rgba(0,0,0,0.2)" />
          )}
          <NavigationContainer>
            <NavigationRoot />
          </NavigationContainer>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
