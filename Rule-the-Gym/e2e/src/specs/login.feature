Feature: Login
    This feature lets a user login.

Scenario: Basic login scenario
    Given I am on the login page
    When I enter my username "test"
    When I enter my password "test"
    Then I click OK
    Then I land on navigation page