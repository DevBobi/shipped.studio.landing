import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Sadek Irfan",
      role: "Fractional CTO",
      image: "/teams/sadek.jpg",
      x: "https://x.com/sadekirfan",
      linkedin: "https://www.linkedin.com/in/sadek-irfan-611571196/",
    },
    {
      name: "Jay",
      role: "Fractional CMO & Product Manager",
      image: "/teams/rifat.png",
      x: "https://x.com/jayganguly",
      linkedin: "https://www.linkedin.com/in/jayganguly/",
    },
    {
      name: "Bobi",
      role: "SE | UI/UX Designer",
      image: "/teams/bobi.png",
      x: "",
      linkedin: "",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="tracking-tighter text-4xl md:text-5xl font-bold text-primary font-dm-sans mb-6">
            Our Team
          </h2>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Team Member Image - Full Card */}
              <div className="w-full h-80 relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Team Member Info - Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-xl font-bold text-white font-dm-sans mb-2">
                  {member.name}
                </h3>
                <p className="text-light-gray text-sm font-inter mb-4">
                  {member.role}
                </p>

                {/* Social Links */}
                <div className="flex items-center gap-1">
                  {member.x && (
                    <Link
                      href={member.x || "#"}
                      className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition-all duration-300 group"
                    >
                      <FaXTwitter className="w-4 h-4 text-white group-hover:text-white transition-colors duration-300" />
                    </Link>
                  )}
                  {member.linkedin && (
                    <Link
                      href={member.linkedin || "#"}
                      className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition-all duration-300 group"
                    >
                      <FaLinkedin className="w-4 h-4 text-blue group-hover:text-white transition-colors duration-300" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
