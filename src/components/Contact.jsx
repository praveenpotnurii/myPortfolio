const Contact = () => {
  const contactInfo = [
    { label: 'email', value: 'potnuripraveen284@gmail.com', href: 'mailto:potnuripraveen284@gmail.com' },
    { label: 'phone', value: '+91 9959301876', href: 'tel:+919959301876' },
    { label: 'location', value: 'Hyderabad, India', href: null },
    { label: 'linkedin', value: 'linkedin.com/in/praveenpotnuri', href: 'https://linkedin.com/in/praveenpotnuri' },
  ]

  return (
    <section id="contact" className="py-20 bg-black border-t border-green-500/10">
      <div className="container mx-auto px-6">
        <div className="mb-8 font-mono text-xs">
          <p className="text-gray-600">
            <span className="text-green-500">POST</span> <span className="text-gray-400">/api/v1/contact</span>
          </p>
          <p className="text-gray-700">Content-Type: <span className="text-green-500">application/json</span></p>
        </div>
        <div className="max-w-2xl">
          <div className="bg-gray-900 border border-gray-800 p-6 mb-6">
            <p className="text-gray-500 text-xs font-mono mb-4">// Request Body</p>
            <pre className="text-gray-400 text-xs font-mono leading-relaxed">
{`{
  "status": "available_for_opportunities",
  "open_to": [
    "full_time_positions",
    "consulting_projects",
    "technical_collaborations"
  ]
}`}
            </pre>
          </div>

          <div className="bg-gray-900 border border-gray-800 p-6">
            <p className="text-gray-500 text-xs font-mono mb-4">// Contact Information</p>
            <div className="space-y-2">
              {contactInfo.map((info, index) => (
                <div key={index} className="font-mono text-xs">
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="group flex items-start hover:text-green-500 transition-colors"
                    >
                      <span className="text-green-500 mr-2 w-20">{info.label}:</span>
                      <span className="text-gray-400 group-hover:text-green-500">{info.value}</span>
                    </a>
                  ) : (
                    <div className="flex items-start">
                      <span className="text-green-500 mr-2 w-20">{info.label}:</span>
                      <span className="text-gray-400">{info.value}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
