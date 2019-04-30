import React from 'react';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import APPHeader from './containers/AppHeader';
import AppNavigator from './containers/AppNavigator';
import Switcher from './navigation/Switcher';
import './styles/index.scss';
const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
          <APPHeader />
          <AppNavigator />
          <Switcher />
    </Provider>
  );
}
export default App;
