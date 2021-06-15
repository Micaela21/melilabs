const webdriver = require('selenium-webdriver');

async function runTestWithCaps (capabilities) {
  let driver = new webdriver.Builder()
    .usingServer('http://micaelaalessandr_NFZVM2:SizykP6rm7z99TRGsL9g@hub-cloud.browserstack.com/wd/hub')
    .withCapabilities({
      ...capabilities,
      ...capabilities['browser'] && { browserName: capabilities['browser']}  // Because NodeJS language binding requires browserName to be defined
    })
    .build();
  await driver.get("https://635365313f9f.ngrok.io");
  const inputField = await driver.findElement(webdriver.By.name("search"))
  await inputField.sendKeys("zapatillas"); // this submits on desktop browsers
  const enter = await driver.findElement(webdriver.By.name("button"))
  await enter.click()
//   await driver.wait(webdriver.until.elementIsVisible(webdriver.By.className("product")),10000)
  try {
    await driver.executeScript(
      'browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"passed","reason": "funciona"}}'
    );
  } catch (e) {
    await driver.executeScript(
      'browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"failed","reason": "no funciona"}}'
    );
  }
  await driver.quit();
}
const capabilities1 = {
  'browser': 'chrome',
  'browser_version': 'latest',
  'os': 'Windows',
  'os_version': '10',
  'build': 'browserstack-build-1',
  'name': 'Parallel test 1'
}

runTestWithCaps(capabilities1);
