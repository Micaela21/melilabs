const webdriver = require("selenium-webdriver"),
  By = webdriver.By,
  until = webdriver.until;
const chrome = require("selenium-webdriver/chrome");
const chromedriver = require("chromedriver");
const timeunit = require('timeunit')

chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());

const options = new chrome.Options();
options.addArguments("--headless");

const driver = new webdriver.Builder()
  .forBrowser("chrome")
  .setChromeOptions(options)
  .build();

async function test(){
  let page = await driver.get('https://a17332189cf0.ngrok.io')
  console.log(page)
  try {
    page && await driver.findElement(By.name("search")).sendKeys("zapatillas")
    page && await driver.findElement(By.name('button')).click()
    console.log('wait')
    let ele = await driver.wait(until.elementLocated(By.name('mayor')),50000);
    let foo = await ele.getText();
    assert(foo == "Hello from JavaScript");
    // driver.wait(until.elementLocated(By.xpath('//*[@id="root"]/div/div/div[2]/div[2]/div/div/button[2]')), 10 * 1000).click()
    driver.quit();
  } catch(e){
    console.log(e)
    driver.quit();
  }
}


test()
