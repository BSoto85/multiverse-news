// import puppeteer from "puppeteer";

export async function getArticleText(link){
    // Launch the browser and open a new blank page
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
  
    // Navigate the page to a URL
    await page.goto(link);
  
    // Set screen size
    await page.setViewport({ width: 1080, height: 1024 });
  
    // // Navigate to the login page
    // await page.goto('https://myaccount.nytimes.com/auth/login', { waitUntil: 'networkidle2' });
  
    // // Enter the login credentials
    // await page.type('input[name="email"]', 'add email'); // Replace with your username
    // await page.type('input[name="password"]', 'add password'); // Replace with your password
  
    // // Click the login button and wait for navigation
    // await Promise.all([
    //   page.click('button[type="submit"]'), // Adjust the selector if necessary
    //   page.waitForNavigation({ waitUntil: 'networkidle2' }),
    // ]);
  
    //  // Wait for and extract the title
    //  const titleElement = await page.waitForSelector('h1');
    //  const title = await titleElement.evaluate(el => el.textContent);
    //  console.log(title)
  
    // Wait for the content to load
    await page.waitForSelector(".css-53u6y8");
  
    const content = await page.evaluate(() => {
      const elements = document.querySelectorAll(".css-53u6y8");
      return Array.from(elements)
        .map((element) => element.textContent)
        .join("\n");
    });
  
    // Print the full title and content
    // console.log(`Title: ${title}`);
    // console.log(`Content: ${content}`);
  
    await browser.close();
    return content
  };

