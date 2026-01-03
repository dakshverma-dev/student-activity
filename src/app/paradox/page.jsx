import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import SectionHeader from '@/components/SectionHeader';
import { EventCard } from '@/components/Card';
import Badge from '@/components/Badge';
import Link from 'next/link';
import { Calendar, Star, Trophy, Music, Camera, Gamepad2 } from 'lucide-react';

// Paradox info based on IITM BS guidelines
const paradoxInfo = {
    what: 'Paradox fest is organised by IITM BS students thrice in a year at the end of each academic term to showcase technical, cultural, and sports talents.',
    when: 'Paradox in Saavan (September) and Paradox in Margazhi (January) are online fests, while the main Paradox is an offline mega fest on campus.',
    who: 'All IITM BS students can participate! Events are open to individuals and house teams. Houses compete for championship points.',
    how: 'Register for individual events through the Paradox portal. Represent your house in inter-house competitions organized by various societies.',
};

const events = [
    { icon: <Trophy size={24} />, title: 'Inter-House Competitions', description: 'Quiz, debate, sports, coding, and more' },
    { icon: <Music size={24} />, title: 'Cultural Events', description: 'Music, dance, drama by societies' },
    { icon: <Camera size={24} />, title: 'Creative Contests', description: 'Art, photography, writing, fashion' },
    { icon: <Gamepad2 size={24} />, title: 'eSports & Gaming', description: 'By Heighers eSports Club' },
];

// Three Paradox editions per year
const editions = [
    { year: 'Margazhi 2025', theme: 'January Online Fest', status: 'upcoming', month: 'January' },
    { year: 'Saavan 2024', theme: 'September Online Fest', status: 'past', month: 'September' },
    { year: 'Main Paradox 2024', theme: 'Offline Campus Fest', status: 'past', month: 'March' },
    { year: 'Margazhi 2024', theme: 'January Online Fest', status: 'past', month: 'January' },
];

const timeline = [
    { date: 'Week 1', title: 'Registrations Open', description: 'Sign up for individual and team events' },
    { date: 'Week 2', title: 'Preliminary Rounds', description: 'Online qualifiers for major competitions' },
    { date: 'Week 3', title: 'Event Week', description: 'Main competitions and performances' },
    { date: 'Week 4', title: 'Grand Finale', description: 'Finals, awards, and closing ceremony' },
];

