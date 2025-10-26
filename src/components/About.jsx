const About = () => {
  return (
    <section id="about" className="py-20 bg-black border-t border-green-500/10">
      <div className="container mx-auto px-6">
        <div className="mb-8 font-mono text-xs">
          <p className="text-gray-600">
            <span className="text-green-500">GET</span> <span className="text-gray-400">/api/v1/about</span>
          </p>
          <p className="text-gray-700">Status: <span className="text-green-500">200 OK</span></p>
        </div>
        <div className="max-w-3xl bg-gray-900 border border-gray-800 p-6">
          <pre className="text-gray-400 text-sm font-mono leading-relaxed">
{`{
  "role": "Backend Engineer",
  "experience_years": 3,
  "specialization": ["Golang", "Python", "Microservices"],
  "expertise": [
    "Building scalable backend systems",
    "API development (REST, gRPC)",
    "Cloud infrastructure (AWS, GCP)",
    "CI/CD automation & DevOps"
  ],
  "achievements": {
    "active_users_supported": 200,
    "deployment_automation": "90%",
    "cloud_cost_reduction": "20%"
  }
}`}
          </pre>
        </div>
      </div>
    </section>
  )
}

export default About
