import React from 'react';

const DashboardContent = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-2 bg-blue-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold">Items Requiring Action</h3>
          <ul className="mt-4 space-y-2">
            <li className="bg-blue-200 p-2 rounded">Overdue cases: 9</li>
            <li className="bg-blue-200 p-2 rounded">Contractor Insurance Expiring: 5</li>
            <li className="bg-blue-200 p-2 rounded">Resident Info Requests: 5</li>
            <li className="bg-blue-200 p-2 rounded">Overdue Maintenance: 343</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold">Weather</h3>
          <p className="text-5xl">5°C</p>
          <p className="text-gray-500">Mostly clear</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold">Important Numbers</h3>
          <p className="text-2xl">Emergency Contact: 911</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold">Management Reports Generated</h3>
          <ul className="mt-4 space-y-2">
            <li className="flex justify-between">
              <span>Report 1</span>
              <button className="text-blue-500">Download</button>
            </li>
            <li className="flex justify-between">
              <span>Report 2</span>
              <button className="text-blue-500">Download</button>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold">Latest Work Orders Sent</h3>
          <ul className="mt-4 space-y-2">
            <li>ABC Maintenance: Sent on 14/10/2018</li>
            <li>Imina: Sent on 14/10/2018</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold">Activity Feed</h3>
          <ul className="mt-4 space-y-2">
            <li>10:15 am: New case added</li>
            <li>9:45 am: Duplicate case</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
