import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 pt-12">
      {/* Popular Searches */}
      <div className="border-b border-gray-800 pb-6 mb-10">
        <h3 className="text-white font-semibold mb-3 uppercase">
          Popular Searches
        </h3>
        <p className="text-sm leading-relaxed text-gray-400">
          Men Rings | Women Rings | Gold Rings | Silver Rings | Couple Rings |
          Men Chains | Women Chains | Gold Chains | Silver Chains | Neckbands |
          Men Neckbands | Women Neckbands | Earrings | Stud Earrings | Hoop
          Earrings | Ear Cuffs | Head Bands | Hair Bands | Bracelets | Charm
          Bracelets | Bangles | Pins | Brooch Pins | Designer Jewelry | Fashion
          Jewelry | Daily Wear Jewelry | Party Wear Jewelry
        </p>
      </div>

      {/* Main Footer Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Company */}
        <div>
          <h4 className="text-white font-semibold mb-4 uppercase">Company</h4>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">
              Terms & Conditions
            </li>
            <li className="hover:text-white cursor-pointer">
              Payments & Returns
            </li>
            <li className="hover:text-white cursor-pointer">
              Cancellation Policy
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4 uppercase">
            Contact Us
          </h4>
          <p className="text-sm mb-3 flex items-center gap-2">
            <FaEnvelope /> help@4Nine.in
          </p>
          <p className="text-sm mb-3">
            ✔ Guaranteed Response Time
            <br />
            <span className="text-gray-400">Within 24–48 Hours</span>
          </p>
          <p className="text-sm">
            🕘 Mon – Sat: 9:30 AM – 6:30 PM
          </p>
        </div>

        {/* Customer Service */}
        <div>
          <h4 className="text-white font-semibold mb-4 uppercase">
            Customer Service
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer">Track Your Order</li>
            <li className="hover:text-white cursor-pointer">
              Download Invoice
            </li>
            <li className="hover:text-white cursor-pointer">FAQs</li>
            <li className="hover:text-white cursor-pointer">Support Center</li>
          </ul>
        </div>

        {/* Address */}
        <div>
          <h4 className="text-white font-semibold mb-4 uppercase">
            Registered Warehouse Address
          </h4>
          <p className="text-sm text-gray-400 leading-relaxed mb-4">
            23–24, Industrial Area,
            <br />
            Fashion Hub Street,
            <br />
            Surat, Gujarat – 395006
          </p>

          {/* Social Icons */}
          <div className="flex gap-3">
            {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube].map(
              (Icon, i) => (
                <div
                  key={i}
                  className="w-9 h-9 flex items-center justify-center border border-gray-600 rounded-full hover:bg-white hover:text-black cursor-pointer transition"
                >
                  <Icon size={14} />
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-400">
          © 2025 4NineStore. Made with ❤️ in India
        </p>

        {/* Payment Icons */}
        <div className="flex gap-3 text-gray-500 text-xs">
          <span className="px-3 py-1 border border-gray-700 rounded">
            VISA
          </span>
          <span className="px-3 py-1 border border-gray-700 rounded">
            GPay
          </span>
          <span className="px-3 py-1 border border-gray-700 rounded">
            Paytm
          </span>
          <span className="px-3 py-1 border border-gray-700 rounded">
            RuPay
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
