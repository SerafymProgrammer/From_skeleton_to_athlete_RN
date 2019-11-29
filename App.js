import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Provider} from 'react-redux';
import store from './configureStore';
import SheduleScreen from './src/screens/sheduleScreen';
import ShowDayScreen from './src/screens/showDayScreen';
import AddExerciseScreen from './src/screens/addExerciseScreen';


const RootStack = createStackNavigator(
  {
    SheduleScreen: SheduleScreen,
    ShowDayScreen: ShowDayScreen,
    AddExerciseScreen: AddExerciseScreen,
  },
  {
    initialRouteName: 'SheduleScreen',
  }
);
const AppContainer = createAppContainer(RootStack);

const mainStore = store;
export default class App extends React.Component {
  render() {
    return (
      <Provider store={mainStore}>
        <AppContainer />
      </Provider>
    );
  }
}
