import React, { useState, useEffect } from 'react';
import { UserPlus, UserMinus, RefreshCw } from 'lucide-react';
import 'tailwindcss/tailwind.css';

interface User {
  id: number;
  name: string;
}

const mockUsers: User[] = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
];

const Collaboration: React.FC = () => {
  const [users, setUsers] = useState<User[]>(mockUsers);
  const [connectedUsers, setConnectedUsers] = useState<User[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomUser = users[Math.floor(Math.random() * users.length)];
      setConnectedUsers((prev) =>
        prev.find((u) => u.id === randomUser.id)
          ? prev.filter((u) => u.id !== randomUser.id)
          : [...prev, randomUser]
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [users]);

  return (
    <div className="p-4 bg-gradient-to-b from-zinc-800 to-slate-900 shadow-lg rounded-lg">
      <h2 className="text-xl font-bold text-white mb-4">Collaboration</h2>
      <div className="flex items-center space-x-2 mb-4">
        <RefreshCw className="text-white" />
        <span className="text-sm text-zinc-300">Real-time updates every 3 seconds</span>
      </div>
      <div className="space-y-2">
        {users.map((user) => (
          <div
            key={user.id}
            className={`flex items-center justify-between p-2 rounded-md ${
              connectedUsers.find((u) => u.id === user.id)
                ? 'bg-green-600'
                : 'bg-zinc-700'
            }`}
          >
            <span className="text-white">{user.name}</span>
            {connectedUsers.find((u) => u.id === user.id) ? (
              <UserMinus className="text-red-500" />
            ) : (
              <UserPlus className="text-green-500" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collaboration;