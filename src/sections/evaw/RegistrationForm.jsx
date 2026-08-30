import { useState } from "react";
import { submitRegistration } from "../../services/registrationService";
import { CircleAlert } from "lucide-react";

const RegistrationForm = () => {
  // --------------------------------
  // COMPETITIONS
  // --------------------------------

  const [selectedPrograms, setSelectedPrograms] = useState([]);

  // --------------------------------
  // STUDENT STATUS
  // --------------------------------

  const [studentStatus, setStudentStatus] = useState("");

  // --------------------------------
  // MOOT COURT TEAM
  // --------------------------------

  const [teamMembers, setTeamMembers] = useState([""]);

  // --------------------------------
  // FEES
  // --------------------------------

  const FEES = {
    "Article Writing": 300,
    Debate: 500,
    "Moot Court": 1000,
  };

  // --------------------------------
  // FORM
  // --------------------------------

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    place: "",
    college: "",
    address: "",
    transactionId: "",
  });

  // --------------------------------
  // STATES
  // --------------------------------

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [registrationId, setRegistrationId] = useState("");

  // --------------------------------
  // TOTAL AMOUNT
  // --------------------------------

  const calculateTotalAmount = () => {
    const hasArticle =
      selectedPrograms.includes("Article Writing");

    const hasDebate =
      selectedPrograms.includes("Debate");

    const hasMootCourt =
      selectedPrograms.includes("Moot Court");

    let total = 0;

    // Article + Debate combo
    if (hasArticle && hasDebate) {
      if (studentStatus === "Student") {
        total += 600;
      } else {
        total += 800;
      }
    } else {
      if (hasArticle) {
        total += 300;
      }

      if (hasDebate) {
        total += 500;
      }
    }

    // Moot Court
    if (hasMootCourt) {
      total += 1000;
    }

    return total;
  };

  const totalAmount = calculateTotalAmount();
    // --------------------------------
  // COMPETITION CHECKBOX
  // --------------------------------

  const handleCheckbox = (program) => {
    setSelectedPrograms((prev) => {
      const isAlreadySelected =
        prev.includes(program);

      if (isAlreadySelected) {
        // If Moot Court is removed,
        // clear its team members.
        if (program === "Moot Court") {
          setTeamMembers([""]);
        }

        return prev.filter(
          (item) => item !== program
        );
      }

      return [...prev, program];
    });
  };

  // --------------------------------
  // FORM INPUT
  // --------------------------------

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // --------------------------------
  // ADD TEAM MEMBER
  // --------------------------------

  const addTeamMember = () => {
    if (teamMembers.length >= 4) {
      return;
    }

    setTeamMembers([
      ...teamMembers,
      "",
    ]);
  };

  // --------------------------------
  // UPDATE TEAM MEMBER
  // --------------------------------

  const updateTeamMember = (
    index,
    value
  ) => {
    const updated = [...teamMembers];

    updated[index] = value;

    setTeamMembers(updated);
  };

  // --------------------------------
  // REMOVE TEAM MEMBER
  // --------------------------------

  const removeTeamMember = (index) => {
    const updated =
      teamMembers.filter(
        (_, i) => i !== index
      );

    setTeamMembers(
      updated.length > 0
        ? updated
        : [""]
    );
  };
    // --------------------------------
  // SUBMIT
  // --------------------------------

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Competition
    if (!selectedPrograms.length) {
      return alert(
        "Select at least one competition."
      );
    }

    // Student status
    if (!studentStatus) {
      return alert(
        "Please select whether you are a Student or Non-Student."
      );
    }

    // Moot Court team validation
    if (
      selectedPrograms.includes(
        "Moot Court"
      )
    ) {
      const validMembers =
        teamMembers.filter(
          (member) =>
            member.trim() !== ""
        );

      if (!validMembers.length) {
        return alert(
          "Please enter at least one Moot Court team member."
        );
      }

      if (validMembers.length > 4) {
        return alert(
          "Moot Court allows a maximum of 4 members."
        );
      }
    }

    // --------------------------------
    // PAYLOAD
    // --------------------------------

    const payload = {
      ...form,

      competition:
        selectedPrograms,

      studentStatus:
        studentStatus,

      teamMembers:
        selectedPrograms.includes(
          "Moot Court"
        )
          ? teamMembers.filter(
              (member) =>
                member.trim() !== ""
            )
          : [],

      amount:
        totalAmount,
    };

    console.log(
      "REGISTRATION PAYLOAD:",
      payload
    );

    setLoading(true);

    try {
      const response =
        await submitRegistration(
          payload
        );

      if (response.success) {
        setRegistrationId(
          response.registrationId
        );

        setSuccess(true);

        // Reset competitions
        setSelectedPrograms([]);

        // Reset student status
        setStudentStatus("");

        // Reset team
        setTeamMembers([""]);

        // Reset form
        setForm({
          name: "",
          mobile: "",
          email: "",
          place: "",
          college: "",
          address: "",
          transactionId: "",
        });
      } else {
        alert(
          response.error ||
            "Submission failed."
        );
      }
    } catch (error) {
      console.error(
        "Registration error:",
        error
      );

      alert(
        "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };
    return (
    <section
      id="registration"
      className="py-20 bg-white"
    >
      <div className="max-w-5xl mx-auto px-6">

        {/* HEADER */}

        <div className="text-center mb-12">

          <p className="text-accent uppercase tracking-[0.25em] mb-3">
            Registration
          </p>

          <h2 className="font-heading text-4xl text-primary">
            Register for the Competition
          </h2>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-8"
        >

          {/* STUDENT STATUS */}

          <div>

            <h3 className="text-xl font-semibold mb-4">
              Are you a student? *
            </h3>

            <div className="grid md:grid-cols-2 gap-4">

              <label
                className={`rounded-xl border p-5 cursor-pointer transition ${
                  studentStatus ===
                  "Student"
                    ? "border-accent bg-yellow-50 shadow-lg"
                    : "hover:border-accent"
                }`}
              >

                <input
                  type="radio"
                  name="studentStatus"
                  value="Student"
                  checked={
                    studentStatus ===
                    "Student"
                  }
                  onChange={(e) =>
                    setStudentStatus(
                      e.target.value
                    )
                  }
                  className="mr-2"
                  required
                />

                Student

              </label>

              <label
                className={`rounded-xl border p-5 cursor-pointer transition ${
                  studentStatus ===
                  "Non-Student"
                    ? "border-accent bg-yellow-50 shadow-lg"
                    : "hover:border-accent"
                }`}
              >

                <input
                  type="radio"
                  name="studentStatus"
                  value="Non-Student"
                  checked={
                    studentStatus ===
                    "Non-Student"
                  }
                  onChange={(e) =>
                    setStudentStatus(
                      e.target.value
                    )
                  }
                  className="mr-2"
                  required
                />

                Non-Student

              </label>

            </div>

          </div>
                    {/* COMPETITION SELECTION */}

          <div>

            <h3 className="text-xl font-semibold mb-4">
              Select Competition(s) *
            </h3>

            <div className="grid md:grid-cols-3 gap-5">

              {/* ARTICLE */}

              <label
                className={`rounded-xl border p-5 cursor-pointer transition-all duration-300 ${
                  selectedPrograms.includes(
                    "Article Writing"
                  )
                    ? "border-accent bg-yellow-50 shadow-lg"
                    : "hover:border-accent"
                }`}
              >

                <input
                  type="checkbox"
                  checked={selectedPrograms.includes(
                    "Article Writing"
                  )}
                  onChange={() =>
                    handleCheckbox(
                      "Article Writing"
                    )
                  }
                  className="mr-2"
                />

                <span className="font-medium">
                  Article Writing
                </span>

                <span className="float-right text-accent font-bold">
                  ₹300
                </span>

              </label>

              {/* DEBATE */}

              <label
                className={`rounded-xl border p-5 cursor-pointer transition-all duration-300 ${
                  selectedPrograms.includes(
                    "Debate"
                  )
                    ? "border-accent bg-yellow-50 shadow-lg"
                    : "hover:border-accent"
                }`}
              >

                <input
                  type="checkbox"
                  checked={selectedPrograms.includes(
                    "Debate"
                  )}
                  onChange={() =>
                    handleCheckbox(
                      "Debate"
                    )
                  }
                  className="mr-2"
                />

                <span className="font-medium">
                  Debate
                </span>

                <span className="float-right text-accent font-bold">
                  ₹500
                </span>

              </label>

              {/* MOOT COURT */}

              <label
                className={`rounded-xl border p-5 cursor-pointer transition-all duration-300 ${
                  selectedPrograms.includes(
                    "Moot Court"
                  )
                    ? "border-accent bg-yellow-50 shadow-lg"
                    : "hover:border-accent"
                }`}
              >

                <input
                  type="checkbox"
                  checked={selectedPrograms.includes(
                    "Moot Court"
                  )}
                  onChange={() =>
                    handleCheckbox(
                      "Moot Court"
                    )
                  }
                  className="mr-2"
                />

                <span className="font-medium">
                  Moot Court
                </span>

                <span className="float-right text-accent font-bold">
                  ₹1000 / Team
                </span>

              </label>

            </div>

            {/* COMBO MESSAGE */}

            {selectedPrograms.includes(
              "Article Writing"
            ) &&
              selectedPrograms.includes(
                "Debate"
              ) && (

                <p className="text-sm text-accent mt-3">
                  {studentStatus ===
                  "Student"
                    ? "🎓 Student Combo Offer: Article Writing + Debate = ₹600"
                    : "Article Writing + Debate = ₹800"}
                </p>

              )}

          </div>
                    {/* MOOT COURT TEAM */}

          {selectedPrograms.includes(
            "Moot Court"
          ) && (

            <div className="bg-lightBg rounded-xl p-6 border">

              <h3 className="font-heading text-2xl text-primary mb-2">
                Moot Court Team Members
              </h3>

              <p className="text-sm text-textMuted mb-5">
                Enter team member names.
                Maximum 4 members.
              </p>

              <div className="space-y-3">

                {teamMembers.map(
                  (member, index) => (

                    <div
                      key={index}
                      className="flex gap-3"
                    >

                      <input
                        type="text"
                        value={member}
                        onChange={(e) =>
                          updateTeamMember(
                            index,
                            e.target.value
                          )
                        }
                        placeholder={`Team Member ${
                          index + 1
                        } Name`}
                        className="border rounded-lg p-4 flex-1"
                        required
                      />

                      {teamMembers.length >
                        1 && (

                        <button
                          type="button"
                          onClick={() =>
                            removeTeamMember(
                              index
                            )
                          }
                          className="px-4 rounded-lg border text-red-500 hover:bg-red-50"
                        >
                          ×
                        </button>

                      )}

                    </div>

                  )
                )}

              </div>

              {teamMembers.length <
                4 && (

                <button
                  type="button"
                  onClick={
                    addTeamMember
                  }
                  className="mt-4 text-accent font-semibold hover:underline"
                >
                  + Add Member
                </button>

              )}

            </div>

          )}
                    {/* REGISTRATION SUMMARY */}

          <div className="bg-lightBg rounded-xl border p-6">

            <div className="flex justify-between mb-3">

              <span className="font-semibold">
                Selected Competitions
              </span>

              <span>
                {selectedPrograms.length}
              </span>

            </div>

            <div className="flex justify-between">

              <span className="font-semibold">
                Registration Fee
              </span>

              <span className="text-accent text-2xl font-bold">
                ₹{totalAmount}
              </span>

            </div>

            <p className="mt-4 text-sm text-textMuted">
              Please pay
              <strong>
                {" "}₹{totalAmount}
              </strong>{" "}
              using the QR Code or Bank
              Transfer.
            </p>

          </div>

          {/* PERSONAL DETAILS */}

          <div className="grid md:grid-cols-2 gap-6">

            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name *"
              className="border rounded-lg p-4"
              required
            />

            <input
              name="mobile"
              value={form.mobile}
              onChange={handleChange}
              placeholder="Mobile Number *"
              className="border rounded-lg p-4"
              required
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address *"
              className="border rounded-lg p-4"
              required
            />

            <input
              name="place"
              value={form.place}
              onChange={handleChange}
              placeholder="Place *"
              className="border rounded-lg p-4"
              required
            />

            <input
              name="college"
              value={form.college}
              onChange={handleChange}
              placeholder="College / Institute *"
              className="border rounded-lg p-4 md:col-span-2"
              required
            />

          </div>

          {/* ADDRESS */}

          <textarea
            rows="4"
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="Address *"
            className="border rounded-lg p-4 w-full"
            required
          />

          {/* TRANSACTION ID */}

          <input
            name="transactionId"
            value={form.transactionId}
            onChange={handleChange}
            placeholder="Transaction / UTR Number *"
            className="border rounded-lg p-4 w-full"
            required
          />
                    {/* PAYMENT NOTE */}

          <div className="flex items-start gap-3 mt-5 bg-yellow-50 border border-yellow-200 rounded-lg p-4">

            <CircleAlert className="text-yellow-600 mt-1" />

            <p className="text-sm text-yellow-800">
              After submitting your registration,
              our team will verify the transaction.
              Once verified, you will automatically
              receive an approval email with your
              Registration ID.
            </p>

          </div>

          {/* SINGLE SUBMIT BUTTON */}

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-4 rounded-lg text-white transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-accent hover:opacity-90 cursor-pointer"
            }`}
          >
            {loading
              ? "Submitting..."
              : "Submit Registration"}
          </button>

        </form>

      </div>

      {/* SUCCESS POPUP */}

      {success && (

        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[9999] px-4">

          <div className="bg-white rounded-xl p-8 text-center max-w-md w-full">

            <h2 className="font-heading text-3xl text-primary">
              Registration Submitted
            </h2>

            <p className="mt-3">
              Registration ID
            </p>

            <h3 className="text-accent text-2xl font-bold">
              {registrationId}
            </h3>

            <p className="my-5">
              A confirmation email has been sent.
              Payment verification is pending.
            </p>

            <button
              type="button"
              onClick={() =>
                setSuccess(false)
              }
              className="bg-accent text-white px-6 py-3 rounded-lg"
            >
              Close
            </button>

          </div>

        </div>

      )}

    </section>
  );
};

export default RegistrationForm;