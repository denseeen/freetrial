"use client";

import { useState } from 'react';

export default function FreeTrialForm() {
  const [rows, setRows] = useState(Array(5).fill({ fullName: '', email: '', department: '', position: '' }));

  const addRow = () => {
    setRows([...rows, { fullName: '', email: '', department: '', position: '' }]);
  };

  const deleteRow = (index) => {
    setRows(rows.filter((_, i) => i !== index));
  };
  

  return (
    <div className="h-screen overflow-hidden bg-gradient-to-br from-blue-100 to-white flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-xl p-3 w-full max-w-xl flex flex-col items-center">
        {/* <h1 className="text-4xl font-bold text-center text-blue-400 mb-3">i-NEO</h1> */}

        <div className="flex items-center mb-6 w-full">
  <div className="flex-grow border-t border-black"></div>
  <img
    src="/images/logo.png"
    alt="Logo"
    className="h-16 border border-black rounded-full mx-4"
  />
  <div className="flex-grow border-t border-black"></div>
    </div>

        <form className="space-y-3 w-full">
          {/* Domain Name & Company Name */}
         
            {/* ... existing input fields ... */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
                <label className="block mb-1 text-xs font-medium text-gray-700">Company Name</label>
                <input
                  type="text"
                  placeholder="Your company name"
                  className="w-full px-2 py-1 text-xs text-black border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block mb-1 text-xs font-medium text-gray-700">Email</label>
                <input
                  type="text"
                  placeholder="Email"
                  className="w-full px-2 py-1 text-xs text-black border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block mb-1 text-xs font-medium text-gray-700">Contact Number</label>
                <input
                  type="tel"
                  placeholder="0912 345 6789"
                  className="w-full px-2 py-1 text-xs text-black border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
          </div>

          {/* Person in Charge & Contact Number */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* ... existing input fields ... */}
              <div>
                <label className="block mb-1 text-xs font-medium text-gray-700">Person in Charge</label>
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full px-2 py-1 text-xs text-black border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block mb-1 text-xs font-medium text-gray-700">Domain Name</label>
                <input
                  type="text"
                  placeholder="e.g. yourdomain.dneoph.com"
                  className="w-full px-2 py-1 text-xs text-black border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
          </div>

          {/* User Details Table */}
<div>
  <label className="block mb-1 text-xs font-medium text-gray-700">User Details</label>
  <div className="overflow-x-auto">
    <div
      className={`${
        rows.length > 5 ? 'max-h-50 overflow-y-auto' : ''
      } border border-gray-300 rounded-md`}
    >
      <table className="table-fixed w-full text-xs text-left text-gray-700 border-collapse">
      <thead className="bg-blue-100 text-gray-700 sticky top-0">
  <tr>
    <th className="w-1/4 px-2 py-1 border border-gray-300">Full Name</th>
    <th className="w-1/4 px-2 py-1 border border-gray-300">Email</th>
    <th className="w-1/4 px-2 py-1 border border-gray-300">Department</th>
    <th className="w-1/4 px-2 py-1 border border-gray-300">Position</th>
  </tr>
</thead>

<tbody>
  {rows.map((_, i) => (
    <tr key={i} className="bg-white">
      <td className="px-2 py-1 border border-gray-300">
        <input type="text" placeholder="Full Name" className="w-full border-none px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-400" />
      </td>
      <td className="px-2 py-1 border border-gray-300">
        <input type="email" placeholder="Email" className="w-full border-none px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-400" />
      </td>
      <td className="px-2 py-1 border border-gray-300">
        <input type="text" placeholder="Department" className="w-full border-none px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-400" />
      </td>
      <td className="px-2 py-1 border border-gray-300">
        <input type="text" placeholder="Position" className="w-full border-none px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-400" />
      </td>
    </tr>
  ))}
</tbody>

      </table>
    </div>
    <div className="flex gap-3 mt-2 text-xs">
  <button
    type="button"
    onClick={addRow}
    className="text-blue-500 font-medium hover:underline"
  >
    + Add Row
  </button>
  <button
    type="button"
    onClick={() => {
      if (rows.length > 5) {
        setRows(rows.slice(0, -1));
      }
    }}
    className="text-red-500 font-medium hover:underline"
  >
    − Delete Row
  </button>
</div>

  </div>
</div>

 {/* Submit Button */}
 <button
            type="submit"
            className="w-full bg-blue-400 text-white text-xs font-semibold py-1.5 rounded-md hover:bg-blue-600 transition"
          >
            Start Free Trial
          </button>
        </form>
      </div>
    </div>
  );
}
