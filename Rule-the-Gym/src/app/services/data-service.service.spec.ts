import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { DataServiceService } from './data-service.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Exercise } from '../models/models';

describe('DataServiceService', () => {
  let service: DataServiceService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule, HttpClientTestingModule ],
      providers: [DataServiceService]
    });
    service = TestBed.inject(DataServiceService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getAllExercises should return an Observable<Exercise[]>', () => {
    const dummyExercises: Exercise[] = [
      {
        user_id: '1',
        exercise_id: '1',
        exercisename: 'Bench Press',
        description: 'Lay on bench and press',
        muscle: 'Chest',
        equipment: 'Barbell',
      },
      {
        user_id: '2',
        exercise_id: '2',
        exercisename: 'Squat',
        description: 'Squat with barbell',
        muscle: 'Legs',
        equipment: 'Barbell',
      },
    ];

    service.getAllExercises().subscribe((exercises) => {
      expect(exercises.length).toBe(2);
      expect(exercises).toEqual(dummyExercises);
    });

    const request = httpMock.expectOne('/api/exercise');
    expect(request.request.method).toBe('GET');
    request.flush(dummyExercises);
  }
  );

  it('getExerciseById should return an Observable<Exercise>', () => {
    const dummyExercise: Exercise = {
      user_id: '1',
      exercise_id: '1',
      exercisename: 'Bench Press',
      description: 'Lay on bench and press',
      muscle: 'Chest',
      equipment: 'Barbell',
    };

    service.getExerciseById(1).subscribe((exercise) => {
      expect(exercise).toEqual(dummyExercise);
    });

    const request = httpMock.expectOne('/api/exercise/1');
    expect(request.request.method).toBe('GET');
    request.flush(dummyExercise);
  }
  );

  it('deleteExercise should return an Observable<any>', () => {
    service.deleteExercise('1').subscribe((res) => {
      expect(res).toEqual({});
    });

    const request = httpMock.expectOne('/api/exercise/1');
    expect(request.request.method).toBe('DELETE');
    request.flush({});
  }
  );

  it('createExercise should return an Observable<Exercise>', () => {
    const dummyExercise: Exercise = {
      user_id: '1',
      exercise_id: '1',
      exercisename: 'Bench Press',
      description: 'Lay on bench and press',
      muscle: 'Chest',
      equipment: 'Barbell',
    };

    service.createExercise('Bench Press', 'Lay on bench and press', 'Chest', 'Barbell').subscribe((exercise) => {
      expect(exercise).toEqual(dummyExercise);
    });

    const request = httpMock.expectOne('/api/exercise');
    expect(request.request.method).toBe('POST');
    request.flush(dummyExercise);
  }
  );

  it('editExercise should return an Observable<Exercise>', () => {
    const dummyExercise: Exercise = {
      user_id: '1',
      exercise_id: '1',
      exercisename: 'Bench Press',
      description: 'Lay on bench and press',
      muscle: 'Chest',
      equipment: 'Barbell',
    };

    service.editExercise('1', 'Bench Press', 'Lay on bench and press', 'Chest', 'Barbell').subscribe((exercise) => {
      expect(exercise).toEqual(dummyExercise);
    });

    const request = httpMock.expectOne('/api/exercise/1');
    expect(request.request.method).toBe('PUT');
    request.flush(dummyExercise);
  }
  );
});
