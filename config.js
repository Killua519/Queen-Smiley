const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
///=================ඕවා එඩිට් කරද්දි කිසිම දෙයක් වැරදියට දමන්න එපා !!MAIN-CONFIG=================================
SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0h6RVRJLzltVFBkeU9IdEsvN3hKSmFnSHgrVDYxZmRHOXRnY1I5c0Mwaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNXlUa29WaFlINmdXL1Q1YU91UFl4L05iUm9yME5QK1l5c0FkQUhoVllYST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHUEVMOUlkeHZNS3lhMW40aVNqTkttUVpDbHg1NVJkZGNaR2gxaFkrc0dFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2MUZadlR5WnBtbmwrRXlaaE00VXM1Y3dtdDh4S3p1VEp4R284YmNqQTFFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRLelNrS091OUVXRmphYW15UFF2YjZZbGh6cSsxeWlONUVMN2QzdkFGMVk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjcwZGxKcVNTcFNwbVpmOVpMTnpWWE9la0hHUld5UXNBcFhoMVhUZTBuM1U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0JseEFZWVJVQ0VlVUlscGhoSDZnSk1oc2hCTEVkSGdkVVBjZHljQnlsaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVi95VEU3eGpJY2tQQXgxTHBtRTFQdEFWWDJTL245bThSNldFSStFdlVpbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Img2c0FONGJCendKV0MyMkJVS3ZwbGhrekcyY0grUFoxclo4UEJ4UVhTYTlXeFY2UW1iWXZoSjRVT1UrZ3B3cTlHMlpFWDhzamtWWEZxV2RwNzI1dWdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTAsImFkdlNlY3JldEtleSI6ImFTMENYNXU5eEJLTXE0SzdEbDRndHl5V1VNWS91NUhTSGhITVVyQnM0YkU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Imcybjd0R19VU3oyMTVMWTlIaXhwZ2ciLCJwaG9uZUlkIjoiMGMxNzgxODQtMWJlMS00NjA4LTgzOWUtZjkzYjc5ZjA3N2FkIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5kTllZQ0ZLUnJ0ME00MHZ1cVFnMW1LVzRFQT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKMklTYXVKckEvQlluT3lyU2IvWWswc1lNbGM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTjUyMzQyNlEiLCJtZSI6eyJpZCI6IjI3NzM5NjgzMzc0OjExQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMZjZzbDBRczRhOXZnWVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIxWkhqOUM1V2lnZmgzZ3NBMm4rNlNETWQvTldSQlQySjVyeThibzl1dDNVPSIsImFjY291bnRTaWduYXR1cmUiOiIvYXlyR1lLYkxQMjJwYlVhdUxWTWJMd3J1TEdDbTBEN2JDbzNDNFdzeGZ0Q0g2L2luOTVTMVZUSlJjV1E4THpsOFVCZU9mTzErN1RJdE8wMUo2eEVBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZDNXaCtDUlBZTm4zWE9FT1ByNjRUUWVDUnJXSFh3L1M5c2tUYUhIbEdlU2NwYTJqTlR1NjJWVnAxUUZuYzY5RWR5cGJ0Q3JSdEU3UngxQzQ1NEJZaHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNzczOTY4MzM3NDoxMUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkV1I0L1F1Vm9vSDRkNExBTnAvdWtnekhmelZrUVU5aWVhOHZHNlBicmQxIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQxNjM2NDE2LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUNFLyJ9",  // ADD Your Session Id 
MODE: process.env.MODE || "public",  // Add Your Bot Mode (groups/privet/public)
PREFIX: process.env.PREFIX || ".",   // Add Your Custom Prefix 
OWNER_REACT: process.env.OWNER_REACT || "true", //add true or false
BOT_NAME: process.env.BOT_NAME || "Queen-Smiley",
///=================ඕවා එඩිට් කරද්දි කිසිම දෙයක් වැරදියට දමන්න එපා !!CUSTOM-SETTING-CONFIG=====================
AUTO_VOICE: process.env.AUTO_VOICE || "true", //add true or false
AUTO_STICKER: process.env.AUTO_STICKER || "true", //add true or false
AUTO_REPLY: process.env.AUTO_REPLY || "true", //add true or false
ANTI_LINK: process.env.ANTI_LINK || "true", //add true or false
ANTI_BAD: process.env.ANTI_BAD || "true", //add true or false
FAKE_RECORDING: process.env.FAKE_RECORDING || "true", //add true or false
AUTO_REACT: process.env.AUTO_REACT || "true", //add true or false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true", //add true or false
///=================ඕවා එඩිට් කරද්දි කිසිම දෙයක් වැරදියට දමන්න එපා !!API-CONFIG=================================
///===============================================DONT-CHANGE-API=========================================
GOOGLE_CX: process.env.GOOGLE_CX || "AIzaSyD93IeJsouK51zjKgyHAwBIAlqr-a8mnME", 
PASTEBIN_API_KEY: process.env.PASTEBIN_API_KEY || "uh8QvO6vQJGtIug9WvjdTAPx_ZAFJAxn",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
///=================ඕවා එඩිට් කරද්දි කිසිම දෙයක් වැරදියට දමන්න එපා !!ALIVE-CONFIG================================
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/gdvaaw.jpg", //add alive img url
ALIVE_MSG: process.env.ALIVE_MSG || "HI AM WHATSAPP BOT", //add alive msg
}
