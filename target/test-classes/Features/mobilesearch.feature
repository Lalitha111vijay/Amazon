#Author: your.email@your.domain.com
Feature: Validating Mobile purchase in Amazon

  Background: 
    Given User Launch Azon URL

  Scenario: Mobile Purchase validation
    When User Search Mobiles using one dim list
      | Redmi | Oppo | Iphone |
    And user click the add to cart option
    Then check the cart value

  Scenario: Mobile Purchase validation using one dim map
    When User Search Mobiles using one dim map
      | phone1 | Redmi  |
      | phone2 | Oppo   |
      | phone3 | Iphone |
    And user click the add to cart option
    Then check the cart value

  Scenario Outline: Mobile Purchase validation
    When User Search Mobiles "<Phone Name>"
    And user click the add to cart option
    Then check the cart value

    Examples: 
      | Phone Name |
      | Realme     |
      | samsung    |
      | vivo       |
