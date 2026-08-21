import { Link } from "react-router-dom";

function CourseCard({ course }) {
  return (
    <div className="course-card">
      <img src={course.image} alt={course.name} />

      <div className="course-content">
        <h3>{course.name}</h3>

        <p>{course.description}</p>

        <p>
          <strong>Duration:</strong> {course.duration}
        </p>

        <p>
          <strong>Price:</strong> {course.price}
        </p>

        <Link to={`/courses/${course.id}`} className="details-btn">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default CourseCard;