import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { ClinicalDataPoint } from '../types';

// Mock data based on the image
const glucoseData: ClinicalDataPoint[] = [
  { name: '0', control: 100, experimental: 100 },
  { name: '30', control: 160, experimental: 130 },
  { name: '60', control: 150, experimental: 115 },
  { name: '90', control: 130, experimental: 105 },
  { name: '120', control: 110, experimental: 100 },
];

export const ClinicalChart: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mx-auto">
      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
        <h4 className="text-center font-bold text-pine-800 mb-4">혈당 변화 그래프 (Blood Glucose)</h4>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={glucoseData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
              <XAxis dataKey="name" label={{ value: '시간 (분)', position: 'insideBottom', offset: -5 }} tick={{fontSize: 12}} />
              <YAxis tick={{fontSize: 12}} domain={[80, 180]} />
              <Tooltip 
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
              />
              <Legend verticalAlign="top" height={36}/>
              <Line type="monotone" dataKey="control" name="대조군" stroke="#ef4444" strokeWidth={3} dot={{r: 4}} activeDot={{r: 6}} />
              <Line type="monotone" dataKey="experimental" name="솔잎증류농축액" stroke="#10b981" strokeWidth={3} dot={{r: 4}} activeDot={{r: 6}} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
         <h4 className="text-center font-bold text-pine-800 mb-4">혈당 곡선 면적 (AUC)</h4>
         <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={glucoseData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
              <XAxis dataKey="name" tick={{fontSize: 12}} label={{ value: '시간 (분)', position: 'insideBottom', offset: -5 }} />
              <YAxis tick={{fontSize: 12}} hide />
              <Tooltip />
              <Legend verticalAlign="top" height={36} />
              <Area type="monotone" dataKey="control" name="대조군 면적" stackId="1" stroke="#ef4444" fill="#ef4444" fillOpacity={0.6} />
              <Area type="monotone" dataKey="experimental" name="실험군 면적" stackId="2" stroke="#10b981" fill="#10b981" fillOpacity={0.6} />
            </AreaChart>
          </ResponsiveContainer>
         </div>
      </div>
    </div>
  );
};
