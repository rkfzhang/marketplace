import { useState } from 'react';

export const ContentView = () => {
  const [activeTab, setActiveTab] = useState('graph');

  const tabClasses = (tab: string) =>
    `px-4 py-2 rounded-t-md text-sm font-medium ${
      activeTab === tab ? 'bg-white border-t border-l border-r' : 'bg-gray-200'
    }`;

  return (
    <div className='content-view-wrapper'>
        <div className="w-full mt-10">
        {/* Tabs */}
        <div className="flex space-x-2 border-b border-gray-300">
            <button onClick={() => setActiveTab('graph')} className={tabClasses('graph')}>
            Value History
            </button>
            <button onClick={() => setActiveTab('placeholder')} className={tabClasses('placeholder')}>
            Placeholder
            </button>
        </div>

        {/* Content */}
        <div className="bg-white border border-gray-300 p-4 rounded-b-md">
            {activeTab === 'graph' && (
            <div className="h-64 flex items-center justify-center text-gray-500">
                PLACEHOLDER FOR GRAPH
            </div>
            )
            }
            {activeTab === 'placeholder' && (
            <div>CONTENT PLACEHOLDER</div>
            )}
        </div>
        </div>
    </div>
  );
};

