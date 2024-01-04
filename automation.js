const { Builder, Browser, By, Key, until } = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser(Browser.FIREFOX).build();
    try {

        // OPEN URL
        await driver.get('http://172.16.1.2:39010/MILLENSYS/MiAdmin/Master/Category/index')

        // ENTER USERNAME & PASSWORD
        await driver.findElement(By.id('username')).sendKeys('magazine', Key.RETURN)
        await driver.findElement(By.id('password')).sendKeys('9865', Key.RETURN)

        // SUBMIT
        await driver.findElement(By.id('Submit1')).click()

        await driver.sleep(2000)

        // MOVE TO THE LAST ELEMENT
        await driver.findElement(By.css('.k-link.k-pager-nav.k-pager-last')).click()

        // SCROLL LAST ELEMENT TO VIEW
        const ele = await driver.findElement(By.xpath('/html/body/div[2]/div[2]/div[5]/div/div[2]/table/tbody/tr[1]/td[2]/div/div[3]/div/div[3]/table/tbody/tr[last()]'))
        await driver.executeScript("arguments[0].scrollIntoView(true);", ele);

        await driver.sleep(5000)

        await driver.executeScript("arguments[0].click();", await driver.findElement(By.xpath('/html/body/div[2]/div[2]/div[5]/div/div[2]/table/tbody/tr[1]/td[2]/div/div[3]/div/div[3]/table/tbody/tr[last()]/td[1]/input')));
        await driver.sleep(500)
        await driver.executeScript("arguments[0].dispatchEvent(new MouseEvent('mousedown', { bubbles: true, cancelable: true, view: window }));", await driver.findElement(By.css('#MasterGrid > div.k-grid-content > table > tbody > tr:last-child')));
        await driver.executeScript("arguments[0].dispatchEvent(new MouseEvent('mouseup', { bubbles: true, cancelable: true, view: window }));", await driver.findElement(By.css('#MasterGrid > div.k-grid-content > table > tbody > tr:last-child')));

        await driver.executeScript("arguments[0].click();", await driver.findElement(By.id('toDuplicate')));

        await driver.sleep(3000)

        // ENTERING DATA
        let scriptCode = `arguments[0].value = 'D' + 1002`
        await driver.executeScript(scriptCode, await driver.findElement(By.id('ItemCode')))
        let scriptNameA = `arguments[0].value = 'New Product'`
        await driver.executeScript(scriptNameA, await driver.findElement(By.id('ItemNameA')))
        let scriptNameL = `arguments[0].value = 'New Product'`
        await driver.executeScript(scriptNameL, await driver.findElement(By.id('ItemNameL')))

        await driver.executeScript("arguments[0].value = ''", await driver.findElement(By.id('PortalDisplayName')))
        await driver.executeScript("arguments[0].value = ''", await driver.findElement(By.id('PortalDisplayLName')))
        await driver.executeScript("arguments[0].value = ''", await driver.findElement(By.id('PartNumber')))

        await driver.findElement(By.xpath('/html/body/div[30]/div[2]/form/div[1]/input')).click()
        await driver.sleep(2000)
        await driver.findElement(By.id('popup_ok')).click()
        await driver.findElement(By.css('button.ui-button:nth-child(1)')).click()
        // await driver.findElement(By.id('toDuplicate')).click()
        // await ele.click()
        // await driver.wait(until.elementLocated(driver.findElement(By.css('.k-widget.k-dropdown.k-header'))), 1000);
        // await driver.findElement(By.css('.k-widget.k-dropdown.k-header')).click()
        // await driver.wait(until.elementLocated(By.xpath('//*[@id="MasterGrid"]/div[4]/a[4]')), 500).click();
        // await driver.findElement(By.className('//*[@id="MasterGrid"]/div[3]/table/tbody/tr:last-child/input').click());
        // document.querySelector('.k-link.k-pager-nav.k-pager-last')
    } catch (e) {
        console.log(e)
    } finally {
        // await driver.quit();
    }
})();