CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    height integer,
	  weight integer,
    birthdate DATE
);
CREATE TABLE workout (
    workout_id SERIAL PRIMARY KEY,
    workoutname VARCHAR(255) unique,
    type VARCHAR(255) NOT NULL,
    user_id integer
);
CREATE TABLE exercise (
    exercise_id SERIAL PRIMARY KEY,
    exercisename VARCHAR(255) unique,
    description VARCHAR(255) NOT NULL,
    equipment VARCHAR(255),
    muscle VARCHAR(255) NOT NULL,
    user_id integer
);

CREATE TABLE workout_exercise (
    workout_exercise_id SERIAL PRIMARY KEY,
    workout_id integer NOT NULL,
	  exercise_id integer NOT NULL,
    exercisepause integer
);
CREATE TABLE set (
    set_id SERIAL PRIMARY KEY,
    workout_exercise_id integer NOT NULL,
    reps integer NOT NULL,
	  pause integer NOT NULL,
	  weight integer
);

CREATE TABLE set_history (
    set_history_id SERIAL PRIMARY KEY,
	  set_id integer NOT NULL,
    reps integer NOT NULL,
	  weight integer,
	  recorded_time timestamp without time zone
);
insert into users (username, height, weight, birthdate)
	values
		('username1',190, 90,'2022-01-12'),
		('username2',180, 80, '2022-02-10'),
		('username3',170, 50,'2022-03-11')
		;
insert into workout ( workoutname, type)
	values
		('workoutname1','gym'),
		('workoutname2','calysthenics')
		;
insert into workout ( workoutname, type ,user_id)
	values
		('workoutname3','gym', 1),
		('workoutname4','calysthenics', 1)
		;
insert into exercise ( exercisename, description, equipment, muscle)
	values
		('exercisename1','description exercise 1','equiment1','chest'),
		('exercisename2','description exercise 2','equiment2','chest'),
		('exercisename3','description exercise 3','equiment3','chest'),
		('exercisename4','description exercise 4','equiment4','biceps'),
		('exercisename5','description exercise 5','equiment5','biceps')
		;
insert into exercise ( exercisename, description, equipment, muscle, user_id)
	values
		('exercisename6','description exercise 6','equiment6','chest', 1),
		('exercisename7','description exercise 7','equiment7','chest', 1),
		('exercisename8','description exercise 8','equiment8','chest', 1),
		('exercisename9','description exercise 9','equiment9','biceps', 1),
		('exercisename10','description exercise 10','equiment10','biceps', 1)
		;
insert into set (  workout_exercise_id, reps, pause, weight )
	values
		(1,'1','30',20),
		(2,'1','40',20),
		(3,'2','40',20),
		(4,'2','30',20),
		(5,'3','30',20),
		(6,'4','20',20),
		(7,'5','30',20)
		;
insert into set_history ( set_id, reps, weight, recorded_date, recorded_time)
	values
		('1','12','30','2022-01-12','20:40'),
		('1','10','40','2022-02-13','20:41'),
		('1','8', '40','2021-01-14','20:42'),
		('2','12','40','2022-01-12','20:43'),
		('2','8', '50','2022-01-12','20:44'),
		('3','20','30','2022-01-12','20:45'),
		('3','18','40','2022-01-12','20:46'),
		('3','15','50','2022-01-12','20:47'),
		('4','10','25','2022-01-12','20:48'),
		('4','7' ,'35','2022-01-12','20:49'),
		('5','12','30','2022-01-12','20:50'),
		('6','12','40','2022-01-12','20:51'),
		('7','12','45','2022-01-12','20:52'),
		('7','10','60','2022-01-12','20:53')
		;
