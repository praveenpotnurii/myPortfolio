const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages & Frameworks',
      skills: ['Golang', 'Python', 'React', 'JavaScript', 'TypeScript', 'GIN', 'Django', 'Flask'],
      color: 'blue',
    },
    {
      title: 'Development',
      skills: ['RESTful API', 'gRPC', 'Error Handling', 'Go Modules', 'Goroutines', 'Testing', 'Gen AI'],
      color: 'purple',
    },
    {
      title: 'DevOps & Cloud',
      skills: ['GCP', 'AWS (EC2, Lambda, API Gateway, Amplify, ECS/EKS)', 'Docker', 'Kubernetes', 'CI/CD', 'Prometheus', 'Grafana'],
      color: 'green',
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'PostgreSQL', 'DynamoDB', 'MongoDB', 'BigQuery'],
      color: 'red',
    },
    {
      title: 'Other',
      skills: ['Linux', 'Bash', 'Scripting', 'Automation', 'Logging and Monitoring'],
      color: 'yellow',
    },
  ]

  const colorClasses = {
    blue: 'bg-blue-100 text-blue-700 border-blue-200',
    purple: 'bg-purple-100 text-purple-700 border-purple-200',
    green: 'bg-green-100 text-green-700 border-green-200',
    red: 'bg-red-100 text-red-700 border-red-200',
    yellow: 'bg-yellow-100 text-yellow-700 border-yellow-200',
  }

  return (
    <section id="skills" className="py-20 bg-black border-t border-green-500/10">
      <div className="container mx-auto px-6">
        <div className="mb-8 font-mono text-xs">
          <p className="text-gray-600">
            <span className="text-green-500">➜</span> docker inspect backend_engineer_skills
          </p>
          <p className="text-gray-700 mt-1">Status: <span className="text-green-500">Running</span></p>
        </div>
        <div className="max-w-4xl mx-auto">
          {/* Certification Badge */}
          <div className="mb-8 bg-green-500/10 border border-green-500/30 p-4 font-mono text-xs">
            <p className="text-green-500">
              [CERT] Professional GCP Cloud Architect <span className="text-gray-600">(Valid until: 2026-05-02)</span>
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-gray-900 border border-gray-800 p-4">
                <h3 className="text-xs font-mono text-green-500 mb-3 uppercase tracking-wider border-b border-gray-800 pb-2">
                  {category.title}
                </h3>
                <div className="space-y-1">
                  {category.skills.map((skill, i) => (
                    <div
                      key={i}
                      className="text-xs font-mono text-gray-400 hover:text-green-500 transition-colors cursor-default flex items-start"
                    >
                      <span className="text-gray-700 mr-2">•</span>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
