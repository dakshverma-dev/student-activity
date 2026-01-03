import Link from 'next/link';
import { Instagram, Twitter, Linkedin, Youtube, Mail } from 'lucide-react';

const quickLinks = [
    { href: '/houses', label: 'Houses' },
    { href: '/societies', label: 'Societies' },
    { href: '/events', label: 'Events' },
    { href: '/calendar', label: 'Calendar' },
];

const resourceLinks = [
    { href: '/resources', label: 'Guidelines' },
    { href: '/faq', label: 'FAQ' },
    { href: '/verify', label: 'Verify Certificate' },
    { href: '/paradox', label: 'Paradox' },
];

const socialLinks = [
    { href: '#', icon: Instagram, label: 'Instagram' },
    { href: '#', icon: Twitter, label: 'Twitter' },
    { href: '#', icon: Linkedin, label: 'LinkedIn' },
    { href: '#', icon: Youtube, label: 'YouTube' },
];

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <Link href="/" className="footer-logo">
                            <span className="navbar-logo-icon">SA</span>
                            <span>Student Activities</span>
                        </Link>
                        <p className="footer-description">
                            The non-academic ecosystem for IITM BS students. Building community through
                            Houses, Societies, Events, and shared experiences.
                        </p>
                    </div>

                    <div>
                        <h4 className="footer-heading">Quick Links</h4>
                        <div className="footer-links">
                            {quickLinks.map((link) => (
                                <Link key={link.href} href={link.href} className="footer-link">
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="footer-heading">Resources</h4>
                        <div className="footer-links">
                            {resourceLinks.map((link) => (
                                <Link key={link.href} href={link.href} className="footer-link">
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="footer-heading">Contact</h4>
                        <div className="footer-links">
                            <a href="mailto:studentactivities@study.iitm.ac.in" className="footer-link">
                                studentactivities@study.iitm.ac.in
                            </a>
                            <Link href="/resources#grievance" className="footer-link">
                                Submit Grievance
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © {new Date().getFullYear()} Student Activities, IITM BS. All rights reserved.
                    </p>
                    <div className="footer-socials">
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                className="footer-social"
                                aria-label={social.label}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <social.icon size={18} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
