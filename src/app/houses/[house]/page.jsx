import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeader from '@/components/SectionHeader';
import { EventCard } from '@/components/Card';
import Badge from '@/components/Badge';
import Link from 'next/link';
import { Instagram, MessageCircle, Mail, ExternalLink, Users, Award, Calendar } from 'lucide-react';

// House data - in production would come from API/CMS
const housesData = {
    'kaveri': {
        name: 'Kaveri',
        tagline: 'Spirit of Excellence',
        color: '#1E40AF',
        description: 'House Kaveri embodies the spirit of excellence and academic prowess. Named after the great river that flows through South India, our house represents the continuous flow of knowledge, innovation, and achievement.',
        values: ['Excellence', 'Innovation', 'Collaboration', 'Integrity'],
        memberCount: 850,
        points: 2450,
        rank: 1,
        leadership: [
            { role: 'Resident Coordinator', name: 'Dr. Priya Sharma' },
            { role: 'House Secretary', name: 'Aditya Kumar' },
            { role: 'Deputy Secretary', name: 'Sneha Patel' },
        ],
        socials: {
            instagram: '#',
            discord: '#',
            email: 'kaveri@study.iitm.ac.in',
            website: '#',
        }
    },
    'ganga': {
        name: 'Ganga',
        tagline: 'Flow with Purpose',
        color: '#0891B2',
        description: 'House Ganga represents the sacred river that nurtures millions. We stand for purpose, dedication, and the relentless pursuit of our goals while supporting each other along the journey.',
        values: ['Purpose', 'Dedication', 'Support', 'Growth'],
        memberCount: 820,
        points: 2150,
        rank: 4,
        leadership: [
            { role: 'Resident Coordinator', name: 'Prof. Rajesh Menon' },
            { role: 'House Secretary', name: 'Priya Nair' },
            { role: 'Deputy Secretary', name: 'Vikram Singh' },
        ],
        socials: {
            instagram: '#',
            discord: '#',
            email: 'ganga@study.iitm.ac.in',
            website: '#',
        }
    },
    // Add more houses as needed - using Kaveri as default for demo
};

// Sample events
const upcomingEvents = [
    { id: 1, title: 'Inter-House Quiz Competition', date: '22', month: 'Jan', host: 'Kaveri House', type: 'offline', isUpcoming: true },
    { id: 2, title: 'House Cultural Night', date: '30', month: 'Jan', host: 'Kaveri House', type: 'offline', isUpcoming: true },
];

const pastEvents = [
    { id: 3, title: 'Freshers Welcome Party', date: '15', month: 'Dec', host: 'Kaveri House', type: 'online', isUpcoming: false },
    { id: 4, title: 'Sports Tournament Finals', date: '08', month: 'Dec', host: 'Kaveri House', type: 'offline', isUpcoming: false },
];

