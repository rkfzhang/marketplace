import { useState } from 'react';
import { SimpleGraph } from '../simpleGraph';



const priceData = [
  { date: '2023-01-01', value: 2.9 },
  { date: '2023-06-01', value: 3.2 },
  { date: '2023-07-01', value: 3.4 },
  { date: '2023-10-01', value: 3.2 },
  { date: '2024-01-01', value: 3.0 },
  { date: '2024-06-01', value: 3.2 },
  { date: '2024-07-01', value: 3.5 },
  { date: '2024-10-01', value: 3.4 },
];

const priceTitle = "Price per sqft"

const occupencyData = [
  { date: '2023-01-01', value: 0.56 },
  { date: '2023-06-01', value: 0.7 },
  { date: '2023-07-01', value: 0.9 },
  { date: '2023-10-01', value: 0.89 },
  { date: '2024-01-01', value: 0.7},
  { date: '2024-06-01', value: 0.8 },
  { date: '2024-07-01', value: 0.9 },
  { date: '2024-10-01', value: 0.95 },
];

const occupencyTitle = "Occupency Rate"


export const ContentView = () => {
  const [activeTab, setActiveTab] = useState('graph');

  const tabClasses = (tab: string) =>
    `px-4 py-2 rounded-t-md text-sm font-medium ${
      activeTab === tab ? 'bg-white border-t border-l border-r' : 'bg-gray-200'
    }`;

  return (
    <div className='content-view-wrapper'>
        <div className="w-full mt-0">
        {/* Tabs */}
        <div className="flex space-x-2 border-b border-gray-300">
            <button onClick={() => setActiveTab('graph')} className={tabClasses('graph')}>
            History
            </button>
            <button onClick={() => setActiveTab('placeholder')} className={tabClasses('placeholder')}>
            Placeholder
            </button>
        </div>

        {/* Content */}
        <div className="bg-white border border-gray-300 p-4 rounded-b-md">
            {activeTab === 'graph' && (
            <div className="space-y-4">
                <SimpleGraph data={priceData} yLabel={priceTitle}/>
                <SimpleGraph data={occupencyData} yLabel={occupencyTitle}/>
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

