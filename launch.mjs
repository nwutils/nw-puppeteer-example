import { findpath } from "nw";
import puppeteer from "puppeteer";

await launch();

async function launch() {
    const browser = await puppeteer.launch({
        headless: false,
        ignoreDefaultArgs: true,
        executablePath: findpath(),
        args: ['--nwapp=.'],
    });
    console.log('Done launching...');
}
