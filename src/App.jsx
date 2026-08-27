import { useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import {
  addStudent,
  updateStudent,
} from "./services/studentApi";

function App() {
  const [editingStudent, setEditingStudent] = useState(null);
  const [refresh, setRefresh] = useState(0);

  const handleStudentSaved = async (studentData) => {
    try {
      if (editingStudent) {
        await updateStudent(editingStudent._id, studentData);
        alert("Student updated successfully.");
        setEditingStudent(null);
      } else {
        await addStudent(studentData);
        alert("Student added successfully.");
      }

      setRefresh((previous) => previous + 1);
    } catch (error) {
      console.error(error);
      alert("Failed to save student.");
    }
  };

  const handleEdit = (student) => {
    setEditingStudent(student);
  };

  const handleCancelEdit = () => {
    setEditingStudent(null);
  };

  return (
    <div>
      <h1>Student Management System</h1>

      <StudentForm
        onStudentSaved={handleStudentSaved}
        editingStudent={editingStudent}
        onCancelEdit={handleCancelEdit}
      />

      <StudentList
        onEdit={handleEdit}
        refresh={refresh}
      />
    </div>
  );
}

export default App;