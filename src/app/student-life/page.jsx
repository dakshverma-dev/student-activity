import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import SectionHeader from '@/components/SectionHeader';
import Link from 'next/link';
import { Users, Award, Calendar, Heart, Briefcase, GraduationCap } from 'lucide-react';

const roles = [
    {
        icon: <Users size={28} />,
        title: 'House Leadership',
        description: 'House Coordinators, Secretaries, and Deputies who lead house activities and foster community spirit.',
    },
    {
        icon: <Award size={28} />,
        title: 'Society Leadership',
        description: 'Society heads and coordinators who organize events and manage society operations.',
    },
    {
        icon: <Briefcase size={28} />,
        title: 'Core Team',
        description: 'The central team managing Student Activities, events, communications, and operations.',
    },
    {
        icon: <Heart size={28} />,
        title: 'Volunteer Corps',
        description: 'Volunteers who support events, help fellow students, and contribute to community initiatives.',
    },
];

const orgStructure = [
    { level: 'Faculty Advisors', description: 'Overall guidance and institutional support' },
    { level: 'Student Activities Core Team', description: 'Central coordination and strategy' },
    { level: 'House RCs & Society Coordinators', description: 'House and society leadership' },
    { level: 'House Secretaries & Society Leads', description: 'Day-to-day operations' },
    { level: 'Student Members', description: 'Active participants and volunteers' },
];

const timeline = [
    { month: 'August', title: 'New Academic Year Begins', description: 'House assignments and orientation' },
    { month: 'September', title: 'Society Registrations Open', description: 'Join societies matching your interests' },
    { month: 'October-November', title: 'Mid-semester Events', description: 'Inter-house competitions and society showcases' },
    { month: 'December', title: 'Paradox Preparations', description: 'Build-up to our flagship festival' },
    { month: 'January', title: 'Paradox Festival', description: 'The annual celebration of student life' },
    { month: 'February-March', title: 'POR Applications', description: 'Apply for leadership positions' },
    { month: 'April-May', title: 'Year-end Events', description: 'Farewells and celebrations' },
];

export default function StudentLifePage() {
    return (
        <>
            <Navbar />

            <main className="pt-nav">
                {/* Hero Section */}
                <HeroSection
                    eyebrow="Beyond Academics"
                    title="Student"
                    titleAccent="Life"
                    description="Discover the vibrant non-academic ecosystem at IITM BS. From houses to societies, events to leadership—your college experience goes far beyond the classroom."
                    primaryCta="Explore Houses"
                    primaryCtaHref="/houses"
                    secondaryCta="View Events"
                    secondaryCtaHref="/events"
                />

                {/* Roles Section */}
                <section className="section bg-white">
                    <div className="container">
                        <SectionHeader
                            eyebrow="Get Involved"
                            title="Roles in Student Activities"
                            subtitle="There are many ways to contribute and grow through leadership and participation."
                            centered
                        />

                        <div className="grid grid-cols-4">
                            {roles.map((role, index) => (
                                <div key={index} className="card" style={{ padding: 'var(--space-6)', textAlign: 'center' }}>
                                    <div style={{
                                        width: '64px',
                                        height: '64px',
                                        margin: '0 auto var(--space-4)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        backgroundColor: 'var(--color-off-white)',
                                        borderRadius: 'var(--radius-xl)',
                                        color: 'var(--color-maroon)'
                                    }}>
                                        {role.icon}
                                    </div>
                                    <h3 className="h4" style={{ marginBottom: 'var(--space-2)' }}>{role.title}</h3>
                                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-grey)' }}>{role.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Who Runs What Section */}
                <section className="section bg-off-white">
                    <div className="container">
                        <div className="grid grid-cols-2" style={{ gap: 'var(--space-16)', alignItems: 'center' }}>
                            <div>
                                <SectionHeader
                                    eyebrow="Structure"
                                    title="Who Runs What?"
                                    subtitle="Student Activities operates through a clear organizational structure ensuring smooth coordination."
                                />
                                <Link href="/por" className="btn btn-primary">
                                    Explore Leadership Roles
                                </Link>
                            </div>

                            <div className="card" style={{ padding: 'var(--space-6)' }}>
                                {orgStructure.map((item, index) => (
                                    <div
                                        key={index}
                                        style={{
                                            padding: 'var(--space-4)',
                                            borderLeft: index === 0 ? '3px solid var(--color-maroon)' : '3px solid var(--color-grey-lighter)',
                                            marginBottom: index < orgStructure.length - 1 ? 'var(--space-3)' : 0,
                                            backgroundColor: index === 0 ? 'var(--color-off-white)' : 'transparent',
                                            borderRadius: '0 var(--radius-md) var(--radius-md) 0'
                                        }}
                                    >
                                        <h4 style={{ fontWeight: 600, marginBottom: 'var(--space-1)' }}>{item.level}</h4>
                                        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-grey)' }}>{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Timeline Section */}
                <section className="section bg-white">
                    <div className="container">
                        <SectionHeader
                            eyebrow="Academic Year"
                            title="Your Year at a Glance"
                            subtitle="Key milestones and events throughout the academic year."
                            centered
                        />

                        <div className="timeline" style={{ maxWidth: '700px', margin: '0 auto' }}>
                            {timeline.map((item, index) => (
                                <div key={index} className="timeline-item">
                                    <div className="timeline-marker" />
                                    <div className="timeline-content">
                                        <span className="timeline-date">{item.month}</span>
                                        <h4 className="timeline-title">{item.title}</h4>
                                        <p className="timeline-description">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="section" style={{
                    background: 'linear-gradient(135deg, var(--color-maroon) 0%, #5a1814 100%)',
                    color: 'var(--color-white)'
                }}>
                    <div className="container text-center">
                        <GraduationCap size={48} style={{ margin: '0 auto var(--space-4)', opacity: 0.8 }} />
                        <h2 className="h2" style={{ color: 'var(--color-white)', marginBottom: 'var(--space-4)' }}>
                            Ready to Get Started?
                        </h2>
                        <p style={{
                            fontSize: 'var(--text-lg)',
                            color: 'rgba(255,255,255,0.8)',
                            maxWidth: '560px',
                            margin: '0 auto var(--space-8)'
                        }}>
                            Join a house, explore societies, attend events, and make the most of your student life at IITM BS.
                        </p>
                        <div className="flex justify-center gap-4">
                            <Link href="/houses" className="btn btn-lg" style={{
                                backgroundColor: 'var(--color-white)',
                                color: 'var(--color-maroon)'
                            }}>
                                Find Your House
                            </Link>
                            <Link href="/societies" className="btn btn-lg" style={{
                                backgroundColor: 'transparent',
                                color: 'var(--color-white)',
                                borderColor: 'rgba(255,255,255,0.5)'
                            }}>
                                Browse Societies
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
