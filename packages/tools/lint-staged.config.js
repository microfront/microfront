module.exports = {
  '*.{js,jsx,json,md}': [
    'prettier --config prettier.config.js --write',
    'git add',
  ],
  '*.{ts,tsx}': [
    'prettier --config prettier.config.js --write',
    'tslint -c tslint.json --fix',
    'git add',
  ],
};
