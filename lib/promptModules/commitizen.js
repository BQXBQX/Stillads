export default (api) => {
  api.injectFeature({
    name: "Commitizen",
    value: "commitizen",
    short: "Commitizen",
    description: "git commit code commit specification",
    link: "https://www.npmjs.com/package/commitizen",
    checked: false,
  });
};
