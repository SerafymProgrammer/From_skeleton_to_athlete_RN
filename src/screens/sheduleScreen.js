import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../redux/actions/actions';
import styles from '../styles/sheduleScreenStyle';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';

const weekDays = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

class SheduleScreen extends React.Component {
  static navigationOptions = {
    title: 'График',
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
      firstWeek: [],
      secondWeek: [],
      thirdWeek: [],
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.allDays !== this.props.allDays) {
      this.setState({
        firstWeek: this.splitWeeks(0, 7, nextProps.allDays),
        secondWeek: this.splitWeeks(7, 14, nextProps.allDays),
        thirdWeek: this.splitWeeks(14, 21, nextProps.allDays),
      });
    }
  }

  splitWeeks(indexStart, indexEnd, arr) {
    return arr.slice(indexStart, indexEnd);
  }

  renderWeekDays(week) {
    if (week && week !== undefined) {
      return week.map((item, index) => (
        <View style={styles.weekWrap}>
          <View style={styles.weekDayNameBlock}>
            <Text
              style={[
                {fontSize: 18},
                index + 1 == 6 || index + 1 == 7
                  ? {color: '#f10404'}
                  : {color: '#207bc3'},
              ]}>
              {weekDays[index]}
            </Text>
          </View>
          <View style={styles.weekDayDescriptionBlock}>
            <Text style={styles.weekDayDescriptionDay}>День {item.id}</Text>
            <Text style={styles.weekDayDescriptionExercise}>
              {item.exercises && item.exercises.length > 0
                ? `${item.exercises.length} упражнений`
                : 'Отсутствуют'}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.weekDayBtnShowDay}
            onPress={() => {
              this.props.navigation.navigate('ShowDayScreen', {
                dayNumber: item.id,
              });
            }}>
            <Text style={styles.weekDayBtnShowDayTxt}>Просмотр</Text>
          </TouchableOpacity>
        </View>
      ));
    }
  }

  async componentDidMount() {
    await this.props.getAllDays();
    this.setState({
      firstWeek: this.splitWeeks(0, 7, this.props.allDays),
      secondWeek: this.splitWeeks(7, 14, this.props.allDays),
      thirdWeek: this.splitWeeks(14, 21, this.props.allDays),
    });
  }

  render() {
    return this.props.allDays && this.props.allDays.length > 0 ? (
      <ScrollView>
        <View style={styles.weekTitleBlock}>
          <Text style={styles.weekTitleTxt}>1 Неделя</Text>
        </View>
        <View style={styles.weekContainer}>
          {this.renderWeekDays(this.state.firstWeek)}
        </View>
        <View style={styles.weekTitleBlock}>
          <Text style={styles.weekTitleTxt}>2 Неделя</Text>
        </View>
        <View style={styles.weekContainer}>
          {this.renderWeekDays(this.state.secondWeek)}
        </View>

        <View style={styles.weekTitleBlock}>
          <Text style={styles.weekTitleTxt}>3 Неделя</Text>
        </View>
        <View style={styles.weekContainer}>
          {this.renderWeekDays(this.state.thirdWeek)}
        </View>
      </ScrollView>
    ) : null;
  }
}

function mapStateToProps(state) {
  return {
    allDays: state.sheduleReducer.allTrainingDays,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAllDays: () => dispatch(actions.getAllDays()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SheduleScreen);
