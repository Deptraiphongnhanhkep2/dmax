import React from "react";

const USER_LINK =
  "https://media.istockphoto.com/id/119838172/vi/anh/ch%C3%BA-kh%E1%BB%89-c%C6%B0%E1%BB%9Di.jpg?s=612x612&w=0&k=20&c=3z3zvHq8dWhq7jMfXjF88mEzYIGpO7n6W6rRk-wmT_c=";

const news = [
  {
    id: 1,
    title: "VinFast makes its landmark debut with launch of VF 6 and VF 7",
    date: "06-09-2025",
    img: USER_LINK,
  },
  {
    id: 2,
    title: "VinFast’s advanced electric buses debut in Europe",
    date: "26-08-2025",
    img: USER_LINK,
  },
  {
    id: 3,
    title: "VinFast India partners with State Bank of India",
    date: "22-08-2025",
    img: USER_LINK,
  },
];

export default function NewsSection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          NEWS & EVENTS
        </h2>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {news.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer"
            >
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = `https://picsum.photos/seed/${item.id}/800/500`;
                  }}
                  className="w-full h-56 object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="text-gray-900 font-semibold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">{item.date}</p>
              </div>
            </article>
          ))}
        </div>

        {/* View All */}
        <div className="flex justify-center mt-12">
          <button className="px-8 py-3 bg-blue-900 text-white rounded-full shadow-md hover:bg-blue-700 transition">
            View All
          </button>
        </div>
      </div>
    </section>
  );
}
