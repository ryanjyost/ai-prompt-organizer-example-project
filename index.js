import path from "path";
import * as url from "url";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
import PromptOrganizer from "ai-prompt-organizer";

// optional config and init, these are the defaults
const config = {
  source: path.join(__dirname, "prompts"),
  debug: true,
};
PromptOrganizer.init(config);

async function runExample() {
  console.log("TEST", PromptOrganizer.get("promptsInOtherPrompts.promptA"));
  return;
  /* Get and prompt */
  PromptOrganizer.get("helloWorld");
  // "Hello World!"

  /* Input variables */
  PromptOrganizer.use(`The inputs are {{inputs.one}} and {{inputs.two}}`, {
    one: "ONE VALUE",
    two: "TWO VALUE",
  });
  // "The inputs are ONE VALUE and TWO VALUE"

  PromptOrganizer.get("promptWithInputs", {
    one: "ONE VALUE",
    two: "TWO VALUE",
  });
  // "This prompt has two inputs: ONE VALUE and TWO VALUE"

  /* Access nested prompts via dot notation */
  PromptOrganizer.get("topLevelPrompt");
  // "This is a top level prompt."

  PromptOrganizer.get("Level1Prompts.level1Prompt");
  // "This is a level 1 prompt."

  PromptOrganizer.get("Level1Prompts.Level2Prompts.level2Prompt");
  // "This is a level 2 prompt."

  /* Access any prompt inside of another prompt */
  PromptOrganizer.use(
    `{{partials.reusableGreeting}}! My name is Ryan. I am {{constants.age}} years old. {{Level1Prompts.Level2Prompts.level2Prompt}} The current time is {{inputs.currentTimestamp}}.
  `,
    { currentTimestamp: Date.now() }
  );
  // "Hello Chat GPT! My name is Ryan. I am 30 years old. This is a level 2 prompt. The current time is *insert timestamp here*"".

  const inputs = { question: "Why do zebras have stripes?", age: 10 };
  PromptOrganizer.get("fullPrompt", inputs);
  // Hi GPT! I have a question.
  // Why do zebras have stripes?
  // Write your response in the style of Mr. Rogers
  // IMPORTANT! Make your response appropriate for someone who is 10 years old.
  // Age is 10
  // Pi is 3.14

  PromptOrganizer.get("defaultExportIsPrompt");
  // This is theoretically a super long prompt (maybe as long as all the decimals in pi (3.14...)

  //  So you may want a whole file dedicated to just this prompt.

  console.log(PromptOrganizer.get("promptsInOtherPrompts.promptA"));
}

runExample();