export default function HouseDetailPage({ params }) {
    const houseSlug = params.house;
    const house = housesData[houseSlug] || housesData['kaveri']; // Default to Kaveri for demo

    return (
        <>
            <Navbar />

            <main className="pt-nav">
                {/* Hero Section */}
                <section className="hero" style={{
                    background: `linear-gradient(135deg, ${house.color}15 0%, var(--color-off-white) 50%, var(--color-white) 100%)`,
                }}>
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        background: `linear-gradient(90deg, ${house.color} 0%, var(--color-gold) 100%)`,
                    }} />
                    <div className="container">
                        <div className="flex gap-8 items-center">
                            <div style={{
                                width: '120px',
                                height: '120px',
                                borderRadius: 'var(--radius-2xl)',
                                backgroundColor: house.color,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                fontSize: 'var(--text-4xl)',
                                fontWeight: 'bold',
                                flexShrink: 0,
                            }}>
                                {house.name.charAt(0)}
                            </div>
                            <div>
                                <Badge variant="house" style={{ marginBottom: 'var(--space-4)' }}>House</Badge>
                                <h1 className="h1" style={{ marginBottom: 'var(--space-2)' }}>House {house.name}</h1>
                                <p style={{ fontSize: 'var(--text-xl)', color: 'var(--color-grey)' }}>{house.tagline}</p>
                                <div className="flex gap-6 mt-6">
                                    <div className="flex items-center gap-2">
                                        <Users size={18} style={{ color: 'var(--color-grey)' }} />
                                        <span style={{ fontWeight: 500 }}>{house.memberCount}+ Members</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Award size={18} style={{ color: 'var(--color-gold)' }} />
                                        <span style={{ fontWeight: 500 }}>Rank #{house.rank}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span style={{ fontWeight: 700, color: 'var(--color-maroon)', fontSize: 'var(--text-lg)' }}>
                                            {house.points.toLocaleString()} pts
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section className="section bg-white">
                    <div className="container">
                        <div className="grid grid-cols-3" style={{ gap: 'var(--space-12)' }}>
                            {/* Main Content */}
                            <div style={{ gridColumn: 'span 2' }}>
                                <SectionHeader
                                    eyebrow="About"
                                    title={`About House ${house.name}`}
                                />
                                <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-grey)', marginBottom: 'var(--space-8)', lineHeight: 1.7 }}>
                                    {house.description}
                                </p>

                                <h3 className="h4" style={{ marginBottom: 'var(--space-4)' }}>Our Values</h3>
                                <div className="flex gap-3" style={{ flexWrap: 'wrap', marginBottom: 'var(--space-8)' }}>
                                    {house.values.map((value) => (
                                        <span key={value} className="badge" style={{
                                            backgroundColor: `${house.color}15`,
                                            color: house.color,
                                            padding: 'var(--space-2) var(--space-4)',
                                            fontSize: 'var(--text-sm)',
                                        }}>
                                            {value}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Sidebar - Leadership */}
                            <div>
                                <div className="card" style={{ padding: 'var(--space-6)' }}>
                                    <h3 className="h4" style={{ marginBottom: 'var(--space-6)' }}>Leadership</h3>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                                        {house.leadership.map((leader, index) => (
                                            <div key={index}>
                                                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-grey)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 'var(--space-1)' }}>
                                                    {leader.role}
                                                </p>
                                                <p style={{ fontWeight: 600, color: 'var(--color-charcoal)' }}>{leader.name}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <hr style={{ margin: 'var(--space-6) 0', border: 'none', borderTop: '1px solid var(--color-grey-lighter)' }} />

                                    <h4 style={{ fontWeight: 600, marginBottom: 'var(--space-4)' }}>Connect With Us</h4>
                                    <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
                                        <a href={house.socials.instagram} className="btn-icon" aria-label="Instagram">
                                            <Instagram size={20} />
                                        </a>
                                        <a href={house.socials.discord} className="btn-icon" aria-label="Discord">
                                            <MessageCircle size={20} />
                                        </a>
                                        <a href={`mailto:${house.socials.email}`} className="btn-icon" aria-label="Email">
                                            <Mail size={20} />
                                        </a>
                                        <a href={house.socials.website} className="btn-icon" aria-label="Website">
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Events Section */}
                <section className="section bg-off-white">
                    <div className="container">
                        <SectionHeader
                            eyebrow="Events"
                            title="House Events"
                            subtitle="Upcoming and past events organized by our house."
                        />

                        <div className="tabs">
                            <button className="tab active">Upcoming</button>
                            <button className="tab">Past Events</button>
                        </div>

                        <div className="grid grid-cols-2">
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

                {/* CTA */}
                <section className="section bg-white text-center">
                    <div className="container">
                        <h2 className="h3" style={{ marginBottom: 'var(--space-4)' }}>
                            Proud Member of House {house.name}?
                        </h2>
                        <p style={{ color: 'var(--color-grey)', marginBottom: 'var(--space-6)' }}>
                            Join the conversation and stay updated with house activities.
                        </p>
                        <div className="flex justify-center gap-4">
                            <a href={house.socials.discord} className="btn btn-primary">
                                Join Discord
                            </a>
                            <Link href="/events" className="btn btn-secondary">
                                View All Events
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
