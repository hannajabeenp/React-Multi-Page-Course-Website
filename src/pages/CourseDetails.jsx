import { useParams } from "react-router-dom";
import courses from "../data/courses";

function CourseDetails() {
  const { id } = useParams();

  const course = courses.find(
    (course) => course.id === Number(id)
  );

  if (!course) {
    return <h2>Course not found!</h2>;
  }

  return (
    <div className="course-details-page">
      <div className="course-details">
        <img
          src={course.image}
          alt={course.name}
          className="details-image"
        />

        <div className="details-content">
          <h1>{course.name}</h1>

          <p className="details-description">
            {course.description}
          </p>

          <p>
            <strong>Instructor:</strong> {course.instructor}
          </p>

          <p>
            <strong>Duration:</strong> {course.duration}
          </p>

          <p>
            <strong>Price:</strong> {course.price}
          </p>

          <h2>Course Modules</h2>

          <ul>
            {course.modules.map((module, index) => (
              <li key={index}>{module}</li>
            ))}
          </ul>

          <button className="enroll-btn">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;