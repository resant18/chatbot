/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

// module.exports = function(controller) {

//     controller.hears('sample','message,direct_message', async(bot, message) => {
//         await bot.reply(message, 'I heard a sample message.');
//     });

//     controller.on('message,direct_message', async(bot, message) => {
//         await bot.reply(message, `Hear my echo: ${ message.text }`);
//     });

// }

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



    // collect a value with no conditions
    // onboarding.ask("What is your name?", [], "name");
    // onboarding.say(
    //    "What is your name?",
    //    async (response, onboarding, bot, full_message) => {
    //       await bot.say("Oh your name is " + response);
    //    },
    //    { key: "name" }
    // );

//     // collect a value with conditional actions
//     // onboarding.ask(
//     //     "Do you like tacos?",
//     //     [
//     //         {
//     //             pattern: "yes",
//     //             handler: async function (answer, convo, bot) {
//     //                 await convo.gotoThread("likes_tacos");
//     //             },
//     //         },
//     //         {
//     //             pattern: "no",
//     //             handler: async function (answer, convo, bot) {
//     //                 await convo.gotoThread("hates_life");
//     //             },
//     //         },
//     //     ],
//     //     { key: "tacos" }
//     // );

//     // // define a 'likes_tacos' thread
//     // onboarding.addMessage("HOORAY TACOS", "likes_tacos");

//     // // define a 'hates_life' thread
//     // onboarding.addMessage("TOO BAD!", "hates_life");

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