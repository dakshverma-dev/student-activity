import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeader from '@/components/SectionHeader';
import Badge from '@/components/Badge';
import Link from 'next/link';
import { Calendar, Clock, MapPin, Users, Share2, ExternalLink } from 'lucide-react';

// Sample event data
const eventsData = {
    'paradox-2025-kickoff': {
        title: 'Paradox 2025 Kickoff',
        description: 'Join us for the grand kickoff of Paradox 2025, our flagship annual festival! Get a sneak peek at this year\'s theme, meet the organizing team, and learn about all the exciting events planned for the festival week. This session will include interactive activities, announcements of major competitions, and exclusive merchandise reveals.',
        host: 'Student Activities',
        hostType: 'house',
        date: 'January 15, 2025',
        time: '7:00 PM - 9:00 PM IST',
        location: 'Online (Google Meet)',
        type: 'online',
        isUpcoming: true,
        registrationOpen: true,
        registrationLink: '#',
        agenda: [
            { time: '7:00 PM', item: 'Welcome & Introduction' },
            { time: '7:15 PM', item: 'Theme Reveal & Walkthrough' },
            { time: '7:45 PM', item: 'Competition Announcements' },
            { time: '8:15 PM', item: 'Q&A Session' },
            { time: '8:45 PM', item: 'Closing & Next Steps' },
        ],
        media: [],
    },
    'inter-house-quiz': {
        title: 'Inter-House Quiz Competition',
        description: 'Test your knowledge against other houses in this thrilling quiz competition! Teams from all 12 houses will compete across multiple rounds covering topics from science to pop culture. Points earned contribute to the House Championship standings.',
        host: 'Kaveri House',
        hostType: 'house',
        date: 'January 22, 2025',
        time: '6:00 PM - 8:00 PM IST',
        location: 'Online (Zoom)',
        type: 'offline',
        isUpcoming: true,
        registrationOpen: true,
        registrationLink: '#',
        agenda: [],
        media: [],
    },
};

export default function EventDetailPage({ params }) {
    const eventSlug = params.event;
    const event = eventsData[eventSlug] || eventsData['paradox-2025-kickoff'];

    return (
        <>
            <Navbar />

            <main className="pt-nav">
                {/* Event Header */}
                <section className="hero">
                    <div className="container">
                        <div style={{ maxWidth: '800px' }}>
                            <div className="flex gap-3 mb-4">
                                <Badge variant={event.isUpcoming ? 'upcoming' : 'past'}>
                                    {event.isUpcoming ? 'Upcoming' : 'Past Event'}
                                </Badge>
                                <Badge variant={event.type === 'online' ? 'online' : 'offline'}>
                                    {event.type}
                                </Badge>
                            </div>
                            <h1 className="h1" style={{ marginBottom: 'var(--space-4)' }}>{event.title}</h1>

                            <div className="flex gap-6" style={{ color: 'var(--color-grey)', flexWrap: 'wrap' }}>
                                <div className="flex items-center gap-2">
                                    <Calendar size={18} />
                                    <span>{event.date}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock size={18} />
                                    <span>{event.time}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin size={18} />
                                    <span>{event.location}</span>
                                </div>
                            </div>

                            {event.registrationOpen && (
                                <div className="flex gap-4 mt-8">
                                    <a href={event.registrationLink} className="btn btn-primary btn-lg">
                                        Register Now
                                    </a>
                                    <button className="btn btn-secondary btn-lg">
                                        <Share2 size={18} />
                                        Share Event
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* Event Content */}
                <section className="section bg-white">
                    <div className="container">
                        <div className="grid grid-cols-3" style={{ gap: 'var(--space-12)' }}>
                            {/* Main Content */}
                            <div style={{ gridColumn: 'span 2' }}>
                                <SectionHeader
                                    eyebrow="About"
                                    title="Event Details"
                                />
                                <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-grey)', lineHeight: 1.8, marginBottom: 'var(--space-8)' }}>
                                    {event.description}
                                </p>

                                {event.agenda.length > 0 && (
                                    <>
                                        <h3 className="h4" style={{ marginBottom: 'var(--space-4)' }}>Agenda</h3>
                                        <div style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: 'var(--space-3)',
                                            backgroundColor: 'var(--color-off-white)',
                                            padding: 'var(--space-6)',
                                            borderRadius: 'var(--radius-xl)',
                                            marginBottom: 'var(--space-8)'
                                        }}>
                                            {event.agenda.map((item, index) => (
                                                <div key={index} className="flex gap-4">
                                                    <span style={{
                                                        fontWeight: 600,
                                                        color: 'var(--color-maroon)',
                                                        minWidth: '80px'
                                                    }}>
                                                        {item.time}
                                                    </span>
                                                    <span>{item.item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* Sidebar */}
                            <div>
                                <div className="card" style={{ padding: 'var(--space-6)', position: 'sticky', top: 'calc(var(--nav-height) + var(--space-6))' }}>
                                    <h3 className="h4" style={{ marginBottom: 'var(--space-4)' }}>Hosted By</h3>
                                    <div className="flex items-center gap-4 mb-6">
                                        <div style={{
                                            width: '48px',
                                            height: '48px',
                                            borderRadius: 'var(--radius-lg)',
                                            backgroundColor: 'var(--color-maroon)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'var(--color-white)',
                                            fontWeight: 'bold',
                                            flexShrink: 0,
                                        }}>
                                            {event.host.charAt(0)}
                                        </div>
                                        <div>
                                            <p style={{ fontWeight: 600 }}>{event.host}</p>
                                            <Link href={event.hostType === 'house' ? '/houses' : '/societies'} style={{
                                                fontSize: 'var(--text-sm)',
                                                color: 'var(--color-gold)'
                                            }}>
                                                View Profile →
                                            </Link>
                                        </div>
                                    </div>

                                    <hr style={{ margin: 'var(--space-4) 0', border: 'none', borderTop: '1px solid var(--color-grey-lighter)' }} />

                                    <h4 style={{ fontWeight: 600, marginBottom: 'var(--space-3)' }}>Event Type</h4>
                                    <p style={{ color: 'var(--color-grey)', marginBottom: 'var(--space-4)' }}>
                                        {event.type === 'online' ? 'This is a virtual event conducted online.' : 'This is an in-person event.'}
                                    </p>

                                    {event.registrationOpen && (
                                        <a href={event.registrationLink} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                                            Register Now
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Related Events */}
                <section className="section bg-off-white">
                    <div className="container text-center">
                        <h2 className="h3" style={{ marginBottom: 'var(--space-4)' }}>
                            Interested in More Events?
                        </h2>
                        <p style={{ color: 'var(--color-grey)', marginBottom: 'var(--space-6)' }}>
                            Check out our full calendar of upcoming events and activities.
                        </p>
                        <Link href="/events" className="btn btn-primary">
                            View All Events
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
