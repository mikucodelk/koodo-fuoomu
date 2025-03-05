export default {
  '**/*.{js,ts}': ['eslint --fix', 'prettier --write'],
  '**/*.{scss,css}': ['stylelint --fix', 'prettier --write'],
  '**/*.vue': ['eslint --fix', 'stylelint --fix', 'prettier --write'],
  '**/*.{html,json,md}': ['prettier --write']
}
