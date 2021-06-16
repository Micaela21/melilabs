const webdriver = require('selenium-webdriver');
var browserstack = require('../index.js');

// creates an instance of Local
var local = new browserstack.Local();

// replace <browserstack-accesskey> with your key. You can also set an environment variable - "BROWSERSTACK_ACCESS_KEY".
var args = {'key': process.env.BROWSERSTACK_ACCESS_KEY};

const capabilities = {
  build: 'build',
  'browser': 'chrome',
  'os': 'Windows',
  'os_version': '10',
  'name': 'Test1',
  'browserstack.local': true
}

// starts the Local instance with the required arguments
local.start(args, () => {

  console.log('Is Running ' + local.isRunning());
  console.log('Started');

  capabilities['browserstack.user'] = process.env.BROWSERSTACK_USERNAME;
  capabilities['browserstack.key'] = process.env.BROWSERSTACK_ACCESS_KEY;
  capabilities['browserstack.local'] = true;

    let driver = new webdriver.Builder()
      .forBrowser('http://hub-cloud.browserstack.com/wd/hub')
      .withCapabilities(capabilities)
      .build();

    driver.get("http://localhost:3001/").then(() => {
      driver.findElement(webdriver.By.name("search")).sendKeys("zapatillas")
      driver.findElement(webdriver.By.name("button")).click()
      .then(response => driver.wait(webdriver.until.elementIsVisible(webdriver.By.name("mayor")), 5000).click())
      driver.quit().then(()=> {
        local.stop()
      })
    })

    // try {
    //   await driver.executeScript(
    //     'browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"passed","reason": "funciona"}}'
    //   );
    // } catch (e) {
    //   await driver.executeScript(
    //     'browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"failed","reason": "no funciona"}}'
    //   );
    // }

});




// async function runTestWithCaps (capabilities) {
//   let driver = new webdriver.Builder()
//     .usingServer('http://micaelaalessandr_NFZVM2:SizykP6rm7z99TRGsL9g@hub-cloud.browserstack.com/wd/hub')
//     .withCapabilities({
//       ...capabilities,
//       ...capabilities['browser'] && { browserName: capabilities['browser']}  // Because NodeJS language binding requires browserName to be defined
//     })
//     .build();
//   await driver.get("https://07343a31fb34.ngrok.io");

//   const inputField = await driver.findElement(webdriver.By.name("search"))
//   await inputField.sendKeys("zapatillas");

//   const enter = await driver.findElement(webdriver.By.name("button"))
//   await enter.click()

//   const mayor = await driver.wait(webdriver.until.elementIsVisible(webdriver.By.name("mayor")), 5000);
//   await mayor.click()

// //   try {
// //       const mayor = await driver.wait(webdriver.until.elementIsVisible(webdriver.By.name("mayor")), 5000);
// //       await mayor.click()
// //   } catch (e) {
// //     await inputField.submit(); // this helps in mobile browsers
// //   }
// //   let el = await driver.findElement(webdriver.By.name("mayor"));
// //     await driver.wait(until.elementIsVisible(el),5000);
// //     await el.click();
// //   await driver.wait(function() {
// //     return driver.isElementPresent(webdriver.By.name("mayor"));
// //   }, 200)
// //   let mayor = await driver.findElement(webdriver.By.name("mayor"))
// //   await mayor.click()
//   try {
//     await driver.executeScript(
//       'browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"passed","reason": "funciona"}}'
//     );
//   } catch (e) {
//     await driver.executeScript(
//       'browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"failed","reason": "no funciona"}}'
//     );
//   }
//   await driver.quit();
// }
// const capabilities1 = {
//   'browser': 'chrome',
//   'browser_version': 'latest',
//   'os': 'Windows',
//   'os_version': '10',
//   'build': 'browserstack-build-1',
//   'name': 'Parallel test 1'
// }

// runTestWithCaps(capabilities1);