"use client";

import emailjs from '@emailjs/browser';
import { useState, useRef } from "react";
import * as XLSX from "xlsx";
import { useRouter } from "next/navigation";

export default function FreeTrialForm() {
  const createEmptyRow = () => ({
    fullName: "",
    email: "",
    department: "",
    position: "",
  });

  const [rows, setRows] = useState(
    Array.from({ length: 5 }, () => createEmptyRow())
  );

  const fileInputRef = useRef(null);

  const router = useRouter();

  const [formFields, setFormFields] = useState({
    companyName: "",
    email: "",
    contactNumber: "",
    personInCharge: "",
    domainName: "",
  });
  const [error, setError] = useState("");

  const addRow = () => {
    setRows([
      ...rows,
      { fullName: "", email: "", department: "", position: "" },
    ]);
  };

  const [showConfirm, setShowConfirm] = useState(false);

  const deleteRow = (index) => {
    setRows(rows.filter((_, i) => i !== index));
  };

  // const downloadExcel = () => {
  //   const worksheet = XLSX.utils.json_to_sheet(rows);
  //   const workbook = XLSX.utils.book_new();
  //   XLSX.utils.book_append_sheet(workbook, worksheet, "UserDetails");

  //   XLSX.writeFile(workbook, "UserDetails.xlsx");
  // };
  const handleInputChange = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;
    setRows(updatedRows);
  };

  const handleFieldChange = (field, value) => {
    setFormFields((prevFields) => ({
      ...prevFields,
      [field]: value,
    }));
  };

  const isFormValid = () => {
    const allFormFieldsFilled = Object.values(formFields).every(
      (field) => field.trim() !== ""
    );

    const completeRows = rows.filter(
      (row) =>
        row.fullName.trim() !== "" &&
        row.email.trim() !== "" &&
        row.department.trim() !== "" &&
        row.position.trim() !== ""
    );

    return (
      allFormFieldsFilled &&
      completeRows.length >= 5 &&
      completeRows.length === rows.length
    );
  };

  const handleStartFreeTrial = () => {
  if (!isFormValid()) {
    setError(
      "Please fill out all required fields and ensure at least 5 complete user entries."
    );
    return;
  }

  setError("");

  const templateParams = {
  company_name: formFields.companyName,
  to_email: formFields.email,  // use the key your EmailJS template expects for recipient
  contact_number: formFields.contactNumber,
  person_in_charge: formFields.personInCharge,
  domain_name: formFields.domainName,
};

  emailjs
    .send(
       'service_df18cj1',     // e.g. 'service_abc123'
      'template_sr5q1os',    // e.g. 'template_xyz456'
      templateParams,
      '8nV8GppQ82RWajpEo'       // e.g. 'user_abc123'
    )
    .then(
      (result) => {
        console.log('Email sent:', result.text);
        router.push("/success");
      },
      (error) => {
        console.error('Email failed:', error.text);
        setError("Failed to send email. Please try again.");
      }
    );
};


  const handleExport = () => {
    const headers = ["Full Name", "Email", "Department", "Position"];
    const data = rows.map((row) => [
      row.fullName || "",
      row.email || "",
      row.department || "",
      row.position || "",
    ]);
    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...data]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "UserDetails");
    XLSX.writeFile(workbook, "UserDetails.xlsx");
  };

  const handleImport = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });

      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      const [, ...dataRows] = jsonData; // skip header row
      const newRows = dataRows.map(
        ([fullName, email, department, position]) => ({
          fullName: fullName || "",
          email: email || "",
          department: department || "",
          position: position || "",
        })
      );

      if (newRows.length > 0) {
        setRows(newRows);
      }
    };

    reader.readAsArrayBuffer(file);
  };

  const handleClearForm = () => {
    setRows(Array.from({ length: 5 }, () => createEmptyRow()));

    if (fileInputRef.current) {
      fileInputRef.current.value = null; // clear the file input
    }
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
          {error && <p className="text-red-500 text-xs">{error}</p>}
          {/* Domain Name & Company Name */}
          <div className="flex justify-end -mt-7">
            <button
              type="button"
              onClick={() => (window.location.href = "/")}
              className="text-xs flex items-center space-x-1"
              title="Go back"
            >
              <span className="text-black">🡠</span>
              <span className="text-blue-500 hover:text-blue-700">Back</span>
            </button>
          </div>

          {/* ... existing input fields ... */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block mb-1 text-xs font-medium text-gray-700">
                Company Name
              </label>
              <input
                type="text"
                placeholder="Your company name"
                value={formFields.companyName}
                onChange={(e) =>
                  handleFieldChange("companyName", e.target.value)
                }
                className="w-full px-2 py-1 text-xs text-black border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block mb-1 text-xs font-medium text-gray-700">
                Email
              </label>
              <input
                type="text"
                placeholder="Email"
                value={formFields.email}
                onChange={(e) => handleFieldChange("email", e.target.value)}
                className="w-full px-2 py-1 text-xs text-black border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block mb-1 text-xs font-medium text-gray-700">
                Contact Number
              </label>
              <input
                type="tel"
                placeholder="0912 345 6789"
                value={formFields.contactNumber}
                onChange={(e) =>
                  handleFieldChange("contactNumber", e.target.value)
                }
                className="w-full px-2 py-1 text-xs text-black border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          {/* Person in Charge & Contact Number */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* ... existing input fields ... */}
            <div>
              <label className="block mb-1 text-xs font-medium text-gray-700">
                Person in Charge
              </label>
              <input
                type="text"
                placeholder="Full name"
                value={formFields.personInCharge}
                onChange={(e) =>
                  handleFieldChange("personInCharge", e.target.value)
                }
                className="w-full px-2 py-1 text-xs text-black border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block mb-1 text-xs font-medium text-gray-700">
                Preferred Domain Name
              </label>
              <input
                type="text"
                placeholder="e.g. yourdomain.dneoph.com"
                value={formFields.domainName}
                onChange={(e) =>
                  handleFieldChange("domainName", e.target.value)
                }
                className="w-full px-2 py-1 text-xs text-black border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          {/* User Details Table */}
          <div>
            <span>
              <label className="mb-2 text-xs font-medium text-gray-700">
                User Details (minimum of 5.)
              </label>
            </span>
            <div className="overflow-x-auto">
              <div
                className={`${
                  rows.length > 5 ? "max-h-50 overflow-y-auto" : ""
                } border border-gray-300 rounded-md`}
              >
                <table className="table-fixed w-full text-xs text-left text-gray-700 border-collapse">
                  <thead className="bg-blue-100 text-gray-700 sticky top-0">
                    <tr>
                      <th className="w-1/4 px-2 py-1 border border-gray-300">
                        Full Name
                      </th>
                      <th className="w-1/4 px-2 py-1 border border-gray-300">
                        Email
                      </th>
                      <th className="w-1/4 px-2 py-1 border border-gray-300">
                        Department
                      </th>
                      <th className="w-1/4 px-2 py-1 border border-gray-300">
                        Position
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {rows.map((row, i) => (
                      <tr key={i} className="bg-white">
                        <td className="px-2 py-1 border border-gray-300">
                          <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full border-none px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-400"
                            value={row.fullName}
                            onChange={(e) =>
                              handleInputChange(i, "fullName", e.target.value)
                            }
                          />
                        </td>
                        <td className="px-2 py-1 border border-gray-300">
                          <input
                            type="email"
                            placeholder="Email"
                            className="w-full border-none px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-400"
                            value={row.email}
                            onChange={(e) =>
                              handleInputChange(i, "email", e.target.value)
                            }
                          />
                        </td>
                        <td className="px-2 py-1 border border-gray-300">
                          <input
                            type="text"
                            placeholder="Department"
                            className="w-full border-none px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-400"
                            value={row.department}
                            onChange={(e) =>
                              handleInputChange(i, "department", e.target.value)
                            }
                          />
                        </td>
                        <td className="px-2 py-1 border border-gray-300">
                          <input
                            type="text"
                            placeholder="Position"
                            className="w-full border-none px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-400"
                            value={row.position}
                            onChange={(e) =>
                              handleInputChange(i, "position", e.target.value)
                            }
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/* <div className="flex gap-3 mt-2 text-xs">
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
        
              

        </div> */}

              <div className="flex items-center justify-between mt-2">
                <label className="text-xs text-gray-400">
                  (Download the Excel file and fill it out if you have more than
                  5 users.)
                </label>
                <button
                  type="button"
                  onClick={() => setShowConfirm(true)}
                  className="text-indigo-700 font-medium hover:underline text-xs mt-1"
                >
                  ✕ Clear All Fields
                </button>
              </div>
              <div className="flex gap-2 text-xs">
                <button
                  onClick={handleExport}
                  type="button"
                  className="text-indigo-500 font-medium hover:underline"
                >
                  ↓ Download Excel
                </button>

                {/* Excel Import Input */}
                <label className="text-indigo-500 font-medium hover:underline cursor-pointer">
                  ↑ Upload Excel
                  <input
                    type="file"
                    accept=".xlsx, .xls, .csv"
                    onChange={handleImport}
                    ref={fileInputRef}
                    className="hidden"
                  />
                </label>
              </div>
            </div>
          </div>

          {showConfirm && (
            <div className="fixed inset-0 bg-black/70 bg-opacity-30 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg shadow-lg p-6 w-72 text-center">
                <h2 className="text-sm font-semibold text-gray-800 mb-4">
                  Are you sure you want to clear all the fields?
                </h2>
                <div className="flex justify-center gap-4">
                  <button
                    onClick={() => {
                      handleClearForm();
                      setShowConfirm(false);
                    }}
                    className="bg-red-500 text-white px-4 py-1 text-sm rounded hover:bg-red-600"
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => setShowConfirm(false)}
                    className="bg-gray-300 text-gray-700 px-4 py-1 text-sm rounded hover:bg-gray-400"
                  >
                    No
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="button"
            onClick={handleStartFreeTrial}
            disabled={!isFormValid()}
            className={`w-full mt-4 px-4 py-2 text-white text-sm font-medium rounded-md ${
              isFormValid()
                ? "bg-blue-500 hover:bg-blue-600"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Start Free Trial
          </button>
        </form>
      </div>
    </div>
  );
}
