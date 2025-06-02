import CountUp from "react-countup";
import HeroSection from "../components/HeroSection";

const teamMembers = [
  {
    name: "Dr. Lina Torres",
    role: "Chief AI Scientist",
    img: "https://www.svgrepo.com/show/382106/male-avatar-boy-face-man-user-9.svg",
    description:
      "Leading our AI research, Dr. Torres drives innovations that integrate cutting-edge machine learning with educational excellence.",
  },
  {
    name: "Prof. Marcus Lee",
    role: "Head of Vision & Strategy",
    img: "https://www.svgrepo.com/show/382106/male-avatar-boy-face-man-user-9.svg",
    description:
      "With a focus on visionary leadership, Prof. Lee shapes our strategic roadmap to transform Hopn University into a global education leader.",
  },
  {
    name: "Dr. Aisha Patel",
    role: "Director of Mission & Outreach",
    img: "https://www.svgrepo.com/show/382106/male-avatar-boy-face-man-user-9.svg",
    description:
      "Dr. Patel ensures our mission of accessible, innovative education reaches diverse communities worldwide.",
  },
];

export default function AboutUs() {
  return (
    <>
      <HeroSection
        title="About Hopn University"
        subtitle="Empowering Minds, Shaping Futures"
        backgroundImage="https://plus.unsplash.com/premium_photo-1677567996070-68fa4181775a?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      {/* Vision Section */}
      <section className="py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="overflow-hidden shadow-xl group rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
              alt="Vision"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Vision</h2>
            <p className="text-gray-600 text-lg text-justify">
              At Hopn University, our vision is to revolutionize education through innovation and inclusivity. We aspire to be a global leader in fostering critical thinking, creativity, and ethical leadership in an increasingly interconnected world.
            </p>
          </div>
        </div>
      </section>

      {/* AI-Powered System Section */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-blue-900 mb-4">AI-Powered Learning System</h2>
            <p className="text-gray-600 text-lg text-justify">
              Our AI-powered learning system personalizes education to match every student's unique needs and pace. By leveraging advanced machine learning algorithms, we deliver tailored content, real-time feedback, and predictive insights, ensuring optimal engagement and success.
            </p>
          </div>
          <div className="overflow-hidden shadow-xl group rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
              alt="AI Learning"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="overflow-hidden shadow-xl group rounded-xl">
            <img
              src="https://plus.unsplash.com/premium_photo-1682124869082-f3f3b6f36ed6?q=80&w=1914&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Mission"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 text-lg text-justify">
              We are committed to delivering accessible, high-quality education that empowers learners worldwide. Through innovation, collaboration, and community engagement, we strive to cultivate knowledge, inspire innovation, and promote lifelong learning.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section
        className="text-white py-20 px-4 relative bg-fixed"
        style={{
          backgroundImage: `url(https://plus.unsplash.com/premium_photo-1661315406324-329dd27ebc34?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100vw",
          marginLeft: "calc(-50vw + 50%)",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30" />
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold mb-10 text-white">
            Hopn University in Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Graduates", value: 10432 },
              { label: "Research Papers", value: 872 },
              { label: "Active Students", value: 5390 },
              { label: "Global Partnerships", value: 128 },
            ].map((stat, idx) => (
              <div key={idx}>
                <h3 className="text-5xl font-bold">
                  <CountUp end={stat.value} duration={3} />
                </h3>
                <p className="text-lg mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-white text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-900 mb-2">
            Meet Our Team
          </h2>
          <p className="text-gray-600 mb-12">
            Dedicated Professionals Committed to Excellence in Education and Innovation
          </p>

          <div className="flex flex-wrap justify-center gap-10">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="w-60 text-center">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-36 h-36 mx-auto rounded-full object-cover mb-4 shadow-md"
                />
                <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.role}</p>
                <p className="text-sm text-gray-600 mt-4">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
