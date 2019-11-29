import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../redux/actions/actions';
import styles from '../styles/addExerciseScreenStyle';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Dropdown} from 'react-native-material-dropdown';
import {width} from 'react-native-dimension';

const exercises = [
  {
    value: 'Жим',
  },
  {
    value: 'Отжимания',
  },
  {
    value: 'Подтягивания',
  },
  {
    value: 'Челночный бег',
  },
];

class AddExerciseScreen extends React.Component {
  static navigationOptions = {
    title: 'Добавление упражнения',
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
    this.state = {
      dayNumber: this.props.navigation.state.params.dayNumber,
      exerciseName: exercises[0].value,
      numberOfRepetitions: 1,
      doubleSet: false,
      disabledSaveBtn: false,
    };
  }

  async saveExercise() {
    this.setState({disabledSaveBtn: true});
    const {
      dayNumber,
      exerciseName,
      numberOfRepetitions,
      doubleSet,
    } = this.state;
    if (!this.validateFields()) {
      return;
    }
    await this.props.getOneDay(dayNumber);
    let newExercisesList = this.props.selectedDay.exercises;
    await newExercisesList.push({
      name: exerciseName,
      numberOfRepetitions: numberOfRepetitions,
      doubleSet: doubleSet,
    });
    await this.props.addExerciseOfSelectedDay(dayNumber, newExercisesList);
    await this.props.getOneDay(this.props.navigation.state.params.dayNumber);
    await this.setState({disabledSaveBtn: false});
    await this.props.navigation.navigate('ShowDayScreen', {
      dayNumber: this.props.navigation.state.params.dayNumber,
    });
  }

  validateFields() {
    const {
      dayNumber,
      exerciseName,
      numberOfRepetitions,
      doubleSet,
    } = this.state;
    if (!dayNumber || !exerciseName || !numberOfRepetitions) {
      alert('Все поля должны быть заполнены');
      return false;
    }
    return true;
  }

  componentDidMount() {}

  render() {
    return this.props.allDays && this.props.allDays.length > 0 ? (
      <ScrollView>
        <View>
          <View style={styles.blockWrap}>
            <Text style={styles.blockLable}>День</Text>
            <TextInput
              placeHolder={this.props.navigation.state.params.dayNumber}
              keyboardType="numeric"
              value={`${this.state.dayNumber}`}
              onChangeText={text => this.setState({dayNumber: text})}
              style={styles.blockTxtInput}
            />
          </View>
          <View style={styles.blockWrap}>
            <Text style={styles.blockLable}>Выберите упражнение</Text>
            <Dropdown
              data={exercises}
              value={exercises[0].value}
              onChangeText={text => this.setState({exerciseName: text})}
              containerStyle={{width: width(50)}}
            />
          </View>

          <View style={[styles.blockWrap, {flexDirection: 'row'}]}>
            <View>
              <Text style={styles.blockLable}>Количество повторений</Text>
              <TextInput
                keyboardType="numeric"
                value={`${this.state.numberOfRepetitions}`}
                onChangeText={numberOfRepetitions =>
                  this.setState({numberOfRepetitions: numberOfRepetitions})
                }
                style={styles.blockTxtInput}
              />
            </View>
            <TouchableOpacity
              style={styles.doubleSetToggleBtn}
              onPress={() => this.setState({doubleSet: !this.state.doubleSet})}>
              <Text
                style={
                  this.state.doubleSet ? {color: '#45ad78'} : {color: '#000'}
                }>
                Двойная нагрузка
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => this.saveExercise()}
            disabled={this.state.disabledSaveBtn ? true : false}
            style={styles.newExerciseSaveBtn}>
            <Text>Сохранить</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    ) : null;
  }
}

function mapStateToProps(state) {
  return {
    allDays: state.sheduleReducer.allTrainingDays,
    selectedDay: state.sheduleReducer.selectedDay,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addExerciseOfSelectedDay: (dayNumber, exerciseList) =>
      dispatch(actions.addExerciseOfSelectedDay(dayNumber, exerciseList)),
    getOneDay: dayNumber => dispatch(actions.getOneDay(dayNumber)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddExerciseScreen);
