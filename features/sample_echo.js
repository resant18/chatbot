/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

module.exports = function(controller) {

    const { BotkitConversation } = require("botkit");

    // define the conversation
    const onboarding = new BotkitConversation("onboarding", controller);

    onboarding.say("Hello human!", async (response, onboarding, bot, full_message) => {
        onboarding.say(
           "What is your name?",
           async (response, onboarding, bot, full_message) => {
              await bot.say("Oh your name is " + response);
           },
           { key: "name" }
        );
    })

    controller.hears(
        ["Hi", "hola"],
        "message,direct_message",
        async (bot, message) => {
            
            bot.reply(message, { type: "typing" });

            const p1 = await new Promise((resolve) => {
                return setTimeout(async () => {
                    // will have to reset context because turn has now ended.
                    await bot.changeContext(message.reference);
                    return resolve(bot.reply(message, "Hello, I'm a digital Avatar."));
                }, 1000);
            });

            
            const p2 = await new Promise(async (resolve) => {
                await bot.reply(message, { type: "typing" });

                await setTimeout(() => {
                    bot.reply(message, {
                        text: "What do you want to know about me?",
                        quick_replies: [
                            {
                                title: "Basics",
                                payload: "Basics"
                            },
                            {
                                title: "Work",
                                payload: "Work"
                            },
                        ]
                    });
                }, 1000);
            });
        }
    );

    controller.hears(["work", "basics"], "message,direct_message", async (bot, message) => {
        bot.reply(message, { type: "typing" });

        const p1 = await new Promise((resolve) => {
          return setTimeout(async () => {
            // will have to reset context because turn has now ended.
            await bot.changeContext(message.reference);
            return resolve(bot.reply(message, "Awesome!"));
          }, 1000);
        });
    });



    

    // handle the end of the conversation
    onboarding.after(async (results, bot) => {
        const name = results.name;
    });

    // add the conversation to the dialogset
    controller.addDialog(onboarding);

    // // launch the dialog in response to a message or event
    controller.hears(["hello"], "message", async (bot, message) => {
        bot.beginDialog("onboarding");
    });
}