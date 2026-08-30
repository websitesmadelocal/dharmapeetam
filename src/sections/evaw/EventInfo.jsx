import {
  FileText,
  MessageSquare,
  Scale,
  Calendar,
  Clock,
  MapPin,
  Users,
} from "lucide-react";

const competitions = [
  {
    icon: <FileText size={32} />,
    title: "Article Writing",
    description:
      "Showcase your legal research and writing skills by presenting original ideas on the event theme.",
  },
  {
    icon: <MessageSquare size={32} />,
    title: "Debate",
    description:
      "Compete in a structured debate that develops advocacy, reasoning, and persuasive communication.",
  },
  {
    icon: <Scale size={32} />,
    title: "Moot Court",
    description:
      "Experience courtroom advocacy through simulated legal proceedings before a panel.",
  },
];

const EventInfo = () => {
  return (
    <section className="py-20 bg-lightBg">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-14">

          <p className="text-accent uppercase tracking-[0.25em] mb-3">
            Event Overview
          </p>

          <h2 className="font-heading text-4xl text-primary mb-4">
            National Legal Competitions
          </h2>

          <p className="max-w-3xl mx-auto text-textMuted leading-8">
            Dharmapeetam proudly presents the
            <strong> Elimination of Violence Against Women (EVAW)</strong>
            competitions to encourage legal awareness, advocacy, research,
            and leadership among students.
          </p>

        </div>

        {/* Event Highlights */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">

          <div className="bg-white rounded-xl shadow p-6 text-center">
            <Calendar className="mx-auto text-accent mb-3" />
            <h3 className="font-semibold text-primary">Date</h3>
            <p className="text-textMuted">25 November 2026</p>
          </div>

          <div className="bg-white rounded-xl shadow p-6 text-center">
            <Clock className="mx-auto text-accent mb-3" />
            <h3 className="font-semibold text-primary">Time</h3>
            <p className="text-textMuted">09:00 AM</p>
          </div>

          <div className="bg-white rounded-xl shadow p-6 text-center">
            <MapPin className="mx-auto text-accent mb-3" />
            <h3 className="font-semibold text-primary">Venue</h3>
            <p className="text-textMuted">To be Announced</p>
          </div>

          <div className="bg-white rounded-xl shadow p-6 text-center">
            <Users className="mx-auto text-accent mb-3" />
            <h3 className="font-semibold text-primary">Eligibility</h3>
            <p className="text-textMuted">Law Students</p>
          </div>

        </div>

        {/* Competitions */}

        <div className="grid md:grid-cols-3 gap-8">

          {competitions.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 transition duration-300"
            >

              <div className="text-accent mb-5">
                {item.icon}
              </div>

              <h3 className="font-heading text-2xl text-primary mb-4">
                {item.title}
              </h3>

              <p className="text-textMuted leading-7">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default EventInfo;