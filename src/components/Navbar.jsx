'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Home, Users, Calendar, FileText, CheckCircle } from 'lucide-react';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/student-life', label: 'Student Life' },
    { href: '/houses', label: 'Houses' },
    { href: '/societies', label: 'Societies' },
    { href: '/events', label: 'Events' },
    { href: '/resources', label: 'Resources' },
];

export default function Navbar() {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    const toggleMobileNav = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
    };

    const closeMobileNav = () => {
        setIsMobileNavOpen(false);
    };

    return (
        <>
            <nav className="navbar">
                <div className="container navbar-inner">
                    <Link href="/" className="navbar-logo">
                        <Image src="/logo.png" alt="IITM BS" width={40} height={40} style={{ objectFit: 'contain' }} />
                        <span>Student Activities</span>
                    </Link>


                    <div className="navbar-nav">
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href} className="navbar-link">
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <Link href="/verify" className="btn btn-primary btn-sm navbar-cta">
                        Verify Certificate
                    </Link>

                    <button
                        className="navbar-toggle"
                        onClick={toggleMobileNav}
                        aria-label="Toggle navigation"
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </nav>

            {/* Mobile Navigation Overlay */}
            <div
                className={`mobile-nav-overlay ${isMobileNavOpen ? 'open' : ''}`}
                onClick={closeMobileNav}
            />

            {/* Mobile Navigation */}
            <div className={`mobile-nav ${isMobileNavOpen ? 'open' : ''}`}>
                <div className="mobile-nav-header">
                    <Link href="/" className="navbar-logo" onClick={closeMobileNav}>
                        <span className="navbar-logo-icon">SA</span>
                        <span>Student Activities</span>
                    </Link>
                    <button className="btn-icon" onClick={closeMobileNav} aria-label="Close navigation">
                        <X size={24} />
                    </button>
                </div>

                <div className="mobile-nav-links">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="mobile-nav-link"
                            onClick={closeMobileNav}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="/verify"
                        className="btn btn-primary mt-4"
                        onClick={closeMobileNav}
                    >
                        Verify Certificate
                    </Link>
                </div>
            </div>
        </>
    );
}
