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

driver.get("http://localhost:3001").then(() => {
  var search = driver.findElement(By.name("search"));
  console.log(search);
  search?.sendKeys("zapatillas");
  var enter = driver.findElement(By.name('button'))
  console.log(enter)
  enter?.click()
  driver.quit();
});
