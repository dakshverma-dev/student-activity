import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import SectionHeader from '@/components/SectionHeader';
import Link from 'next/link';
import { Briefcase, Clock, Star, Users, CheckCircle, ArrowRight } from 'lucide-react';

const porTypes = [
    {
        icon: <Users size={28} />,
        title: 'House Leadership',
        roles: ['House Secretary', 'Deputy Secretary', 'Event Coordinator'],
        description: 'Lead your house community, organize events, and represent your house in inter-house activities.'
    },
    {
        icon: <Star size={28} />,
        title: 'Society Leadership',
        roles: ['Society Head', 'Secretary', 'Technical Lead'],
        description: 'Guide society activities, mentor members, and organize society-specific events and workshops.'
    },
    {
        icon: <Briefcase size={28} />,
        title: 'Core Team',
        roles: ['Events Head', 'Communications Lead', 'Tech Lead', 'Design Head'],
        description: 'Be part of the central Student Activities team managing operations across all houses and societies.'
    },
    {
        icon: <CheckCircle size={28} />,
        title: 'Volunteer Corps',
        roles: ['Event Volunteer', 'Buddy Program Mentor', 'Community Helper'],
        description: 'Support events, help newcomers, and contribute to building a welcoming community.'
    },
];

const benefits = [
    'Develop leadership and management skills',
    'Build a strong network with peers and faculty',
    'Gain practical experience in event management',
    'Enhance your resume for future opportunities',
    'Make a lasting impact on student community',
    'Receive official recognition and certificates',
];

const timeline = [
    { phase: 'Applications Open', date: 'February 1', description: 'Submit your application through the official form' },
    { phase: 'Initial Screening', date: 'February 15', description: 'Review of applications by selection committee' },
    { phase: 'Interviews', date: 'February 20-28', description: 'Shortlisted candidates interview with current leaders' },
    { phase: 'Results Announced', date: 'March 5', description: 'Selected candidates are notified via email' },
    { phase: 'Onboarding', date: 'March 10-20', description: 'Training and handover from outgoing team' },
];

export default function PORPage() {
    return (
        <>
            <Navbar />

            <main className="pt-nav">
                {/* Hero Section */}
                <HeroSection
                    eyebrow="Make Your Mark"
                    title="Positions of"
                    titleAccent="Responsibility"
                    description="Take on leadership roles and shape the student experience at IITM BS. Develop skills, build networks, and create lasting impact."
                    primaryCta="Apply Now"
                    primaryCtaHref="/resources"
                    secondaryCta="View Roles"
                    secondaryCtaHref="#roles"
                />

                {/* Types of POR */}
                <section className="section bg-white" id="roles">
                    <div className="container">
                        <SectionHeader
                            eyebrow="Opportunities"
                            title="Types of POR"
                            subtitle="Explore different leadership opportunities available to students."
                            centered
                        />

                        <div className="grid grid-cols-2">
                            {porTypes.map((type, index) => (
                                <div key={index} className="card" style={{ padding: 'var(--space-6)' }}>
                                    <div className="flex gap-4">
                                        <div style={{
                                            width: '56px',
                                            height: '56px',
                                            borderRadius: 'var(--radius-lg)',
                                            backgroundColor: 'var(--color-off-white)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'var(--color-maroon)',
                                            flexShrink: 0,
                                        }}>
                                            {type.icon}
                                        </div>
                                        <div>
                                            <h3 className="h4" style={{ marginBottom: 'var(--space-2)' }}>{type.title}</h3>
                                            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-grey)', marginBottom: 'var(--space-3)' }}>
                                                {type.description}
                                            </p>
                                            <div className="flex gap-2" style={{ flexWrap: 'wrap' }}>
                                                {type.roles.map((role, i) => (
                                                    <span key={i} className="badge badge-upcoming" style={{ fontSize: 'var(--text-xs)' }}>
                                                        {role}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Apply Section */}
                <section className="section bg-off-white">
                    <div className="container">
                        <div className="grid grid-cols-2" style={{ gap: 'var(--space-16)', alignItems: 'center' }}>
                            <div>
                                <SectionHeader
                                    eyebrow="Benefits"
                                    title="Why Take Up a POR?"
                                    subtitle="Leadership roles offer valuable experiences that go beyond the classroom."
                                />
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                                    {benefits.map((benefit, index) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <CheckCircle size={18} style={{ color: 'var(--color-gold)', flexShrink: 0 }} />
                                            <span>{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="card" style={{
                                padding: 'var(--space-8)',
                                background: 'linear-gradient(135deg, var(--color-maroon) 0%, #5a1814 100%)',
                                color: 'var(--color-white)'
                            }}>
                                <Clock size={32} style={{ marginBottom: 'var(--space-4)', opacity: 0.8 }} />
                                <h3 className="h3" style={{ color: 'var(--color-white)', marginBottom: 'var(--space-4)' }}>
                                    Time Commitment
                                </h3>
                                <p style={{ opacity: 0.9, marginBottom: 'var(--space-6)' }}>
                                    Most POR roles require 3-5 hours per week. Leadership positions may require more during peak event seasons. We ensure roles are manageable alongside academics.
                                </p>
                                <Link href="/faq" className="btn" style={{ backgroundColor: 'var(--color-white)', color: 'var(--color-maroon)' }}>
                                    Learn More in FAQ
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Selection Timeline */}
                <section className="section bg-white">
                    <div className="container">
                        <SectionHeader
                            eyebrow="Process"
                            title="Selection Timeline"
                            subtitle="The POR selection process typically takes place in February-March each year."
                            centered
                        />

                        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
                            {timeline.map((item, index) => (
                                <div key={index} className="flex gap-6" style={{ marginBottom: index < timeline.length - 1 ? 'var(--space-6)' : 0 }}>
                                    <div style={{
                                        width: '120px',
                                        flexShrink: 0,
                                        textAlign: 'right',
                                        paddingTop: 'var(--space-1)'
                                    }}>
                                        <span style={{ fontWeight: 600, color: 'var(--color-maroon)' }}>{item.date}</span>
                                    </div>
                                    <div style={{
                                        width: '12px',
                                        position: 'relative',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                    }}>
                                        <div style={{
                                            width: '12px',
                                            height: '12px',
                                            borderRadius: 'var(--radius-full)',
                                            backgroundColor: 'var(--color-maroon)',
                                            flexShrink: 0,
                                        }} />
                                        {index < timeline.length - 1 && (
                                            <div style={{
                                                width: '2px',
                                                flex: 1,
                                                backgroundColor: 'var(--color-grey-lighter)',
                                                marginTop: 'var(--space-2)',
                                            }} />
                                        )}
                                    </div>
                                    <div style={{ flex: 1, paddingBottom: 'var(--space-6)' }}>
                                        <h4 style={{ fontWeight: 600, marginBottom: 'var(--space-1)' }}>{item.phase}</h4>
                                        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-grey)' }}>{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="section bg-off-white text-center">
                    <div className="container">
                        <h2 className="h3" style={{ marginBottom: 'var(--space-4)' }}>
                            Ready to Lead?
                        </h2>
                        <p style={{ color: 'var(--color-grey)', marginBottom: 'var(--space-6)', maxWidth: '500px', margin: '0 auto var(--space-6)' }}>
                            Check out the available roles and submit your application when applications open.
                        </p>
                        <div className="flex justify-center gap-4">
                            <Link href="/resources" className="btn btn-primary">
                                View Application Forms
                            </Link>
                            <Link href="/faq" className="btn btn-secondary">
                                Read FAQ
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
