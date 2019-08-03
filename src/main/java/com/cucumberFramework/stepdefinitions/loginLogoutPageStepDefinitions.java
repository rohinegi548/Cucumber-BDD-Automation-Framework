package com.cucumberFramework.stepdefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;

import com.cucumberFramework.helper.WaitHelper;
import com.cucumberFramework.pageObjects.LoginLogoutPage;
import com.cucumberFramework.testBase.TestBase;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class loginLogoutPageStepDefinitions extends TestBase {

	LoginLogoutPage loginPage = new LoginLogoutPage(driver);
	WaitHelper waitHelper = new WaitHelper(driver);
	
	@Given("^I am on the Login page URL \"([^\"]*)\"$")
	public void i_am_on_the_Login_page_URL(String arg1) throws Throwable {
		driver.get(arg1);
		//waitHelper = new WaitHelper(driver);
	}

	@Then("^I click on sign in button and wait for sign in page$")
	public void i_click_on_sign_in_button_and_wait_for_sign_in_page() throws Throwable {
		loginPage.clickSignInButton();
		waitHelper.WaitForElement(loginPage.userName, 60);
	}

	@Then("^I should see Sign In Page$")
	public void i_should_see_Sign_In_Page() throws Throwable {
		loginPage.userName.isDisplayed();
	}

	@When("^I enter username as \"([^\"]*)\"$")
	public void i_enter_username_as(String arg1) throws Throwable {
		loginPage.enterUserName(arg1);
	}

	@When("^I Click on Continue button$")
	public void i_Click_on_Continue_button() throws Throwable {
		loginPage.clickContinueButton();
		waitHelper.WaitForElement(loginPage.password, 60);
	}

	@When("^I enter password as \"([^\"]*)\"$")
	public void i_enter_password_as(String arg1) throws Throwable {
		loginPage.enterPassword(arg1);
	}

	@When("^click on login button$")
	public void click_on_login_button() throws Throwable {
		loginPage.clickLoginButton();
	}
	
	@When("^I am logged in$")
	public void i_am_already_logged_in() throws Throwable {
	    loginPage.logoutBtn.isDisplayed();
	}

	@When("^I Click on Sign out$")
	public void i_Click_on_Sign_out() throws Throwable {
	    loginPage.clickLogoutButton();
	    waitHelper.WaitForElement(loginPage.userName, 60);
	}

	@Then("^I got log out from the application and land on sign in page$")
	public void i_got_log_out_from_the_application_and_land_on_sign_in_page() throws Throwable {
		loginPage.userName.isDisplayed();
	}
	
	@Then("^I choose Electronincs>Headphones and headphones list out$")
	public void i_choose_Electronincs_Headphones_and_headphones_list_out() throws Throwable {
	    loginPage.clickHeadphonesLnk();
	}
	
	@Then("^I add first availabe headphone to cart$")
	public void i_add_first_availabe_headphone_to_cart() throws Throwable {
	    loginPage.AddHeadphoneToCart();
	}
	
	@Then("^I search \"([^\"]*)\" and add second available item to cart$")
	public void i_search_and_add_nd_available_item_to_cart(String arg1) throws Throwable {
	    loginPage.enterSearchItemandAddToCart(arg1);
	}
	
	@Then("^I clear cart items if any$")
	public void i_clear_cart_items_if_any() throws Throwable {
	    loginPage.clearCartItemifExist();
	}
	
	@Then("^I Select cart from home and remove the earlier added headphones$")
	public void i_Select_cart_from_home_and_remove_the_earlier_added_headphones() throws Throwable {
	    loginPage.cartButton.click();
	    loginPage.itemList.get(1).click();
	}
	
	@Then("^I Reduce the Quantity of the macbook pro product to one and proceed to checkout$")
	public void i_Reduce_the_Quantity_of_the_macbook_pro_product_to_one_and_proceed_to_checkout() throws Throwable {
		JavascriptExecutor js = (JavascriptExecutor)driver;
		 js.executeScript("arguments[0].innerText='1'",driver.findElement(By.className("a-dropdown-prompt")));
	}
	
	@Then("^I search different \"([^\"]*)\" from the search bar$")
	public void i_search_different_from_the_search_bar(String arg1) throws Throwable {
	    loginPage.itemSearchField.sendKeys(arg1);
	    loginPage.itemSearchField.submit();
	    Thread.sleep(5000);
	}
	
}