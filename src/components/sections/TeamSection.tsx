import { FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

export default function TeamSection() {
  const teamMembers = [
    {
      name: 'Sadek Irfan',
      role: 'Fractional CTO',
      image: '/teams/sadek.png'
    },
    {
      name: 'Jay',
      role: 'Fractional CMO & Product Manager',
      image: '/teams/rifat.png'
    },
    {
      name: 'Bobi',
      role: 'SE | UI/UX Designer',
      image: '/teams/bobi.png'
    }
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50 relative overflow-hidden">
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-dm-sans mb-6">
            Our Team
          </h2>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-sm"
            >
              {/* Team Member Image - Full Card */}
              <div className="w-full h-80">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Team Member Info - Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-xl font-bold text-white font-dm-sans mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-200 font-inter mb-4">
                  {member.role}
                </p>
                
                {/* Social Links */}
                <div className="flex items-center gap-1">
                  <a 
                    href="#" 
                    className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-black hover:scale-110 transition-all duration-300 group"
                  >
                    <FaXTwitter className="w-4 h-4 text-white group-hover:text-white transition-colors duration-300" />
                  </a>
                  <a 
                    href="#" 
                    className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition-all duration-300 group"
                  >
                    <FaLinkedin className="w-4 h-4 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
