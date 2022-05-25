Feature: Pagination

  I want to interact with Pagination
  
  Background: Open Home Page
    Given I open Home page
		And I scroll to News

  @focus
  Scenario: Move to nextPage with Key 
		And I hover in News's area
		When I press KeyUp button
		Then I should see it move to next page

  @focus
  Scenario: Move to previous page with Key 
		And I hover in News's area
		When I press KeyUp button
		Then I should see it move to next page
		When I press KeyDown button
		Then I should see it move to previous page

  @focus
  Scenario: Move to next page when type in Input
		When I type in input
		Then I should see value in input
		When I press Enter
		Then I should see it move to next page