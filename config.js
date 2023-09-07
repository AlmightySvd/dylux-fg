import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['51977757632', 'Not.Sxrgio', true],
  ['51977757632'], 
  ['51977757632'] 
] //Numeros de owner 

global.mods = ['51977757632'] 
global.prems = ['51977757632', '51977757632', '51977757632']
global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api-fgmods.ddns.net': 'TU-APIKEY' //Regístrese en https://api-fgmods.ddns.net/
}

// Sticker WM
global.packname = 'ＣｏｎｅｒｏｓＰｏｓ🦎ｔｉｖｅ ⤧ᴮᵒᵗ' 
global.author = 'No.Sxrgio' 
global.fgig = '▢ Sígueme en Instagram\nhttps://www.instagram.com/not.sxrgio\n' 
global.dygp = '-'
global.fgsc = '-' 
global.fgyt = '-'
global.fgpyp = '-'
global.fglog = 'https://imgur.com/mGToDUN.png' 

global.wait = '*⌛ _Cargando..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
