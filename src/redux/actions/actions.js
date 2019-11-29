import SheduleService from '../../shared/services/sheduleService';

export function getAllDays() {
  return async (dispatch) => {
    await SheduleService.getAllDays()
      .then(response => {
        return response.json();
      })
      .then(response => {
        dispatch(allDays(response));
      })
      .catch(error => console.log(error));
  };
}

export function getOneDay(dayNumber) {
  return async (dispatch) => {
    await SheduleService.getOneDay(dayNumber)
      .then(response => {
        return response.json();
      })
      .then(response => {
        dispatch(selectedDay(response));
      })
      .catch(error => console.log(error));
  };
}

export function addExerciseOfSelectedDay(dayNumber, exerciseList) {
  return async (dispatch) => {
    await SheduleService.updateExercisesOfSelectedDay(dayNumber, exerciseList)
      .then(response => {
        dispatch(getAllDays());
        return;
      })
      .catch(error => console.log(error));
  };
}

export function allDays(allTrainingDays) {
  return {
    type: 'GET_ALL_DAYS',
    allTrainingDays,
  };
}

export function selectedDay(selectedDay) {
  return {
    type: 'GET_SELECTED_DAY',
    selectedDay,
  };
}

export function countPerson(person) {
  return {
    type: 'DELETE_PERSON',
    person,
  };
}
