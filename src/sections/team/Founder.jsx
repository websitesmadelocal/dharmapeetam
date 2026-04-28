const profiles = [
  {
    name: "Dr. S. Chandra Sekhar",
    role: "Founder of Dharmapeetam",
    img: "/assets/images/founder.png",
    bio: `The Founder of Dharmapeetam has been a front runner in providing legal services, legal awareness and legal training programmes for common people and law aspirants. His journey from journalism to academia has influenced many lives. Currently serving as a Faculty of Law at Dr. B. R. Ambedkar Department of Legal Studies, ANU.`,
    email: "scs32117@gmail.com",
    linkedin: "https://linkedin.com/in/dr-siriboina-chandra-sekhar-03bb671a2"
  },
  {
    name: "Mr. Abhilash Gopinathan",
    role: "Executive Member",
    img: "/assets/images/executive-abhilash.png", // add this image
    bio: `A versatile professional with experience in teaching, training, and recruitment. He has worked across schools, colleges, universities, and professional levels. Known as a counsellor, motivator, and analyst, he builds strong rapport with students and professionals alike.`,
    email: "abhilashgpn@gmail.com",
    linkedin: "https://linkedin.com/in/abhilash-gopinathan-93200050"
  }
];

const Founder = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

        {profiles.map((person, i) => (
          <div
            key={i}
            className="bg-lightBg p-6 rounded-xl shadow-md"
          >
            {/* Image */}
            <div className="w-full aspect-square overflow-hidden rounded-lg mb-4">
              <img
                src={person.img}
                alt={person.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <h3 className="text-sm text-accent mb-1">
              {person.role}
            </h3>

            <h2 className="text-xl font-heading text-primary mb-3">
              {person.name}
            </h2>

            <p className="text-textMuted text-sm mb-4 leading-relaxed">
              {person.bio}
            </p>

            {/* Contact */}
            <div className="text-sm space-y-1">
              <p>
                📧{" "}
                <a
                  href={`mailto:${person.email}`}
                  className="text-accent hover:underline"
                >
                  {person.email}
                </a>
              </p>

              <p>
                🔗{" "}
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  LinkedIn Profile
                </a>
              </p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Founder;