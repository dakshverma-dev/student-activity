import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import SectionHeader from '@/components/SectionHeader';
import Link from 'next/link';
import { FileText, AlertCircle, MessageCircle, ExternalLink, Download, Mail } from 'lucide-react';

const guidelines = [
    {
        title: 'Non-Academic Activities Policy',
        description: 'Guidelines governing participation in houses, societies, and events.',
        link: '#',
        type: 'PDF'
    },
    {
        title: 'Code of Conduct',
        description: 'Expected behavior and community standards for all students.',
        link: '#',
        type: 'PDF'
    },
    {
        title: 'Event Hosting Guidelines',
        description: 'How to propose, plan, and execute events as a house or society.',
        link: '#',
        type: 'PDF'
    },
    {
        title: 'POR Selection Process',
        description: 'Information on applying for positions of responsibility.',
        link: '#',
        type: 'PDF'
    },
];

const forms = [
    {
        title: 'Grievance Submission Form',
        description: 'Report issues, concerns, or complaints confidentially.',
        link: '#',
        icon: AlertCircle,
        color: '#DC2626'
    },
    {
        title: 'Event Proposal Form',
        description: 'Submit a proposal for hosting an event.',
        link: '#',
        icon: FileText,
        color: 'var(--color-maroon)'
    },
    {
        title: 'Society Registration Form',
        description: 'Apply to start a new society or club.',
        link: '#',
        icon: FileText,
        color: 'var(--color-gold)'
    },
];

const channels = [
    {
        title: 'Official Email',
        description: 'studentactivities@study.iitm.ac.in',
        link: 'mailto:studentactivities@study.iitm.ac.in',
        icon: Mail
    },
    {
        title: 'Discord Server',
        description: 'Join our community for updates and discussions.',
        link: '#',
        icon: MessageCircle
    },
    {
        title: 'Instagram',
        description: '@iitmbs_studentactivities',
        link: '#',
        icon: ExternalLink
    },
];

export default function ResourcesPage() {
    return (
        <>
            <Navbar />

            <main className="pt-nav">
                {/* Hero Section */}
                <HeroSection
                    eyebrow="Help & Information"
                    title="Resources &"
                    titleAccent="Guidelines"
                    description="Find official documents, policies, forms, and communication channels for Student Activities at IITM BS."
                    primaryCta="Submit Grievance"
                    primaryCtaHref="#grievance"
                    secondaryCta="Contact Us"
                    secondaryCtaHref="#contact"
                />

                {/* Guidelines Section */}
                <section className="section bg-white">
                    <div className="container">
                        <SectionHeader
                            eyebrow="Official Documents"
                            title="Non-Academic Guidelines"
                            subtitle="Important policies and documents governing student activities."
                        />

                        <div className="grid grid-cols-2">
                            {guidelines.map((doc, index) => (
                                <a key={index} href={doc.link} className="card" style={{ padding: 'var(--space-6)' }}>
                                    <div className="flex gap-4">
                                        <div style={{
                                            width: '48px',
                                            height: '48px',
                                            borderRadius: 'var(--radius-lg)',
                                            backgroundColor: 'var(--color-off-white)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'var(--color-maroon)',
                                            flexShrink: 0,
                                        }}>
                                            <FileText size={24} />
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <h3 style={{ fontWeight: 600, marginBottom: 'var(--space-1)' }}>{doc.title}</h3>
                                            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-grey)', marginBottom: 'var(--space-2)' }}>
                                                {doc.description}
                                            </p>
                                            <span style={{
                                                fontSize: 'var(--text-xs)',
                                                color: 'var(--color-gold)',
                                                fontWeight: 500,
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 'var(--space-1)'
                                            }}>
                                                <Download size={14} /> Download {doc.type}
                                            </span>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Grievance & Forms Section */}
                <section className="section bg-off-white" id="grievance">
                    <div className="container">
                        <SectionHeader
                            eyebrow="Forms & Support"
                            title="Grievance & Forms"
                            subtitle="Submit requests, report issues, or access important forms."
                        />

                        <div className="grid grid-cols-3">
                            {forms.map((form, index) => (
                                <a key={index} href={form.link} className="card" style={{
                                    padding: 'var(--space-6)',
                                    borderLeft: `4px solid ${form.color}`,
                                }}>
                                    <div style={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: 'var(--radius-lg)',
                                        backgroundColor: `${form.color}15`,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: form.color,
                                        marginBottom: 'var(--space-4)',
                                    }}>
                                        <form.icon size={20} />
                                    </div>
                                    <h3 style={{ fontWeight: 600, marginBottom: 'var(--space-2)' }}>{form.title}</h3>
                                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-grey)', marginBottom: 'var(--space-4)' }}>
                                        {form.description}
                                    </p>
                                    <span style={{
                                        fontSize: 'var(--text-sm)',
                                        color: 'var(--color-maroon)',
                                        fontWeight: 500,
                                    }}>
                                        Open Form →
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Official Channels Section */}
                <section className="section bg-white" id="contact">
                    <div className="container">
                        <SectionHeader
                            eyebrow="Get in Touch"
                            title="Official Communication Channels"
                            subtitle="Reach out to us through these official channels."
                        />

                        <div className="grid grid-cols-3">
                            {channels.map((channel, index) => (
                                <a key={index} href={channel.link} className="card" style={{
                                    padding: 'var(--space-6)',
                                    textAlign: 'center',
                                }}>
                                    <div style={{
                                        width: '56px',
                                        height: '56px',
                                        borderRadius: 'var(--radius-full)',
                                        backgroundColor: 'var(--color-maroon)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'var(--color-white)',
                                        margin: '0 auto var(--space-4)',
                                    }}>
                                        <channel.icon size={24} />
                                    </div>
                                    <h3 style={{ fontWeight: 600, marginBottom: 'var(--space-2)' }}>{channel.title}</h3>
                                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-grey)' }}>
                                        {channel.description}
                                    </p>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ CTA */}
                <section className="section" style={{
                    background: 'linear-gradient(135deg, var(--color-off-white) 0%, var(--color-white) 100%)'
                }}>
                    <div className="container text-center">
                        <h2 className="h3" style={{ marginBottom: 'var(--space-4)' }}>
                            Have Questions?
                        </h2>
                        <p style={{ color: 'var(--color-grey)', marginBottom: 'var(--space-6)', maxWidth: '500px', margin: '0 auto var(--space-6)' }}>
                            Check out our FAQ section for answers to commonly asked questions about Student Activities.
                        </p>
                        <Link href="/faq" className="btn btn-primary">
                            View FAQ
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
