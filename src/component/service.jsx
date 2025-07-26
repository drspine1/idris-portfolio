const Services = () => {
  return (
    <>
    <section id="service" className="py-12 px-6 bg-gray-100 dark:text-white mt-40">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#353635]">My Expertise</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      
      <div className="bg-white  p-6 rounded-xl shadow hover:shadow-lg transition-all">
        <h3 className="text-xl font-semibold mb-2 text-[#545353]">Frontend Web Development</h3>
        <p className="text-base text-[#545353]">Building modern, responsive, and accessible websites using React, Next.js, and Tailwind CSS.</p>
      </div>

      <div className="bg-white  p-6 rounded-xl shadow hover:shadow-lg transition-all">
        <h3 className="text-xl font-semibold mb-2 text-[#545353]">UI/UX Design Implementation</h3>
        <p className="text-base text-[#545353]">Translating Figma or design mockups into pixel-perfect, interactive user interfaces.</p>
      </div>

      <div className="bg-white  p-6 rounded-xl shadow hover:shadow-lg transition-all">
        <h3 className="text-xl font-semibold mb-2 text-[#545353]">Website Optimization</h3>
        <p className="text-base text-[#545353]">Improving performance, SEO, and accessibility to make websites faster and more discoverable.</p>
      </div>

      <div className="bg-white  p-6 rounded-xl shadow hover:shadow-lg transition-all">
        <h3 className="text-xl font-semibold mb-2 text-[#545353]">Bug Fixing & Code Refactoring</h3>
        <p className="text-base text-[#545353]">Debugging UI issues and refactoring code to make it more efficient, maintainable, and scalable.</p>
      </div>

      <div className="bg-white  p-6 rounded-xl shadow hover:shadow-lg transition-all">
        <h3 className="text-xl font-semibold mb-2 text-[#545353]">API Integration</h3>
        <p className="text-base text-[#545353]">Connecting frontend apps to REST APIs or third-party services (e.g. Stripe, Auth systems).</p>
      </div>

      <div className="bg-white  p-6 rounded-xl shadow hover:shadow-lg transition-all">
        <h3 className="text-xl font-semibold mb-2 text-[#545353]">Mentorship & Training</h3>
        <p className="text-base text-[#545353]">Helping beginners learn frontend basics and grow in their web development journey.</p>
      </div>

    </div>
  </div>
</section>

    </>
    );
}
 
export default Services;