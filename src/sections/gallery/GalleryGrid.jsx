const images = [
  "/assets/images/feliciate1.jpeg",
  "/assets/images/feliciate2.jpeg",
  "/assets/images/feliciate3.jpeg",
  "/assets/images/programe3.jpeg",
  "/assets/images/programe5.jpeg",
  "/assets/images/programe6.jpeg",
  "/assets/images/events2.jpeg",
  "/assets/images/events3.jpeg",
];

const GalleryGrid = () => {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

          {images.map((img, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl shadow hover:shadow-lg transition"
            >

              <img
                src={img}
                alt="gallery"
                className="w-full h-64 object-cover hover:scale-105 transition duration-300"
              />

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default GalleryGrid;