export default function Home() {
  return (
    <main className="min-h-screen">
      {/* ── Navigation ─────────────────────────────────── */}
      <nav className="bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="text-xl font-black text-white hover:text-accent">
            MarchmanActInfo.com
          </a>
          <div className="hidden md:flex gap-6 text-sm font-semibold">
            <a href="/resources" className="text-white hover:text-accent">
              Resources
            </a>
            <a href="/search-facilities" className="text-white hover:text-accent">
              Find Treatment
            </a>
            <a href="/blog" className="text-white hover:text-accent">
              Blog
            </a>
            <a href="/contact" className="text-white hover:text-accent">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* ── Hero Section ───────────────────────────────── */}
      <section className="bg-surface py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-black text-navy mb-4">
            Florida Marchman Act Resource & Treatment Directory
          </h1>
          <p className="text-body-mid text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Your comprehensive guide to the Florida Marchman Act. Find
            treatment facilities, understand the filing process, and access
            county-specific resources.
          </p>

          {/* Search inputs */}
          <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search facilities, resources..."
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal"
            />
            <button className="bg-teal text-white px-6 py-3 rounded-lg font-bold hover:bg-teal/90 transition-colors">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* ── Placeholder sections ───────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-black text-navy mb-8 text-center">
          How Can We Help?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Understanding the Marchman Act",
              desc: "Learn about Florida\'s involuntary commitment law for substance abuse treatment.",
            },
            {
              title: "Find Treatment Facilities",
              desc: "Search our directory of Florida rehab and treatment centers.",
            },
            {
              title: "Filing Resources",
              desc: "County-specific guides, forms, and legal information for filing.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-bold text-navy mb-2">{card.title}</h3>
              <p className="text-body-mid">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────── */}
      <footer className="bg-navy text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm text-gray-300">
          <p>&copy; {new Date().getFullYear()} MarchmanActInfo.com — A Reference Nexus Inc. Property</p>
        </div>
      </footer>
    </main>
  );
}
