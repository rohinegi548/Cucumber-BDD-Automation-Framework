Feature: As a Amazon user I should be able to login and logout with valid credentials

  Scenario: Login into the application with valid credentials
  	Given I am on the Login page URL "https://www.amazon.in/"
    Then I click on sign in button and wait for sign in page
    Then I should see Sign In Page
    When I enter username as "testusername"
    And I Click on Continue button
    And I enter password as "testpassword"
    And click on login button
    Then I am logged in
    And I clear cart items if any
    Then I choose Electronincs>Headphones and headphones list out
    Then I add first availabe headphone to cart
    Then I search "Macbook pro" and add second available item to cart
    Then I Select cart from home and remove the earlier added headphones
    Then I Reduce the Quantity of the macbook pro product to one and proceed to checkout
    And I Click on Sign out
	Then I got log out from the application and land on sign in page
   
   
  Scenario Outline: Searching different products after login
    Given I am on the Login page URL "https://www.amazon.in/"
    Then I click on sign in button and wait for sign in page
    Then I should see Sign In Page
    When I enter username as "testusername"
    And I Click on Continue button
    And I enter password as "testpassword"
    And click on login button
    Then I am logged in
	And I search different "<products>" from the search bar
		
 	Examples:
	 | products |
	 | laptops  |
	 | pendrive |
	 | led tv   |
  
   
