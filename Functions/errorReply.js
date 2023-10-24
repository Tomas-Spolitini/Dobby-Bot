const {EmbedBuilder} = require('discord.js')

function errorReply(message,razon){
    message.reply({
        embeds:[
            new EmbedBuilder()
            .setTitle('<:a_:1093633658801373346> Error')
            .addFields(
                {name:'Error', value:`\`\`\`yaml\n${razon}\`\`\``}
            )
            .setColor('Red')
        ]
    })
}

module.exports = errorReply