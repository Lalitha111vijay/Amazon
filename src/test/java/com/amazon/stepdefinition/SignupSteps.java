package com.amazon.stepdefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class SignupSteps {
	static WebDriver driver;
	
	@Given("lauch Amazon URL")
	public void lauch_Amazon_URL() {
		WebDriverManager.chromedriver().setup();
		driver =new ChromeDriver();
		driver.get("https://www.amazon.in/");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	}

	@Given("click on sign in option")
	public void click_on_sign_in_option() {
		WebElement button = driver.findElement(By.id("nav-link-accountList-nav-line-1"));
		button.click();
		
		
		
	
	    	}

	@When("click create a new account")
	public void click_create_a_new_account() {
		WebElement button = driver.findElement(By.id("createAccountSubmit"));
		button.click();
		
	   
	}

	@When("give the required informations")
	public void give_the_required_informations() {
		WebElement userName = driver.findElement(By.id("ap_customer_name"));
		userName.sendKeys("Lalitha");
		WebElement phoneNumber = driver.findElement(By.id("ap_phone_number"));
		phoneNumber.sendKeys("8870520575");
		WebElement password = driver.findElement(By.id("ap_password"));
		password.sendKeys("Lalitha@123");
		
	   	}

	@Then("click continue")
	public void click_continue() {
		WebElement continueButton = driver.findElement(By.id("continue"));
		continueButton.click();
	}


	

}
