const AboutContent = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-2xl md:text-3xl font-heading text-primary mb-4">
          About Dharmapeetam
        </h2>

        <div className="w-14 h-[2px] bg-accent mb-6"></div>

        <p className="text-textMuted text-sm md:text-base mb-4 leading-relaxed">
          Dharmapeetam is a dedicated initiative committed to strengthening legal
          awareness, education, and professional development in society. With a vision
          to bridge the gap between theoretical legal knowledge and practical application,
          Dharmapeetam focuses on nurturing future legal professionals while empowering
          individuals with essential legal understanding.
        </p>

        <p className="text-textMuted text-sm md:text-base mb-4 leading-relaxed">
          Through structured courses, mentorship programs, seminars, and awareness
          initiatives, we aim to create a platform where students, aspiring lawyers,
          and the general public can access reliable legal guidance. Our approach combines
          academic excellence with real-world insights, ensuring that learners are
          well-equipped to face professional challenges.
        </p>

        <p className="text-textMuted text-sm md:text-base mb-4 leading-relaxed">
          Dharmapeetam strongly believes that legal education is not limited to classrooms.
          It is a powerful tool for social transformation. By promoting ethical practices,
          critical thinking, and community engagement, we strive to build a legally aware
          and responsible society.
        </p>

        <p className="text-textMuted text-sm md:text-base leading-relaxed">
          Our mission extends beyond teaching law — we aim to inspire confidence, develop
          leadership, and create opportunities for individuals to grow both professionally
          and socially. With experienced mentors and a commitment to quality education,
          Dharmapeetam continues to make a meaningful impact in the field of legal learning.
        </p>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="bg-lightBg p-5 rounded-lg">
            <h4 className="font-heading text-primary mb-1">
              Legal Education
            </h4>
            <p className="text-sm text-textMuted">
              Structured and practical learning programs
            </p>
          </div>

          <div className="bg-lightBg p-5 rounded-lg">
            <h4 className="font-heading text-primary mb-1">
              Skill Development
            </h4>
            <p className="text-sm text-textMuted">
              Real-world legal training and guidance
            </p>
          </div>

          <div className="bg-lightBg p-5 rounded-lg">
            <h4 className="font-heading text-primary mb-1">
              Community Impact
            </h4>
            <p className="text-sm text-textMuted">
              Legal awareness initiatives for society
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutContent;