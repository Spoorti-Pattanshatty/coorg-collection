import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white px-6 py-12">

      <div className="grid md:grid-cols-4 gap-8">

        <div>
          <h3 className="font-bold text-lg mb-4">Shop</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li>Desi Ghee</li>
            <li>Lifestyle</li>
            <li>Pantry Essentials</li>
            <li>Munchies & Cereals</li>
            <li>Diwali Gift Ideas</li>
            <li>Our Collections</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Useful Links</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li>Our Story</li>
            <li>Video Testimonials</li>
            <li>Cart</li>
            <li>Get in Touch</li>
            <li>My Account</li>
            <li>Authors</li>
            <li>Help</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Policies</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li>Privacy Policy</li>
            <li>Shipping Policy</li>
            <li>Return Policy</li>
            <li>Terms of Service</li>
            <li>APPI Compliance</li>
            <li>CCPA Compliance</li>
            <li>GDPR Compliance</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li>📞 Call: +91-98567 48363</li>
            <li>💬 WhatsApp: +91-98657 87657</li>
            <li>📧 Email: info@xyz.com</li>
            <li>🕒 Mon - Sun | 9AM - 8PM</li>
          </ul>

          <div className="flex gap-4 mt-4">
  <a
    href="https://facebook.com"
    target="_blank"
    className="bg-white text-green-900 p-2 rounded-full hover:scale-110 transition"
  >
    <FaFacebookF />
  </a>

  <a
    href="https://instagram.com"
    target="_blank"
    className="bg-white text-green-900 p-2 rounded-full hover:scale-110 transition"
  >
    <FaInstagram />
  </a>
  </div>
        </div>

      </div>

      <div className="border-t border-green-700 mt-10 pt-6 text-center text-sm text-gray-300">
        © 2025, Coorg Collection. All Rights Reserved.
      </div>

    </footer>
  );
}