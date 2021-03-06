/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

const resume = require("../resume.json");

module.exports = function (controller) {
  // Greet the user on first time!!!!
  controller.on("hello", async (bot, message) => {
    const w0 = await new Promise(async (resolve) => {
      await bot.reply(message, { type: "typing" });
      return setTimeout(async () => {
        await bot.changeContext(message.reference);
        return resolve(
          bot.reply(message, `Hello, welcome to the chatbot interview world`)
        );
      }, 1000);
    });

    const w1 = await new Promise(async (resolve) => {
      await bot.reply(message, { type: "typing" });
      return setTimeout(async () => {
        await bot.changeContext(message.reference);
        return resolve(
          bot.reply(
            message,
            `This chatbot allows you the chance to interview either Alfredo, Carl, or Renata`
          )
        );
      }, 1000);
    });

    const w2 = await new Promise(async (resolve) => {
      await bot.reply(message, { type: "typing" });
      return setTimeout(async () => {
        await bot.changeContext(message.reference);
        return resolve(
          await bot.reply(message, {
            text: "Who would you like to interview?",
            quick_replies: [
              {
                title: "Alfredo",
                payload: "alfredo",
              },
              {
                title: "Carl",
                payload: "Carl",
              },
              {
                title: "Renata",
                payload: "Renata",
              },
            ],
          })
        );
      }, 1000);
    });
  });

  // Greet the user every time!!!!
  controller.on("welcome_back", async (bot, message) => {
    const w0 = await new Promise(async (resolve) => {
      await bot.reply(message, { type: "typing" });
      return setTimeout(async () => {
        await bot.changeContext(message.reference);
        return resolve(
          bot.reply(message, `Hello, welcome to the chatbot interview world`)
        );
      }, 1000);
    });

    const w1 = await new Promise(async (resolve) => {
      await bot.reply(message, { type: "typing" });
      return setTimeout(async () => {
        await bot.changeContext(message.reference);
        return resolve(
          bot.reply(
            message,
            `This chatbot allows you the chance to interview either Alfredo, Carl, or Renata`
          )
        );
      }, 1000);
    });

    const w2 = await new Promise(async (resolve) => {
      await bot.reply(message, { type: "typing" });
      return setTimeout(async () => {
        await bot.changeContext(message.reference);
        return resolve(
          await bot.reply(message, {
            text: "Who would you like to interview?",
            quick_replies: [
              {
                title: "Alfredo",
                payload: "alfredo",
              },
              {
                title: "Carl",
                payload: "Carl",
              },
              {
                title: "Renata",
                payload: "Renata",
              },
            ],
          })
        );
      }, 1000);
    });
  });

  // Define avatars.
  const alfredo = resume.alfredo;
  const carl = resume.carl;
  const renata = resume.renata;
  let human;

  // Prompt the user to ask for more when naming a developer or, greeting.
  controller.hears(
    [
      /\balfredo\b/gi,
      /\bcarl\b/gi,
      /\brenata\b/gi,
      /\bhi\b/gi,
      /\bhello\b/gi,
      /\bhey\b/gi,
      /\bhowdy\b/gi,
      /\bsup\b/gi,
    ],
    "message,message_direct",
    async (bot, message) => {
      // await bot.reply(message, `I heard ${message.text}`); // Just for help
      if (message.text.toLowerCase() === "alfredo") human = alfredo;
      if (message.text.toLowerCase() === "carl") human = carl;
      if (message.text.toLowerCase() === "renata") human = renata;

      // Typing...
      bot.reply(message, { type: "typing" });

      // If no human defined, reply prompt AND return.
      if (!human) {
        const p0 = await new Promise((resolve) => {
          return setTimeout(async () => {
            await bot.changeContext(message.reference);
            await bot.reply(message, {
              text: "Who do you want to know?",
              quick_replies: [
                {
                  title: "Alfredo",
                  payload: "alfredo",
                },
                {
                  title: "Carl",
                  payload: "Carl",
                },
                {
                  title: "Renata",
                  payload: "Renata",
                },
              ],
            });
            resolve("done");
          }, 1000);
        });
        return;
      }

      //There is a human defined!, so...
      // Greet and say if I'm looking for work.
      const p1 = await new Promise((resolve) => {
        return setTimeout(async () => {
          await bot.changeContext(message.reference);
          return resolve(
            bot.reply(
              message,
              `Hey there! 👋\n\nMy name is ${human.basics.name}. I'm a ${human.basics.label} and currently ${human.basics.status}`
            )
          );
        }, 1000);
      });

      // Promt the user to ask for more details.
      const p2 = await new Promise(async (resolve) => {
        await bot.reply(message, { type: "typing" });

        await setTimeout(() => {
          bot.reply(message, {
            text: "What do you want to know about me?",
            quick_replies: [
              {
                title: "Basics",
                payload: "Basics",
              },
              {
                title: "Work",
                payload: "Work",
              },
              {
                title: "Volunteer",
                payload: "Volunteer",
              },
              {
                title: "Education",
                payload: "Education",
              },
              {
                title: "Awards",
                payload: "Awards",
              },
              {
                title: "Publications",
                payload: "Publications",
              },
              {
                title: "Skills",
                payload: "Skills",
              },
              {
                title: "Languages",
                payload: "Languages",
              },
              {
                title: "Interests",
                payload: "Interests",
              },
              {
                title: "References",
                payload: "References",
              },
            ],
          });
        }, 1000);
      });
    }
  );

  // option multiple-choice basics
  const typingPromise2 = (bot, message) => {
    return new Promise(async (resolve) => {
      await bot.reply(message, { type: "typing" });

      await setTimeout(() => {
        bot.reply(message, {
          text: "Here are more facts you can ask me about:",
          quick_replies: [
            {
              title: "Basics",
              payload: "Basics",
            },
            {
              title: "Work",
              payload: "Work",
            },
            {
              title: "Volunteer",
              payload: "Volunteer",
            },
            {
              title: "Education",
              payload: "Education",
            },
            {
              title: "Awards",
              payload: "Awards",
            },
            {
              title: "Publications",
              payload: "Publications",
            },
            {
              title: "Skills",
              payload: "Skills",
            },
            {
              title: "Languages",
              payload: "Languages",
            },
            {
              title: "Interests",
              payload: "Interests",
            },
            {
              title: "References",
              payload: "References",
            },
          ],
        });
      }, 1000);
      resolve("done");
    });
  };

  // Bot hears basics.
  controller.hears(
    [
      /\bname\b/gi,
      /\boccupation\b/gi,
      /\bpicture\b/gi,
      /\bphone\b/gi,
      /\bemail\b/gi,
      /\bwebsite\b/gi,
      /\bportfolio\b/gi,
      /\bsummary\b/gi,
      /\btell me about yourself\b/gi,
      /\blocation\b/gi,
      /\bsocial profiles\b/gi,
      /\bsocial\b/gi,
      /\bthanks\b/gi,
      /\bthank you\b/gi,
      /\bbasics\b/gi,
    ],
    "message,direct_message",
    async (bot, message) => {
      // If 'Basics' give short Summary.
      if (/\bbasics\b/gi.test(message.text)) {
        // Gives short summary and prompt to ask more.
        const p0 = await new Promise(async (resolve) => {
          await bot.reply(message, { type: "typing" });
          return setTimeout(async () => {
            let shortSummary = human.basics.summary;
            await bot.changeContext(message.reference);
            return resolve(bot.reply(message, `I'm glad you asked!`));
          }, 1000);
        });

        const p00 = await new Promise(async (resolve) => {
          await bot.reply(message, { type: "typing" });
          return setTimeout(async () => {
            let shortSummary = human.basics.summary;
            await bot.changeContext(message.reference);
            return resolve(bot.reply(message, `${shortSummary}`));
          }, 1000);
        });
      }

      if (/\bname\b/gi.test(message.text)) {
        const p1 = await new Promise(async (resolve) => {
          await bot.reply(message, { type: "typing" });
          return setTimeout(async () => {
            await bot.changeContext(message.reference);
            return resolve(
              bot.reply(
                message,
                `My name is ${human.basics.name} and it's great speaking with you!`
              )
            );
          }, 1000);
        });
      }

      if (/\boccupation\b/gi.test(message.text)) {
        const p2 = await new Promise(async (resolve) => {
          await bot.reply(message, { type: "typing" });
          return setTimeout(async () => {
            await bot.changeContext(message.reference);
            return resolve(
              bot.reply(
                message,
                `I'm a current ${human.basics.label} and I'm ${human.basics.status} in an awesome company!`
              )
            );
          }, 1000);
        });
      }

      if (/\bpicture\b/gi.test(message.text)) {
        const p3 = await new Promise(async (resolve) => {
          await bot.reply(message, { type: "typing" });
          return setTimeout(async () => {
            await bot.changeContext(message.reference);
            return resolve(
              bot.reply(
                message,
                `You can find my gravatar here! ${human.basics.picture}`
              )
            );
          }, 1000);
        });
      }

      if (/\bemail\b/gi.test(message.text)) {
        const p4 = await new Promise(async (resolve) => {
          await bot.reply(message, { type: "typing" });
          return setTimeout(async () => {
            await bot.changeContext(message.reference);
            return resolve(
              bot.reply(
                message,
                `Feel free to reach out to me at ${human.basics.email} to, have a Coffee Zoom Chat, ask any questions or, just to say hi! 😊`
              )
            );
          }, 1000);
        });
      }

      if (
        /\bwebsite\b/gi.test(message.text) ||
        /\bportfolio\b/gi.test(message.text)
      ) {
        const p5 = await new Promise(async (resolve) => {
          await bot.reply(message, { type: "typing" });
          return setTimeout(async () => {
            await bot.changeContext(message.reference);
            return resolve(
              bot.reply(
                message,
                `Check out my portfolio (${human.basics.website}) to look at some of my latest projects!`
              )
            );
          }, 1000);
        });
      }

      if (/\bphone\b/gi.test(message.text)) {
        const p6 = await new Promise(async (resolve) => {
          await bot.reply(message, { type: "typing" });
          return setTimeout(async () => {
            await bot.changeContext(message.reference);
            return resolve(
              bot.reply(message, `Here is my phone 📱: ${human.basics.phone}`)
            );
          }, 1000);
        });
      }

      if (
        /\bsummary\b/gi.test(message.text) ||
        /\btell me about yourself\b/gi.test(message.text)
      ) {
        const p7 = await new Promise(async (resolve) => {
          await bot.reply(message, { type: "typing" });
          return setTimeout(async () => {
            await bot.changeContext(message.reference);
            return resolve(
              bot.reply(
                message,
                `Thanks for asking,\n\n\n\n${human.basics.pitch}`
              )
            );
          }, 1000);
        });
      }

      if (/\blocation\b/gi.test(message.text)) {
        const p8 = await new Promise(async (resolve) => {
          await bot.reply(message, { type: "typing" });
          return setTimeout(async () => {
            await bot.changeContext(message.reference);
            return resolve(
              bot.reply(
                message,
                `I'm currently in ${human.basics.location.city}, ${human.basics.location.region} ${human.basics.location.countryCode}`
              )
            );
          }, 1000);
        });
      }

      if (
        /\bsocial\b/gi.test(message.text) ||
        /\bsocial profiles\b/gi.test(message.text) ||
        /\bprofiles\b/gi.test(message.text)
      ) {
        const p9 = await new Promise(async (resolve) => {
          await bot.reply(message, { type: "typing" });
          return setTimeout(async () => {
            const twitter = `${human.basics.profiles[0].network}: ${human.basics.profiles[0].url}`;
            const linkedin = `${human.basics.profiles[1].network}: ${human.basics.profiles[1].url}`;
            const github = `${human.basics.profiles[2].network}: ${human.basics.profiles[2].url}`;
            const angel = `${human.basics.profiles[3].network}: ${human.basics.profiles[3].url}`;
            await bot.changeContext(message.reference);
            return resolve(
              bot.reply(
                message,
                `Here are my social profiles, Check me out!\n\n${twitter}\n\n${linkedin}\n\n${github}\n\n${angel}`
              )
            );
          }, 1000);
        });
      }

      if (
        /\bthanks\b/gi.test(message.text) ||
        /\bthank you\b/gi.test(message.text)
      ) {
        const p8 = await new Promise(async (resolve) => {
          await bot.reply(message, { type: "typing" });
          return setTimeout(async () => {
            await bot.changeContext(message.reference);
            return resolve(
              bot.reply(
                message,
                `It was my pleasure speaking with you 😊 and thanks for connecting!`
              )
            );
          }, 1000);
        });
      }

      // option multiple-choice basics
      const typingPromise1 = await new Promise(async (resolve) => {
        await bot.reply(message, { type: "typing" });

        await setTimeout(() => {
          bot.reply(message, {
            text: "Here are more facts you can ask me about:",
            quick_replies: [
              {
                title: "Name",
                payload: "Name",
              },
              {
                title: "Occupation",
                payload: "Occupation",
              },
              {
                title: "picture",
                payload: "picture",
              },
              {
                title: "Email",
                payload: "Email",
              },
              {
                title: "Phone",
                payload: "Phone",
              },
              {
                title: "Website",
                payload: "Website",
              },
              {
                title: "Summary",
                payload: "Summary",
              },
              {
                title: "Location",
                payload: "Location",
              },
              {
                title: "Social Profiles",
                payload: "Social Profiles",
              },
            ],
          });
        }, 1000);
        resolve("done");
      });
    }
  );

  // Bot hears work.
  controller.hears(
    [
      /\bwork\b/gi,
      /\bworked\b/gi,
      /\bprevious jobs\b/gi,
      /\blast job\b/gi,
      /\blast company\b/gi,
    ],
    "message,direct_message",
    async (bot, message) => {
      // Gives short summary and prompt to ask more.
      const p0 = await new Promise(async (resolve) => {
        await bot.reply(message, { type: "typing" });
        return setTimeout(async () => {
          let companies = human.work;
          let text = "";
          for (const company of companies) {
            text += `* ${company.company} as ${company.position}\n\n`;
          }
          await bot.changeContext(message.reference);
          if (!Boolean(companies) || !companies.length) {
            return resolve(
              bot.reply(
                message,
                `My knowledge of companies is outdated 😕. Please find me on LinkedIn (${human.basics.profiles[1].url}) for the latest on me!`
              )
            );
          } else {
            return resolve(
              bot.reply(
                message,
                `Here's a look at the companies I worked previously:\n\n${text}`
              )
            );
          }
        }, 1000);
      });

      await typingPromise2(bot, message);
    }
  );

  // Bot hears volunteer.
  controller.hears(
    [/\bvolunteer\b/gi],
    "message,direct_message",
    async (bot, message) => {
      // Gives short summary and prompt to ask more.
      const p0 = await new Promise(async (resolve) => {
        await bot.reply(message, { type: "typing" });
        return setTimeout(async () => {
          let volunteerOrgs = human.volunteer;
          let text = "";
          for (const org of volunteerOrgs) {
            text += `* ${org.organization} as ${org.position}\n\n`;
          }
          await bot.changeContext(message.reference);
          if (!Boolean(volunteerOrgs) || !volunteerOrgs.length) {
            return resolve(
              bot.reply(
                message,
                `My knowledge of volunteering activities is outdated 😕. Please find me on LinkedIn (${human.basics.profiles[1].url}) for the latest on me!`
              )
            );
          } else {
            return resolve(
              bot.reply(
                message,
                `Here's a look at the organizations I contributed as a volunteer previously:\n\n${text}`
              )
            );
          }
        }, 1000);
      });

      await typingPromise2(bot, message);
    }
  );

  // Bot hears education.
  controller.hears(
    [
      /\beducation\b/gi,
      /\bschool\b/gi,
      /\bstudied\b/gi,
      /\buniversity\b/gi,
      /\bcollege\b/gi,
      /\bdegree\b/gi,
    ],
    "message,direct_message",
    async (bot, message) => {
      // Gives short summary and prompt to ask more.
      const p0 = await new Promise(async (resolve) => {
        await bot.reply(message, { type: "typing" });
        return setTimeout(async () => {
          let institutions = human.education;
          let text = "";
          for (const institution of institutions) {
            text += `* ${institution.institution} - ${institution.studyType}, ${institution.area}\n\n`;
          }
          await bot.changeContext(message.reference);
          if (!Boolean(institutions) || !institutions.length) {
            return resolve(
              bot.reply(
                message,
                `My knowledge of education is outdated 😕. Please find me on LinkedIn (${human.basics.profiles[1].url}) for the latest on me!`
              )
            );
          } else {
            return resolve(
              bot.reply(
                message,
                `Here's a look at the institutions I have been:\n\n${text}`
              )
            );
          }
        }, 1000);
      });

      await typingPromise2(bot, message);
    }
  );

  // Bot hears languages.
  controller.hears(
    [/\blanguages\b/gi],
    "message,direct_message",
    async (bot, message) => {
      // Gives short summary and prompt to ask more.
      const p0 = await new Promise(async (resolve) => {
        await bot.reply(message, { type: "typing" });
        return setTimeout(async () => {
          let languages = human.languages;
          let languagesArr = [];
          for (const language of languages) {
            languagesArr.push(language.language);
          }
          await bot.changeContext(message.reference);
          if (!Boolean(languages) || !languages.length) {
            return resolve(
              bot.reply(
                message,
                `My knowledge of languages is outdated 😕. Please find me on LinkedIn (${human.basics.profiles[1].url}) for the latest on me!`
              )
            );
          } else {
            return resolve(
              bot.reply(message, `I can speak ${languagesArr.join(", ")}`)
            );
          }
        }, 1000);
      });

      await typingPromise2(bot, message);
    }
  );

  // Bot hears skills.
  controller.hears(
    [/\bskills\b/gi, /\btechnologies\b/gi, /\bknowledge\b/gi],
    "message,direct_message",
    async (bot, message) => {
      // Gives short summary and prompt to ask more.
      const p0 = await new Promise(async (resolve) => {
        await bot.reply(message, { type: "typing" });
        return setTimeout(async () => {
          let skills = human.skills;
          let skillsArr = [];
          for (const skill of skills) {
            skillsArr.push(skill.name);
          }
          await bot.changeContext(message.reference);
          if (!Boolean(skills) || !skills.length) {
            return resolve(
              bot.reply(
                message,
                `My knowledge of skills is outdated 😕. Please find me on LinkedIn (${human.basics.profiles[1].url}) for the latest on me!`
              )
            );
          } else {
            return resolve(
              bot.reply(message, `I have experience in ${skillsArr.join(", ")}`)
            );
          }
        }, 1000);
      });

      await typingPromise2(bot, message);
    }
  );

  // Bot hears references.
  controller.hears(
    [/\breference\b/gi, /\breferences\b/gi],
    "message,direct_message",
    async (bot, message) => {
      // Gives short summary and prompt to ask more.
      const p0 = await new Promise(async (resolve) => {
        await bot.reply(message, { type: "typing" });
        return setTimeout(async () => {
          let references = human.references;
          let text = "";
          for (const reference of references) {
            text += `* ${reference.name}\n\n`;
          }
          await bot.changeContext(message.reference);
          if (!Boolean(references) || !references.length) {
            return resolve(
              bot.reply(
                message,
                `My knowledge of references is outdated 😕. Please find me on LinkedIn (${human.basics.profiles[1].url}) for the latest on me!`
              )
            );
          } else {
            return resolve(
              bot.reply(
                message,
                `Please feel free to reach out to the following references which, have worked closely with me and can answer many of your questions:\n\n${text}`
              )
            );
          }
        }, 1000);
      });

      await typingPromise2(bot, message);
    }
  );

  // Bot hears interests.
  controller.hears(
    [/\binterests\b/gi, /\binterest\b/gi],
    "message,direct_message",
    async (bot, message) => {
      // Gives short summary and prompt to ask more.
      const p0 = await new Promise(async (resolve) => {
        await bot.reply(message, { type: "typing" });
        return setTimeout(async () => {
          let interests = human.interests;
          let interestsArr = [];
          for (const interest of interests) {
            interestsArr.push(interest.name);
          }
          await bot.changeContext(message.reference);
          if (!Boolean(interests) || !interests.length) {
            return resolve(
              bot.reply(
                message,
                `My knowledge of interests is outdated 😕. Please find me on LinkedIn (${human.basics.profiles[1].url}) for the latest on me!`
              )
            );
          } else {
            return resolve(
              bot.reply(
                message,
                `Some of my interests include ${interestsArr.join(", ")}`
              )
            );
          }
        }, 1000);
      });

      await typingPromise2(bot, message);
    }
  );

  // Bot hears publications.
  controller.hears(
    [/\bpublications\b/gi, /\bpublication\b/gi, /\bpapers\b/gi],
    "message,direct_message",
    async (bot, message) => {
      // Gives short summary and prompt to ask more.
      const p0 = await new Promise(async (resolve) => {
        await bot.reply(message, { type: "typing" });
        return setTimeout(async () => {
          let publications = human.publications;
          let text = "";
          for (const publication of publications) {
            text += `* ${publication.publisher}, ${publication.releaseDate}. ${publication.name}. Retrieved from ${publication.website}\n\n`;
          }
          await bot.changeContext(message.reference);
          if (!Boolean(publications) || !publications.length) {
            return resolve(
              bot.reply(
                message,
                `My knowledge of publications is outdated 😕. Please find me on LinkedIn (${human.basics.profiles[1].url}) for the latest on me!`
              )
            );
          } else {
            return resolve(
              bot.reply(message, `Some of my publications include:\n\n${text}`)
            );
          }
        }, 1000);
      });

      await typingPromise2(bot, message);
    }
  );

  // Bot hears awards.
  controller.hears(
    [/\bawards\b/gi, /\baward\b/gi],
    "message,direct_message",
    async (bot, message) => {
      // Gives short summary and prompt to ask more.
      const p0 = await new Promise(async (resolve) => {
        await bot.reply(message, { type: "typing" });
        return setTimeout(async () => {
          let awards = human.awards;
          let text = "";
          for (const award of awards) {
            text += `* ${award.title}\n\n`;
          }
          await bot.changeContext(message.reference);
          if (!Boolean(awards) || !awards.length) {
            return resolve(
              bot.reply(
                message,
                `My knowledge of awards is outdated 😕. Please find me on LinkedIn (${human.basics.profiles[1].url}) for the latest on me!`
              )
            );
          } else {
            return resolve(
              bot.reply(message, `Some of my awards include:\n\n${text}`)
            );
          }
        }, 1000);
      });

      await typingPromise2(bot, message);
    }
  );
}