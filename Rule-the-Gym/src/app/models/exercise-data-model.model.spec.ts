import { ExerciseDataModel } from './exercise-data-model.model';

describe('ExerciseDataModel', () => {
  it('should create a new exercise data model with the correct properties', () => {
    const exercise = new ExerciseDataModel('3', '10', '60', '100');

    expect(exercise.sets).toBe('3');
    expect(exercise.reps).toBe('10');
    expect(exercise.breaktime).toBe('60');
    expect(exercise.weight).toBe('100');
  });

  it('should create a new exercise data model with default weight value', () => {
    const exercise = new ExerciseDataModel('3', '10', '60');

    expect(exercise.sets).toBe('3');
    expect(exercise.reps).toBe('10');
    expect(exercise.breaktime).toBe('60');
    expect(exercise.weight).toBeUndefined();
  });
});
