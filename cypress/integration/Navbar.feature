Feature: Navbar

  I want to interact with Navbar 
  
  Background: Open Home Page
    Given I open Home page

  @focus
  Scenario: Change Language
    Then I should see "Nhạc Cá Nhân"
    When I toggle language button
    Then I should see "Personal Music"
  