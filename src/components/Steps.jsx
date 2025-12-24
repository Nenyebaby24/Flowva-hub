export default function Steps() {
  return (
    <section className="bg-purple-100 py-24">
      <h2 className="text-center text-4xl font-bold mb-16">
        SIMPLE. REWARDING. CALM
      </h2>

      <div className="grid md:grid-cols-3 max-w-6xl mx-auto gap-6">
        {["Sign up & Connect", "Organize & Track", "Earn & Enjoy"].map(
          (step, i) => (
            <div key={i} className="bg-white p-10 rounded-xl">
              <div className="text-6xl font-black mb-4">{i + 1}</div>
              <p>{step}</p>
            </div>
          )
        )}
      </div>
    </section>
  );
}

