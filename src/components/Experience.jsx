const Experience = () => {
  const experiences = [
    {
      title: 'Full Stack Engineer',
      company: 'Fournine Cloud Solutions',
      location: 'Hyderabad, India',
      period: 'May 2022 - Present',
      achievements: [
        'Developed end-to-end DbSAM (Database Secure Access Management) using Golang and React, supporting 200+ active users',
        'Designed scalable backend systems with Golang microservices architecture',
        'Implemented role-based access control (RBAC) with JWT authentication',
        'Automated CI/CD pipelines using Jenkins and GitHub Actions, reducing manual deployment by 90%',
        'Migrated production app to serverless using AWS Amplify and AWS Lambda',
        'Implemented monitoring with Prometheus and Grafana, reducing cloud costs by 20%',
      ],
    },
    {
      title: 'Python Developer',
      company: 'Kaar Technologies',
      location: 'Chennai, India',
      period: 'Aug 2021 - Apr 2022',
      achievements: [
        'Built high-performance API gateway in Golang for SAP system requests with sub-100ms response times',
        'Automated asynchronous data transfer job tracking using Python with AWS AppFlow',
        'Developed Golang-based message queue consumer for real-time SAP webhook event processing',
        'Created Golang workers reducing report generation time from 2 hours to 15 minutes',
        'Designed chatbot using Python with OOP, multi-threading, and asynchronous programming',
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-black border-t border-green-500/10">
      <div className="container mx-auto px-6">
        <div className="mb-8 font-mono text-xs">
          <p className="text-gray-600">
            <span className="text-green-500">SELECT</span> * <span className="text-green-500">FROM</span> experience <span className="text-green-500">ORDER BY</span> start_date <span className="text-green-500">DESC</span>;
          </p>
          <p className="text-gray-700 mt-1">Rows: <span className="text-green-500">2</span></p>
        </div>
        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 p-6"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 pb-3 border-b border-gray-800">
                <div>
                  <h3 className="text-base font-mono text-green-500 mb-1 uppercase tracking-wide">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-gray-500 font-mono">
                    {exp.company} • {exp.location}
                  </p>
                </div>
                <span className="text-gray-600 text-xs font-mono mt-2 md:mt-0">
                  {exp.period}
                </span>
              </div>
              <div className="space-y-2">
                {exp.achievements.slice(0, 4).map((achievement, i) => (
                  <div key={i} className="flex items-start text-xs font-mono">
                    <span className="text-green-500 mr-3 flex-shrink-0">[✓]</span>
                    <span className="text-gray-400 leading-relaxed">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
