
const linkRegex = /chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i

export async function before(m, {conn, isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    const isGroupLink = linkRegex.exec(m.text)

    if (chat.antiLink && isGroupLink && !isAdmin) {
        if (isBotAdmin) {
            const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
            if (m.text.includes(linkThisGroup)) return !0
        }
        await conn.reply(m.chat, `*≡ Enlace Detectado*
            
⚠️𝐍𝐎 𝐒𝐄 𝐏𝐄𝐑𝐌𝐈𝐓𝐄𝐍 𝐎𝐓𝐑𝐎𝐒 𝐋𝐈𝐍𝐊 
𝐒𝐄𝐑𝐑𝐀𝐍𝐎 𝐀𝐏𝐄𝐒𝐓𝐎𝐒𝐎 ⚠️ ⟿ *@${m.sender.split('@')[0]}*  𝐒𝐀𝐅𝐀 𝐂𝐎𝐍𝐂𝐇𝐀𝐃𝐄𝐓𝐔𝐌𝐀𝐑𝐄 ϟ Ｃｏｎｅｒｏｓ Ｐｏｓ🦎ｔｉｖｅᴮᵒᵗ ${isBotAdmin ? '' : '\n\nNo soy admin así que no te puedo expulsar :"v'}`, null, { mentions: [m.sender] } )
        if (isBotAdmin && chat.antiLink) {
        	await conn.sendMessage(m.chat, { delete: m.key })
            await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        } else if (!chat.antiLink) return //m.reply('')
    }
    return !0
}
