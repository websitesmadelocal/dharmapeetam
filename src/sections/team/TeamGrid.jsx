const team = [
  {
    img: "sasi-kiran.jpeg",
    name: "Sasi Kiran",
    designation: "President",
  },
  {
    img: "praharshitha.jpeg",
    name: "Praharshitha",
    designation: "Vice President",
  },
  {
    img: "santhosh-kumar.png",
    name: "Santhosh Kumar",
    designation: "Secretary",
  },
  {
    img: "srinivasa-rao.jpeg",
    name: "Srinivasa Rao",
    designation: "Joint Secretary",
  },
  {
    img: "santosh.jpeg",
    name: "Santosh Kumar Chamarthi",
    designation: "Executive Member",
  },
  {
    img: "sindhu.jpeg",
    name: "Sindhu",
    designation: "Executive Member",
  },
];

const TeamGrid = () => {
  return (
    <section className="py-20 bg-lightBg">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

          {team.map((member, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-5 text-center"
            >

              <img
                src={`/assets/images/${member.img}`}
                alt={member.name}
                className="w-28 h-28 object-cover rounded-full mx-auto mb-4"
              />

              <h3 className="font-heading text-primary text-lg">
                {member.name}
              </h3>

              <p className="text-sm text-textMuted">
                {member.designation}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default TeamGrid;