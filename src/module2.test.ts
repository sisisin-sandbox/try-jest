const mockSocket = jest.fn();
jest.mock('socket.io-client', () => () => ({ emit: mockSocket }));
const { emitBar } = require('./module2');

test('emitted', () => {
  emitBar();
  expect(mockSocket).toBeCalledWith('bar');
});
