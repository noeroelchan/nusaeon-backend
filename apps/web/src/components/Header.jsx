import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle, LogOut, LayoutDashboard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Logo from '@/components/Logo.jsx';
import { useAuth } from '@/context/AuthContext.jsx';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { isAuthenticated, isAdmin, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Produk', path: '/products' },
    { name: 'Tentang Kami', path: '/about' },
    { name: 'Hubungi', path: '/contact' }
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 text-[hsl(var(--header-text))]",
        scrolled 
          ? "bg-[hsl(var(--header-bg))]/95 backdrop-blur-md border-b border-[hsl(var(--header-text))]/10 shadow-sm py-2" 
          : "bg-[hsl(var(--header-bg))] py-4"
      )}
    >
      <nav className="container-custom flex items-center justify-between">
        <div className="flex items-center">
          <Logo />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-bold transition-colors duration-200",
                isActive(link.path)
                  ? "text-primary"
                  : "text-[hsl(var(--header-text))]/80 hover:text-primary"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          {!isAuthenticated && (
            <Button asChild variant="ghost" className="text-sm font-semibold text-[hsl(var(--header-text))] hover:text-primary hover:bg-[hsl(var(--header-text))]/5">
              <Link to="/login">Admin Login</Link>
            </Button>
          )}
          {isAuthenticated && isAdmin && (
            <>
              <Button asChild variant="outline" size="sm" className="hidden lg:flex gap-2 bg-transparent text-[hsl(var(--header-text))] border-[hsl(var(--header-text))]/20 hover:bg-[hsl(var(--header-text))]/5 hover:text-primary">
                <Link to="/admin">
                  <LayoutDashboard className="h-4 w-4" />
                  Dashboard
                </Link>
              </Button>
              <Button variant="ghost" size="sm" onClick={logout} className="hidden lg:flex text-[hsl(var(--header-text))] hover:text-primary hover:bg-[hsl(var(--header-text))]/5">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </>
          )}
          <Button 
            asChild 
            className="btn-whatsapp font-bold rounded-md px-4 py-2"
          >
            <a href="https://wa.me/628111477006" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-4 w-4" />
              Chat WhatsApp
            </a>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-[hsl(var(--header-text))] hover:bg-[hsl(var(--header-text))]/5"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </nav>

      {/* Mobile Menu Content */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[hsl(var(--header-bg))] border-b border-[hsl(var(--header-text))]/10 shadow-lg py-4 px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "text-base font-bold py-2 px-4 rounded-lg transition-colors",
                isActive(link.path)
                  ? "bg-[hsl(var(--header-text))]/5 text-primary"
                  : "text-[hsl(var(--header-text))]/90 hover:bg-[hsl(var(--header-text))]/5 hover:text-primary"
              )}
            >
              {link.name}
            </Link>
          ))}

          <div className="h-px bg-[hsl(var(--header-text))]/10 my-2 w-full" />

          {!isAuthenticated && (
            <Button asChild variant="ghost" className="w-full justify-start font-semibold text-[hsl(var(--header-text))] hover:bg-[hsl(var(--header-text))]/5 hover:text-primary">
              <Link to="/login" onClick={() => setMobileMenuOpen(false)}>Admin Login</Link>
            </Button>
          )}
          {isAuthenticated && isAdmin && (
            <>
              <Button asChild variant="outline" className="w-full justify-start gap-2 bg-transparent text-[hsl(var(--header-text))] border-[hsl(var(--header-text))]/20 hover:bg-[hsl(var(--header-text))]/5 hover:text-primary">
                <Link to="/admin" onClick={() => setMobileMenuOpen(false)}>
                  <LayoutDashboard className="h-4 w-4" />
                  Dashboard
                </Link>
              </Button>
              <Button variant="ghost" className="w-full justify-start text-[hsl(var(--header-text))] hover:bg-[hsl(var(--header-text))]/5 hover:text-primary" onClick={() => { logout(); setMobileMenuOpen(false); }}>
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </>
          )}

          <Button asChild className="mt-2 w-full btn-whatsapp font-bold rounded-md py-2">
            <a href="https://wa.me/628111477006" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>
              <MessageCircle className="mr-2 h-4 w-4" />
              Chat WhatsApp
            </a>
          </Button>
        </div>
      )}
    </header>
  );
}