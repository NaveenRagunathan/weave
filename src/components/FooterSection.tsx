
import React from 'react';
import { Linkedin, Twitter, MessageCircle, Smartphone } from 'lucide-react'; // Using MessageCircle for WeChat, Smartphone for WhatsApp

const FooterSection = () => {
  const footerLinksConfig = {
    'WEAVE': ['About', 'Products', 'Corridors', 'Developers', 'Media Kit', 'Contact'],
    'Legal & Support': ['Legal', 'Careers', 'Investors', 'Community'],
  };

  const socialLinksConfig = [
    { name: 'LinkedIn', href: '#', Icon: Linkedin },
    { name: 'X (Twitter)', href: '#', Icon: Twitter },
    { name: 'WeChat', href: '#', Icon: MessageCircle }, // Generic message icon
    { name: 'WhatsApp', href: '#', Icon: Smartphone }, // Generic phone icon
  ];

  return (
    <footer className="bg-ink-black border-t border-gray-800">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"> {/* Adjusted grid for fewer categories */}
          {Object.entries(footerLinksConfig).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-jade-flow-400 uppercase tracking-wide mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-pearl-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
           {/* Social Links Column for consistency on larger screens */}
           <div className="md:col-start-3 lg:col-start-auto">
             <h3 className="text-sm font-semibold text-jade-flow-400 uppercase tracking-wide mb-4">Connect</h3>
              <div className="flex items-center space-x-5">
                {socialLinksConfig.map((social) => {
                  const SocialIcon = social.Icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className="text-gray-400 hover:text-jade-flow-400 transition-colors duration-200"
                      aria-label={social.name}
                    >
                      <SocialIcon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
           </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Logo and Copyright */}
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-jade-flow-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">W</span>
              </div>
              <div>
                <div className="text-pearl-white font-semibold">WEAVE Financial Systems</div>
                <div className="text-gray-400 text-sm">© 2025 WEAVE Financial Systems</div>
              </div>
            </div>

            {/* Tagline */}
            <div className="text-gray-400 text-sm">
              “Capital. Trust. Growth.”
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
