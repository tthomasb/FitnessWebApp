CREATE TABLE users (
    u_id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    birthdate DATE NOT NULL
);
CREATE TABLE workout (
    w_id SERIAL PRIMARY KEY,
    workoutname VARCHAR(255) unique,
    type VARCHAR(255) NOT NULL,
    u_id integer
);
CREATE TABLE exercise (
    e_id SERIAL PRIMARY KEY,
    exercisename VARCHAR(255) unique,
    description VARCHAR(255) NOT NULL,
    equipment VARCHAR(255) NOT NULL,
    muscle VARCHAR(255) NOT NULL,
    u_id integer
);
CREATE TABLE wocomp (
    wc_id SERIAL PRIMARY KEY,
    w_id integer NOT NULL,
    e_id integer NOT NULL
);
CREATE TABLE sets (
    s_id SERIAL PRIMARY KEY,
    wc_id integer NOT NULL,
    exercisepause integer NOT NULL
);
CREATE TABLE rpset (
    rp_id SERIAL PRIMARY KEY,
    s_id integer NOT NULL,
    repnumber integer NOT NULL,
	pausetime integer NOT NULL
);
insert into users ( username, password, birthdate)
	values
		('username1','password1','2022-01-12'),
		('username2','password2','2022-02-10'),
		('username3','password3','2022-03-11')
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
insert into wocomp ( w_id, e_id)
	values
		('1','1'),
		('1','2'),
		('1','3'),
		('2','4'),
		('2','5'),
		('2','1')
		;
insert into sets ( wc_id, exercisepause )
	values
		('1','30'),
		('1','40'),
		('2','40'),
		('2','30'),
		('3','30'),
		('4','20'),
		('5','30')
		;
insert into rpset ( s_id, repnumber, pausetime)
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
