import { Landmark, QrCode, CircleAlert } from "lucide-react";

const PaymentSection = () => {
  return (
    <section className="py-20 bg-lightBg">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-14">

          <p className="text-accent uppercase tracking-[0.25em] mb-3">
            Payment
          </p>

          <h2 className="font-heading text-4xl text-primary">
            Complete Your Registration
          </h2>

          <p className="text-textMuted mt-4 max-w-3xl mx-auto">
            Please make the payment using the QR Code or Bank Account
            details below. After completing the payment, enter your
            Transaction / UTR Number and submit your registration.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* QR CODE */}

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">

            <QrCode
              size={40}
              className="mx-auto text-accent mb-5"
            />

            <h3 className="font-heading text-2xl text-primary mb-6">
              Scan QR Code
            </h3>

            <img
              src="/assets/images/qr-code.jpg"
              alt="QR Code"
              className="w-72 mx-auto rounded-lg border"
            />

            <p className="text-sm text-textMuted mt-5">
              Scan using any UPI application and complete the payment.
            </p>

          </div>

          {/* BANK DETAILS */}

          <div className="bg-white rounded-2xl shadow-lg p-8">

            <Landmark
              size={40}
              className="text-accent mb-5"
            />

            <h3 className="font-heading text-2xl text-primary mb-6">
              Bank Account Details
            </h3>

            <div className="space-y-4 text-textDark">

              <div>
                <strong>Account Name</strong>

                <p>Dharmapeetam Samkshema Seva Sangham</p>
              </div>

              <div>
                <strong>Account Number</strong>

                <p>120034243098</p>
              </div>

              <div>
                <strong>Bank</strong>

                <p>Canara Bank</p>
              </div>

              <div>
                <strong>IFSC</strong>

                <p>CNRB0013281</p>
              </div>

              <div>
                <strong>SWIFT</strong>

                <p>CNRBINBBBFD</p>
              </div>

            </div>

          </div>

        </div>

        {/* Transaction */}

      </div>

    </section>
  );
};

export default PaymentSection;