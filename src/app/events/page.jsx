import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import SectionHeader from '@/components/SectionHeader';
import { EventCard } from '@/components/Card';
import Link from 'next/link';

// Sample events data
const upcomingEvents = [
    { id: 1, title: 'Paradox 2025 Kickoff', date: '15', month: 'Jan', host: 'Student Activities', type: 'online', isUpcoming: true },
    { id: 2, title: 'Inter-House Quiz Competition', date: '22', month: 'Jan', host: 'Kaveri House', type: 'offline', isUpcoming: true },
    { id: 3, title: 'Open Mic Night', date: '25', month: 'Jan', host: 'Music Society', type: 'offline', isUpcoming: true },
    { id: 4, title: 'Cultural Night: Fusion', date: '28', month: 'Jan', host: 'Dance Society', type: 'offline', isUpcoming: true },
    { id: 5, title: 'Tech Talk: AI in Education', date: '05', month: 'Feb', host: 'Tech Society', type: 'online', isUpcoming: true },
    { id: 6, title: 'Hackathon 2025', date: '10', month: 'Feb', host: 'Coding Club', type: 'online', isUpcoming: true },
];

const pastEvents = [
    { id: 7, title: 'Winter Concert 2024', date: '20', month: 'Dec', host: 'Music Society', type: 'offline', isUpcoming: false },
    { id: 8, title: 'Annual Sports Day', date: '15', month: 'Dec', host: 'Sports Club', type: 'offline', isUpcoming: false },
    { id: 9, title: 'Paradox 2024 Finale', date: '10', month: 'Dec', host: 'Student Activities', type: 'offline', isUpcoming: false },
    { id: 10, title: 'Photography Exhibition', date: '05', month: 'Dec', host: 'Photography Society', type: 'offline', isUpcoming: false },
];

const filterOptions = ['All', 'Houses', 'Societies', 'Paradox', 'Online', 'Offline'];

export default function EventsPage() {
    return (
        <>
            <Navbar />

            <main className="pt-nav">
                {/* Hero Section */}
                <HeroSection
                    eyebrow="Stay Updated"
                    title="Events &"
                    titleAccent="Activities"
                    description="Discover upcoming events, competitions, and activities across all houses and societies. Never miss out on the excitement!"
                    primaryCta="Subscribe to Calendar"
                    primaryCtaHref="/calendar"
                    secondaryCta="Host an Event"
                    secondaryCtaHref="/resources"
                />

                {/* Upcoming Events */}
                <section className="section bg-white" id="upcoming">
                    <div className="container">
                        <SectionHeader
                            eyebrow="What's Coming"
                            title="Upcoming Events"
                            subtitle="Mark your calendar for these exciting events."
                        />

                        {/* Filter Tabs */}
                        <div className="tabs" style={{ marginBottom: 'var(--space-8)' }}>
                            {filterOptions.map((option, index) => (
                                <button
                                    key={option}
                                    className={`tab ${index === 0 ? 'active' : ''}`}
                                >
                                    {option}
                                </button>
                            ))}
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

                {/* Past Events */}
                <section className="section bg-off-white" id="past">
                    <div className="container">
                        <SectionHeader
                            eyebrow="Archive"
                            title="Recent Events"
                            subtitle="Catch up on what you might have missed."
                        />

                        <div className="grid grid-cols-2">
                            {pastEvents.map((event) => (
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

                        <div className="text-center mt-8">
                            <Link href="/events/archive" className="btn btn-secondary">
                                View All Past Events
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="section bg-white">
                    <div className="container">
                        <div className="grid grid-cols-2" style={{ alignItems: 'center', gap: 'var(--space-16)' }}>
                            <div>
                                <SectionHeader
                                    eyebrow="Get Notified"
                                    title="Never Miss an Event"
                                    subtitle="Subscribe to our calendar and get notified about upcoming events that match your interests."
                                />
                                <div className="flex gap-4">
                                    <Link href="/calendar" className="btn btn-primary">
                                        View Calendar
                                    </Link>
                                    <Link href="/resources" className="btn btn-secondary">
                                        Hosting Guidelines
                                    </Link>
                                </div>
                            </div>
                            <div className="card" style={{
                                padding: 'var(--space-8)',
                                background: 'linear-gradient(135deg, var(--color-maroon) 0%, #5a1814 100%)',
                                color: 'var(--color-white)'
                            }}>
                                <h3 className="h4" style={{ marginBottom: 'var(--space-4)', color: 'var(--color-white)' }}>
                                    Want to Host an Event?
                                </h3>
                                <p style={{ marginBottom: 'var(--space-6)', opacity: 0.9 }}>
                                    Houses and societies can organize events throughout the year. Check out our guidelines and submit your proposal.
                                </p>
                                <Link href="/resources" className="btn" style={{
                                    backgroundColor: 'var(--color-white)',
                                    color: 'var(--color-maroon)'
                                }}>
                                    Learn More
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
