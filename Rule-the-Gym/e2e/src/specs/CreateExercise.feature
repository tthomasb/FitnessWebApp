Feature: new exercise

  As a signed in user
  i want to create a new exercise

  Background:
    Given I am signed in with username "USER" and password "PASSWORD"
    And I am on the "Exercises" page 

  Scenario: enter valid data and save the exercise
    When I press the "Create new exercise" button
    And I enter "Crunches" in the field "Name"
    And I enter "Abs" in the field "Muscle group"
    And I enter "Lay on your back, put your hands behind your head and try to get your elbows to your abdomen while rolling yourself in" in the field "Description"
    And I press the "Save" button
    Then I am on the "Exercises" page
    And I receive a "Created exercise succesfully" message

  Scenario: enter invalid data and save the exercise
    When I press the "Create new exercise" button
    And I enter "Crunches" in the field "Name"
    And I enter "" in the field "Muscle group"
    And I enter "Lay on the ground, put your hands behind your head and try to get your elbows to your abdomen while rolling yourself in" in the field "Description"
    And I press the "Save" button
    Then I stay on the "Create Exercise" View
    And the false field is highlighted in red