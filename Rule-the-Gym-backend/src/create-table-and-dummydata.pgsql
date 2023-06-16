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

insert into users (user_id, username, height, weight, birthdate )
	values
		(1,'username1',190, 90,'2022-01-12');

insert into workout ( workoutname, type, description ,user_id )
	values
		('Push','Gym','desc1', 1),
		('Full Body Workout','Calysthenics','desc2', 1);

insert into workout ( workoutname, type ,user_id )
	values
		('Pull','Gym', 1),
		('Legs','Gym', 1);

-- Chest exercises
insert into exercise ( exercisename, description, equipment, muscle, user_id )
	values
		('Barbell Bench press','Use the barbell','Barbell','Chest', 1),
		('Dumbbell Bench press','Use the dumbbell','Dumbbell','Chest', 1),
		('Incline barbell bench press','Use the barbell and set the bench at about 45 degrees.','Barbell','Chest', 1),
		('Incline dumbbell bench press','Use the dumbbell and set the bench at about 45 degrees.','Dumbbell','Chest', 1),
		('Machine butterfly','Use the machine','Butterfly machine','Chest', 1),
		('Dumbbell butterfly','Use the dumbell','Dumbell','Chest', 1),
		('Machine chest press','Use the machine','Chest press machine','Chest', 1),
		('Push-up', 'Position the hands shoulder wide','','Chest', 1);

-- Back
insert into exercise ( exercisename, description, equipment, muscle, user_id )
	values
		('Deadlift','Just lift the bar','Barbell','Back', 1),
		('Bent-over row','Just lift the bar','Barbell','Back', 1),
		('Pull-up','Just pull your body that your chin is above the bar','','Back', 1),
		('T-bar row','Use a tight grip, bend over and row that shit','Thight grip, Barbell','Back', 1),
		('Wide lat pull-down','Use a wide grip and pull the bar to the chin','Lat machine','Back', 1),
		('Single-arm dumbbell row','Bend over and row with one arm','Dumbbell','Back', 1),
		('Chest-supported row','Set down with your chest to pad and row','Row machine','Back', 1);

-- Legs
insert into exercise ( exercisename, description, equipment, muscle, user_id )
	values
		('Barbell back squat','Default description','Barbell','Legs', 1),
		('Barbell front squat','Default description','Barbell','Legs', 1),
		('Split squat','Default description','Dumbbell','Legs', 1),
		('Barbell romanian deadlift','Default description','Barbell','Legs', 1),
		('Leg curl','Default description','Leg curl machine','Legs', 1),
		('Leg extension','Default description','Leg extension machine','Legs', 1);

-- Arms
insert into exercise ( exercisename, description, equipment, muscle, user_id )
	values
		('Close-grip bench press','Default description','Barbell','Arms', 1),
		('Cable overhead triceps extension','Default description','Cabel tower','Arms', 1),
		('Triceps extension','Default description','Cabel tower','Arms', 1),
		('Barbell curl','Default description','Barbell','Arms', 1),
		('Standing biceps cable curl','Default description','Cabel tower','Arms', 1),
		('Alternating incline dumbbell biceps curl','Default description','Dumbbell','Arms', 1),
		('EZ-bar curl','Default description','EZ-barbell','Arms', 1),
		('Hammer curl','Default description','Dumbbell','Arms', 1);

-- Belly
insert into exercise ( exercisename, description, equipment, muscle, user_id )
	values
		('Mountain Climbers','Default description','','Belly', 1),
		('Lying Leg Raises','Default description','','Belly', 1),
		('Machine crunches','Default description','Machine crunches','Belly', 1),
		('Scissor Kicks','Default description','','Belly', 1);

-- Shoulder
insert into exercise ( exercisename, description, equipment, muscle, user_id )
	values
		('Push-press','Default description','Barbell','Shoulder', 1),
		('Military press','Default description','Barbell','Shoulder', 1),
		('Incline dumbbell row','Default description','Dumbbell','Shoulder', 1),
		('Seated dumbbell press','Default description','Dumbbell','Shoulder', 1);

-- Hier weiter!!!
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
		(2, 1,'20');

insert into set ( workout_exercise_id, reps, pause, weight )
	values
		(1,'1','30',20),
		(2,'1','40',20),
		(3,'2','40',20),
		(4,'2','30',20),
		(5,'3','30',20),
		(6,'4','20',20),
		(7,'5','30',20),
		(8,'8','60',20),
		(9,'9','40',20),
		(10,'1','10',20);

insert into set_history ( set_id, reps, weight, record_time )
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
		('7','10','60','2023-11-07 16:45:25.091');
