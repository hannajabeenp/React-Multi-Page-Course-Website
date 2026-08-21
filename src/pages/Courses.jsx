import courses from "../data/courses";
import CourseCard from "../components/CourseCard";

function Courses() {
  return (
    <div className="courses-page">
      <section className="page-header">
        <h1>Our Courses</h1>
        <p>Explore our courses and choose the right one for you.</p>
      </section>

      <section className="courses-section">
        <div className="course-grid">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Courses;