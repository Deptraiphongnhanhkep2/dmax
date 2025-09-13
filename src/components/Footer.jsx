export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-700">
        {/* Company Info */}
        <div className="space-y-2">
          <h2 className="text-base font-semibold text-gray-900">
            Dmax Precision Technology
          </h2>
          <p className="text-gray-600">
            © Copyright Dmax Precision Technology 2025 <br />
            All rights reserved.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-base font-semibold text-gray-900 mb-3">
            Navigation
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-red-600">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-600">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-600">
                Business
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-600">
                Investor Relations
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-600">
                Sustainable Development
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-base font-semibold text-gray-900 mb-3">
            Resources
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-red-600">
                News & Events
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-600">
                Recruitment
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-600">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-600">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
