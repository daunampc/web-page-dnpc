// components/TimeAgo.tsx
import { useMemo } from 'react';
import { differenceInCalendarDays, differenceInHours, differenceInMinutes } from 'date-fns';

interface TimeAgoProps {
  date: string | number | Date;
}

export default function TimeAgo({ date }: TimeAgoProps) {
  const display = useMemo(() => {
    const now = new Date();
    const d = new Date(date);

    const diffDays = differenceInCalendarDays(now, d);
    const diffHours = differenceInHours(now, d);
    const diffMinutes = differenceInMinutes(now, d);

    if (diffDays === 0) {
      // Cùng ngày
      if (diffHours > 0) {
        return `${diffHours} giờ trước`;
      }
      if (diffMinutes > 0) {
        return `${diffMinutes} phút trước`;
      }
      return 'Vừa xong';
    }

    if (diffDays === 1) {
      return 'Hôm qua';
    }

    if (diffDays <= 7) {
      // Dưới 1 tuần thì vẫn dùng X ngày trước
      return `${diffDays} ngày trước`;
    }

    // Trên 1 tuần thì hiển thị ngày cụ thể
    return d.toLocaleDateString('vi-VN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  }, [date]);

  return <span className='text-slate-400 text-xs'>{display}</span>;
}

