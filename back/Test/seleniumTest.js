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

async function test(){
  let page = await driver.get("https://c49c14a3c41f.ngrok.io")
  try {
    page && await driver.findElement(By.name("search")).sendKeys("zapatillas")
    page && await driver.findElement(By.name('button')).click()
  } catch(e){
    console.log(e)
  }
  let products = await driver.wait(until.elementIsVisible(By.name('mayor')),5000)
  try {
    products && await driver.findElement(By.name('mayor')).click()
  } catch (e) {
    console.log(e)
  }
  driver.quit();

}
