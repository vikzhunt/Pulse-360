import React from 'react';
import { BadgeCheck } from 'lucide-react';

const Dashboard = () => {
  const modules = [
    "Administration Center",
    "Audits Management",
    "Compliance Obligations",
    "Corrective Action (CAPA & SCAR)",
    "Critical Actions Tracker",
    "Delegation",
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800">All Modules</h1>
      <div className='min-h-[85vh] min-w-[80vw] border-2 border-gray-300 rounded-lg mt-4 px-8 py-2'>
        <p className="text-gray-600 mb-4 text-center">
          Report and address safety issues promptly to ensure a secure and compliant work environment.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module) => (
            <div
              key={module}
              className="flex items-center justify-between p-4 bg-white hover:bg-sky-100 shadow-md rounded-lg hover:shadow-lg transition"
            >
              <span className="text-gray-700 font-medium">{module}</span>
              <button className="text-xl">
                <BadgeCheck className="text-gray-400 hover:text-sky-500" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
