import {StyleSheet, Dimensions} from 'react-native';
import {width, height, totalSize} from 'react-native-dimension';

const styles = StyleSheet.create({
  exerciseWrap: {
    marginTop: 10,
  },

  exercisesContainer: {
    marginTop: 5,
    flexDirection: 'row',
  },

  exercisesColumnContainer: {
    width: width(50),
    alignItems: 'center',
  },

  addExerciseBtn: {
    backgroundColor: '#4ee6ff',
    bottom: 50,
    right: 20,
    alignItems: 'center',
    position: 'absolute',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 10,
  },

  addExerciseBtnTxt: {
    fontSize: 20,
  },

  exerciseAvatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    position: 'relative',
    backgroundColor: '#000',
  },

  doubleSetStar: {
    position: 'absolute',
    right: -10,
    top: 0,
    fontSize: 18,
  },

  exerciseNameWrap: {
    width: 20,
    height: 20,
    top: 9,
    left: 15,
    alignItems: 'center',
    position: 'absolute',
  },
  exerciseNameTxt: {
    color: '#fff',
    fontSize: 22,
  },

  exerciseNumberOfRepetitions: {
    textDecorationLine: 'underline',
    fontSize: 18,
  },
});

export default styles;
