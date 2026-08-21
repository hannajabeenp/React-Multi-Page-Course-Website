function About() {
  return (
    <div className="about-page">
      <section className="page-header">
        <h1>About LearnHub</h1>
        <p>Learn more about our company and what we do.</p>
      </section>

      <section className="about-content">
        <div className="about-card">
          <h2>About the Company</h2>
          <p>
            LearnHub is an online learning platform that helps students
            develop practical skills through simple and beginner-friendly
            courses.
          </p>
        </div>

        <div className="about-card">
          <h2>Our Mission</h2>
          <p>
            Our mission is to make quality education accessible and help
            learners build the skills they need for their future careers.
          </p>
        </div>

        <div className="about-card">
          <h2>What We Provide</h2>
          <p>
            We provide practical courses, experienced instructors,
            flexible learning, and useful projects to help students
            improve their skills.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;