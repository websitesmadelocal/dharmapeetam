import emailjs from "@emailjs/browser";
import { useRef } from "react";

const ContactSection = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          console.error(error);
          alert("Failed to send message.");
        }
      );
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6">

        {/* LEFT SIDE SAME */}

        {/* RIGHT - FORM */}
        <div className="bg-lightBg p-6 rounded-xl shadow">

          <h3 className="text-xl font-heading text-primary mb-4">
            Send a Message
          </h3>

          <form ref={formRef} onSubmit={sendEmail} className="space-y-4">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 border rounded-md"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 border rounded-md"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="w-full p-3 border rounded-md"
            />

            <button
              type="submit"
              className="bg-accent text-white px-6 py-3 rounded-md w-full"
            >
              Submit
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;









//HOme hero section previous version 
const Hero = () => {
  return (
    <section className="relative w-full h-[70vh] sm:h-[75vh] md:h-[85vh] overflow-hidden">

      {/* Background Image */}
      <img
        // src="/assets/images/banners/banner-home.png"
           src="/assets/images/banners/team-banner.png"
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-6">

        <div className="w-full md:ml-auto md:max-w-xl text-white text-center md:text-left">

          {/* Heading */}
          <h1 className="font-heading leading-tight 
            text-2xl sm:text-3xl md:text-5xl 
            mb-4 md:mb-6">

            Legal Aid &{" "}
            <span className="text-accent">Education</span>
            <br />
            for a Better{" "}
            <span className="text-accent">Tomorrow</span>
          </h1>

          {/* Subtext */}
          <p className="text-xs sm:text-sm md:text-base text-gray-200 
            mb-5 md:mb-6 max-w-md md:max-w-full mx-auto md:mx-0">

            Providing Free Legal Assistance & Empowering Future Lawyers
          </p>

          {/* Button */}
          <button className="bg-accent text-white 
            px-5 sm:px-6 py-2.5 sm:py-3 
            rounded-md shadow-lg 
            hover:opacity-90 transition">

            Learn More
          </button>

        </div>

      </div>
    </section>
  );
};

export default Hero;