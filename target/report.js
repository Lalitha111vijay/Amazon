$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/mobilesearch.feature");
formatter.feature({
  "name": "Validating Mobile purchase in Amazon",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User Launch Azon URL",
  "keyword": "Given "
});
formatter.match({
  "location": "AmazonMobiles.user_Launch_Azon_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Mobile Purchase validation",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User Search Mobiles using one dim list",
  "rows": [
    {
      "cells": [
        "Redmi",
        "Oppo",
        "Iphone"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AmazonMobiles.user_Search_Mobiles_using_one_dim_list(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click the add to cart option",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonMobiles.user_click_the_add_to_cart_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check the cart value",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonMobiles.check_the_cart_value()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User Launch Azon URL",
  "keyword": "Given "
});
formatter.match({
  "location": "AmazonMobiles.user_Launch_Azon_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Mobile Purchase validation using one dim map",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User Search Mobiles using one dim map",
  "rows": [
    {
      "cells": [
        "phone1",
        "Redmi"
      ]
    },
    {
      "cells": [
        "phone2",
        "Oppo"
      ]
    },
    {
      "cells": [
        "phone3",
        "Iphone"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AmazonMobiles.user_Search_Mobiles_using_one_dim_map(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click the add to cart option",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonMobiles.user_click_the_add_to_cart_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check the cart value",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonMobiles.check_the_cart_value()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Mobile Purchase validation",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User Search Mobiles \"\u003cPhone Name\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user click the add to cart option",
  "keyword": "And "
});
formatter.step({
  "name": "check the cart value",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Phone Name"
      ]
    },
    {
      "cells": [
        "Realme"
      ]
    },
    {
      "cells": [
        "samsung"
      ]
    },
    {
      "cells": [
        "vivo"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User Launch Azon URL",
  "keyword": "Given "
});
formatter.match({
  "location": "AmazonMobiles.user_Launch_Azon_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Mobile Purchase validation",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User Search Mobiles \"Realme\"",
  "keyword": "When "
});
formatter.match({
  "location": "AmazonMobiles.user_Search_Mobiles(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click the add to cart option",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonMobiles.user_click_the_add_to_cart_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check the cart value",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonMobiles.check_the_cart_value()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User Launch Azon URL",
  "keyword": "Given "
});
formatter.match({
  "location": "AmazonMobiles.user_Launch_Azon_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Mobile Purchase validation",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User Search Mobiles \"samsung\"",
  "keyword": "When "
});
formatter.match({
  "location": "AmazonMobiles.user_Search_Mobiles(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click the add to cart option",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonMobiles.user_click_the_add_to_cart_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check the cart value",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonMobiles.check_the_cart_value()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User Launch Azon URL",
  "keyword": "Given "
});
formatter.match({
  "location": "AmazonMobiles.user_Launch_Azon_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Mobile Purchase validation",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User Search Mobiles \"vivo\"",
  "keyword": "When "
});
formatter.match({
  "location": "AmazonMobiles.user_Search_Mobiles(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click the add to cart option",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonMobiles.user_click_the_add_to_cart_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check the cart value",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonMobiles.check_the_cart_value()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/Features/signup.feature");
formatter.feature({
  "name": "signup option testing",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "signup option testing",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "lauch Amazon URL",
  "keyword": "Given "
});
formatter.match({
  "location": "SignupSteps.lauch_Amazon_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on sign in option",
  "keyword": "And "
});
formatter.match({
  "location": "SignupSteps.click_on_sign_in_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click create a new account",
  "keyword": "When "
});
formatter.match({
  "location": "SignupSteps.click_create_a_new_account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "give the required informations",
  "keyword": "And "
});
formatter.match({
  "location": "SignupSteps.give_the_required_informations()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click continue",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupSteps.click_continue()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});