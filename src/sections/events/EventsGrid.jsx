import { useEffect, useState } from "react";
import { fetchEvents } from "../../services/eventsService";
import { useNavigate } from "react-router-dom";

const EventsGrid = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    fetchEvents().then((data) => {
      setEvents(data);
      setLoading(false);
    });
  }, []);

  // Take first event as header reference
  const month = events?.[0]?.month;
  const year = events?.[0]?.year;

  return (
    <section className="py-20 bg-lightBg">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header (TOP OF GRID) */}
        {!loading && (month || year) && (
          <div className="mb-10 flex items-baseline gap-3">
            {month && (
              <h2 className="text-3xl font-bold text-primary">
                {month}
              </h2>
            )}
            {year && (
              <span className="text-lg text-textMuted font-medium">
                {year}
              </span>
            )}
          </div>
        )}

        {/* Loading */}
        {loading && (
          <p className="text-center text-textMuted">
            Loading events...
          </p>
        )}

        {/* Grid */}
        {!loading && events.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {events.map((event, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow hover:shadow-lg transition border border-[#e6dccb] p-5 flex flex-col justify-between"
              >

                {/* Title */}
                {event.title && (
                  <h3 className="font-heading text-primary text-lg mb-2">
                    {event.title}
                  </h3>
                )}

                {/* Course */}
                {event.course && (
                  <p className="text-sm text-textMuted mb-3">
                    {event.course}
                  </p>
                )}

                {/* Pricing */}
                {(event.original_fee || event.discounted_fee) && (
                  <p className="text-sm mb-2">
                    {event.original_fee && (
                      <span className="text-gray-500 mr-2">
                        <span style={{ textDecoration: "line-through" }}>
                          ₹{event.original_fee}
                        </span>
                      </span>
                    )}

                    {event.discounted_fee && (
                      <span className="text-accent font-bold text-base">
                        ₹{event.discounted_fee}
                      </span>
                    )}
                  </p>
                )}

                {/* Offer */}
                {(event.offer_type || event.offer_condition) && (
                  <p className="text-xs text-textMuted mb-2">
                    {event.offer_type}
                    {event.offer_type && event.offer_condition && " - "}
                    {event.offer_condition}
                  </p>
                )}

                {/* Mode */}
                {event.mode && (
                  <p className="text-xs text-textMuted mb-4">
                    Mode: {event.mode}
                  </p>
                )}

                {/* CTA */}
                <button
                  onClick={() => navigate("/contact")}
                  className="bg-accent text-white px-4 py-2 rounded-md text-sm w-full"
                >
                  {event.cta || "Enroll Now"}
                </button>

              </div>
            ))}

          </div>
        )}

        {/* Empty */}
        {!loading && events.length === 0 && (
          <p className="text-center text-textMuted">
            No events available
          </p>
        )}

      </div>
    </section>
  );
};

export default EventsGrid;