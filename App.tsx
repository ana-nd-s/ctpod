import { Platform, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import NavigationRoot from './src/navigation';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux'
import { persistor, store } from 'store';
import { PersistGate } from 'redux-persist/integration/react';

const App: React.FC = () => {
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
