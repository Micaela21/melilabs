const webdriver = require('selenium-webdriver');

async function runTestWithCaps (capabilities) {
  let driver = new webdriver.Builder()
    .usingServer('http://micaelaalessandr_NFZVM2:SizykP6rm7z99TRGsL9g@hub-cloud.browserstack.com/wd/hub')
    .withCapabilities({
      ...capabilities,
      ...capabilities['browser'] && { browserName: capabilities['browser']}  // Because NodeJS language binding requires browserName to be defined
    })
    .build();
  await driver.get("https://9f8510720343.ngrok.io");
  const inputField = await driver.findElement(webdriver.By.name("search"))
  await inputField.sendKeys("zapatillas", webdriver.Key.ENTER); // this submits on desktop browsers
  try {
    await driver.wait(inputField.executeScript('return arguments[0].innerHTML', body), 5000);
  } catch (e) {
    await inputField.submit(); // this helps in mobile browsers
  }
  try {
    await driver.wait(webdriver.until.urlContains(/zapatillas/i), 5000);
    console.log(await driver.getTitle());
    await driver.executeScript(
      'browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"passed","reason": "Title contains BrowserStack!"}}'
    );
  } catch (e) {
    await driver.executeScript(
      'browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"failed","reason": "Page could not load in time"}}'
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
