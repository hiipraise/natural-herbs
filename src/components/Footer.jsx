// components/Footer.jsx
import React from 'react';
import { Leaf, Phone, Mail, MapPin } from 'lucide-react';

const Footer = ({ setCurrentPage }) => {
  const navigation = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
    { name: 'Place Order', id: 'order' }
  ];

  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Leaf className="w-8 h-8 text-amber-500" />
              <div>
                <h3 className="font-bold text-lg">Dr. Chalopa</h3>
                <p className="text-sm text-gray-400">Natural Healthcare</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Your health is your wealth. Natural solutions for a healthier life.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className="block text-gray-400 hover:text-amber-500 transition text-sm"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Treatments</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Herpes Treatment</p>
              <p>PCOS Care</p>
              <p>Candidiasis Cure</p>
              <p>Psoriasis Treatment</p>
              <p>HPV Treatment</p>
              <p>ALS Treatment</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-gray-400">
                <Phone size={16} />
                <span>+1 (448) 200-8706</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Mail size={16} />
                <span>drchalopa@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin size={16} />
                <span>Coconut Creek, FL 33036</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2026 Dr. Chalopa Natural Healthcare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;