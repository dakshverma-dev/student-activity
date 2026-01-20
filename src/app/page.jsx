import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import SectionHeader from '@/components/SectionHeader';
import { EventCard, HouseCard, QuickLinkCard } from '@/components/Card';
import {
    Home as HomeIcon,
    Users,
    Calendar,
    FileText,
    HelpCircle,
    CheckCircle,
    ArrowRight,
    Sparkles,
    Heart,
} from 'lucide-react';
import Link from 'next/link';

// Sample events based on IITM BS activities
const upcomingEvents = [
    { id: 1, title: 'Paradox in Margazhi', date: '15', month: 'Jan', host: 'Student Activities', type: 'online', isUpcoming: true },
    { id: 2, title: 'Inter-House Quiz by WYZ Kids', date: '22', month: 'Jan', host: 'WYZ Kids', type: 'online', isUpcoming: true },
    { id: 3, title: 'AKORD Open Mic Night', date: '28', month: 'Jan', host: 'AKORD Music Society', type: 'online', isUpcoming: true },
    { id: 4, title: 'Cosmos Tech Talk', date: '05', month: 'Feb', host: 'Cosmos', type: 'online', isUpcoming: true },
];

// Featured Houses (correct names from IITM BS - named after Indian forests)
const featuredHouses = [
    { name: 'Kaziranga', tagline: 'Strength in Unity', location: 'Assam' },
    { name: 'Corbett', tagline: 'Legacy of Champions', location: 'Uttarakhand' },
    { name: 'Nilgiri', tagline: 'Blue Mountain Spirit', location: 'Tamil Nadu' },
    { name: 'Sundarbans', tagline: 'Where Land Meets Sea', location: 'West Bengal' },
];

const quickLinks = [
    { title: 'Houses', icon: <HomeIcon size={22} />, href: '/houses' },
    { title: 'Societies', icon: <Users size={22} />, href: '/societies' },
    { title: 'Calendar', icon: <Calendar size={22} />, href: '/calendar' },
    { title: 'Resources', icon: <FileText size={22} />, href: '/resources' },
    { title: 'FAQ', icon: <HelpCircle size={22} />, href: '/faq' },
    { title: 'Verify', icon: <CheckCircle size={22} />, href: '/verify' },
];

const pillars = [
    {
        icon: <HomeIcon size={28} />,
        title: '12 Houses',
        description: 'Named after India\'s forests — Kaziranga, Corbett, Nilgiri, Sundarbans & more. Compete for points, earn glory, and become champions.',
        link: '/houses',
        linkText: 'Explore Houses'
    },
    {
        icon: <Users size={28} />,
        title: '21+ Societies',
        description: 'From AKORD (Music) to Cosmos (Tech) to Sahityika (Literary) — find your passion.'
    },
    {
        icon: <Calendar size={28} />,
        title: 'Paradox Festival',
        description: 'Three fests per year: Paradox in Saavan (Sept), Margazhi (Jan), and the mega offline Paradox on campus.'
    },
    {
        icon: <Heart size={28} />,
        title: 'Wellbeing & Support',
        description: 'RAAHAT wellness society, grievance redressal, and community support for all students.'
    },
];

