
let handler = m => m

handler.before = async function (m, {conn, isAdmin, isBotAdmin, isOwner} ) {
  if (!m.isGroup) return !1
  let chat = global.db.data.chats[m.chat];
  
  if (isBotAdmin && chat.onlyLatinos && !isAdmin && !isOwner) {
    let forbidPrefixes = ["212", "265", "234", "258", "263", "967", "20", "92", "91"];

    for (let prefix of forbidPrefixes) {
      if (m.sender.startsWith(prefix)) {
        m.reply('✳️ 𝐄𝐍 𝐄𝐒𝐓𝐄 𝐆𝐑𝐔𝐏𝐎 𝐒𝐎𝐋𝐎 𝐒𝐄 𝐏𝐄𝐑𝐌𝐈𝐓𝐄𝐍 𝐏𝐄𝐑𝐒𝐎𝐍𝐀𝐒 𝐐𝐔𝐄 𝐇𝐀𝐁𝐋𝐀𝐍 𝐒𝐏𝐀𝐍𝐈𝐒𝐇', m.sender)
        await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
        return false;
      }
    }
  }
  
  return true;
}


export default handler;
