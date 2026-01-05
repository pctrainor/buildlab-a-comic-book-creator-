import React from 'react';
import { Image, FilePlus, Search } from 'lucide-react';

interface Asset {
  id: number;
  name: string;
  type: string;
}

const mockAssets: Asset[] = [
  { id: 1, name: 'Superhero.png', type: 'image' },
  { id: 2, name: 'Villain.png', type: 'image' },
  { id: 3, name: 'Cityscape.jpg', type: 'image' },
  { id: 4, name: 'SpeechBubble.svg', type: 'vector' },
  { id: 5, name: 'SoundEffect.mp3', type: 'audio' },
];

const Library: React.FC = () => {
  return (
    <div className="bg-gradient-to-bl from-zinc-800 to-slate-900 p-4 shadow-lg rounded-lg h-full">
      <div className="flex items-center mb-4">
        <Search className="w-6 h-6 text-white mr-2" />
        <input
          type="text"
          placeholder="Search assets..."
          className="bg-zinc-700 text-white w-full p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="flex items-center text-white hover:text-blue-400 transition-colors ml-4">
          <FilePlus className="w-6 h-6 mr-2" />
          Add Asset
        </button>
      </div>
      <ul className="space-y-2">
        {mockAssets.map((asset) => (
          <li
            key={asset.id}
            className="flex items-center p-2 bg-zinc-700 hover:bg-zinc-600 rounded-md transition-colors"
          >
            <Image className="w-6 h-6 text-white mr-2" />
            <span className="text-white">{asset.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Library;