export default function HomePage() {
    return (
        <>
            <Navbar />

            <main className="pt-nav">
                {/* Hero Section */}
                <HeroSection
                    eyebrow="ADMISSIONS OPEN FOR 2026"
                    titleAccent="Student"
                    titleSuffix="Experience."
                    description="Join a vibrant ecosystem where academic rigor meets creative freedom. More than just a degree— it's a global community."
                    primaryCta="Explore Campus Life"
                    primaryCtaHref="/houses"
                    secondaryCta="Watch the Film"
                    secondaryCtaHref="/paradox"
                />

                {/* Overview Section */}
                <section className="section bg-white">
                    <div className="container">
                        <SectionHeader
                            eyebrow="What We Do"
                            title="Building Community Beyond Academics"
                            subtitle="Student Activities is your gateway to the vibrant non-academic life at IITM BS. We foster leadership, creativity, and belonging."
                            centered
                        />

                        <div className="feature-grid">
                            {pillars.map((pillar, index) => (
                                <div key={index} className="feature-card">
                                    <div className="feature-icon">
                                        {pillar.icon}
                                    </div>
                                    <h3 className="feature-title">{pillar.title}</h3>
                                    <p className="feature-text">{pillar.description}</p>
                                    {pillar.link && (
                                        <Link href={pillar.link} className="feature-link">
                                            {pillar.linkText} <ArrowRight size={14} />
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Upcoming Events Section */}
                <section className="section" style={{ background: 'var(--color-cream)' }}>
                    <div className="container">
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-end',
                            marginBottom: 'var(--space-12)',
                            flexWrap: 'wrap',
                            gap: 'var(--space-6)'
                        }}>
                            <div>
                                <SectionHeader
                                    eyebrow="What's Happening"
                                    title="Upcoming Events"
                                    subtitle="Don't miss out on the latest activities and competitions."
                                />
                            </div>
                            <Link href="/events" className="btn btn-secondary" style={{ flexShrink: 0, marginBottom: 'var(--space-16)' }}>
                                View All Events <ArrowRight size={16} />
                            </Link>
                        </div>

                        <div className="grid grid-cols-2" style={{ gap: 'var(--space-5)' }}>
                            {upcomingEvents.map((event) => (
                                <EventCard
                                    key={event.id}
                                    title={event.title}
                                    date={event.date}
                                    month={event.month}
                                    host={event.host}
                                    type={event.type}
                                    isUpcoming={event.isUpcoming}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* The Scoop Section */}
                <section className="section bg-white">
                    <div className="container">
                        <div className="scoop-header">
                            <div className="scoop-header-left">
                                <span className="section-eyebrow">WHAT WE DO</span>
                                <h2 className="scoop-title">
                                    The Scoop:<br />
                                    More Than Just Code.
                                </h2>
                            </div>
                            <p className="scoop-description">
                                Dive into a world of clubs, societies, and houses designed to foster holistic growth and lifelong friendships.
                            </p>
                        </div>

                        <div className="scoop-grid">
                            {/* Main Card - Student Clubs */}
                            <div className="scoop-card scoop-card-main">
                                <img src="/student-clubs.png" alt="Student Clubs" className="scoop-card-main-image" />
                                <div className="scoop-card-overlay">
                                    <span className="scoop-badge">Featured</span>
                                    <h3 className="scoop-card-title-overlay">Student Clubs</h3>
                                    <p className="scoop-card-text-overlay">
                                        From debate to dance, find your tribe. With over 50 active clubs, your passion has a home here.
                                    </p>
                                    <Link href="/societies" className="scoop-link-overlay">
                                        Browse Clubs <ArrowRight size={14} />
                                    </Link>
                                </div>
                            </div>

                            {/* Right Column */}
                            <div className="scoop-right">
                                {/* Tech Societies Card */}
                                <div className="scoop-card scoop-card-dark">
                                    <div className="scoop-card-icon">⚙️</div>
                                    <img src="/tech-societies.png" alt="Tech" className="scoop-card-bg-image" />
                                    <div className="scoop-card-content">
                                        <h3 className="scoop-card-title-light">Tech Societies</h3>
                                        <p className="scoop-card-text-light">
                                            Pushing the boundaries of innovation through collaborative projects.
                                        </p>
                                    </div>
                                </div>

                                {/* House System Card */}
                                <div className="scoop-card scoop-card-light">
                                    <h3 className="scoop-card-title">House System</h3>
                                    <p className="scoop-card-text">
                                        A sense of belonging and friendly competition. Which house will you champion?
                                    </p>
                                    <div className="scoop-house-colors">
                                        <span className="scoop-color scoop-color-red">K</span>
                                        <span className="scoop-color scoop-color-blue">C</span>
                                        <span className="scoop-color scoop-color-green">N</span>
                                        <span className="scoop-color scoop-color-yellow">S</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                {/* Quick Links Section */}
                <section className="section" style={{ background: 'var(--color-off-white)' }}>
                    <div className="container">
                        <SectionHeader
                            title="Quick Access"
                            subtitle="Navigate to key sections of Student Activities."
                            centered
                        />

                        <div className="quick-links-grid">
                            {quickLinks.map((link) => (
                                <QuickLinkCard
                                    key={link.title}
                                    title={link.title}
                                    icon={link.icon}
                                    href={link.href}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="section" style={{
                    background: 'linear-gradient(135deg, var(--color-maroon) 0%, var(--color-maroon-dark) 100%)',
                    color: 'var(--color-white)',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <div style={{
                        position: 'absolute',
                        top: '-50%',
                        right: '-10%',
                        width: '500px',
                        height: '500px',
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(215, 167, 80, 0.1) 0%, transparent 70%)',
                    }} />
                    <div style={{
                        position: 'absolute',
                        bottom: '-30%',
                        left: '-5%',
                        width: '400px',
                        height: '400px',
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 70%)',
                    }} />

                    <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                        <div style={{
                            maxWidth: '640px',
                            margin: '0 auto',
                            textAlign: 'center'
                        }}>
                            <div style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 'var(--space-2)',
                                padding: 'var(--space-2) var(--space-4)',
                                background: 'rgba(215, 167, 80, 0.2)',
                                borderRadius: 'var(--radius-full)',
                                marginBottom: 'var(--space-6)',
                                fontSize: 'var(--text-sm)',
                                fontWeight: 600,
                                color: 'var(--color-gold-light)',
                            }}>
                                <Sparkles size={16} /> Take Leadership
                            </div>

                            <h2 style={{
                                fontSize: 'var(--text-4xl)',
                                fontWeight: 800,
                                fontFamily: 'var(--font-heading)',
                                marginBottom: 'var(--space-5)',
                                letterSpacing: '-0.02em'
                            }}>
                                Ready to Make Your Mark?
                            </h2>

                            <p style={{
                                fontSize: 'var(--text-lg)',
                                color: 'rgba(255,255,255,0.8)',
                                marginBottom: 'var(--space-10)',
                                lineHeight: 1.7
                            }}>
                                Become a Regional Coordinator, House Secretary, or Society Lead. Shape the student experience at IITM BS.
                            </p>

                            <div className="flex justify-center gap-4">
                                <Link href="/por" className="btn btn-lg" style={{
                                    background: 'var(--color-white)',
                                    color: 'var(--color-maroon)',
                                    border: 'none',
                                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)'
                                }}>
                                    Explore POR
                                </Link>
                                <Link href="/paradox" className="btn btn-lg" style={{
                                    background: 'transparent',
                                    color: 'var(--color-white)',
                                    borderColor: 'rgba(255,255,255,0.3)'
                                }}>
                                    View Paradox
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
