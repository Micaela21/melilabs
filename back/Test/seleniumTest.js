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
  let page = await driver.get('http://192.168.200.35:3001/')
  console.log(page)
  try {
    const searchBar = await driver.findElement(By.name("search"))
    const button = await driver.findElement(By.name('button'))
    console.log(searchBar)
    searchBar.sendKeys("zapatillas")
    console.log(button)
    button.click()
    driver.quit();
  } catch(e){
    console.log(e)
    driver.quit();
  }
}

test()
