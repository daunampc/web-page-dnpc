import { io, Socket } from 'socket.io-client';

let socket: Socket | null = null;

export function getSocket(): Socket {
  if (!socket) {
    const WS_URL = process.env.NEXT_PUBLIC_WS_URL;
    if (!WS_URL) {
      throw new Error(
        'Missing NEXT_PUBLIC_WS_URL (must point to backend root, e.g. http://localhost:8080)'
      );
    }
    const SOCKET_PATH = process.env.NEXT_PUBLIC_SOCKET_PATH || '/socket.io';

    socket = io(WS_URL, {
      path: SOCKET_PATH,
      transports: ['websocket'],
      withCredentials: true,
    });

    socket.on('connect', () =>
      console.log('✅ Singleton socket connected', socket!.id)
    );
    socket.on('connect_error', (err) =>
      console.error('❌ Singleton socket connect_error', err.message)
    );
  }
  return socket;
}

