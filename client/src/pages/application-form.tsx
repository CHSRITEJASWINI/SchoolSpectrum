import { useState } from "react";

export default function ApplicationForm() {
  const [form, setForm] = useState({
    fullName: "",
    fatherName: "",
    motherName: "",
    dob: "",
    gender: "",
    email: "",
    phone: "",
    address: "",
    classApplied: "",
    prevSchool: "",
    file: null,
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({ ...form, [name]: files ? files[0] : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.keys(form).forEach((key) => {
      formData.append(key, form[key]);
    });

    const res = await fetch("http://localhost:5000/api/apply", {
      method: "POST",
      body: formData,
    });

    if (res.ok) setSuccess(true);
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-xl">
      <h1 className="text-2xl font-bold mb-6 text-center">🏫 School Admission Form</h1>

      {success && <p className="bg-green-200 p-3 rounded">✅ Submitted Successfully!</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="fullName" placeholder="Full Name"
          className="w-full border p-2 rounded" required onChange={handleChange} />

        <input type="text" name="fatherName" placeholder="Father's Name"
          className="w-full border p-2 rounded" required onChange={handleChange} />

        <input type="text" name="motherName" placeholder="Mother's Name"
          className="w-full border p-2 rounded" required onChange={handleChange} />

        <input type="date" name="dob"
          className="w-full border p-2 rounded" required onChange={handleChange} />

        <select name="gender" className="w-full border p-2 rounded" required onChange={handleChange}>
          <option value="">-- Select Gender --</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>

        <input type="email" name="email" placeholder="Email"
          className="w-full border p-2 rounded" required onChange={handleChange} />

        <input type="tel" name="phone" placeholder="Phone Number"
          className="w-full border p-2 rounded" required onChange={handleChange} />

        <textarea name="address" placeholder="Address"
          className="w-full border p-2 rounded" required onChange={handleChange} />

        <select name="classApplied" className="w-full border p-2 rounded" required onChange={handleChange}>
          <option value="">-- Class Applying For --</option>
          <option>Nursery</option>
          <option>1st Class</option>
          <option>5th Class</option>
          <option>10th Class</option>
        </select>

        <input type="text" name="prevSchool" placeholder="Previous School (if any)"
          className="w-full border p-2 rounded" onChange={handleChange} />

        <input type="file" name="file" className="w-full border p-2 rounded"
          accept=".pdf,.jpg,.jpeg,.png" onChange={handleChange} />

        <button type="submit"
          className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Submit Application
        </button>
      </form>
    </div>
  );
}
