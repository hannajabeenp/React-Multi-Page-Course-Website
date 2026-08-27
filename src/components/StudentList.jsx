import { useEffect, useState } from "react";
import StudentCard from "./StudentCard";
import Loading from "./Loading";
import {
  getStudents,
  deleteStudent,
} from "../services/studentApi";

function StudentList({ onEdit, refresh }) {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState("");

  const fetchStudents = async () => {
    try {
      setLoading(true);
      setError(false);

      const response = await getStudents();
      setStudents(response.data);
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, [refresh]);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      await deleteStudent(id);
      fetchStudents();
    } catch (error) {
      console.error(error);
      alert("Failed to delete student.");
    }
  };

  const filteredStudents = students.filter((student) => {
    const searchText = search.toLowerCase();

    return (
      student.name.toLowerCase().includes(searchText) ||
      student.email.toLowerCase().includes(searchText) ||
      student.course.toLowerCase().includes(searchText)
    );
  });

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>Failed to load students.</p>;
  }

  return (
    <div>
      <h2>Student List</h2>

      <input
        type="text"
        placeholder="Search by name, email or course"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredStudents.length === 0 ? (
        <p>No students found.</p>
      ) : (
        filteredStudents.map((student) => (
          <StudentCard
            key={student._id}
            student={student}
            onEdit={onEdit}
            onDelete={handleDelete}
          />
        ))
      )}
    </div>
  );
}

export default StudentList;