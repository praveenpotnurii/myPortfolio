const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-green-500/10 py-8">
      <div className="container mx-auto px-6">
        <div className="bg-gray-900 border border-gray-800 p-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs font-mono">
            <div className="mb-2 md:mb-0">
              <p className="text-gray-600">
                <span className="text-green-500">[status]</span> © {currentYear} Praveen Potnuri
              </p>
            </div>
            <div className="flex space-x-6">
              <a
                href="https://linkedin.com/in/praveenpotnuri"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-green-500 transition-colors uppercase tracking-wider"
              >
                linkedin
              </a>
              <a
                href="mailto:potnuripraveen284@gmail.com"
                className="text-gray-500 hover:text-green-500 transition-colors uppercase tracking-wider"
              >
                email
              </a>
            </div>
          </div>
          <div className="text-center mt-3 text-gray-700 text-xs font-mono border-t border-gray-800 pt-3">
            <p>Server Status: <span className="text-green-500">●</span> Online | Built with React, Tailwind, Vite</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
