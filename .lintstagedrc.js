const path = require('path');

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand, 'yarn stylelint'],
  '*.{css,scss}': 'yarn stylelint',
  '*.{css,scss,js,jsx,ts,tsx,json,md}': 'yarn format',
};
