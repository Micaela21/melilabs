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

  // driver.get('https://93a67af8a987.ngrok.io').then(response => {
  //   console.log(response)
  //   driver.findElement(By.name("search")).sendKeys("zapatillas")
  //   driver.findElement(By.name('button')).click().then(response => {
  //     console.log(response)
  //     driver.findElement(By.name("mayor")).click()
  //   })
  // })

async function test(){
  let page = await driver.get('https://93a67af8a987.ngrok.io')
  try {
    page && await driver.findElement(By.name("search")).sendKeys("zapatillas")
    page && await driver.findElement(By.name('button')).click()
    driver.manage().timeouts().pageLoadTimeout(20, timeunit.seconds);
    console.log(driver.manage().timeouts().pageLoadTimeout(20, timeunit.seconds))
    console.log('wait')
    let products = await driver.wait(driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div[2]/div/div/button[2]")),5000)
    console.log('click')
    products && await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div[2]/div/div/button[2]")).click()
  } catch(e){
    console.log(e)
  }

  driver.quit();
}


test()
