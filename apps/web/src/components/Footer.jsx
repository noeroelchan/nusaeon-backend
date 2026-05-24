import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Globe, MessageCircle } from 'lucide-react';
import Logo from '@/components/Logo.jsx';
export default function Footer() {
  const whatsappNumbers = [{
    number: '+62 878-8178-7788',
    link: 'https://wa.me/62878817877788',
    label: 'Primary'
  }, {
    number: '+62 857-1021-6756',
    link: 'https://wa.me/62857102167756',
    label: 'Secondary'
  }];
  return <footer className="bg-[hsl(var(--header-bg))] text-[hsl(var(--header-text))] pt-20 pb-10 border-t border-[hsl(var(--header-text))]/10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5 lg:col-span-4">
            <div className="mb-6 inline-block">
              <Logo className="h-12 w-auto" disableLink />
            </div>
            <p className="text-[hsl(var(--header-text))]/80 leading-relaxed max-w-sm mb-8">
              Solusi pengganti plastik konvensional untuk kebutuhan sampah, laundry, dan dapur yang ramah lingkungan.
            </p>
          </div>

          <div className="md:col-span-7 lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-12">
            <div>
              <h4 className="text-lg font-bold mb-6 tracking-wide text-[hsl(var(--header-text))]">Quick Links</h4>
              <ul className="flex flex-col gap-4">
                <li>
                  <Link to="/" className="text-[hsl(var(--header-text))]/80 hover:text-primary transition-colors duration-200">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="text-[hsl(var(--header-text))]/80 hover:text-primary transition-colors duration-200">
                    Produk Kami
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-[hsl(var(--header-text))]/80 hover:text-primary transition-colors duration-200">
                    Tentang Kami
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-[hsl(var(--header-text))]/80 hover:text-primary transition-colors duration-200">
                    Hubungi Kami
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 tracking-wide text-[hsl(var(--header-text))]">Hubungi Kami</h4>
              <ul className="flex flex-col gap-4 items-start">
                <li>
                  <p className="text-sm font-semibold text-[hsl(var(--header-text))]/70 mb-3 uppercase tracking-wider">WhatsApp</p>
                  <div className="flex flex-col gap-2">
                    {whatsappNumbers.map(wa => <a key={wa.number} href={wa.link} target="_blank" rel="noopener noreferrer" className="btn-whatsapp px-4 py-2.5 rounded-lg font-bold text-sm group inline-flex items-center gap-2 w-fit">
                        <MessageCircle className="h-4 w-4 shrink-0 group-hover:scale-110 transition-transform" />
                        <span>{wa.number}</span>
                        <span className="text-xs opacity-70">({wa.label})</span>
                      </a>)}
                  </div>
                </li>
                <li>
                  <a href="mailto:shesan@nusaeon.co.id" className="flex items-center gap-3 text-[hsl(var(--header-text))]/80 hover:text-primary transition-colors group mt-4">
                    <Mail className="h-5 w-5 shrink-0 group-hover:text-primary transition-colors" />
                    <span>Email: shesan@nusaeon.co.id</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.nusaeon.co.id" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[hsl(var(--header-text))]/80 hover:text-primary transition-colors group">
                    <Globe className="h-5 w-5 shrink-0 group-hover:text-primary transition-colors" />
                    <span>Website: www.nusaeon.co.id</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[hsl(var(--header-text))]/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[hsl(var(--header-text))]/60">
            © 2026 Nusaeon. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-sm text-[hsl(var(--header-text))]/60">
            <Link to="/privacy" className="hover:text-[hsl(var(--header-text))] transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[hsl(var(--header-text))] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>;
}