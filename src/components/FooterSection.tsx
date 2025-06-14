
import React from 'react';
import { Button } from '@/components/ui/button';

const FooterSection = () => {
  const footerLinks = {
    'Company': ['About', 'Careers', 'Media Kit', 'Contact'],
    'Products': ['WEAVE Flow', 'WEAVE Vault', 'WEAVE Bridge', 'WEAVE Pulse'],
    'Markets': ['China-Africa', 'China-Latin America', 'China-Southeast Asia', 'All Corridors'],
    'Developers': ['API Docs', 'SDKs', 'Webhooks', 'Support'],
    'Resources': ['Blog', 'Case Studies', 'White Papers', 'Community'],
    'Legal': ['Privacy Policy', 'Terms of Service', 'Compliance', 'Licenses']
  };

  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: '💼' },
    { name: 'X (Twitter)', href: '#', icon: '🐦' },
    { name: 'WeChat', href: '#', icon: '💬' },
    { name: 'WhatsApp', href: '#', icon: '📱' }
  ];

  return (
    <footer className="bg-ink-black border-t border-gray-800">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {Object.entries(footerLinks).map(([category, links]) => (
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
                <div className="text-gray-400 text-sm">Capital. Trust. Growth.</div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-jade-flow-400 transition-colors duration-200"
                  aria-label={social.name}
                >
                  <span className="text-xl">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 WEAVE Financial Systems. All rights reserved. 
              <span className="mx-2">•</span>
              Building the financial infrastructure for the next world economy.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
