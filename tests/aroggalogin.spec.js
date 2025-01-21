const{test,expect} = require("@playwright/test")

test("valid Login page",async function({page}){

    //go to URL

    await page.goto("https://web-arogga.vercel.app/")
    //go to hello user account & order
    
    await page.getByText("Account & Orders").click()
    //await page.getByPlaceholder("phone").type("01684881848")
    //await page.locator("input[name='password']").type("admin123")
    await page.locator("(//input[@id='phone'])[1]").type("01684881848",{delay:200})

    await page.locator("//body/div/div[@class='Modal_modalBackdrop__q9EBU Modal_entered___gQiC']/div[@class='Modal_modalContent__7WRvX Modal_entered___gQiC-active ']/div[@class='Modal_modalBody__L_9Ks']/div[@class='login_model_container__B9IOP']/div[@class='Spinner_spinnerWrapper__XWvRa ']/div[@class='login_login_container__ZNODT']/div[@class='login_login_content__wGBxP']/div/div[1]/div[1]").click()

    await page.waitForTimeout(2000)
    await page.locator("//input[@id='otp_input']").type("1234",{delay:200})
    await page.locator("//body[1]/div[5]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[5]/div[1]/div[1]/div[1]/div[2]/div[1]").click()

    await page.waitForTimeout(3000)
    //open loginpage
    await expect(page).toHaveURL(/web-arogga.vercel.app/)
    //expected result

})
