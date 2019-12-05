import {StyleSheet} from 'react-native';
import {width} from 'react-native-dimension';

const styles = StyleSheet.create({
  blockWrap: {
    marginTop: 20,
    marginLeft: 20,
  },

  blockWrapNumberOfRepetitions: {
    marginTop: 20,
    marginLeft: 20,
    flexDirection: 'row'
  },

  blockLable: {
    fontSize: 18,
    marginBottom: 5,
  },

  blockTxtInput: {
    height: 48,
    width: width(50),
    paddingLeft: 16,
    borderWidth: 1,
    borderColor: '#dadbe7',
    color: '#000',
  },

  doubleSetToggleBtn: {
    width: 100,
    marginLeft: 40,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },

  newExerciseSaveBtn: {
    width: 100,
    backgroundColor: '#24de77',
    marginTop: 20,
    marginLeft: 20,
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 10,
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
