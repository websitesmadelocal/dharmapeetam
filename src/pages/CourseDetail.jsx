import { useParams, useNavigate } from "react-router-dom";
import { courses } from "../data/courses";

const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const course = courses.find((c) => c.id === id);

  if (!course) {
    return <div className="p-10 text-center">Course not found</div>;
  }

  return (
    <div>

      {/* Banner */}
      <div className="relative h-[250px] md:h-[300px]">
        <img
          src={course.img}
          alt={course.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-4xl font-heading">
            {course.title}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left: Text */}
          <div>
            <h2 className="text-2xl font-heading text-primary mb-4">
              Course Overview
            </h2>

            <p className="text-textMuted leading-relaxed mb-6">
              {course.fullDesc}
            </p>

            <button
              onClick={() => navigate("/contact")}
              className="bg-accent text-white px-6 py-3 rounded-md hover:opacity-90 transition"
            >
              Enquire Now
            </button>
          </div>

          {/* Right: Image */}
          <div>
            <img
              src={course.img}
              alt={course.title}
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>

        </div>

      </div>

    </div>
  );
};

export default CourseDetail;