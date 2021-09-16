import io from 'socket.io-client';

const socket = io('http://localhost:3030');
export const emitBar = () => {
  socket.emit('bar');
};
