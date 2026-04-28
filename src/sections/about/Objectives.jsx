const Objectives = () => {
  const data = [
    {
      title: "UG/PG Law",
      desc: "Comprehensive guidance for law students",
    },
    {
      title: "AIBE Preparation",
      desc: "Training for All India Bar Examination",
    },
    {
      title: "Legal Skill Development",
      desc: "Practical skills for legal professionals",
    },
  ];

  return (
    <section className="py-20 bg-lightBg text-center">

      <h2 className="text-3xl font-heading text-primary mb-4">
        Our Objective
      </h2>

      <p className="text-textMuted max-w-2xl mx-auto mb-10">
        We strive to empower individuals through legal education and awareness.
      </p>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-6">

        {data.map((item, i) => (
          <div
            key={i}
            className="bg-cardBg p-6 rounded-xl shadow border border-[#e6dccb]"
          >
            <h3 className="font-heading text-primary mb-2">
              {item.title}
            </h3>

            <p className="text-sm text-textMuted mb-4">
              {item.desc}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Objectives;