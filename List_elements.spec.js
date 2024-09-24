const {test,expect}=require('@playwright/test')

test('check the unorderd list and items',async ({page}) => {
    await page.goto('file:///D:/html-files/HTML-programs-excercise/lists.html')

    //select all list items from the unordered list
    const list_items = await page.$$('ul li')

    //to get count of the unordered list items
    const list_length = list_items.length

    console.log('number of unordered list items ',list_length)

    //select all list items from ordered list
    const list_items2 = await page.$$('ol li')

    //to test the length of the ordered list items
    const length2= list_items2.length
    
    console.log('number of unordered list items ',length2)

    //to test list elements names
    const expected_itemss =['Apple','Banana','Orange','Grapes'];

    const olitems= page.locator('ul#ordered-list li');

    for(let i=0;i<olitems.length;i++){
        await expect(olitems.nth(i)).toHaveText(expected_itemss[i]);
    }
    console.log('all tested')
})

