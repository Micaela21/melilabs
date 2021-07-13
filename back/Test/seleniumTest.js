const webdriver = require("selenium-webdriver"),
  By = webdriver.By,
  until = webdriver.until;
const chrome = require("selenium-webdriver/chrome");
const chromedriver = require("chromedriver");

chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());

const options = new chrome.Options();
options.addArguments("--headless");

const driver = new webdriver.Builder()
  .forBrowser("chrome")
  .setChromeOptions(options)
  .build();

async function test(){
  let page = await driver.get('https://dc6362b017c2.ngrok.io:3001/')
  console.log(page)
  try {
    const searchBar = await driver.findElement(By.name("search")).sendKeys("zapatillas")
    const button = await driver.findElement(By.name('button')).click()
    console.log(searchBar)
    console.log(button)
    driver.quit();
  } catch(e){
    console.log(e)
    driver.quit();
  }
}

test()
