module.exports = {
    './src/**/*.{ts,tsx}': () => 'yarn type-check',
    './src/**/*.{js,jsx,ts,tsx}': ['yarn prettify', 'yarn lint', 'yarn stylelint'],
    './server/**/*.{js,ts}': ['yarn type-check', 'yarn prettify', 'yarn lint']
}