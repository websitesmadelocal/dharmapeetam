import { Link } from "react-router-dom";

const courses = [
  "UG / PG Law",
  "AIBE",
  "Legal Skill Development",
  "AI in Law",
  "Drafting Skills",
  "Guidance Programs",
];

const Courses = () => {
  return (
    <section className="py-16 md:py-20 bg-lightBg">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-heading text-primary mb-2">
            Our Courses
          </h2>
          <div className="w-14 h-[2px] bg-accent mx-auto mb-4"></div>
          <p className="text-textMuted max-w-xl mx-auto text-sm md:text-base">
            Empowering future legal professionals through structured training
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow border border-[#e6dccb]"
            >
              <h3 className="font-heading text-primary text-lg">
                {course}
              </h3>
            </div>
          ))}
        </div>

        {/* CTA - Read More */}
        <div className="text-center mt-10">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
          >
            Read More <span className="text-lg">→</span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Courses;