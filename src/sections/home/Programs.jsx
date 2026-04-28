import programsData from "../../data/programs.json";
import { Link } from "react-router-dom";

const Programs = () => {

  const topPrograms = programsData.slice(0, 3);

  return (
    <section className="py-20 bg-lightBg">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-heading text-primary mb-10">
          Our Programs
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {topPrograms.map((program) => (
            <div
              key={program.id}
              className="bg-white rounded-xl shadow p-4 flex flex-col h-full"
            >
              <img
                src={program.image}
                alt={program.title}
                className="rounded-md mb-4"
              />

              {/* Push text to bottom */}
              <h3 className="font-semibold mt-auto">
                {program.title}
              </h3>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link
            to="/programs"
            className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
          >
            Learn More <span className="text-lg">→</span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Programs;