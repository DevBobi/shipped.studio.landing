import { FaCheck, FaTimes } from "react-icons/fa";

export default function WhyDifferentSection() {
  const comparisonData = [
    {
      category: "Speed to market",
      shippedStudio: { has: true, text: "21–60 days" },
      freelancer: { has: true, text: "Can be fast if available" },
      traditionalAgency: { has: false, text: "Typically 4–6 months" },
      inHouse: { has: false, text: "3–4 months (capacity/hiring)" },
    },
    {
      category: "Pricing predictability",
      shippedStudio: { has: true, text: "Fixed fee" },
      freelancer: { has: false, text: "Variable & scope-creep risk" },
      traditionalAgency: { has: true, text: "Fixed (often high)" },
      inHouse: { has: true, text: "Salaries known (overhead)" },
    },
    {
      category: "PM effort required",
      shippedStudio: { has: true, text: "Dedicated PM" },
      freelancer: { has: false, text: "You manage" },
      traditionalAgency: { has: true, text: "Account manager" },
      inHouse: { has: true, text: "You manage directly" },
    },
    {
      category: "Technical breadth & scale",
      shippedStudio: { has: true, text: "MVP, SaaS & AI; elastic team" },
      freelancer: { has: false, text: "Solo bandwidth, narrow stack" },
      traditionalAgency: { has: true, text: "Multi-discipline bench" },
      inHouse: { has: false, text: "Limited without new hires" },
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-dm-sans mb-6">
            Why we&apos;re different
          </h2>
        </div>

        {/* Comparison Table */}
        <div className="bg-gray-800 rounded-[24px] p-0 overflow-hidden max-w-6xl w-full mx-auto shadow-xl border border-gray-100">
          {/* Desktop Table */}
          <div className="hidden md:block">
            {/* Header Row */}
            <div className="grid grid-cols-5 bg-gray-800">
              <div className="p-6 text-white font-medium font-dm-sans mt-2">
                Category
              </div>
              <div className="bg-gray-300 p-6 mt-2 text-gray-900 font-bold text-center font-dm-sans rounded-t-[50px]">
                Shipped Studio
              </div>
              <div className="p-6 text-white font-medium text-center font-dm-sans mt-2">
                Freelancer
              </div>
              <div className="p-6 text-white font-medium text-center font-dm-sans mt-2">
                Traditional Agency
              </div>
              <div className="p-6 text-white font-medium text-center font-dm-sans mt-2">
                In-House
              </div>
            </div>

            {/* Content Rows */}
            {comparisonData.map((row, index) => (
              <div
                key={index}
                className="grid grid-cols-5 border-t border-gray-700"
              >
                <div className="p-6 text-white font-medium font-inter">
                  {row.category}
                </div>
                <div
                  className={`bg-gray-300 p-6 flex items-center ${
                    index === comparisonData.length - 1
                      ? "rounded-b-[50px] mb-2"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-3 font-bold text-gray-900">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaCheck className="w-3 h-3 text-white" />
                    </div>
                    <span className="font-inter font-medium">
                      {row.shippedStudio.text}
                    </span>
                  </div>
                </div>
                <div
                  className={`p-6 flex items-center ${
                    index === comparisonData.length - 1
                      ? "rounded-b-[64px]"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-3 text-gray-200">
                    {row.freelancer.has ? (
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <FaCheck className="w-3 h-3 text-white" />
                      </div>
                    ) : (
                      <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <FaTimes className="w-3 h-3 text-white" />
                      </div>
                    )}
                    <span className="font-inter font-medium">
                      {row.freelancer.text}
                    </span>
                  </div>
                </div>
                <div
                  className={`p-6 flex items-center ${
                    index === comparisonData.length - 1
                      ? "rounded-b-[64px]"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-3 text-gray-200">
                    {row.traditionalAgency.has ? (
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <FaCheck className="w-3 h-3 text-white" />
                      </div>
                    ) : (
                      <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <FaTimes className="w-3 h-3 text-white" />
                      </div>
                    )}
                    <span className="font-inter font-medium">
                      {row.traditionalAgency.text}
                    </span>
                  </div>
                </div>
                <div
                  className={`p-6 flex items-center ${
                    index === comparisonData.length - 1
                      ? "rounded-b-[64px]"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-3 text-gray-200">
                    {row.inHouse.has ? (
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <FaCheck className="w-3 h-3 text-white" />
                      </div>
                    ) : (
                      <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <FaTimes className="w-3 h-3 text-white" />
                      </div>
                    )}
                    <span className="font-inter font-medium">
                      {row.inHouse.text}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Table */}
          <div className="md:hidden overflow-x-auto">
            <div className="min-w-[800px]">
              {/* Header Row */}
              <div className="grid grid-cols-5 bg-gray-800">
                <div className="p-4 text-white font-medium font-dm-sans mt-2 text-sm">
                  Category
                </div>
                <div className="bg-gray-300 p-4 mt-2 text-gray-900 font-bold text-center font-dm-sans rounded-t-[16px] text-sm">
                  Shipped Studio
                </div>
                <div className="p-4 text-white font-medium text-center font-dm-sans mt-2 text-sm">
                  Freelancer
                </div>
                <div className="p-4 text-white font-medium text-center font-dm-sans mt-2 text-sm">
                  Traditional Agency
                </div>
                <div className="p-4 text-white font-medium text-center font-dm-sans mt-2 text-sm">
                  In-House
                </div>
              </div>

              {/* Content Rows */}
              {comparisonData.map((row, index) => (
                <div
                  key={index}
                  className="grid grid-cols-5 border-t border-gray-700"
                >
                  <div className="p-4 text-white font-medium font-inter text-sm">
                    {row.category}
                  </div>
                  <div
                    className={`bg-gray-300 p-4 flex items-center ${
                      index === comparisonData.length - 1
                        ? "rounded-b-[16px] mb-2"
                        : ""
                    }`}
                  >
                    <div className="flex items-center gap-2 font-bold text-gray-900">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <FaCheck className="w-2.5 h-2.5 text-white" />
                      </div>
                      <span className="font-inter font-medium text-sm">
                        {row.shippedStudio.text}
                      </span>
                    </div>
                  </div>
                  <div
                    className={`p-4 flex items-center ${
                      index === comparisonData.length - 1
                        ? "rounded-b-[16px]"
                        : ""
                    }`}
                  >
                    <div className="flex items-center gap-2 text-gray-200">
                      {row.freelancer.has ? (
                        <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <FaCheck className="w-2.5 h-2.5 text-white" />
                        </div>
                      ) : (
                        <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <FaTimes className="w-2.5 h-2.5 text-white" />
                        </div>
                      )}
                      <span className="font-inter font-medium text-sm">
                        {row.freelancer.text}
                      </span>
                    </div>
                  </div>
                  <div
                    className={`p-4 flex items-center ${
                      index === comparisonData.length - 1
                        ? "rounded-b-[16px]"
                        : ""
                    }`}
                  >
                    <div className="flex items-center gap-2 text-gray-200">
                      {row.traditionalAgency.has ? (
                        <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <FaCheck className="w-2.5 h-2.5 text-white" />
                        </div>
                      ) : (
                        <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <FaTimes className="w-2.5 h-2.5 text-white" />
                        </div>
                      )}
                      <span className="font-inter font-medium text-sm">
                        {row.traditionalAgency.text}
                      </span>
                    </div>
                  </div>
                  <div
                    className={`p-4 flex items-center ${
                      index === comparisonData.length - 1
                        ? "rounded-b-[16px]"
                        : ""
                    }`}
                  >
                    <div className="flex items-center gap-2 text-gray-200">
                      {row.inHouse.has ? (
                        <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <FaCheck className="w-2.5 h-2.5 text-white" />
                        </div>
                      ) : (
                        <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <FaTimes className="w-2.5 h-2.5 text-white" />
                        </div>
                      )}
                      <span className="font-inter font-medium text-sm">
                        {row.inHouse.text}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
