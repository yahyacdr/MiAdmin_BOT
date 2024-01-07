const { Builder, Browser, By, Key, until } = require('selenium-webdriver');

(async function example() {
    let item_list = [
        `ETIQUETTE DE GROUPAGE A+`,
        `ETIQUETTE DE GROUPAGE A-`,
        `ETIQUETTE DE GROUPAGE B+`,
        `ETIQUETTE DE GROUPAGE B-`,
        `ETIQUETTE DE GROUPAGE AB-`,
        `ETIQUETTE DE GROUPAGE AB+`,
        `ETIQUETTE DE GROUPAGE O+`,
        `ETIQUETTE DE GROUPAGE O-`,
        `ALCOOL IODE 1L`,
        `LAME BISTOURI`,
        `BETADINE 10% 500ML`,
        `STIMUPLEX HNS 12 SENS NEUROSTIMULATEUR`,
        `KIT CPAP URGENCE OPA`,
        `STIMUPLEX A 20GX6 0.9X150MM AIGUILLE NEUROSTIMULATION`,
        `STIMUPLEX A21GX4 0.8X100MM AIGUILLE NEUROSTIME`,
        `STIMUPLEX A21GX2  0.7X50MM AIGUILLE NEUROSTIME`,
        `SPINOCAN 25GX3 1/2 0.5X88MM AIGUILLE SPINALE SANS INTRODUCTEUR`,
        `SPINOCAN 27GX3 1/2 0.4X88MM AIUILLE SPINALE SANS INTRODUCTEUR`,
        `PENCAN 27GX3 1/2 0.4X88 MM AGUILLE AVEC INTODUCTEUR`,
        `SPINOCATH SET DE CATHETERS POUR ANESTHESIESPINALE G22 0.85X220MM 28`,
        `CERTOFIX DUO 720 CATETER BILUMIERE`,
        `SPINOCAN 25GX 3/4 0.5X120MM AGUILLE SPINALE SANS INTRO`,
        `MASQUE LARVENDE N°30-50KG CLASSIQUE AUTOCLAVABLE`,
        `MONITEUR DE SURVEILLANCE 03 PARAMETRES +IMPRIMENTE +ECRAN C CRTES SD`,
        `TAMBOUR INOX 340MM`,
        `CONTENEUR PERFORE ALUMINIUM 580MM`,
        `CONTENEUR PERFORE ALUMINIUM 465MM`,
        `CONTENEUR PERFORE ALUMINIUM 285MM`,
        `CHARIOT A VIS PM`,
        `BATEIE 9.6V`,
        `ANCILLAIRE DHS`,
        `BOITE PERFORE PM`,
        `SPARADRAP PERFORE 5CM*5`,
        `SPARADRAP PERFORE 18CM*5`,
        `SPARADRAP NON PERFORE 18CM*5`,
        `SPARADRAP NON PERFORE 2CM*5`,
        `SPARADRAPMICROPORE 2CM*5`,
        `BANDE A GAZ 10CM/4M 100PC/CARTON`,
        `COMPRESSE STERILE  10*10  B/100 10*10 B/100`,
        `COMPRESSE STERILE  7.5*7.5 B/100`,
        `TUBE VACUTUNER B/100`,
        `DRAIN DE REDON CH 12 BEROMED`,
        `TROUSSE UNIVEREL DE BASE STERIL DE BASE`,
        `SERINGUE 50CC  GAVAGE`,
        `SERINGUE JET 50CC DE GAVAGE`,
        `COMPRESSE STERIL 5*5`,
        `JERSEY 10*15 CM`,
        `SERINGUE 2.5ML G22`,
        `PERFUSEUR COMPLET`,
        `INTRANULE G24`,
        `BETADINE  10%`,
        `SPARDRAP PERFORE 10CM *5M`,
        `EPHIPHIDRINE 30MG/1ML B/10`,
        `CRP 200 TESTS`,
        `ASLO 200 TESTS`,
        `LATEX 100 TESTS`,
        `TOXOPLASMOSE 100 TESTS`,
        `BIOKIT RUBEOLE 100 TESTS`,
        `AMYLASE LQ 20*2ML`,
        `CALCIUM 2*150ML`,
        `TUBE SEC 5ML B/500`,
        `BOUCHON POUR TUBE 5ML`,
        `SODIUM 1*60ML`,
        `POTASIUM  2*50ML`,
        `SERINGUE 50 CC V`,
        `MARTEAU A REFLEX ADULTE`,
        `SONDE URETRAL CH6 26 CM`,
        `GAINE DE STERILISATION ROULEAU15*200M`,
        `GAINE DE STERILISATION ROULEAU 20*200M`,
        `GAINE DE STERILISATION ROULEAU 25*200M`,
        `GAINE DE STERILISATION ROULEAU 30*200M`,
        `GAINE DE STERILISATION ROULEAU 35*200M`,
        `NEGATOSCOPE 02 PLAGES`,
        `NEGATOSCOPE 02PLAGES`,
        `COMPRESSE STERILE 7.5*7.5 BARIUM B/100`,
        `SERINGUE 50 ML VIS`,
        `CASAQUE CAMISOLE (TENUBLOC)`,
        `PESE PERSONNE AD`,
        `EXPANDOL EXTRA 500MG`,
        `URINOIR EN INOX P/FEMME`,
        `STETHOSCOPE ROSSMAX`,
        `FILM POUR RADIO FORMAT 14/17`,
        `FILM POUR RADIO FORMAT 10/12`,
        `FILM POUR RADIO FORMAT 8/10`,
        `PAPIER HYGIENIQUE RO 40CM*100M`,
        `APPAREIL TENSIOMETRE REISTER ENF`,
        `SONDE OXYGENE N£08`,
        `T C  K 6*3 ML`,
        `T P BIOLABO 6*4ML`,
        `CREATININE 2*150ML`,
        `BANDELLETTE CHIMIE  DES URINES 10P`,
        `H B C BANDELLETTE`,
        `H B S BANDELLETTE`,
        `H C V BANDELLETTE`,
        `H I V BANDELLETTE`,
        `CHLORURE DE CALCUIM (CACL2/`,
        `BANDE A GAZ 8 CM*4M`,
        `COMPRE EN NON TISSE 7.5*10 B/100`,
        `DAKIN 1L`,
        `EOSIN AQUEUSE FL 1L`,
        `LIDOCAINE CHLORHYDRATE  MONOHYDRATE 20MG/ML`,
        `PANCURONIOM BROMURE IV 2MG/ML`,
        `CLONAZEPAM INJ IV.IM 1MG/ML`,
        `SODUIM CHLORURE0.9% 1L`,
        `L HUILE DE SOJA/EMUL LIPID 20%`,
        `BANDE PLATRE 3M*20CM`,
        `BANDE DE CREPE4M*15CM`,
        `PARACETAMOL CHLOR 10MG/ML FL 50ML`,
        `ASPEGIC IG BT 50`,
        `EAU DISTULLE`,
        `VANCOMYCINE 500MG`,
        `AMIKACINE 500MG BT/6`,
        `BETADINE MOUSSANTE`,
        `LIDOCAINE/NAPHAZOLE SOL NON INJ 5%0.02%`,
        `SODUIM BICARBONAT INJ 4.2% AMP 10ML`,
        `PROMETHAZINE INJ 50MG`,
        `CHLORURE DE SODUIM INJ 10%AMP /10ML`,
        `CATHETER COURT A AILETTES A/SITE G16`,
        `DRAIN DE REDON CH 09`,
        `DRAI TROCRT THORACIQUE CH12`,
        `COUCHE AD MOYEN B/10`,
        `COUCHE AD  LARGE B/08`,
        `CONTENAIRE 12L`,
        `AEROSOL NEB 50A C/06`,
        `RESINE BLEUE 12.7*3.6`,
        `COTON DE RESINE`,
        `NORGALAX CANUL`,
        `GLYCOSE INJ 30¨%`,
        `GLUCOSE 10%`,
        `GLUCOSE 15%`,
        `GLUCOSE 30%`,
        `FIL RESORBABLE TRESSE 2/0 AR 30MM`,
        `BARYM SULFATE SUSP/BUV 1G/ML`,
        `ILUTRA VIS 300ML/ML 50ML`,
        `ILUTRA VIS 370ML/ML 50ML`,
        `CEFAZOLINE 1G B/25`,
        `METHYLPREDNISONE 40MG`,
        `PARACETAMOL CHLOR   AD 10MG/ML 100ML`,
        `T.P BIOLABO`,
        `TROUSSE ORTHOPEDIE`,
        `BAVETTE JETABLE`,
        `B W BANDELLETTE`,
        `CUVETTE +BALLS BT 1000`,
        `GLUCOSE 4*250ML`,
        `BANDELLETTE CHUMIE D URINE 5P`,
        `FILM  POUR RADIO DI-HL 35*43`,
        `ASPIRATEUR ELECTRIQUE`,
        `DETENDEUR D OXYGENE`,
        `POUPUNEL`,
        `TOMBOUR G M`,
        `TOMBOUR M M`,
        `PLATEAU INOX 18*30`,
        `PLATEAU INOX 16*25`,
        `PLATEAU INOX 26.5*35`,
        `PINCE CILIO 50*33`,
        `ECARTEUR FORCEPCE`,
        `ECARTEUR VALVE`,
        `ECARTEUR VERBRICHE`,
        `SPECULUM INOX`,
        `ECARTEUR VALVE PM`,
        `PINCE COUPENTE PM`,
        `PINCE COUPENTE P G`,
        `STYLET AIGUILLE 14`,
        `STYLET AIGUILLE NON PERFORT`,
        `TROCAR INOX`,
        `ECARTEUR DE FARABEF 2 PERES`,
        `PINCE GOUGE`,
        `CURETTE`,
        `PINCE AMBRE DANNE`,
        `PINCE DE SECTEUR`,
        `PINCE  A DICEQUE AVEC GRIFE`,
        `PINCE  A DICEQUE SON GRIFE`,
        `PINCE  DALISSE`,
        `PINCE  BINGOLIA`,
        `BOUGIE INOX`,
        `STRIPEUR`,
        `HARICEAU INOX GM`,
        `DEGUEPELI`,
        `OXIMETRER DE POULS`,
        `LIDOCAINE 20MG/ML`,
        `PORT LAME`,
        `BOITE D INSTRUMON P M`,
        `PINCE PORTE AIGUE`,
        `PINCE HEMOSTATIQUE SON GRIFE`,
        `PINCE COUCHER AVEC GRIFE`,
        `ECARTEUR CROUCHE`,
        `SISOUS A DESSECUTION`,
        `PINCE EN COEUR`,
        `PINCE MAGILE`,
        `SERINGUES DOUBLE TETE POUR INJECTION DE MARQUE MEDRAD MODEL STELLANT D`,
        `TUBULURE.PROLONGATEUR POU SERINGUES DOUBLE TETE POUR INJECTION DE MARQUE MEDRAD MODEL STELLANT D`,
        `FILM POUR RADIO 20*25`,
        `FILM POUR RADIO 25*30`,
        `FIL MER SETURE (POLYESTER) N° 1`,
        `LAME BISTOURI N°20`,
        `VALVE NEURO C/S MED/PRES ENF`,
        `POLYESTER TRESSE VERT 1 AR 30MM`,
        `POLYESTER TRESSE VERT 1 AR 36MM`,
        `FIL RESORBABLE TRESSE 2/0 AR 25-26MM`,
        `SALBUTAMOL SOL NEBUL 5MG /ML`,
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
            data = data.replace(/'/g, "\\'")
            // ENTERING DATA
            let scriptCode = `arguments[0].value = 'D${1111 + i}'`
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