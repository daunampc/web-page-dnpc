// components/CommentToast.tsx
import { Bell } from 'lucide-react';
import { Toast } from 'react-hot-toast';
import toast from 'react-hot-toast';

export default function CommentToast(t: Toast) {
  return (
    <div
      className={`${t.visible ? 'animate-toast-in' : 'animate-toast-out'
        } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
    >
      <div className="flex-1 w-0 p-4">
        <div className="flex items-center">
          <div className="flex-shrink-0 pt-0.5">
            <Bell size={30} className='text-blue-700' />
          </div>
          <div className="ml-3 flex-1">
            <p className="text-sm font-semibold text-gray-900">
              Có ai vừa trả lời bình luân của bạn
            </p>
            <p className="mt-1 text-sm text-gray-500">
              Sure! 8:30pm works great!
            </p>
          </div>
        </div>
      </div>
      <div className="flex border-l border-gray-200">
        <button
          onClick={() => toast.dismiss(t.id)}
          className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Close
        </button>
      </div>
    </div>
  );
}

