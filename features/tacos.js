const { BotkitConversation } = require("botkit");

module.exports = function (controller) {
  const tacos = new BotkitConversation('tacos', controller);
  tacos.say('Oh boy, taco time!');
  tacos.ask('What type of taco do you want?', [
    {
      pattern: "flour",
      handler: async function (answer, tacos, bot) {
        await tacos.gotoThread("wants_flour");
      }
    },
    {
      pattern: "corn",
      handler: async function (answer, tacos, bot) {
        await tacos.gotoThread("wants_corn");
      }
    },
    {
      pattern: "default",
      handler: async function (answer, convo, bot) {
        await convo.gotoThread("default");
      }
    }
  ], 'type_of_taco');

  tacos.addMessage("you like flour!", "wants_flour");
  tacos.addMessage("you like corn!", "wants_corn");
  tacos.addMessage('Yum!!', "default");
  
  

  controller.addDialog(tacos);

  controller.hears('tacos', 'message', async (bot, message) => {
    await bot.beginDialog('tacos');
  });
}