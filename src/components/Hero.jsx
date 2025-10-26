const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-black pt-20 relative overflow-hidden">
      {/* Server log background pattern */}
      <div className="absolute inset-0 opacity-5 font-mono text-xs text-green-500 overflow-hidden pointer-events-none">
        <div className="whitespace-pre">
          {`[INFO] Server started on :8080
[INFO] Database connection pool initialized
[INFO] Redis cache connected
[INFO] Metrics server running on :9090
[DEBUG] Loading configuration...
[INFO] gRPC server listening on :50051`}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="animate-fade-in max-w-4xl">
          <div className="mb-6 space-y-1 font-mono text-xs">
            <p className="text-gray-600">[2025-10-26 12:00:00] <span className="text-green-500">INFO</span> - Starting application...</p>
            <p className="text-gray-600">[2025-10-26 12:00:01] <span className="text-green-500">INFO</span> - Loading developer profile...</p>
          </div>

          <h1 className="text-3xl md:text-5xl font-mono mb-4 text-gray-100">
            Praveen Potnuri
          </h1>

          <div className="border-l-2 border-green-500 pl-4 mb-8 space-y-1 font-mono text-sm">
            <p className="text-gray-400">
              <span className="text-green-500">role:</span> Backend Engineer
            </p>
            <p className="text-gray-400">
              <span className="text-green-500">stack:</span> Golang | Python | Microservices
            </p>
            <p className="text-gray-400">
              <span className="text-green-500">infrastructure:</span> AWS | GCP | Kubernetes | Docker
            </p>
            <p className="text-gray-400">
              <span className="text-green-500">location:</span> Hyderabad, India
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 p-4 mb-8 font-mono text-xs">
            <p className="text-gray-500 mb-2">// Core Competencies</p>
            <p className="text-gray-400">✓ Building scalable microservices with Golang</p>
            <p className="text-gray-400">✓ RESTful & gRPC API development</p>
            <p className="text-gray-400">✓ Cloud infrastructure & CI/CD automation</p>
            <p className="text-gray-400">✓ Database optimization & monitoring</p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-green-500 text-black px-6 py-2 font-mono text-sm hover:bg-green-400 transition-all inline-block font-semibold"
            >
              CONTACT
            </a>
            <a
              href="https://linkedin.com/in/praveenpotnuri"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-green-500 text-green-500 px-6 py-2 font-mono text-sm hover:bg-green-500/10 transition-all inline-block"
            >
              LINKEDIN →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
