import puppeteer from "puppeteer";

(async () => {
  try {
    // Launch the browser and open a new blank page
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    // // Navigate to the login page
    // await page.goto('https://myaccount.nytimes.com/auth/login');

    // // Wait for the email input field to appear and type your email
    // await page.waitForSelector('#email');
    // await page.type('#email', 'addemail');

    // // Click on the "Continue" button to proceed to password input
    // await Promise.all([
    //   page.waitForNavigation(), // Wait for navigation to complete
    //   page.click('button') // Click on the "Continue" button
    // ]);

    // // Wait for the password input field to appear and type your password
    // await page.waitForSelector('#password');
    // await page.type('#password', 'addpassword');

    // // Submit the form
    // await Promise.all([
    //   page.waitForNavigation(), // Wait for navigation to complete
    //   page.click('button') // Click on the login/submit button
    // ]);

    // Set screen size
    await page.setViewport({ width: 1080, height: 1024 });

    // Navigate to the URL
    await page.goto(
      "https://www.nytimes.com/2024/06/03/us/politics/trump-defense-congressman-son-steals-spotlight.html"
    );
    // Wait for the content to load
    await page.waitForSelector(".css-53u6y8");

    // Extract the content
    const content = await page.evaluate(() => {
      const elements = document.querySelectorAll(".css-53u6y8");
      return Array.from(elements)
        .map((element) => element.textContent)
        .join(" ");
    });

    console.log(content);

    // Close the browser
    await browser.close();
  } catch (error) {
    console.error("Error:", error);
  }
})();
