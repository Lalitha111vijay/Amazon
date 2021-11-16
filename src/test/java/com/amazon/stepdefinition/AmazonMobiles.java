package com.amazon.stepdefinition;

import java.util.List;
import java.util.Map;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;


public class AmazonMobiles {
	
	@Given("User Launch Azon URL")
	public void user_Launch_Azon_URL() {
		
		Hooks.driver.get("https://www.amazon.in/");
		
		
	}

	@When("User Search Mobiles using one dim list")
	public void user_Search_Mobiles_using_one_dim_list(DataTable dataTable) {
  List<String> datas = dataTable.asList(String.class);
		
		WebElement search = Hooks.driver.findElement(By.id("twotabsearchtextbox"));
		search.sendKeys(datas.get(2),Keys.ENTER);
	    
	}
	@When("User Search Mobiles using one dim map")
	public void user_Search_Mobiles_using_one_dim_map(DataTable dataTable) {
	Map<String, String> datas = dataTable.asMap(String.class, String.class);
	
	
	WebElement search = Hooks.driver.findElement(By.id("twotabsearchtextbox"));
	search.sendKeys(datas.get("phone1"),Keys.ENTER);
	
	
	}
	@When("User Search Mobiles {string}")
	public void user_Search_Mobiles(String PhoneName) {
		
		
		WebElement search = Hooks.driver.findElement(By.id("twotabsearchtextbox"));
		search.sendKeys(PhoneName,Keys.ENTER);
	    
	}


	@When("user click the add to cart option")
	public void user_click_the_add_to_cart_option() {
	   
	}

	@Then("check the cart value")
	public void check_the_cart_value() {
	   
	}


}
