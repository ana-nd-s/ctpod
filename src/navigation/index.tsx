import React, {useEffect, useState} from 'react';
import {persistor, store} from 'store';

import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeScreen from 'pages/Home';
import LoadingScreen from '@components/LoadingScreen';
import Login from 'pages/Authentication/Login';
import Profile from 'pages/Authentication/Profile';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';

type RootState = ReturnType<typeof store.getState>;

// const AuthStack = createNativeStackNavigator();
// const UnauthStack = createNativeStackNavigator();

// const AuthenticatedStack = () => (
//   <AuthStack.Navigator initialRouteName="Profile">
//     <AuthStack.Screen name="Home" component={HomeScreen} />
//     <AuthStack.Screen name="Profile" component={Profile} />
//   </AuthStack.Navigator>
// );

// const UnauthenticatedStack = () => (
//   <UnauthStack.Navigator initialRouteName="Login">
//     <UnauthStack.Screen
//       name="Login"
//       component={Login}
//       options={{headerShown: false}}
//     />
//   </UnauthStack.Navigator>
// );
const NavigationRoot = () => {
  const Stack = createNativeStackNavigator();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated,
  );
  const [isHydrated, setIsHydrated] = React.useState(false);
  const [userToken, setUserToken] = useState<string | null>(null);
  useEffect(() => {
    console.warn('calling useEffect iin Navigation', userToken);
    AsyncStorage.getItem('token').then(token => {
      setUserToken(token);
    });
  }, [isAuthenticated, userToken]);

  // console.log('isAuthenticated @ NavigationRoot:', isAuthenticated);
  // console.log('isHydrated', isHydrated);
  // console.log('Tokens @navigationRoot', accessToken);

  useEffect(() => {
    if (!isHydrated) {
      const checkHydration = () => {
        if (persistor.getState().bootstrapped) {
          setIsHydrated(true);
        }
      };
      checkHydration();
    }
  }, [isHydrated]);

  // useEffect(() => {
  //   console.log('NavigationRoot mounted:');
  //   console.log('isAuthenticated:', isAuthenticated);
  //   console.log('accessToken:', accessToken);
  // }, [isAuthenticated, accessToken]);

  // Show a loading screen while state is hydrating
  if (!isHydrated) {
    return <LoadingScreen />;
  }

  return (
    <Stack.Navigator>
      {!userToken ? (
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
      ) : (
        <>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Profile" component={Profile} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default NavigationRoot;
