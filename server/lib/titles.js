const titles = ['One title', 'Two title', 'Three title', 'Four title'];

getTitle = () => {
    const idx = Math.floor(Math.random() * titles.length);
    return titles[idx];
};

module.exports = getTitle;
