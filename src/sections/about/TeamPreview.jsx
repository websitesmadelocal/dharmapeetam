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

const TeamPreview = () => {
  return (
    <section className="py-20 bg-lightBg">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 px-6">
        {team.map((member, i) => (
          <div key={i} className="text-center">
            <img
              src={`/assets/images/${member.img}`}
              alt={member.name}
              className="w-full h-40 sm:h-48 lg:h-56 object-contain sm:object-cover rounded-xl mb-3 bg-white"
            />
            {/* <img
              src={`/assets/images/${member.img}`}
              alt={member.name}
              className="w-full h-56 object-cover rounded-xl mb-3"
            /> */}

            <h4 className="font-heading text-primary">{member.name}</h4>

            <p className="text-sm text-textMuted">{member.designation}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default TeamPreview;
