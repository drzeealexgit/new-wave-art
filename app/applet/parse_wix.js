const https = require("https");
const fs = require("fs");

const pages = [
  "home", "uk", "resume", "uk/resume",
  "mix", "uk/mix",
  "exposition2-0", "uk/exposition2-0",
  "is-this-reality", "uk/is-this-reality",
  "cap", "uk/cap",
  "illustration-1", "uk/illustration-1",
  "ck", "uk/ck",
  "illustration", "uk/illustration",
  "project-08", "uk/project-08",
  "lenovo", "uk/lenovo"
];

function fetch(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      let data = "";
      res.on("data", c => data += c);
      res.on("end", () => resolve(data));
    }).on("error", () => resolve(""));
  });
}

async function parseAll() {
  const result = {};
  for (const p of pages) {
    const url = p === "home" ? "https://maryzvolinskaya.wixsite.com/portfolio" : "https://maryzvolinskaya.wixsite.com/portfolio/" + p;
    console.log("Fetching: " + p);
    const html = await fetch(url);

    // Extract text blocks
    const textBlocks = [];
    const reText = /<(?:p|h1|h2|h3|h4|h5|h6|span|li|a)[^>]*>([\s\S]*?)<\/(?:p|h1|h2|h3|h4|h5|h6|span|li|a)>/gi;
    let match;
    while ((match = reText.exec(html)) !== null) {
      let clean = match[1].replace(/<[^>]+>/g, " ")
        .replace(/&quot;/g, "\"")
        .replace(/&amp;/g, "&")
        .replace(/&#39;/g, "'")
        .replace(/&nbsp;/g, " ")
        .replace(/\s+/g, " ")
        .trim();
      if (clean && clean.length > 3 && !clean.includes("wix.com") && !clean.includes("cookie") && !clean.includes("function(")) {
        textBlocks.push(clean);
      }
    }

    // Extract images
    const images = [];
    const reImg = /(https:\/\/static\.wixstatic\.com\/media\/[a-zA-Z0-9_~]+(?:\.(?:jpg|png|jpeg|webp))?)/gi;
    let imgMatch;
    while ((imgMatch = reImg.exec(html)) !== null) {
      if (!images.includes(imgMatch[1]) && !imgMatch[1].includes("260226_")) {
        images.push(imgMatch[1]);
      }
    }

    const tMatch = html.match(/<title>([^<]+)<\/title>/);

    result[p] = {
      url,
      title: tMatch ? tMatch[1] : "",
      textBlocks: [...new Set(textBlocks)],
      images
    };
  }

  fs.writeFileSync("all_wix_content.json", JSON.stringify(result, null, 2));
  console.log("SUCCESS! Saved all_wix_content.json");
}

parseAll();
