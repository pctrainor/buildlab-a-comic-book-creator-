import React from 'react';
import { PlusCircle, Save, Trash2, FileText } from 'lucide-react';

const Toolbar: React.FC = () => {
  return (
    <div className="bg-gradient-to-bl from-zinc-800 to-slate-900 p-4 flex items-center justify-between shadow-lg rounded-lg">
      <button className="flex items-center text-white hover:text-blue-400 transition-colors">
        <PlusCircle className="w-6 h-6 mr-2" />
        Add Panel
      </button>
      <button className="flex items-center text-white hover:text-green-400 transition-colors">
        <Save className="w-6 h-6 mr-2" />
        Save
      </button>
      <button className="flex items-center text-white hover:text-red-400 transition-colors">
        <Trash2 className="w-6 h-6 mr-2" />
        Delete
      </button>
      <button className="flex items-center text-white hover:text-yellow-400 transition-colors">
        <FileText className="w-6 h-6 mr-2" />
        Export
      </button>
    </div>
  );
};

export default Toolbar;