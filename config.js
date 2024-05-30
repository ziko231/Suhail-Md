const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="zakzakbn9@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa;Morocco";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "NOXY" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "212617486161";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_25_05_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDcsXG4gICAgICAgIDE1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTYxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTU5LFxuICAgICAgICA4OCxcbiAgICAgICAgMjksXG4gICAgICAgIDMxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTcsXG4gICAgICAgIDEzNixcbiAgICAgICAgOTIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjU0LFxuICAgICAgICA3OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTksXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDk2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwMixcbiAgICAgICAgOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDQwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDMsXG4gICAgICAgIDAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTY0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDQxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTA1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDMwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjAzLFxuICAgICAgICA3OCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzksXG4gICAgICAgIDIwLFxuICAgICAgICA5NyxcbiAgICAgICAgMjEzLFxuICAgICAgICA2NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDc0LFxuICAgICAgICAxODUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDksXG4gICAgICAgIDI0LFxuICAgICAgICAxOTksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM5LFxuICAgICAgICA0NixcbiAgICAgICAgNTgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2MixcbiAgICAgICAgNjUsXG4gICAgICAgIDIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTI5LFxuICAgICAgICA4OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDkwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDUwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDUyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTg0LFxuICAgICAgICA1OCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDExMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDUwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDksXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDM0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDU1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDY5LFxuICAgICAgICAyMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjIsXG4gICAgICAgIDU4LFxuICAgICAgICA2NixcbiAgICAgICAgOTMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTg1LFxuICAgICAgICA3MCxcbiAgICAgICAgMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDY2LFxuICAgICAgICA3MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDYzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDk1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDgzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjgsXG4gICAgICAgIDMsXG4gICAgICAgIDk3LFxuICAgICAgICA0NCxcbiAgICAgICAgNzksXG4gICAgICAgIDI5LFxuICAgICAgICA3NixcbiAgICAgICAgMTEzLFxuICAgICAgICAxODYsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDc5LFxuICAgICAgICA4LFxuICAgICAgICA1MCxcbiAgICAgICAgMjUzLFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMjNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA4NixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDYwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTMyLFxuICAgICAgICA4NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDc2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDg3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDUzLFxuICAgICAgICA4MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDUwLFxuICAgICAgICAyMTksXG4gICAgICAgIDU0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDg1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTMyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTY5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTIzLFxuICAgICAgICA2MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTIwLFxuICAgICAgICA1MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDUxLFxuICAgICAgICAyOSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUVpYTTVQTlppMFdkSklhdG14ZjUzOWpaZmR0aVdERGRLMTlmbHByVkxocz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMTI2MTc0ODYxNjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjJGMTM1OEVENDhFQTM1QTUyNzBCRTEzNDk4OURBRjA5XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNzA3MTk0OFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJfU3ppRTAtSVJSQ0N4emNjUE82TWtnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjY2YTM3NzJkLTk5ZjYtNDEyNC05ZmI5LTQxZWRhMmM2MThiZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjAsXG4gICAgICA1MSxcbiAgICAgIDEzNixcbiAgICAgIDEzOCxcbiAgICAgIDg5LFxuICAgICAgMTgsXG4gICAgICAzLFxuICAgICAgMTYzLFxuICAgICAgMTc5LFxuICAgICAgMjMxLFxuICAgICAgOTcsXG4gICAgICA3MSxcbiAgICAgIDE1OCxcbiAgICAgIDIzNCxcbiAgICAgIDEwOSxcbiAgICAgIDM0LFxuICAgICAgNDcsXG4gICAgICAyNTUsXG4gICAgICAyMzAsXG4gICAgICAxMzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM0LFxuICAgICAgMjEyLFxuICAgICAgMTgyLFxuICAgICAgMTg4LFxuICAgICAgNTgsXG4gICAgICAxNTUsXG4gICAgICAyMjAsXG4gICAgICAxMTcsXG4gICAgICAxMjIsXG4gICAgICAyMyxcbiAgICAgIDIwNyxcbiAgICAgIDIwMSxcbiAgICAgIDExOCxcbiAgICAgIDE0LFxuICAgICAgNDQsXG4gICAgICA5MixcbiAgICAgIDI1MyxcbiAgICAgIDE4NSxcbiAgICAgIDM5LFxuICAgICAgMjdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVFAyRzlDQUFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIxMjYxNzQ4NjE2MToyN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkNhbGwgbWUgRGFkZHlcIixcbiAgICBcImxpZFwiOiBcIjEzODM0MTIzMjE5MTAyOjI3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BxZjdMd0hFTUhnNGJJR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRVhKaFJHQ0RKZ0hFaHVNMzRFUERyb0FzNmZnSjdwTjczSHZodXp1djlCRT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ1VENDSHBPRGh0NVRtMmwxL1pBWmdBcXpwZWJIbzRVSzNja1prZjN5K3lKMUNHVkFZUnJLb2RkeFMwb3N4Y0hlZmlYdkNSRzdYMjRabTVKSEo3OVFCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJEVmtTakhNeXMvWWNFMGVBUXA5TFB6OHB3enRhcFR0cFFkSllJcGhzU1BqVXdIY2IzbGViMmVqREpHcytCY2RTZG1ZeHFDZ0I3cm1mazBNVHpSSVFpZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMTI2MTc0ODYxNjE6MjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE3MDcxOTQxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUGFTXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQYVMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI0elpLYmtHTVA4YzFKVGpFMXpMaUZra3NiS1ovWmxlZHVSS3ZnLzFVTTZvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwMDY2NTA4NzQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: NOXY Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『POWERED BY NOXY 』```", //*『sᴜʙsᴄʀɪʙᴇ • NOXY』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "NOXY",
  packname: process.env.PACK_NAME || "NOXY",
  botname : process.env.BOT_NAME  || "NOXY",
  ownername:process.env.OWNER_NAME|| "NOXY",

  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "NOXY"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
