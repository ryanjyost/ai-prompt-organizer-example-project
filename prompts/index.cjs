const objectOfPrompts = {
  important: "IMPORTANT!",
  helloWorld: "Hello World!",
  topLevelPrompt: "This is a top level prompt.",
  Level1Prompts: {
    level1Prompt: "This is a level 1 prompt.",
    Level2Prompts: {
      level2Prompt: "This is a level 2 prompt.",
    },
  },
  greetings: {
    hello: "Hi GPT!",
    poseQuestion: "I have a question.",
  },
  respondInStyle: "Write your response in the style of",
  writingStyles: {
    mobster: "a mobster from the 1920s",
    celebs: {
      misterRogers: "Mr. Rogers",
    },
  },
  ageAppropriate:
    "{{important}} Make your response appropriate for someone who is {{inputs.age}} years old.",
  fullPrompt: `
    {{greetings.hello}} {{greetings.poseQuestion}}
    {{inputs.question}}
    {{respondInStyle}} {{writingStyles.celebs.misterRogers}}
    {{ageAppropriate}}
    Age is {{inputs.age}}
    Pi is {{constants.pi}}
`,
};

const promptWithInputs = `
  This prompt has two inputs: {{inputs.one}} and {{inputs.two}}
`;

const promptThatUsesOtherPrompts = `
  {{helloWorld}}
  {{Level1Prompts.level1Prompt}}
  {{partials.reusableGreeting}}
  {{constants.age}}
`;

module.exports = {
  ...objectOfPrompts,
  promptWithInputs,
  promptThatUsesOtherPrompts,
};
