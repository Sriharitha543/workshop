const {test,expect} = require('@playwright/test')

test('first test to check table has colspan', async ({page}) => {
    await page.goto('file:///D:/html-files/HTML-programs-excercise/table-excercise1.html') 
    
    const table_test=await page.$('table') //select the table tag from the page

    //assertion to check table exist on the page or not
    expect(table_test).not.toBeNull();

    //check whether table tag has colspan attribute and getting the value of colspan
    const colspan = await page.getAttribute('table tr:first-child th, table tr:first-child td', 'colspan')

    console.log('colspan',colspan)
    
    if(colspan==7)
        console.log('Match found')
    else
        console.log('Match not found')    

});

