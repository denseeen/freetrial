"use client";

import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../../script/firebaseConfig"; // Import Firestore
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

  const [isLoading, setIsLoading] = useState(false);

  const [formFields, setFormFields] = useState({
    companyName: "",
    email: "",
    contactNumber: "",
    personinCharge: "",
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

  const handleStartFreeTrial = async () => {
  if (!isFormValid()) {
    setError(
      "Please fill out all required fields and ensure at least 5 complete user entries."
    );
    return;
  }

  try {
    setError("");
    setIsLoading(true); // Start loading here

    // 1. Add the main trial document
    const trialRef = await addDoc(collection(db, "trial"), {
      companyName: formFields.companyName,
      email: formFields.email,
      contact: formFields.contactNumber,
      personinCharge: formFields.personinCharge,
      domainName: formFields.domainName,
      createdAt: new Date()
    });

    // 2. Add userDetails subcollection
    const userDetailsPromises = rows.map((user) =>
      addDoc(collection(db, `trial/${trialRef.id}/userDetails`), {
        fullName: user.fullName,
        email: user.email,
        department: user.department,
        position: user.position
      })
    );

    await Promise.all(userDetailsPromises);

    // 3. Optionally send email
    const templateParams = {
      company_name: formFields.companyName,
      to_email: formFields.email,
      contact_number: formFields.contactNumber,
      person_in_charge: formFields.personinCharge,
      domain_name: formFields.domainName
    };

    await emailjs.send(
      'service_ni86v39',
      'template_ifezn7h',
      templateParams,
      '8nV8GppQ82RWajpEo'
    );

    // 4. Optional delay before redirect (e.g., to show loading spinner)
    setTimeout(() => {
      router.push("/success");
    }); // Delay for 3 seconds

  } catch (err) {
    console.error("Submission failed:", err?.message || err);
    setError("Something went wrong. Please try again.");
    setIsLoading(false); // Stop loading on error
  }
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
    <div className="min-h-screen py-5 bg-gradient-to-br from-blue-100 to-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-lg rounded-xl p-4 w-full max-w-4xl md:p-6 lg:p-8">
        {/* <h1 className="text-4xl font-bold text-center text-blue-400 mb-3">i-NEO</h1> */}

        <div className="flex items-center mb-6 w-full">
          <div className="flex-grow border-t border-black"></div>
          <img
            src="/images/final-logo.png"
            alt="Logo"
            className="h-16 border border-black mx-4"
          />
          <div className="flex-grow border-t border-black"></div>
        </div>

        <form className="space-y-3 w-full">
          {error && <p className="text-red-500 text-xs">{error}</p>}
          {/* Domain Name & Company Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries({
            companyName: "Company Name",
            email: "Email",
            contactNumber: "Contact Number",
            personinCharge: "Person in Charge",
            domainName: "Preferred Domain Name",
          }).map(([key, label]) => (
            <div key={key} className="text-gray-700">
              <label className="block text-sm font-medium text-black mb-1">{label}</label>
              <input
                type="text"
                placeholder={label}
                value={formFields[key]}
                onChange={(e) => handleFieldChange(key, e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          ))}
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
                <div className="overflow-x-auto">
          <table className="min-w-full text-sm border">
            <thead>
              <tr className="bg-blue-300">
                <th className="px-2 py-1 border">Full Name</th>
                <th className="px-2 py-1 border">Email</th>
                <th className="px-2 py-1 border">Department</th>
                <th className="px-2 py-1 border">Position</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index}>
                  {['fullName', 'email', 'department', 'position'].map((field) => (
                    <td key={field} className="px-2 py-1 border">
                      <input
  type="text"
  placeholder={
    field === 'fullName'
      ? 'Full Name'
      : field === 'email'
      ? 'Email'
      : field === 'department'
      ? 'Department'
      : 'Position'
  }
  value={row[field]}
  onChange={(e) => handleInputChange(index, field, e.target.value)}
  className="w-full px-1 py-1 text-xs text-gray-700 border border-gray-300 rounded"
/>

                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          </div>
                
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

              <div className="flex flex-wrap md:flex-nowrap items-center justify-between mt-2 gap-2">
  <label className="text-xs text-gray-400">
    (Download the Excel file and fill it out if you have more than 5 users.)
  </label>
  <button
    type="button"
    onClick={() => setShowConfirm(true)}
    className="text-indigo-700 hover:underline text-xs"
  >
    ✕ Clear All Fields
  </button>
</div>

              <div className="flex gap-2 text-xs mt-2">
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
      {/* Loading Modal */}
      {isLoading && (
        <div className="fixed inset-0 z-50 bg-black/70 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center">
            <div className="w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-lg font-semibold text-blue-400">Redirecting to form...</p>
          </div>
        </div>
      )}
    </div>
  );
}
