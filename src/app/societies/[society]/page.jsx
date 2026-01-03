import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeader from '@/components/SectionHeader';
import { EventCard } from '@/components/Card';
import Badge from '@/components/Badge';
import Link from 'next/link';
import { Instagram, MessageCircle, Mail, ExternalLink, Users, Calendar, Target } from 'lucide-react';

// Society data - in production would come from API/CMS
const societiesData = {
    'music-society': {
        name: 'Music Society',
        tagline: 'Celebrating music in all its forms',
        category: 'Cultural',
        description: 'The IITM BS Music Society is a vibrant community of music enthusiasts, performers, and creators. We celebrate all genres and forms of music, from classical Indian to contemporary Western, instrumental to vocal. Our mission is to provide a platform for students to express themselves through music and foster a culture of musical appreciation.',
        activities: ['Weekly jam sessions', 'Monthly open mics', 'Music production workshops', 'Collaboration events', 'Annual concert'],
        memberCount: 320,
        leadership: [
            { role: 'Society Coordinator', name: 'Arjun Mehta' },
            { role: 'Secretary', name: 'Kavitha Rajan' },
            { role: 'Treasurer', name: 'Rohit Sharma' },
        ],
        socials: {
            instagram: '#',
            discord: '#',
            email: 'music@societies.iitm.ac.in',
            website: '#',
        }
    },
    'coding-club': {
        name: 'Coding Club',
        tagline: 'Building the future, one line at a time',
        category: 'Technical',
        description: 'The Coding Club is the largest technical society at IITM BS. We focus on helping students improve their programming skills, participate in competitive coding, and build real-world projects. From beginners to advanced coders, everyone is welcome.',
        activities: ['Weekly coding contests', 'Hackathons', 'Project showcases', 'Interview prep sessions', 'Open source contributions'],
        memberCount: 580,
        leadership: [
            { role: 'Society Coordinator', name: 'Vikram Reddy' },
            { role: 'Secretary', name: 'Ananya Gupta' },
            { role: 'Technical Lead', name: 'Karthik Nair' },
        ],
        socials: {
            instagram: '#',
            discord: '#',
            email: 'coding@societies.iitm.ac.in',
            website: '#',
        }
    },
};

// Sample events
const upcomingEvents = [
    { id: 1, title: 'Open Mic Night', date: '25', month: 'Jan', host: 'Music Society', type: 'offline', isUpcoming: true },
    { id: 2, title: 'Genre Spotlight: Jazz', date: '01', month: 'Feb', host: 'Music Society', type: 'online', isUpcoming: true },
];

const pastEvents = [
    { id: 3, title: 'Winter Concert 2024', date: '20', month: 'Dec', host: 'Music Society', type: 'offline', isUpcoming: false },
    { id: 4, title: 'Music Production Workshop', date: '10', month: 'Dec', host: 'Music Society', type: 'online', isUpcoming: false },
];

export default function SocietyDetailPage({ params }) {
    const societySlug = params.society;
    const society = societiesData[societySlug] || societiesData['music-society']; // Default for demo

    return (
        <>
            <Navbar />

            <main className="pt-nav">
                {/* Hero Section */}
                <section className="hero">
                    <div className="container">
                        <div className="flex gap-8 items-center">
                            <div style={{
                                width: '100px',
                                height: '100px',
                                borderRadius: 'var(--radius-2xl)',
                                backgroundColor: 'var(--color-gold)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--color-charcoal)',
                                fontSize: 'var(--text-3xl)',
                                fontWeight: 'bold',
                                flexShrink: 0,
                            }}>
                                {society.name.charAt(0)}
                            </div>
                            <div>
                                <Badge variant="society" style={{ marginBottom: 'var(--space-3)' }}>{society.category}</Badge>
                                <h1 className="h1" style={{ marginBottom: 'var(--space-2)' }}>{society.name}</h1>
                                <p style={{ fontSize: 'var(--text-xl)', color: 'var(--color-grey)' }}>{society.tagline}</p>
                                <div className="flex gap-6 mt-6">
                                    <div className="flex items-center gap-2">
                                        <Users size={18} style={{ color: 'var(--color-grey)' }} />
                                        <span style={{ fontWeight: 500 }}>{society.memberCount}+ Members</span>
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
                                    title={`About ${society.name}`}
                                />
                                <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-grey)', marginBottom: 'var(--space-8)', lineHeight: 1.7 }}>
                                    {society.description}
                                </p>

                                <h3 className="h4" style={{ marginBottom: 'var(--space-4)' }}>What We Do</h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginBottom: 'var(--space-8)' }}>
                                    {society.activities.map((activity, index) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <div style={{
                                                width: '8px',
                                                height: '8px',
                                                borderRadius: 'var(--radius-full)',
                                                backgroundColor: 'var(--color-gold)',
                                                flexShrink: 0,
                                            }} />
                                            <span style={{ color: 'var(--color-charcoal)' }}>{activity}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Sidebar */}
                            <div>
                                <div className="card" style={{ padding: 'var(--space-6)' }}>
                                    <h3 className="h4" style={{ marginBottom: 'var(--space-6)' }}>Leadership</h3>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                                        {society.leadership.map((leader, index) => (
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
                                        <a href={society.socials.instagram} className="btn-icon" aria-label="Instagram">
                                            <Instagram size={20} />
                                        </a>
                                        <a href={society.socials.discord} className="btn-icon" aria-label="Discord">
                                            <MessageCircle size={20} />
                                        </a>
                                        <a href={`mailto:${society.socials.email}`} className="btn-icon" aria-label="Email">
                                            <Mail size={20} />
                                        </a>
                                        <a href={society.socials.website} className="btn-icon" aria-label="Website">
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>

                                    <Link href={society.socials.discord} className="btn btn-primary mt-6" style={{ width: '100%', justifyContent: 'center' }}>
                                        Join Society
                                    </Link>
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
                            title="Society Events"
                            subtitle="Upcoming and past events organized by our society."
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
            </main>

            <Footer />
        </>
    );
}
