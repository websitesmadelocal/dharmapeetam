import { useNavigate } from "react-router-dom";
import { CalendarDays, Users, Scale } from "lucide-react";

const QuickCards = () => {
  const navigate = useNavigate();

  const cards = [
    {
      title: "Current Events 2026",
      desc: "Stay Updated with Our Latest Activities",
      button: "View Events",
      icon: CalendarDays,
      action: () => navigate("/events"),
    },
    {
      title: "Our Programs",
      desc: "Skill Development & Leadership Initiatives",
      button: "Explore Programs",
      icon: Users,
      action: () => navigate("/programs"),
    },
    {
      title: "Legal Aid & Support",
      desc: "Free Legal Assistance for the Underprivileged",
      button: "Get Help Now",
      icon: Scale,
      action: () => navigate("/contact"),
    },
  ];

  return (
    <section className="relative z-20 -mt-20 pb-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 px-6">

        {cards.map((card, i) => {
          const Icon = card.icon;

          return (
            <div
              key={i}
              className="bg-cardBg p-6 rounded-xl shadow-lg border border-[#e6dccb]"
            >
              {/* Icon + Title */}
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-accent/10 p-2 rounded-md">
                  <Icon className="text-accent w-5 h-5" />
                </div>

                <h3 className="text-lg font-heading text-primary">
                  {card.title}
                </h3>
              </div>

              {/* Divider */}
              <div className="w-full h-[1px] bg-[#e6dccb] mb-3"></div>

              {/* Description */}
              <p className="text-textMuted text-sm mb-5">
                {card.desc}
              </p>

              {/* Button */}
              <button
                onClick={card.action}
                className="bg-accent text-white px-4 py-2 rounded-md text-sm flex items-center gap-2 hover:opacity-90 transition"
              >
                {card.button}
                <span>›</span>
              </button>
            </div>
          );
        })}

      </div>
    </section>
  );
};

export default QuickCards;