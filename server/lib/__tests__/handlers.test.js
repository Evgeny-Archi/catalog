const handlers = require('../handlers');

test('Home page render', () => {
    const req = {};
    const res = { send: jest.fn() };
    handlers.home(req, res);
    expect(res.send.mock.calls[0][0]).toEqual({ message: 'asd' });
});
