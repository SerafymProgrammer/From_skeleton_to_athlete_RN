import {StyleSheet, Dimensions} from 'react-native';
import {width, height, totalSize} from 'react-native-dimension';

const styles = StyleSheet.create({
  container: {
    width: width(100),
  },

  weekTitleBlock: {
    height: 24,
    backgroundColor: '#f7f7f7',
    paddingHorizontal: 12,
    marginTop: 20,
  },

  weekTitleTxt: {
    fontSize: 18,
    color: '#000',
    textAlignVertical: 'center',
  },
  weekContainer: {
    marginTop: 10,
  },

  weekWrap: {
    flex: 1,
    flexDirection: 'row',
  },
  weekDayNameBlock: {
    borderRightWidth: 1,
    borderColor: '#f5f5f5',
    width: width(10),
    alignItems: 'center',
    justifyContent: 'center',
  },

  weekDayName: {
    fontSize: 18,
  },

  weekDayDescriptionBlock: {
    borderRightWidth: 1,
    borderColor: '#f5f5f5',
    width: width(60),
    alignItems: 'center',
    justifyContent: 'center',
  },

  weekDayDescriptionDay: {
    fontSize: 18,
  },

  weekDayDescriptionExercise: {
    color: '#8e8e8e',
    fontSize: 14,
  },

  weekDayBtnShowDay: {
    width: width(30),
    alignItems: 'center',
    justifyContent: 'center',
  },

  weekDayBtnShowDayTxt: {
    fontSize: 18,
  },
});

export default styles;
