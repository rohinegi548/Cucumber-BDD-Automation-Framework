$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/login/login_logout.feature");
formatter.feature({
  "line": 1,
  "name": "As a Amazon user I should be able to login and logout with valid credentials",
  "description": "",
  "id": "as-a-amazon-user-i-should-be-able-to-login-and-logout-with-valid-credentials",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6052655115,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Login into the application with valid credentials",
  "description": "",
  "id": "as-a-amazon-user-i-should-be-able-to-login-and-logout-with-valid-credentials;login-into-the-application-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am on the Login page URL \"https://www.amazon.in/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on sign in button and wait for sign in page",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "I should see Sign In Page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I enter username as \"testusername\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I Click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter password as \"testpassword\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I am logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I clear cart items if any",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I choose Electronincs\u003eHeadphones and headphones list out",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I add first availabe headphone to cart",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I search \"Macbook pro\" and add second available item to cart",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I Select cart from home and remove the earlier added headphones",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I Reduce the Quantity of the macbook pro product to one and proceed to checkout",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I Click on Sign out",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I got log out from the application and land on sign in page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.amazon.in/",
      "offset": 28
    }
  ],
  "location": "loginLogoutPageStepDefinitions.i_am_on_the_Login_page_URL(String)"
});
formatter.result({
  "duration": 10476341157,
  "status": "passed"
});
formatter.match({
  "location": "loginLogoutPageStepDefinitions.i_click_on_sign_in_button_and_wait_for_sign_in_page()"
});
formatter.result({
  "duration": 3840326351,
  "status": "passed"
});
formatter.match({
  "location": "loginLogoutPageStepDefinitions.i_should_see_Sign_In_Page()"
});
formatter.result({
  "duration": 62870487,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testusername",
      "offset": 21
    }
  ],
  "location": "loginLogoutPageStepDefinitions.i_enter_username_as(String)"
});
formatter.result({
  "duration": 281873294,
  "status": "passed"
});
formatter.match({
  "location": "loginLogoutPageStepDefinitions.i_Click_on_Continue_button()"
});
formatter.result({
  "duration": 1513927573,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testpassword",
      "offset": 21
    }
  ],
  "location": "loginLogoutPageStepDefinitions.i_enter_password_as(String)"
});
formatter.result({
  "duration": 164602464,
  "status": "passed"
});
formatter.match({
  "location": "loginLogoutPageStepDefinitions.click_on_login_button()"
});
formatter.result({
  "duration": 6384968962,
  "status": "passed"
});
formatter.match({
  "location": "loginLogoutPageStepDefinitions.i_am_already_logged_in()"
});
formatter.result({
  "duration": 81477233,
  "status": "passed"
});
formatter.match({
  "location": "loginLogoutPageStepDefinitions.i_clear_cart_items_if_any()"
});
formatter.result({
  "duration": 5551029065,
  "status": "passed"
});
formatter.match({
  "location": "loginLogoutPageStepDefinitions.i_choose_Electronincs_Headphones_and_headphones_list_out()"
});
formatter.result({
  "duration": 11594617115,
  "status": "passed"
});
formatter.match({
  "location": "loginLogoutPageStepDefinitions.i_add_first_availabe_headphone_to_cart()"
});
formatter.result({
  "duration": 20554903933,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Macbook pro",
      "offset": 10
    }
  ],
  "location": "loginLogoutPageStepDefinitions.i_search_and_add_nd_available_item_to_cart(String)"
});
formatter.result({
  "duration": 14558077672,
  "status": "passed"
});
formatter.match({
  "location": "loginLogoutPageStepDefinitions.i_Select_cart_from_home_and_remove_the_earlier_added_headphones()"
});
formatter.result({
  "duration": 4165110771,
  "status": "passed"
});
formatter.match({
  "location": "loginLogoutPageStepDefinitions.i_Reduce_the_Quantity_of_the_macbook_pro_product_to_one_and_proceed_to_checkout()"
});
formatter.result({
  "duration": 71348836,
  "status": "passed"
});
formatter.match({
  "location": "loginLogoutPageStepDefinitions.i_Click_on_Sign_out()"
});
formatter.result({
  "duration": 1933109826,
  "status": "passed"
});
formatter.match({
  "location": "loginLogoutPageStepDefinitions.i_got_log_out_from_the_application_and_land_on_sign_in_page()"
});
formatter.result({
  "duration": 23211869,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 2047774301,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 22,
  "name": "Searching different products after login",
  "description": "",
  "id": "as-a-amazon-user-i-should-be-able-to-login-and-logout-with-valid-credentials;searching-different-products-after-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "I am on the Login page URL \"https://www.amazon.in/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I click on sign in button and wait for sign in page",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I should see Sign In Page",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I enter username as \"testusername\"",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I Click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter password as \"testpassword\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I am logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I search different \"\u003cproducts\u003e\" from the search bar",
  "keyword": "And "
});
formatter.examples({
  "line": 33,
  "name": "",
  "description": "",
  "id": "as-a-amazon-user-i-should-be-able-to-login-and-logout-with-valid-credentials;searching-different-products-after-login;",
  "rows": [
    {
      "cells": [
        "products"
      ],
      "line": 34,
      "id": "as-a-amazon-user-i-should-be-able-to-login-and-logout-with-valid-credentials;searching-different-products-after-login;;1"
    },
    {
      "cells": [
        "laptops"
      ],
      "line": 35,
      "id": "as-a-amazon-user-i-should-be-able-to-login-and-logout-with-valid-credentials;searching-different-products-after-login;;2"
    },
    {
      "cells": [
        "pendrive"
      ],
      "line": 36,
      "id": "as-a-amazon-user-i-should-be-able-to-login-and-logout-with-valid-credentials;searching-different-products-after-login;;3"
    },
    {
      "cells": [
        "led tv"
      ],
      "line": 37,
      "id": "as-a-amazon-user-i-should-be-able-to-login-and-logout-with-valid-credentials;searching-different-products-after-login;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4767158440,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Searching different products after login",
  "description": "",
  "id": "as-a-amazon-user-i-should-be-able-to-login-and-logout-with-valid-credentials;searching-different-products-after-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "I am on the Login page URL \"https://www.amazon.in/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I click on sign in button and wait for sign in page",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I should see Sign In Page",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I enter username as \"testusername\"",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I Click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter password as \"testpassword\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I am logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I search different \"laptops\" from the search bar",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.amazon.in/",
      "offset": 28
    }
  ],
  "location": "loginLogoutPageStepDefinitions.i_am_on_the_Login_page_URL(String)"
});
formatter.result({
  "duration": 19941233714,
  "status": "passed"
});
formatter.match({
  "location": "loginLogoutPageStepDefinitions.i_click_on_sign_in_button_and_wait_for_sign_in_page()"
});
formatter.result({
  "duration": 1925577938,
  "status": "passed"
});
formatter.match({
  "location": "loginLogoutPageStepDefinitions.i_should_see_Sign_In_Page()"
});
formatter.result({
  "duration": 30630527,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testusername",
      "offset": 21
    }
  ],
  "location": "loginLogoutPageStepDefinitions.i_enter_username_as(String)"
});
formatter.result({
  "duration": 371623748,
  "status": "passed"
});
formatter.match({
  "location": "loginLogoutPageStepDefinitions.i_Click_on_Continue_button()"
});
formatter.result({
  "duration": 1513574752,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testpassword",
      "offset": 21
    }
  ],
  "location": "loginLogoutPageStepDefinitions.i_enter_password_as(String)"
});
formatter.result({
  "duration": 198452268,
  "status": "passed"
});
formatter.match({
  "location": "loginLogoutPageStepDefinitions.click_on_login_button()"
});
formatter.result({
  "duration": 5429841933,
  "status": "passed"
});
formatter.match({
  "location": "loginLogoutPageStepDefinitions.i_am_already_logged_in()"
});
formatter.result({
  "duration": 128655842,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "laptops",
      "offset": 20
    }
  ],
  "location": "loginLogoutPageStepDefinitions.i_search_different_from_the_search_bar(String)"
});
formatter.result({
  "duration": 11504660712,
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 2121375030,
  "status": "passed"
});
formatter.before({
  "duration": 4551863115,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Searching different products after login",
  "description": "",
  "id": "as-a-amazon-user-i-should-be-able-to-login-and-logout-with-valid-credentials;searching-different-products-after-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "I am on the Login page URL \"https://www.amazon.in/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I click on sign in button and wait for sign in page",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I should see Sign In Page",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I enter username as \"testusername\"",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I Click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter password as \"testpassword\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I am logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I search different \"pendrive\" from the search bar",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.amazon.in/",
      "offset": 28
    }
  ],
  "location": "loginLogoutPageStepDefinitions.i_am_on_the_Login_page_URL(String)"
});
formatter.result({
  "duration": 20814853972,
  "status": "passed"
});
formatter.match({
  "location": "loginLogoutPageStepDefinitions.i_click_on_sign_in_button_and_wait_for_sign_in_page()"
});
formatter.result({
  "duration": 2716232144,
  "status": "passed"
});
formatter.match({
  "location": "loginLogoutPageStepDefinitions.i_should_see_Sign_In_Page()"
});
formatter.result({
  "duration": 56649366,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testusername",
      "offset": 21
    }
  ],
  "location": "loginLogoutPageStepDefinitions.i_enter_username_as(String)"
});
formatter.result({
  "duration": 388003625,
  "status": "passed"
});
formatter.match({
  "location": "loginLogoutPageStepDefinitions.i_Click_on_Continue_button()"
});
formatter.result({
  "duration": 1445054631,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testpassword",
      "offset": 21
    }
  ],
  "location": "loginLogoutPageStepDefinitions.i_enter_password_as(String)"
});
formatter.result({
  "duration": 169715484,
  "status": "passed"
});
formatter.match({
  "location": "loginLogoutPageStepDefinitions.click_on_login_button()"
});
formatter.result({
  "duration": 6816380944,
  "status": "passed"
});
formatter.match({
  "location": "loginLogoutPageStepDefinitions.i_am_already_logged_in()"
});
formatter.result({
  "duration": 84370358,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pendrive",
      "offset": 20
    }
  ],
  "location": "loginLogoutPageStepDefinitions.i_search_different_from_the_search_bar(String)"
});
formatter.result({
  "duration": 10782600062,
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 2336863585,
  "status": "passed"
});
formatter.before({
  "duration": 4387875215,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Searching different products after login",
  "description": "",
  "id": "as-a-amazon-user-i-should-be-able-to-login-and-logout-with-valid-credentials;searching-different-products-after-login;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "I am on the Login page URL \"https://www.amazon.in/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I click on sign in button and wait for sign in page",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I should see Sign In Page",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I enter username as \"testusername\"",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I Click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter password as \"testpassword\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I am logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I search different \"led tv\" from the search bar",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.amazon.in/",
      "offset": 28
    }
  ],
  "location": "loginLogoutPageStepDefinitions.i_am_on_the_Login_page_URL(String)"
});
formatter.result({
  "duration": 11049606914,
  "status": "passed"
});
formatter.match({
  "location": "loginLogoutPageStepDefinitions.i_click_on_sign_in_button_and_wait_for_sign_in_page()"
});
formatter.result({
  "duration": 3467761886,
  "status": "passed"
});
formatter.match({
  "location": "loginLogoutPageStepDefinitions.i_should_see_Sign_In_Page()"
});
formatter.result({
  "duration": 31140474,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testusername",
      "offset": 21
    }
  ],
  "location": "loginLogoutPageStepDefinitions.i_enter_username_as(String)"
});
formatter.result({
  "duration": 446959450,
  "status": "passed"
});
formatter.match({
  "location": "loginLogoutPageStepDefinitions.i_Click_on_Continue_button()"
});
formatter.result({
  "duration": 1501642050,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testpassword",
      "offset": 21
    }
  ],
  "location": "loginLogoutPageStepDefinitions.i_enter_password_as(String)"
});
formatter.result({
  "duration": 171673634,
  "status": "passed"
});
formatter.match({
  "location": "loginLogoutPageStepDefinitions.click_on_login_button()"
});
formatter.result({
  "duration": 6137758600,
  "status": "passed"
});
formatter.match({
  "location": "loginLogoutPageStepDefinitions.i_am_already_logged_in()"
});
formatter.result({
  "duration": 563148845,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "led tv",
      "offset": 20
    }
  ],
  "location": "loginLogoutPageStepDefinitions.i_search_different_from_the_search_bar(String)"
});
formatter.result({
  "duration": 12804711215,
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "duration": 2055832957,
  "status": "passed"
});
});