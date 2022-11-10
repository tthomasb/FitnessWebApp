Background: 
Given  I am on the Training slider
And I am logged in with a "Username" and a "Password"

Scenario: Create new Workout button is klicked
When I click Create New Workout Button
Then Create Workout View Opens


Scenario: False Data is entered
When Create new Workout button is klicked
And I Enter Name "Name"
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


Scenario: I klick Safe Button
When Data is valid 
Then Data is safed 
And workout view is shown
When Data is invalid
Then Fields are marked invalid





