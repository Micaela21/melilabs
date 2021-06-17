const webdriver = require("selenium-webdriver"),
  By = webdriver.By,
  until = webdriver.until;

const chrome = require("selenium-webdriver/chrome");
const chromedriver = require("chromedriver");

chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());

var options = new chrome.Options();
options.addArguments("--headless");

var driver = new webdriver.Builder()
  .forBrowser("chrome")
  .setChromeOptions(options)
  .build();

driver.get("https://c49c14a3c41f.ngrok.io").then(() => {
  driver.findElement(By.name("search")).sendKeys("zapatillas")
  driver.findElement(By.name('button')).click()
  driver.quit();
});
