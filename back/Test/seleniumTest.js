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

  driver.get('https://93a67af8a987.ngrok.io').then(response => {
    console.log(response)
  })

async function test(){
  let page = await driver.get('https://a1d5ca30dd0f.ngrok.io').then(response => {
    console.log(response)
  })
  try {
    page && await driver.findElement(By.name("search")).sendKeys("zapatillas")
    page && await driver.findElement(By.name('button')).click()
  } catch(e){
    console.log(e)
  }

  try {
    let products = await driver.wait(until.elementIsVisible(By.name('mayor')),5000)
    products && await driver.findElement(By.name('mayor')).click()
  } catch (e) {
    console.log(e)
  }
  driver.quit();
}

