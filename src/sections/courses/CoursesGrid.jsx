import { useNavigate } from "react-router-dom";
import { courses } from "../../data/courses";

const CoursesGrid = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 md:py-20 bg-lightBg">

      {/* Heading */}
      <div className="text-center mb-12 px-6">
        <h2 className="text-2xl md:text-3xl font-heading text-primary mb-2">
          Our Courses
        </h2>

        <p className="text-textMuted max-w-xl mx-auto text-sm md:text-base">
          Empowering future legal professionals through structured training
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">

        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden border border-[#e6dccb]"
          >

            {/* Image */}
            <div className="h-48 overflow-hidden">
              <img
                src={course.img}
                alt={course.title}
                className="w-full h-full object-cover hover:scale-105 transition duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-5">

              <h3 className="font-heading text-primary text-lg mb-2">
                {course.title}
              </h3>

              <p className="text-textMuted text-sm mb-4">
                {course.desc}
              </p>

              {/* Button */}
              <button
                onClick={() => navigate(`/courses/${course.id}`)}
                className="bg-accent text-white px-4 py-2 rounded-md text-sm hover:opacity-90 transition"
              >
                Learn More
              </button>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default CoursesGrid;