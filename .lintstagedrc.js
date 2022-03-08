module.exports = {
    'frontend/src/**/*.{ts,tsx}': () => 'yarn type-check',
    'frontend/src/**/*.{js,jsx,ts,tsx}': ['yarn prettify', 'yarn lint', 'yarn stylelint'],
    'server/**/*.js': ['yarn prettify', 'yarn lint'],
}