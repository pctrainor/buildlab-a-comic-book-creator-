import React, { useState } from 'react';
import { PlusCircle, FileText, Save, Trash2 } from 'lucide-react';

interface Panel {
  id: number;
  title: string;
  content: string;
}

const Editor: React.FC = () => {
  const [panels, setPanels] = useState<Panel[]>([
    { id: 1, title: 'Introduction', content: 'Once upon a time, in a far away land...' },
    { id: 2, title: 'Conflict', content: 'A great challenge emerged...' }
  ]);

  const addPanel = () => {
    const newPanel: Panel = {
      id: panels.length + 1,
      title: `Panel ${panels.length + 1}`,
      content: 'New content here...'
    };
    setPanels([...panels, newPanel]);
  };

  const deletePanel = (id: number) => {
    setPanels(panels.filter(panel => panel.id !== id));
  };

  const updatePanelContent = (id: number, content: string) => {
    setPanels(panels.map(panel => panel.id === id ? { ...panel, content } : panel));
  };

  return (
    <div className="p-6 bg-gradient-to-r from-zinc-800 to-slate-900 min-h-full">
      <h1 className="text-3xl font-bold mb-6">Comic Book Editor</h1>
      <div className="mb-4">
        <button className="button-primary" onClick={addPanel}>
          <PlusCircle className="inline-block mr-2" /> Add Panel
        </button>
      </div>
      <div className="space-y-4">
        {panels.map(panel => (
          <div key={panel.id} className="card">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-semibold">{panel.title}</h2>
              <button className="text-red-500 hover:text-red-600" onClick={() => deletePanel(panel.id)}>
                <Trash2 className="inline-block" />
              </button>
            </div>
            <textarea
              className="w-full p-2 bg-transparent border border-zinc-700 rounded-md text-white shadow-inner"
              value={panel.content}
              onChange={(e) => updatePanelContent(panel.id, e.target.value)}
              rows={4}
            />
          </div>
        ))}
      </div>
      <div className="mt-6">
        <button className="button-secondary">
          <Save className="inline-block mr-2" /> Save Changes
        </button>
      </div>
    </div>
  );
};

export default Editor;