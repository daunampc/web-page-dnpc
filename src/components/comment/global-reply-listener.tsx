'use client';
import { useEffect } from 'react';
import { getSocket } from '@/lib/socket';
import { useAuth } from '@/context/AuthContext';
import { toast } from 'react-hot-toast';

export default function GlobalReplyListener() {
  const { user } = useAuth();

  useEffect(() => {
    if (!user?.user_id) return;
    const socket = getSocket();

    // tham gia room user_{userId}
    socket.emit('join-comment-reply-user', user.user_id);

    const onReply = (data: any) => {
      if (data.user_comment_parent_id === user.user_id) {
        toast(`Bạn có reply mới`, {
          icon: '💬',
          duration: 5000,
          position: 'top-right'
        });
      }

    };

    socket.on('reply-user-added', onReply);

    return () => {
      socket.off('reply-user-added', onReply);
    };
  }, [user?.user_id]);

  return null; // không render gì cả
}

