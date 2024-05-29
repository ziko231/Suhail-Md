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

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
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
global.typing= process.env.AUTO_TYPING || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_12_05_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNCxcbiAgICAgICAgMjM4LFxuICAgICAgICA4MixcbiAgICAgICAgMjUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTYxLFxuICAgICAgICA2MCxcbiAgICAgICAgMCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDg1LFxuICAgICAgICA2OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzksXG4gICAgICAgIDExLFxuICAgICAgICA1LFxuICAgICAgICAxNjksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDk4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDY3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTY2LFxuICAgICAgICA2MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMzksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDUzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDU0LFxuICAgICAgICAxLFxuICAgICAgICAyMzksXG4gICAgICAgIDE1NixcbiAgICAgICAgNzMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTIwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNTksXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTU0LFxuICAgICAgICA1OSxcbiAgICAgICAgMjE1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMzksXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDk3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjQyLFxuICAgICAgICAzNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMjksXG4gICAgICAgIDM4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIxMixcbiAgICAgICAgOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDg3LFxuICAgICAgICA2MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDI1LFxuICAgICAgICAxODIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTc3LFxuICAgICAgICA5NixcbiAgICAgICAgMTAzLFxuICAgICAgICAxODcsXG4gICAgICAgIDQwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDI5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMixcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDUzLFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzAsXG4gICAgICAgIDUwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTA0LFxuICAgICAgICA3NCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTI4LFxuICAgICAgICA2MSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDMzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTA1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDUwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIyLFxuICAgICAgICA3LFxuICAgICAgICA3NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDgxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDQwLFxuICAgICAgICA2MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjI0LFxuICAgICAgICA5OCxcbiAgICAgICAgODUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDMxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDY3LFxuICAgICAgICAyMCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDc1LFxuICAgICAgICAyMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTYzLFxuICAgICAgICA4LFxuICAgICAgICAxODAsXG4gICAgICAgIDk5LFxuICAgICAgICAxODYsXG4gICAgICAgIDI0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDExMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDc1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlR3VjFwaEhFVEVYZGFSZmpTTGJyYjBPb2hJZlNLdjRNVEZXVllpTEc0L1U9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjEyNjE3NDg2MTYxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3Rjk1Q0EzRTMxQ0ZEMUQ0OEVGNEIwMEFBNUM3M0Q3RVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTY5NDE1NTBcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMTI2MTc0ODYxNjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjE5Mzc1QzcxNDdGNjU0NzU2OTBBQTBCNjI3Q0RBNTBEXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNjk0MTU1MVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJIQldrRlBfaFFjS3BvSFhCa3hxUTRBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjBkMTQ2OTMyLWNkNmMtNDA3Ni1hMWVlLTEwOGQyNDYyZTVlNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzAsXG4gICAgICA5OCxcbiAgICAgIDEyMSxcbiAgICAgIDc1LFxuICAgICAgMTg2LFxuICAgICAgMjE5LFxuICAgICAgMTM1LFxuICAgICAgNDksXG4gICAgICAzOCxcbiAgICAgIDUyLFxuICAgICAgMTEzLFxuICAgICAgMTAzLFxuICAgICAgMTU3LFxuICAgICAgMTc2LFxuICAgICAgMTgxLFxuICAgICAgMTUwLFxuICAgICAgMjQzLFxuICAgICAgMjI2LFxuICAgICAgMTcwLFxuICAgICAgMThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIxLFxuICAgICAgMTEzLFxuICAgICAgODQsXG4gICAgICA2OCxcbiAgICAgIDYwLFxuICAgICAgMTgwLFxuICAgICAgMTE4LFxuICAgICAgNDEsXG4gICAgICAyMzEsXG4gICAgICAxODMsXG4gICAgICAxNzMsXG4gICAgICAyMTcsXG4gICAgICAxNSxcbiAgICAgIDI0MCxcbiAgICAgIDE5NixcbiAgICAgIDcwLFxuICAgICAgMTMwLFxuICAgICAgMCxcbiAgICAgIDIyNSxcbiAgICAgIDE2OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJCQTRZQUpBUVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjEyNjE3NDg2MTYxOjI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiTk9YWVwiLFxuICAgIFwibGlkXCI6IFwiMTM4MzQxMjMyMTkxMDI6MjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUHFmN0x3SEVPWGwyYklHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJFWEpoUkdDREpnSEVodU0zNEVQRHJvQXM2ZmdKN3BONzNIdmh1enV2OUJFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInJGMSs2VHBKUWlyVVFGVFdoRkZXNk9xaFdleDJVT1hpdWdoRWM4VlFuVlBnRG51L3FPUXlma3pZeVNaNEZlbHVzcGcrR1J0L1hweC85S3dtMy9JYkNnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImdGZFVRQzRnbTY5RGFxT25IVlIwUHVkQ1F6RStzeFIrZmw0ajlyK2R4cDJRWmUrU0pFa1d1TGg4OXZnQjlyeThGZ2hreXplZUl0QnNHQjg4QzlqWWhRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIxMjYxNzQ4NjE2MToyNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTY5NDE1NDUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQYVNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBhUy5qc29uIjogIntcImtleURhdGFcIjpcIjR6Wktia0dNUDhjMUpUakUxekxpRmtrc2JLWi9abGVkdVJLdmcvMVVNNm89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjAwNjY1MDg3NCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
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
