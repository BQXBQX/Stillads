class Creator {
  constructor () {
    this.featurePrompt = {
      name: 'features',
      message: 'Check the features needed for your project:',
      type: 'checkbox',
      choices: []
    }

    this.injectedPrompts = []
  }

  getFinalPrompts () {
    this.injectedPrompts.forEach((prompt) => {
      const originalWhen = prompt.when || (() => true)
      prompt.when = (answers) => originalWhen(answers)
    })

    const prompts = [this.featurePrompt, ...this.injectedPrompts]

    return prompts
  }
}

export default Creator
