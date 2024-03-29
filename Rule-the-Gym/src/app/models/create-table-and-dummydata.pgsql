CREATE TABLE users (
    user_id VARCHAR(36) PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    height integer,
	weight integer,
    birthdate DATE,
    darkmode boolean
);
CREATE TABLE workout (
    workout_id SERIAL PRIMARY KEY,
    workoutname VARCHAR(255),
	description varchar(255),
    type VARCHAR(255) NOT NULL,
    user_id VARCHAR(36)
);
CREATE TABLE exercise (
    exercise_id SERIAL PRIMARY KEY,
    exercisename VARCHAR(255) unique,
    description VARCHAR(255) NOT NULL,
    equipment VARCHAR(255),
    muscle VARCHAR(255) NOT NULL,
    user_id VARCHAR(36)
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
	record_time timestamp without time zone
);
insert into users (user_id, username, height, weight, birthdate)
	values
		(1,'username1',190, 90,'2022-01-12')
		;
insert into workout ( workoutname, type, description,user_id)
	values
		('workoutname1','gym','desc1', 1),
		('workoutname2','calysthenics','desc2', 1)
		;
insert into workout ( workoutname, type ,user_id)
	values
		('workoutname3','gym', 1),
		('workoutname4','calysthenics', 1)
		;
insert into exercise ( exercisename, description, equipment, muscle, user_id)
	values
		('exercisename1','description exercise 1','equiment1','chest', 1),
		('exercisename2','description exercise 2','equiment2','chest', 1),
		('exercisename3','description exercise 3','equiment3','chest', 1),
		('exercisename4','description exercise 4','equiment4','biceps', 1),
		('exercisename5','description exercise 5','equiment5','biceps', 1)
		;
insert into exercise ( exercisename, description, equipment, muscle, user_id)
	values
		('exercisename6','description exercise 6','equiment6','chest', 1),
		('exercisename7','description exercise 7','equiment7','chest', 1),
		('exercisename8','description exercise 8','equiment8','chest', 1),
		('exercisename9','description exercise 9','equiment9','biceps', 1),
		('exercisename10','description exercise 10','equiment10','biceps', 1)
		;
insert into workout_exercise ( workout_id, exercise_id, exercisepause )
	values
		(1, 1,'20'),
		(1, 2,'20'),
		(1, 3,'20'),
		(1, 4,'20'),
		(1, 5,'20'),
		(1, 6,'20'),
		(2, 7,'20'),
		(2, 8,'20'),
		(2, 9,'20'),
		(2, 10,'20'),
		(2, 4,'20'),
		(2, 6,'20'),
		(2, 1,'20')
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
insert into set_history ( set_id, reps, weight, record_time)
	values
		('1','12','30','2023-04-07 16:45:25.091'),
		('1','10','40','2023-05-07 16:45:25.091'),
		('1','8', '40','2023-06-07 16:45:25.091'),
		('2','12','40','2023-07-07 16:45:25.091'),
		('2','8', '50','2023-08-07 16:45:25.091'),
		('3','20','30','2023-09-07 16:45:25.091'),
		('3','18','40','2023-10-07 16:45:25.091'),
		('3','15','50','2023-11-07 16:45:25.091'),
		('4','10','25','2023-12-07 16:45:25.091'),
		('4','7' ,'35','2023-11-07 16:45:25.091'),
		('5','12','30','2023-11-07 16:45:25.091'),
		('6','12','40','2023-11-07 16:45:25.091'),
		('7','12','45','2023-11-07 16:45:25.091'),
		('7','10','60','2023-11-07 16:45:25.091')
		;
