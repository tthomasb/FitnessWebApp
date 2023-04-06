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
    user_id FOREIGN KEY
);
CREATE TABLE exercise (
    exercise_id SERIAL PRIMARY KEY,
    exercisename VARCHAR(255) unique,
    description VARCHAR(255) NOT NULL,
    equipment VARCHAR(255),
    muscle VARCHAR(255) NOT NULL,
    user_id FOREIGN KEY
);

CREATE TABLE workout_exercise (
    workout_exercise_id SERIAL PRIMARY KEY,
    workout_id FOREIGN KEY NOT NULL,
	exercise_id FOREIGN KEY NTO NULL,
    exercisepause integer
);
CREATE TABLE set (
    set_id SERIAL PRIMARY KEY,
    workout_exercise_id FOREIGN KEY NOT NULL,
    reps integer NOT NULL,
	pause integer NOT NULL,
	weight integer
);

CREATE TABLE set_history (
    set_history_id SERIAL PRIMARY KEY,
    reps integer NOT NULL,
	weight integer,
	record_date date,
	record_time time
);
insert into users (username, height, weight, birthdate)
	values
		('username1',190, 90,'2022-01-12'),
		('username2',180, 80 '2022-02-10'),
		('username3',170, 50 '2022-03-11')
		;
insert into workouts ( workoutname, type)
	values
		('workoutname1','gym'),
		('workoutname2','calysthenics')
		;
insert into exercise ( exercisename, description, equipment, muscle)
	values
		('exercisename1','description exercise 1','equiment1','chest'),
		('exercisename2','description exercise 2','equiment2','chest'),
		('exercisename3','description exercise 3','equiment3','chest'),
		('exercisename4','description exercise 4','equiment4','biceps'),
		('exercisename5','description exercise 5','equiment5','biceps')
		;

insert into set (  workout_exercise_id, reps, pause, weight )
	values
		(1,'1','30',20),
		(1,'1','40',20),
		(1,'2','40',20),
		(1,'2','30',20),
		(1,'3','30',20),
		(1,'4','20',20),
		(1,'5','30',20)
		;
insert into set_history ( s_id, repnumber, pausetime)
	values
		('1','12','30'),
		('1','10','40'),
		('1','8','40'),
		('2','12','40'),
		('2','8','50'),
		('3','20','30'),
		('3','18','40'),
		('3','15','50'),
		('4','10','25'),
		('4','7','35'),
		('5','12','30'),
		('6','12','40'),
		('7','12','45'),
		('7','10','60')
		;
