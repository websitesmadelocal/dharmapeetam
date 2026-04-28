import { Link } from "react-router-dom";

const AboutPreview = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">

        <div>
          <h2 className="text-3xl font-heading text-primary mb-4">
            About Dharmapeetam
          </h2>

          <p className="text-textMuted mb-6">
            Dharmapeetam is dedicated to providing free legal aid and awareness
            while empowering individuals through education and skill development.
          </p>

          <Link
            to="/about"
            className="bg-accent text-white px-6 py-3 rounded-md"
          >
            Read More
          </Link>
        </div>

        <div>
          <img
            src="/assets/images/about1.png"
            alt="About"
            className="rounded-xl"
          />
        </div>

      </div>
    </section>
  );
};

export default AboutPreview;