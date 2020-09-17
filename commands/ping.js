module.exports = async context => {
    await context.reply(`Pong! Discord gateway heartbeat took ${context.command.channel.guild.shard.latency}ms.`);
}