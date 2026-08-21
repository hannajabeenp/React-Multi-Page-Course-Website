import { Link } from "react-router-dom";
import courses from "../data/courses";
import CourseCard from "../components/CourseCard";

function Home() {
  const featuredCourses = courses.slice(0, 3);

  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <h1>Learn New Skills. Build Your Future.</h1>

          <p>
            Explore our online courses and learn the skills you need
            to grow your career.
          </p>

          <Link to="/courses" className="hero-btn">
            View Courses
          </Link>
        </div>
      </section>

      <section className="intro">
        <h2>Welcome to LearnHub</h2>

        <p>
          LearnHub provides practical and beginner-friendly courses
          to help you develop new skills and achieve your goals.
        </p>
      </section>

      <section className="featured">
        <h2>Featured Courses</h2>

        <div className="course-grid">
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        <Link to="/courses" className="view-all-btn">
          View All Courses
        </Link>
      </section>
    </div>
  );
}

export default Home;