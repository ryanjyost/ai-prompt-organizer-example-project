const promptA =
  "This is a prompt with {{promptsInOtherPrompts.superNestedObjectOfPrompts.top.middle.bottom.deepPrompt}}";
const promptB = "This is prompt b";

const superNestedObjectOfPrompts = {
  top: {
    middle: {
      bottom: {
        deepPrompt: "This is a deep prompt with {{promptsInOtherPrompts.promptB}}",
      },
    },
  },
};

// WARNING - THIS IS A CIRCULAR DEPENDENCY
const prompt1 = "{{prompt2}} and {{prompt3}}";
const prompt2 = "{{prompt1}} and {{prompt3}}";
const prompt3 = "{{prompt1}} and {{prompt2}}";

module.exports = {
  promptA,
  promptB,
  superNestedObjectOfPrompts,
  prompt1,
  prompt2,
  prompt3,
};
