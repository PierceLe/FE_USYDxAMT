import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa"; // Import Font Awesome icons

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
            <p>Address: Sydney University, Australia</p>
            <p>
              Email:{" "}
              <a href="mailto:info@sydney.edu.au" className="text-blue-400">
                MAPS.program@maths.usyd.edu.au
              </a>
            </p>
            <p>Phone: +61 2 1234 5678</p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-gray-300">
                  About
                </a>
              </li>
              <li>
                <a href="#fees" className="hover:text-gray-300">
                  Fees
                </a>
              </li>
              <li>
                <a href="#content" className="hover:text-gray-300">
                  Program Content
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-gray-300">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/AustMathsTrust/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <FaFacebook className="h-6 w-6" />
              </a>
              <a
                href="https://x.com/austmathstrust"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <FaTwitter className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/australian-mathematics-trust/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm">
          <p>
            &copy; 2024 Mathematical Problem Solving Program. All rights
            reserved.
          </p>
          <div className="flex justify-center mt-4 space-x-6">
       
            <img
              src="https://i1.wp.com/www.amt.edu.au/wp-content/uploads/2018/12/cropped-amt-logo.png"
              alt="AMT Logo"
              className="h-10 w-auto"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
