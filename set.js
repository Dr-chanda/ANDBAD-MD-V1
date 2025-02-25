const fs = require("fs-extra");
if (fs.existsSync("set.env")) {
  require("dotenv").config({
    'path': __dirname + "/set.env"
  });
}
const path = require("path");
const databasePath = path.join(__dirname, "./database.db");
const DATABASE_URL = process.env.DATABASE_URL === undefined ? databasePath : process.env.DATABASE_URL;
module.exports = {
  'session': process.env.SESSION_ID || "ANDBAD-BOT;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiME5uUlFYNmlmaFF6NENnSUZlbkhSQkRkdXp0UzR0MmZjMlkyTnBOcEoyOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYmMyaGYvSk1GcXZ6b2pnWDlNbk1BbTNJS2FJSFZOODZXMWFYVE1YQlBHWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1TGszU0JzU1VseGl4UU8wQjdWc25nRUhOZERHUTdaMU42dG1qY0QrTG5zPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqMGZ6U3FTWDd3b21DWldINm02QlhmQTJzRCtLV2pxNFN1OElBKzF1bVFVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldDY2o0ajNhczdrSHJGVkFOQU5PRFpmdHdaZGNWNlBoN1lHV0s0eDlrVUk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik02R0p6Y205c281UnRqdXhxK2dJa2Ewb2cyNXI0L2xCUDhnVHg4bEw0Mkk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0JBSVljb05pN29aUDZKUmRoNStYNm1FTFQ5SzdYaWRHU1RkN0piMm9Hbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidnA5aklPanp4VTNaVzhWY1d5aUZmU1hUeW9nZXp6Slk3VDdncno2SENXST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhNamNKcDdDRFREQWVwTnpyRzdKWjlldVg4Y2hJdHBTZzFLUDZnbVQxM2YzR3MxdE9Fa3ZNRENrWEllN1NTVjNQVjkxdHVYeE1VL3R4cmx6VTNCWEFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk4LCJhZHZTZWNyZXRLZXkiOiJ2S2ZFeDUzY2RXYkFCWmpwRmhPNWNIc2sxdTBoZDMrblc1VFZOTTF1a3JFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzcsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozNywiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJqRHQ3TXlsR1JHYXM1M2Y4b3dCOGZBIiwicGhvbmVJZCI6IjBiNjQ4OGJhLTUxNWUtNDBkMy1hMTMzLWFhOWE5NDdmY2IzZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRM0ZLWjFCVmc2cFFsUHNCSFF0dzdNMkFLZm89In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibWcyTFhFTEhzbnNuRWZDTkx1R2VMWVF1a09BPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkZEQkFYNjEyIiwibWUiOnsiaWQiOiIyNzc4MTY3MzAyMjo4QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IsOKQUIifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09UQnZKNERFTGJQK0wwR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkhiNmR4czF2SGQyY0RncEpENlpVeFFkMStjZkVOakd0VXI2NUlNeUZxWEk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkR2VkNSR1VFMkxqQXlxZDFrOUx1a2g5RktCeTQ3TlQ2S0JSV0Roblk0S29NMG8wLzhQNnBlZkQzcXFOd0U3R01sTkVKUDlGSjZVUllCSU95RFFZU0NnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJkU3JTcklqeVp1TStoalF5SUo1dGhzY3ZtY1dQZ3RVaE1zTTNGRG5BSmpVOXUrYUlUSWdBcmZDc05XN3JQMjBsQ3VnS2VoU1hRNXRlaFFCU3lMbEJCZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI3NzgxNjczMDIyOjhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUjIrbmNiTmJ4M2RuQTRLU1ErbVZNVUhkZm5IeERZeHJWSyt1U0RNaGFseSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0MDUxNTI2OH0=",
  'PREFIXE': process.env.PREFIX || '.',
  'OWNER_NAME': process.env.OWNER_NAME || "Dr Chanda",
  'NUMERO_OWNER': process.env.NUMERO_OWNER || "27781673022",
  'AUTO_READ_STATUS': process.env.AUTO_READ_STATUS || "non",
  'AUTO_DOWNLOAD_STATUS': process.env.AUTO_DOWNLOAD_STATUS || "non",
  'BOT': process.env.BOT_NAME || "Dr Chanda",
  'URL': process.env.BOT_MENU_LINKS || "https://i.imgur.com/L4U2K76.jpeg",
  'MODE': process.env.PUBLIC_MODE || 'yes',
  'PM_PERMIT': process.env.PM_PERMIT || 'no',
  'HEROKU_APP_NAME': process.env.HEROKU_APP_NAME,
  'HEROKU_APY_KEY': process.env.HEROKU_APY_KEY,
  'WARN_COUNT': process.env.WARN_COUNT || '3',
  'ETAT': process.env.PRESENCE || '',
  'CHATBOT': process.env.PM_CHATBOT || 'no',
  'ANTICALL': process.env.ANTICALL || "non",
  'AUTO_REACT_STATUS': process.env.AUTO_REACT_STATUS || "yes",
  'DP': process.env.STARTING_BOT_MESSAGE || "yes",
  'ADM': process.env.ANTI_DELETE_MESSAGE || "yes",
  'DATABASE_URL': DATABASE_URL,
  'DATABASE': DATABASE_URL === databasePath ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9"
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
  fs.unwatchFile(fichier);
  console.log("mise à jour " + __filename);
  delete require.cache[fichier];
  require(fichier);
});
