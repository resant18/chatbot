const { BotkitConversation } = require("botkit");

module.exports = function (controller) {
  const interview = new BotkitConversation('interview', controller);
  interview.say('Hello, welcome to the chatbot interview world');
  interview.say('This chatbot allows you the chance to interview either Alfredo, Carl, or Renata');
  interview.ask('Who would you like to interview?', [
    {
      pattern: "Alfredo",
      handler: async function (answer, interview, bot) {
        await interview.gotoThread("wants_flour");
      }
    },
    {
      pattern: "Carl",
      handler: async function (answer, interview, bot) {
        await interview.gotoThread("wants_corn");
      }
    },
    {
      pattern: "Renata",
      handler: async function (answer, convo, bot) {
        await convo.gotoThread("default");
      }
    }
  ], 'type_of_taco');

  interview.addMessage("you like flour!", "wants_flour");
  interview.addMessage("you like corn!", "wants_corn");
  interview.addMessage('Yum!!', "default");
  
  

  controller.addDialog(interview);

  controller.hears(`Hello there`, 'message', async (bot, message) => {
    await bot.beginDialog('interview');
  });
}