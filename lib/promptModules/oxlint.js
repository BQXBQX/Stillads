export default (api) => {
  api.injectFeature({
    name: "Oxlint",
    value: "oxlint",
    short: "oxlint",
    description: "Check and enforce code quality with Oxlint",
    link: "https://oxc-project.github.io/",
    checked: false,
  });

  // api.injectPrompt({
  //   name: "eslintConfig",
  //   when: (answers) => answers.features.includes("linter"),
  //   type: "list",
  //   message: "Pick a linter / formatter config:",
  //   description:
  //     "Checking code errors and enforcing an homogeoneous code style is recommended.",
  //   choices: () => [
  //     {
  //       name: "ESLint + Airbnb config",
  //       value: "airbnb",
  //       short: "Airbnb",
  //     },
  //     {
  //       name: "ESLint + Standard config",
  //       value: "standard",
  //       short: "Standard",
  //     },
  //   ],
  // });

  // api.injectPrompt({
  //   name: "lintOn",
  //   message: "Pick additional lint features:",
  //   when: (answers) => answers.features.includes("linter"),
  //   type: "checkbox",
  //   choices: [
  //     {
  //       name: "Lint on save",
  //       value: "save",
  //       checked: true,
  //     },
  //     {
  //       name: "Lint and fix on commit",
  //       value: "commit",
  //     },
  //   ],
  // });
};
