import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-screen-xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Link
              href="/"
              className="inline-block mb-6 text-2xl font-extrabold tracking-wide text-purple-500 hover:text-red-600 transition-colors"
            >
              ZanTopup<span className="text-gray-300">V1</span>
            </Link>
            <p className="leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              obcaecati vero accusantium officia, maiores vel.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-12 md:col-span-2">
            <div>
              <h4 className="mb-6 text-lg font-semibold text-white">Links</h4>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:text-purple-400 transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-6 text-lg font-semibold text-white">Legal</h4>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="#"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Legal
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Payment Method
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 py-6 text-center text-sm text-gray-500">
        &copy; 2025 | Muhammad Razzan | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
