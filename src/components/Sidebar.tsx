import React from 'react';
import { Layers, Image, FilePlus } from 'lucide-react';

interface Layer {
  id: number;
  name: string;
}

interface Asset {
  id: number;
  name: string;
  type: string;
}

const Sidebar: React.FC = () => {
  const layers: Layer[] = [
    { id: 1, name: 'Background' },
    { id: 2, name: 'Characters' },
    { id: 3, name: 'Foreground' },
  ];

  const assets: Asset[] = [
    { id: 1, name: 'Character1.png', type: 'image' },
    { id: 2, name: 'Background1.jpg', type: 'image' },
  ];

  return (
    <div className="w-64 bg-gradient-to-br from-zinc-800 to-slate-900 p-4 shadow-lg rounded-lg">
      <div className="mb-6">
        <h2 className="text-white text-lg font-semibold mb-2 flex items-center">
          <Layers className="w-5 h-5 mr-2" />
          Layers
        </h2>
        <ul className="text-gray-300">
          {layers.map((layer) => (
            <li key={layer.id} className="mb-1">
              {layer.name}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-white text-lg font-semibold mb-2 flex items-center">
          <Image className="w-5 h-5 mr-2" />
          Assets
        </h2>
        <ul className="text-gray-300">
          {assets.map((asset) => (
            <li key={asset.id} className="mb-1">
              {asset.name}
            </li>
          ))}
        </ul>
      </div>

      <button className="mt-6 flex items-center text-white hover:text-blue-400 transition-colors">
        <FilePlus className="w-6 h-6 mr-2" />
        Add Asset
      </button>
    </div>
  );
};

export default Sidebar;