export default function ParadoxPage() {
    return (
        <>
            <Navbar />

            <main className="pt-nav">
                {/* Hero Section */}
                <section className="hero" style={{
                    background: 'linear-gradient(135deg, #1a0a09 0%, var(--color-maroon) 50%, #79201B 100%)',
                    color: 'var(--color-white)',
                    minHeight: '60vh',
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        background: 'linear-gradient(90deg, var(--color-gold) 0%, var(--color-white) 50%, var(--color-gold) 100%)',
                    }} />
                    <div className="container">
                        <div style={{ maxWidth: '720px' }}>
                            <Badge variant="upcoming" style={{ marginBottom: 'var(--space-6)' }}>Paradox in Margazhi 2025</Badge>
                            <h1 style={{
                                fontSize: 'var(--text-6xl)',
                                fontWeight: 800,
                                marginBottom: 'var(--space-4)',
                                fontFamily: 'var(--font-heading)',
                                letterSpacing: '-0.02em'
                            }}>
                                PARADOX
                            </h1>
                            <p style={{ fontSize: 'var(--text-xl)', opacity: 0.9, marginBottom: 'var(--space-8)' }}>
                                The flagship festival of IITM BS — showcasing technical, cultural, and sports talents. Three fests per year!
                            </p>
                            <div className="flex gap-4">
                                <Link href="/events" className="btn btn-lg" style={{
                                    backgroundColor: 'var(--color-gold)',
                                    color: 'var(--color-charcoal)',
                                    border: 'none'
                                }}>
                                    View Events
                                </Link>
                                <Link href="#about" className="btn btn-lg" style={{
                                    backgroundColor: 'transparent',
                                    color: 'var(--color-white)',
                                    borderColor: 'rgba(255,255,255,0.5)'
                                }}>
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What is Paradox */}
                <section className="section bg-white" id="about">
                    <div className="container">
                        <SectionHeader
                            eyebrow="About"
                            title="What / When / How / Who"
                            centered
                        />

                        <div className="grid grid-cols-2" style={{ gap: 'var(--space-6)' }}>
                            <div className="card" style={{ padding: 'var(--space-6)' }}>
                                <h3 className="h4" style={{ color: 'var(--color-maroon)', marginBottom: 'var(--space-3)' }}>What is Paradox?</h3>
                                <p style={{ color: 'var(--color-grey)' }}>{paradoxInfo.what}</p>
                            </div>
                            <div className="card" style={{ padding: 'var(--space-6)' }}>
                                <h3 className="h4" style={{ color: 'var(--color-maroon)', marginBottom: 'var(--space-3)' }}>When is it held?</h3>
                                <p style={{ color: 'var(--color-grey)' }}>{paradoxInfo.when}</p>
                            </div>
                            <div className="card" style={{ padding: 'var(--space-6)' }}>
                                <h3 className="h4" style={{ color: 'var(--color-maroon)', marginBottom: 'var(--space-3)' }}>Who can participate?</h3>
                                <p style={{ color: 'var(--color-grey)' }}>{paradoxInfo.who}</p>
                            </div>
                            <div className="card" style={{ padding: 'var(--space-6)' }}>
                                <h3 className="h4" style={{ color: 'var(--color-maroon)', marginBottom: 'var(--space-3)' }}>How to participate?</h3>
                                <p style={{ color: 'var(--color-grey)' }}>{paradoxInfo.how}</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Event Types - Run by Societies */}
                <section className="section" style={{ background: 'var(--color-cream)' }}>
                    <div className="container">
                        <SectionHeader
                            eyebrow="Events"
                            title="What to Expect"
                            subtitle="Events are organized by societies and houses, with inter-house competitions contributing to championship points."
                            centered
                        />

                        <div className="grid grid-cols-4">
                            {events.map((event, index) => (
                                <div key={index} className="card" style={{ padding: 'var(--space-6)', textAlign: 'center' }}>
                                    <div style={{
                                        width: '56px',
                                        height: '56px',
                                        margin: '0 auto var(--space-4)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        backgroundColor: 'var(--color-maroon)',
                                        borderRadius: 'var(--radius-lg)',
                                        color: 'var(--color-white)'
                                    }}>
                                        {event.icon}
                                    </div>
                                    <h3 style={{ fontWeight: 600, marginBottom: 'var(--space-2)' }}>{event.title}</h3>
                                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-grey)' }}>{event.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Timeline */}
                <section className="section bg-white" id="timeline">
                    <div className="container">
                        <SectionHeader
                            eyebrow="Schedule"
                            title="Typical Paradox Timeline"
                            subtitle="Each Paradox spans about a month of activities and competitions."
                            centered
                        />

                        <div className="timeline" style={{ maxWidth: '600px', margin: '0 auto' }}>
                            {timeline.map((item, index) => (
                                <div key={index} className="timeline-item">
                                    <div className="timeline-marker" />
                                    <div className="timeline-content">
                                        <span className="timeline-date">{item.date}</span>
                                        <h4 className="timeline-title">{item.title}</h4>
                                        <p className="timeline-description">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Past & Upcoming Editions */}
                <section className="section" style={{ background: 'var(--color-cream)' }}>
                    <div className="container">
                        <SectionHeader
                            eyebrow="Editions"
                            title="Paradox Through the Year"
                            subtitle="Three fests per academic year: Saavan (September), Margazhi (January), and the main offline Paradox."
                            centered
                        />

                        <div className="grid grid-cols-4">
                            {editions.map((edition, index) => (
                                <div key={index} className="card" style={{
                                    padding: 'var(--space-6)',
                                    textAlign: 'center',
                                    borderTop: edition.status === 'upcoming' ? '3px solid var(--color-gold)' : '3px solid var(--color-grey-lighter)'
                                }}>
                                    <Badge variant={edition.status === 'upcoming' ? 'upcoming' : 'past'} style={{ marginBottom: 'var(--space-3)' }}>
                                        {edition.status === 'upcoming' ? 'Upcoming' : edition.month}
                                    </Badge>
                                    <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-2)' }}>
                                        {edition.year}
                                    </h3>
                                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-grey)' }}>{edition.theme}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="section bg-white text-center">
                    <div className="container">
                        <h2 className="h3" style={{ marginBottom: 'var(--space-4)' }}>
                            Ready to Participate?
                        </h2>
                        <p style={{ color: 'var(--color-grey)', marginBottom: 'var(--space-6)', maxWidth: '500px', margin: '0 auto var(--space-6)' }}>
                            Check out upcoming events, join a society, and represent your house!
                        </p>
                        <div className="flex justify-center gap-4">
                            <Link href="/events" className="btn btn-primary">
                                View Events
                            </Link>
                            <Link href="/societies" className="btn btn-secondary">
                                Join a Society
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
