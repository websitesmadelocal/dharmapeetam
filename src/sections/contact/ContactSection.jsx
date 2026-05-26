import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const templateParams = {
        name,
        email,
        phone,
        message,
        time: new Date().toLocaleString(),
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE,
        import.meta.env.VITE_EMAILJS_TEMPLATE,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC
      );

      alert("Message sent successfully!");

      setName("");
      setEmail("");
      setPhone("");
      setMessage("");

    } catch (error) {
      console.log(error);
      alert("Failed to send message");
    }

    setLoading(false);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6">

        {/* LEFT */}

        <div>
          <h3 className="text-2xl font-heading text-primary mb-6">
            Contact Information
          </h3>

          <div className="space-y-6 text-textMuted">

            <div className="flex items-start gap-3">
              <MapPin className="text-accent mt-1" />
              <p>
                Flat No.4, PVC Nilayam
                <br />
                2nd Line JKC Nagar
                <br />
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

        {/* RIGHT */}

        <div className="bg-lightBg p-6 rounded-xl shadow">

          <h3 className="text-xl font-heading text-primary mb-4">
            Send a Message
          </h3>

          <form
            className="space-y-4"
            onSubmit={handleSubmit}
          >

            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              className="w-full p-3 rounded-md border outline-none"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="w-full p-3 rounded-md border outline-none"
              required
            />

            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e)=>setPhone(e.target.value)}
              className="w-full p-3 rounded-md border outline-none"
              required
            />

            <textarea
              rows="4"
              placeholder="Message"
              value={message}
              onChange={(e)=>setMessage(e.target.value)}
              className="w-full p-3 rounded-md border outline-none"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-accent text-white px-6 py-3 rounded-md w-full hover:opacity-90"
            >
              {loading ? "Sending..." : "Submit"}
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;