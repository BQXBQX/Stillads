class Creator {
  constructor() {
    (this.namePrompt = {
      name: "name",
      message: "What is the name of your project?",
      type: "input",
      default: "my-stillads-project",
    }),
      (this.featurePrompt = {
        name: "features",
        message: "Check the features needed for your project:",
        type: "checkbox",
        choices: [],
      }),
      (this.injectedPrompts = []);
  }

  getFinalPrompts() {
    this.injectedPrompts.forEach((prompt) => {
      const originalWhen = prompt.when || (() => true);
      prompt.when = (answers) => originalWhen(answers);
    });

    const prompts = [
      this.namePrompt,
      this.featurePrompt,
      ...this.injectedPrompts,
    ];

    return prompts;
  }
}

export default Creator;
