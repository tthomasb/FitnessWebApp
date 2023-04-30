import { ExerciseModel } from './exercise-model.model';

describe('ExerciseModel', () => {
  let exerciseModel: ExerciseModel;
  
  beforeEach(() => {
    exerciseModel = new ExerciseModel(1, 2, 'Bench Press', 'Chest exercise', 'Chest', ['Barbell']);
  });
  
  it('should create an instance of ExerciseModel', () => {
    expect(exerciseModel).toBeTruthy();
  });
  
  it('should have correct properties', () => {
    expect(exerciseModel.exercise_id).toBe(2);
    expect(exerciseModel.exercisename).toBe('Bench Press');
    expect(exerciseModel.description).toBe('Chest exercise');
    expect(exerciseModel.muscle).toBe('Chest');
    expect(exerciseModel.equipment).toEqual(['Barbell']);
    expect(exerciseModel.user_id).toBe(1);
  });
});

describe('ExerciseModel.parseExerciseModel', () => {
  it('should parse an object to an instance of ExerciseModel', () => {
    const obj = {
      exercise_id: 1,
      exercisename: 'Squats',
      description: 'Leg exercise',
      muscle: 'Legs',
      equipment: ['Barbell']
    };
    const exerciseModel = ExerciseModel.parseExerciseModel(obj);
    
    expect(exerciseModel).toBeTruthy();
    expect(exerciseModel.exercise_id).toBe(1);
    expect(exerciseModel.exercisename).toBe('Squats');
    expect(exerciseModel.description).toBe('Leg exercise');
    expect(exerciseModel.muscle).toBe('Legs');
    expect(exerciseModel.equipment).toEqual(['Barbell']);
    expect(exerciseModel.user_id).toBeUndefined();
  });
});
