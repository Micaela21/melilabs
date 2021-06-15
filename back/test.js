const webdriver = require('selenium-webdriver');

async function runTestWithCaps (capabilities) {
  let driver = new webdriver.Builder()
    .usingServer('http://micaelaalessandr_NFZVM2:SizykP6rm7z99TRGsL9g@hub-cloud.browserstack.com/wd/hub')
    .withCapabilities({
      ...capabilities,
      ...capabilities['browser'] && { browserName: capabilities['browser']}
    })
    .build();
  await driver.get("https://07343a31fb34.ngrok.io/");

  const inputField = await driver.findElement(webdriver.By.name("search"))
  await inputField.sendKeys("zapatillas");

  const enter = await driver.findElement(webdriver.By.name("button"))
  await enter.click()

//   const mayor = await driver.findElement(webdriver.By.name("mayor"))
  const timer = await driver.wait(webdriver.until.findElement(webdriver.By.name("mayor")), 5000);
  if(timer){
    mayor.click()
  }

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
