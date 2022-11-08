Background: 
Given  I am on the Training slider

Scenario: Create new Workout button is klicked
When I click Create New Workout Button
Then Create Workout View Opens

Background:
Given Create new Workout button is klicked
Scenario: False Data is entered
When I Enter Name "Name"
And I klick safe Button


Scenario: Correct Data is entered
When I Enter Name "Name"
And I klick safe button


Scenario: Add Exercise
When I Klick Add Exercise
Then Exercise Data form Opens
When I Enter "reps" "sets" "pause" "exercise pause"
And I klick OK
Then Create WOrkout view is whown
And the exististing exercise is shown


Scenario: I Klick Safe Button
When Data is valid 
Then Data is safed 
And workout view is shown
When Data is invalid
Then Fields are marked invalid





