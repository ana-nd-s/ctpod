import HomeScreen from 'pages/Home';
import Login from 'pages/Authentication/Login';
import Profile from 'pages/Authentication/Profile';
import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import { persistor, store } from 'store'
import LoadingScreen from '@components/LoadingScreen';

type RootState = ReturnType<typeof store.getState>;

const NavigationRoot = () => {
  const AuthStack = createNativeStackNavigator();
  const UnauthStack = createNativeStackNavigator();
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const accessToken = useSelector((state: RootState) => state.auth.accessToken);
  const [isHydrated, setIsHydrated] = React.useState(false);

  console.log("isAuthenticated @ NavigationRoot:", isAuthenticated);
  console.log("isHydrated", isHydrated);
  console.log("Tokens @navigationRoot", accessToken);

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

  useEffect(() => {
    console.log("NavigationRoot mounted:");
    console.log("isAuthenticated:", isAuthenticated);
    console.log("accessToken:", accessToken);
    
  }, [isAuthenticated, accessToken]);

  const AuthenticatedStack = () => (
    <AuthStack.Navigator initialRouteName="Profile">
      <AuthStack.Screen name="Home" component={HomeScreen} />
      <AuthStack.Screen name="Profile" component={Profile} />
    </AuthStack.Navigator>
  );

  const UnauthenticatedStack = () => (
    <UnauthStack.Navigator initialRouteName="Login">
      <UnauthStack.Screen name="Login" component={Login} options={{ headerShown: false }} />
    </UnauthStack.Navigator>
  );

  // Show a loading screen while state is hydrating
  if (!isHydrated) {
    return <LoadingScreen />;
  }

  return isAuthenticated ? <AuthenticatedStack /> : <UnauthenticatedStack />;

};

export default NavigationRoot;
