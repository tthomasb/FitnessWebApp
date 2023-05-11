import { ExerciseDataModel } from './exercise-data-model.model';
import { ExerciseModel } from './exercise-model.model';
import { WorkoutData } from './workout-data.model';

describe('WorkoutData', () => {
  let exerciseModel1: ExerciseModel;
  let exerciseModel2: ExerciseModel;
  let exerciseDataModel1: ExerciseDataModel;
  let exerciseDataModel2: ExerciseDataModel;
  let exerciseMap: Map<ExerciseModel, ExerciseDataModel>;
  let workoutData: WorkoutData;
  
  beforeEach(() => {
    exerciseModel1 = new ExerciseModel(1, 1, 'Bench Press', 'Chest exercise', 'Chest', ['Barbell']);
    exerciseModel2 = new ExerciseModel(1, 2, 'Squats', 'Leg exercise', 'Legs', ['Barbell']);
    exerciseDataModel1 = new ExerciseDataModel('3', '10', '60');
    exerciseDataModel2 = new ExerciseDataModel('3', '12', '90', '100');
    exerciseMap = new Map<ExerciseModel, ExerciseDataModel>();
    exerciseMap.set(exerciseModel1, exerciseDataModel1);
    exerciseMap.set(exerciseModel2, exerciseDataModel2);
    workoutData = new WorkoutData('Upper Body Workout', 'A workout for the upper body', 'Strength', exerciseMap);
  });
  
  it('should create an instance of WorkoutData', () => {
    expect(workoutData).toBeTruthy();
  });
  
  it('should have correct properties', () => {
    expect(workoutData.name).toBe('Upper Body Workout');
    expect(workoutData.description).toBe('A workout for the upper body');
    expect(workoutData.type).toBe('Strength');
    expect(workoutData.exerciseMap).toEqual(exerciseMap);
  });
});