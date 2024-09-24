const {test,expect} = require('@playwright/test');
const { TIMEOUT } = require('dns');

test('Heading Test',async ({page})=>{
    await page.goto('file:///D:/html-files/HTML-programs-excercise/shop_keeper_form.html')

    //select h2 tag from the page
    const h2 = await page.$('h2')
    expect(h2).not.toBeNull(); //assertion that verifies h2 is not NULL

    //check h2 tag content
    const h2text = await page.textContent('h2')
    expect(h2text).toBe('Please fill your details')

})
test('male and female only one selected',async({page})=>{
    await page.goto('file:///D:/html-files/HTML-programs-excercise/shop_keeper_form.html',{waitUntil:'load'})

     const maleName = await page.getAttribute('input#male','name');

     const femaleName = await page.getAttribute('input#female','name');

     console.log('malename',maleName);

     console.log('femalename',femaleName);

     expect(maleName).toBe(femaleName);
})

test('drop down menu for education qualification check',async({page})=>{
    await page.goto('file:///D:/html-files/HTML-programs-excercise/shop_keeper_form.html',{waitUntil:'load'})

    const drop_down = await page.locator('#ed')

    await drop_down.click();

    const option = await drop_down.locator('option').allTextContents();

    const expected = ['10th','Inter', 'Below 10th', 'Other'];

    expect(option).toEqual(expected);
})
test('check for check boxes presence',async({page})=>{
    await page.goto('file:///D:/html-files/HTML-programs-excercise/shop_keeper_form.html')

    const graduate_check= await page.locator('#c1');

    await expect(graduate_check).toBeVisible();

    const post_graduate_check= await page.locator('#c2');

    await expect(post_graduate_check).toBeVisible();
})

test('drop down menu for role applied check',async({page})=>{
    await page.goto('file:///D:/html-files/HTML-programs-excercise/shop_keeper_form.html',{waitUntil:'load'})

    const drop_down = await page.locator('#role')

    await drop_down.click();

    const option = await drop_down.locator('option').allTextContents();

    const expected = ['Manager','Store In charge', 'Billing Desk', 'Store Keeper','Cleaning','Safty'];

    expect(option).toEqual(expected);
})
