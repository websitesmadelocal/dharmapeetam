import { useEffect, useState } from "react";
import {
  X,
  Calendar,
  BookOpen,
  Clock,
  Monitor,
} from "lucide-react";

import { fetchPopupEvents } from "../services/eventsService";

const PopupModal = () => {
  const [show, setShow] = useState(false);
  const [popupData, setPopupData] = useState(null);

  useEffect(() => {
    const loadPopup = async () => {
      try {
        const data = await fetchPopupEvents();

        const popupItem = data.find(
          (item) =>
            item.show_popup &&
            item.show_popup.trim().toLowerCase() === "true"
        );

        if (popupItem) {
          setPopupData(popupItem);

          setTimeout(() => {
            setShow(true);
          }, 2000);
        }
      } catch (err) {
        console.error("Popup error:", err);
      }
    };

    loadPopup();
  }, []);

  if (!show || !popupData) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/70 flex justify-center items-center p-4">

      <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl max-w-xl w-full animate-[fadeIn_.3s_ease]">

        {/* Close Button */}
        <button
  onClick={() => setShow(false)}
  className="absolute top-3 right-3 bg-white rounded-full p-2 shadow z-20 hover:bg-gray-100 cursor-pointer"
>
  <X size={18} />
</button>

        {/* Image */}
       <img
  src={popupData.popup_image}
  alt={popupData.popup_title}
  className="w-full h-60 md:h-72 object-cover"
  onError={(e) => {
    e.currentTarget.onerror = null; // stop loop
    console.log("Image failed:", popupData.popup_image);

    e.currentTarget.src =
      "/assets/images/hero.jpg";
  }}
/>

        {/* Content */}
        <div className="p-6">

          <h2 className="text-2xl font-heading text-primary mb-2">
            {popupData.popup_title}
          </h2>

          <p className="text-textMuted mb-5">
            {popupData.popup_description} 
          </p>

          {/* Details */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mb-6">

            <div className="flex items-center gap-2">
              <Calendar size={16}/>
              <span>
                Registration:{" "}
                {popupData.registration_starts}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <BookOpen size={16}/>
              <span>
                Classes Begin:{" "}
                {popupData.classes_begin}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Clock size={16}/>
              <span>
                Duration:{" "}
                {popupData.duration}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Clock size={16}/>
              <span>
                Sessions:{" "}
                {popupData.sessions}
              </span>
            </div>

            <div className="flex items-center gap-2 md:col-span-2">
              <Monitor size={16}/>
              <span>
                Mode:{" "}
                {popupData.mode}
              </span>
            </div>

          </div>

          {/* Register Button */}

          <a
            href={popupData.google_form}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center w-full bg-accent text-white py-3 rounded-lg hover:opacity-90 transition"
          >
            Register Now
          </a>

        </div>
      </div>

    </div>
  );
};

export default PopupModal;