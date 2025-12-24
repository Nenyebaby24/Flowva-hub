export default function Stats() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-16 text-center text-1g">Turn productivity into rewards with a calm, smart<br />
space that organizes your tools, and keeps you in control.</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* USERS */}
        <div className="bg-[#F4ECFF] rounded-2xl p-8">
          <h2 className="text-4xl font-extrabold">10,000+</h2>
          <p className="text-lg mt-2">Users</p>

          <p className="text-gray-600 mt-6 mb-10 leading-relaxed">
            Already simplifying their workflow with Flowva
          </p>

          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <img src="https://i.pravatar.cc/32?img=11" className="w-8 h-8 rounded-full border-2 border-white" />
              <img src="https://i.pravatar.cc/32?img=12" className="w-8 h-8 rounded-full border-2 border-white" />
              <img src="https://i.pravatar.cc/32?img=13" className="w-8 h-8 rounded-full border-2 border-white" />
              <img src="https://i.pravatar.cc/32?img=14" className="w-8 h-8 rounded-full border-2 border-white" />
            </div>
            <span className="text-sm font-medium">10,000+</span>
          </div>
        </div>

        {/* TOOLS */}
        <div className="bg-[#F4ECFF] rounded-2xl p-8">
          <h2 className="text-4xl font-extrabold">200+</h2>
          <p className="text-lg mt-2">Tools</p>

          <p className="text-gray-600 mt-6 mb-10 leading-relaxed">
            Curated and organized for you in the library
          </p>

          <div className="flex items-center gap-2">
            <img
              src="/avatars.svg"
              alt="Avatars"
              className="object-contain"
            />
            <span className="text-sm font-medium ml-2">and many more</span>
          </div>
        </div>

        {/* COUNTRIES */}
        <div className="bg-[#F4ECFF] rounded-2xl p-8">
          <h2 className="text-4xl font-extrabold">25+</h2>
          <p className="text-lg mt-2">Countries</p>

          <p className="text-gray-600 mt-6 mb-10 leading-relaxed">
            Reviewing tools and building smarter stacks every day
          </p>

          <div className="flex items-center gap-2">
            <img
              src="/country_flags.svg"
              alt="Country Flags"
              className="object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
