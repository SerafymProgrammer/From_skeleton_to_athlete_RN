import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../redux/actions/actions';
import styles from '../styles/showDayScreenStyle';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-navigation';

const RenderExercisesColumn = props => {
  const isOdd = number => (number + 1) % 2 === 0;
  const {exercises, isRightOrLeft} = props;
  if (exercises && exercises !== undefined && exercises.length > 0) {
    const renderColumn = exercises.filter((item, i) =>
      isRightOrLeft ? !isOdd(i) : isOdd(i),
    );
    return renderColumn.map((item, index) => (
      <View>
        <View style={styles.exerciseWrap}>
          <View style={styles.exerciseAvatar}></View>
          {item.doubleSet ? <Text style={styles.doubleSetStar}>*</Text> : null}
          <View style={styles.exerciseNameWrap}>
            <Text style={styles.exerciseNameTxt}>{item.name[0]}</Text>
          </View>
          <Text style={styles.exerciseNumberOfRepetitions}>
            {item.numberOfRepetitions}
          </Text>
        </View>
      </View>
    ));
  }
  return null;
};

class ShowDayScreen extends React.Component {
  static navigationOptions = {
    title: 'Просмотр дня',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 20,
    },
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    await this.props.getOneDay(this.props.navigation.state.params.dayNumber);
  }

  render() {
    return this.props.selectedDay &&
      Object.keys(this.props.selectedDay).length > 0 ? (
      <SafeAreaView
        forceInset={{top: 'never', horizontal: 'never', bottom: 'never'}}
        style={{flex: 1}}>
        <ScrollView>
          <View style={styles.exercisesContainer}>
            <View style={styles.exercisesColumnContainer}>
              <RenderExercisesColumn
                exercises={this.props.selectedDay.exercises}
                isRightOrLeft={true}
              />
            </View>
            <View style={styles.exercisesColumnContainer}>
              <RenderExercisesColumn
                exercises={this.props.selectedDay.exercises}
                isRightOrLeft={false}
              />
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('AddExerciseScreen', {
              dayNumber: this.props.navigation.state.params.dayNumber,
            });
          }}
          style={styles.addExerciseBtn}>
          <Text style={styles.addExerciseBtnTxt}>Добавить</Text>
        </TouchableOpacity>
      </SafeAreaView>
    ) : null;
  }
}

function mapStateToProps(state) {
  return {
    selectedDay: state.sheduleReducer.selectedDay,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getOneDay: dayNumber => dispatch(actions.getOneDay(dayNumber)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowDayScreen);
