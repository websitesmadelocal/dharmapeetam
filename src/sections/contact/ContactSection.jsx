import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6">

        {/* LEFT - CONTACT INFO */}
        <div>

          <h3 className="text-2xl font-heading text-primary mb-6">
            Contact Information
          </h3>

          <div className="space-y-6 text-textMuted">

            <div className="flex items-start gap-3">
              <MapPin className="text-accent mt-1" />
              <p>
                Flat No. 4, PVC Nilayam,<br />
                2nd Line JKC Nagar,<br />
                Guntur - 522006
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="text-accent" />
              <p>94406 32117</p>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="text-accent" />
              <p>dharmapeetam4all@gmail.com</p>
            </div>

          </div>

        </div>

        {/* RIGHT - FORM */}
        <div className="bg-lightBg p-6 rounded-xl shadow">

          <h3 className="text-xl font-heading text-primary mb-4">
            Send a Message
          </h3>

          <form className="space-y-4">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-md border outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-md border outline-none"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 rounded-md border outline-none"
            ></textarea>

            <button className="bg-accent text-white px-6 py-3 rounded-md w-full">
              Submit
            </button>

          </form>

        </div>

      </div>

    </section>
  );
};

export default ContactSection;