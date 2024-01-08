const { Builder, Browser, By, Key, until } = require('selenium-webdriver');

(async function example() {
    let item_list = [
        `STENT ACTIF 2.5 X 48`,
        `STENT ACTIF 2.75 X 48`,
        `STENT ACTIF 3.0 X 48`,
        `STENT ACTIF 3.5 X 48`,
        `GANT NITRIL`,
        `PISSETTE 500 ML`,
        `SAC BIOBESSIE`,
        `PLAQUE BIPHAS CUISIN 9CM`,
        `L ELEMENT DE TRAVAIL ACTIF HYBRIDE`,
        `PINCE PEAN 14CM HOLTREX`,
        `CHARIOT URGENCE`,
        `CAMERA STORSE 1288`,
        `PIECE A MAIN DROITE`,
        `PIECE A MAIN  COUDE`,
        `ACIDE URIQUE DIAGNO 2*250ML`,
        `GLUCOSE 1*500ML BIOMAGHREB`,
        `UREE BIOSCAN`,
        `SANITAROSA GA 2/5L DESINFECTANT`,
        `STARTER KIT 1+2 MAGLIUMI`,
        `BANDE DE GAZ 10CM`,
        `GOT 10*10ML BIOGHREB`,
        `GPT 10*10ML BIOGHREB`,
        `TUBE CITRATE VACUTUNAIRE`,
        `TUBE CITRATE VACUTUNAIRE 5ML`,
        `TUBE HEPARINE VAUTUNAIRA`,
        `BOCAL 2.5L EN VERRE`,
        `VIS BIOROSORBABLE 8MM*25MM`,
        `DESINFECTANT A BASE D ACIDE PERACETIQUE`,
        `BALLON NC TREK 2.75X20`,
        `STENT ACTIF XIENCE ALPINE 2.5X15`,
        `STENT ACTIF XIENCE ALPINE 2.5X33`,
        `STENT ACTIF XIENCE ALPINE 3.5X23`,
        `STENT ACTIF XIENCE ALPINE 3.5X28`,
        `STENT ACTIF XIENCE ALPINE 3.5X33`,
        `DESILET FEMORAL 6F`,
        `STENT CORONAIRE *`,
        `FLAGYL 500MG CP B/20`,
        `CONTRE COUDE 6*16`,
        `CONSEL CHEVERE +PRECE A MAIN`,
        `VIPER *CONSOMABLE*`,
        `ANSE A FILET PLATINUIM UNIVERSAL`,
        `PINCE DE PREHENSION RAPTOR`,
        `ENDOSCOPIQUE CAP DISTAL`,
        `CLIP HEMOSTATIQUE ROTATIF`,
        `BOITE EBCU`,
        `PINCE A DESSEQUE S/G19 CM`,
        `MM * AIGUELLE DE RACHI SPINOCAN TYPE QUINCKE`,
        `PLAQUE DCP FEMUR PLATE`,
        `PLAQUE LCP FEMUR PLATE`,
        `PLAQUE LCP CLOVELE PLATE`,
        `PLAQUE LCP HUMERUS MEDIAL PLATE`,
        `AMYGDALOTOME DE STUDER`,
        `MICRO CISEAU NASAL`,
        `PINCE A BIOPSIE DU CAVUM`,
        `LECTEUR CHECK 3 KIT`,
        `BALLON MNI TREK 2 X 15`,
        `INSTRUMENT CELIO`,
        `APPARIE NOUVAG+ NEURO CHIRURGIE`,
        `SONDE ENDOTRACHIALE A/B N°2.5`,
        `REPARATION MATERIEL D URELOGIE`,
        `FIBRE LAZER RADIAL 600 UM POUR FISTULE`,
        `VIS CORTICAL 3.5MM 42MM`,
        `VIS CORTICAL 3.5MM 44MM`,
        `VIS CORTICAL 3.5MM 46MM`,
        `VIS CORTICAL 3.5MM 40MM`,
        `STENT ACTIF XIENCE ALPINE 3.0X23`,
        `STENT ACTIF XIENCE ALPINE 3.0 X 33`,
        `STENT ACTIF XIENCE ALPINE 3.0 X 48`,
        `STENT ACTIF XIENCE ALPINE 4.0 X 18`,
        `STENT ACTIF XIENCE ALPINE 3.5 X 48`,
        `BALLON MNI TREK 3.5 X 12`,
        `BALLON MNI TREK 4.5 X 12`,
        `BALLON MNI TREK 4.5 X 15`,
        `BIOSCAN WRIGHT 100 TEST`,
        `BIOSCAN LIPASE 2*20+8ML`,
        `BALLON NC 3 X 20`,
        `BALLON NC 4 X 8`,
        `BALLON NC 4 X 12`,
        `BALLON NC 4 X 15`,
        `BALLON NC 4.5 X 8`,
        `BALLON MNI TREK 1.5 X 8`,
        `STYLET CHIRUGICAL`,
        `STENT ACTIF 2.75 X 38`,
        `PLAQ VENTRALIGHT ST 15X20 CM`,
        `TETE DE CAMIRA`,
        `STENT ACTIF  XIENCE ALPINE 2.5 X 48`,
        `KIT DE BOUGIES DE DILATAION OESOPHAGIENNE`,
        `PINCE CISEAUX CELIO`,
        `PINCES A  PREHENSION`,
    ]
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
        async function insert_data(data, i) {
            await goToLastPage()
            await insertItem(data, i)
        }

        async function goToLastPage() {
            await driver.findElement(By.css('.k-link.k-pager-nav.k-pager-last')).click()
            // SCROLL LAST ELEMENT TO VIEW
            const ele = await driver.findElement(By.xpath('/html/body/div[2]/div[2]/div[5]/div/div[2]/table/tbody/tr[1]/td[2]/div/div[3]/div/div[3]/table/tbody/tr[last()]'))
            await driver.executeScript("arguments[0].scrollIntoView(true);", ele);
            await driver.sleep(1000)

            await driver.executeScript("arguments[0].click();", await driver.findElement(By.xpath('/html/body/div[2]/div[2]/div[5]/div/div[2]/table/tbody/tr[1]/td[2]/div/div[3]/div/div[3]/table/tbody/tr[last()]/td[1]/input')));

            await driver.sleep(500)
            await driver.executeScript("arguments[0].dispatchEvent(new MouseEvent('mousedown', { bubbles: true, cancelable: true, view: window }));", await driver.findElement(By.css('#MasterGrid > div.k-grid-content > table > tbody > tr:last-child')));
            await driver.executeScript("arguments[0].dispatchEvent(new MouseEvent('mouseup', { bubbles: true, cancelable: true, view: window }));", await driver.findElement(By.css('#MasterGrid > div.k-grid-content > table > tbody > tr:last-child')));

            await driver.executeScript("arguments[0].click();", await driver.findElement(By.id('toDuplicate')));

            await driver.sleep(3000)
        }

        async function insertItem(data, i) {
            data = data.replace(/['".*+?^${}()|[\]\\]/g, "\\$&");
            // ENTERING DATA
            let scriptCode = `arguments[0].value = 'D${2948 + i}'`
            await driver.executeScript(scriptCode, await driver.findElement(By.id('ItemCode')))
            await driver.executeScript(`arguments[0].value = '${String(data)}'`, await driver.findElement(By.id('ItemNameA')));
            await driver.executeScript(`arguments[0].value = '${String(data)}'`, await driver.findElement(By.id('ItemNameL')));

            await driver.executeScript("arguments[0].value = ''", await driver.findElement(By.id('PortalDisplayName')))
            await driver.executeScript("arguments[0].value = ''", await driver.findElement(By.id('PortalDisplayLName')))
            await driver.executeScript("arguments[0].value = ''", await driver.findElement(By.id('PartNumber')))

            await driver.executeScript("arguments[0].scrollIntoView(true);", await driver.findElement(By.css('.PublicDiv')))

            await driver.findElement(By.css('.PublicDiv')).click()
            await driver.sleep(1000)
            await driver.executeScript("arguments[0].click()", await driver.findElement(By.id('popup_ok')))
            await driver.executeScript("arguments[0].click()", await driver.findElement(By.css('button.ui-button:nth-child(1)')))
        }

        const chunkSize = 10;

        const arrayOfArrays = [];
        for (let i = 0; i < item_list.length; i += chunkSize) {
            const chunk = item_list.slice(i, i + chunkSize);
            arrayOfArrays.push(chunk);
        }
        // console.log(arrayOfArrays)
        let d = 0
        for (let [i, items_list] of arrayOfArrays.entries()) {
            for (let [j, item] of items_list.entries()) {
                await insert_data(item, d)
                d++
            }
            await driver.navigate().refresh()
        }


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