const objectOfPrompts = {
  helloWorld: "Hello World!",
  topLevelPrompt: "This is a top level prompt.",
  Level1Prompts: {
    level1Prompt: "This is a level 1 prompt.",
    Level2Prompts: {
      level2Prompt: "This is a level 2 prompt.",
    },
  },
};

const promptWithInputs = `
  This prompt has two inputs: {{inputs.one}} and {{inputs.two}}
`;

module.exports = { ...objectOfPrompts, promptWithInputs };
