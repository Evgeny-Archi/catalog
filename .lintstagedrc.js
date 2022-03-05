module.exports = {
    'frontend/src/**/*.{ts,tsx}': () => 'yarn type-check',
    'frontend/src/**/*.{js,jsx,ts,tsx}': ['yarn prettify', 'yarn lint', 'yarn stylelint'],
    'server/**/*': () => ['yarn type-check', 'yarn lint'],
}