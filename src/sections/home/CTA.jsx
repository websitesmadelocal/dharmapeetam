import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-16 bg-primary text-white text-center">

      <h2 className="text-3xl font-heading mb-4">
        Get Personalized Guidance
      </h2>

      <Link
        to="/contact"
        className="bg-accent px-6 py-3 rounded-md"
      >
        Contact Us
      </Link>

    </section>
  );
};

export default CTA;