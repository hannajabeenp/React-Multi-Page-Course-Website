import { useEffect, useState } from "react";

function StudentForm({ onStudentSaved, editingStudent, onCancelEdit }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    course: "",
    status: "Active",
  });

  useEffect(() => {
    if (editingStudent) {
      setFormData({
        name: editingStudent.name,
        email: editingStudent.email,
        age: editingStudent.age,
        course: editingStudent.course,
        status: editingStudent.status,
      });
    } else {
      setFormData({
        name: "",
        email: "",
        age: "",
        course: "",
        status: "Active",
      });
    }
  }, [editingStudent]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onStudentSaved({
      ...formData,
      age: Number(formData.age),
    });

    if (!editingStudent) {
      setFormData({
        name: "",
        email: "",
        age: "",
        course: "",
        status: "Active",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{editingStudent ? "Edit Student" : "Add Student"}</h2>

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <input
        type="number"
        name="age"
        placeholder="Age"
        value={formData.age}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="course"
        placeholder="Course"
        value={formData.course}
        onChange={handleChange}
        required
      />

      <select
        name="status"
        value={formData.status}
        onChange={handleChange}
      >
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>

      <button type="submit">
        {editingStudent ? "Update Student" : "Add Student"}
      </button>

      {editingStudent && (
        <button type="button" onClick={onCancelEdit}>
          Cancel
        </button>
      )}
    </form>
  );
}

export default StudentForm;