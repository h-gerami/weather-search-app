import * as React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationContainer} from '@react-navigation/native';
import {store, persistor} from './Redux/Store';
import Tabs from './Navigation/Tabs';

function App() {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <SafeAreaView style={styles.container}>
            <Tabs />
          </SafeAreaView>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
