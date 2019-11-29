import {AxiosPromise, axios} from 'axios';
import {environments} from '../../../environments';
export default class SheduleService {
  static getAllDays = () => {
    return fetch(environments.jsonServerUrl + '/trainingSchedule', {
      method: 'GET',
    });
  };

  static getOneDay = (dayNumber) => {
    return fetch(
      environments.jsonServerUrl + '/trainingSchedule' + '/' + dayNumber,
      {
        method: 'GET',
      },
    );
  };

  static updateExercisesOfSelectedDay = (dayNumber, updatedExercisesList) => {
    return fetch(
      environments.jsonServerUrl + '/trainingSchedule' + '/' + dayNumber,
      {
        method: 'PUT',
        body: JSON.stringify({
          id: dayNumber,
          exercises: updatedExercisesList,
        }),
        headers: {
          'Content-Type': 'application/json'
        },
      },
    );
  };
}
