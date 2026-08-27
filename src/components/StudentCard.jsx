function StudentCard({ student, onEdit, onDelete }) {
  return (
    <div className="student-card">
      <h3>{student.name}</h3>

      <p>
        <strong>Email:</strong> {student.email}
      </p>

      <p>
        <strong>Age:</strong> {student.age}
      </p>

      <p>
        <strong>Course:</strong> {student.course}
      </p>

      <p>
        <strong>Status:</strong> {student.status}
      </p>

      <button onClick={() => onEdit(student)}>
        Edit
      </button>

      <button onClick={() => onDelete(student._id)}>
        Delete
      </button>
    </div>
  );
}

export default StudentCard;