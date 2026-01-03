'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import SectionHeader from '@/components/SectionHeader';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';

const faqCategories = [
    {
        id: 'new-students',
        name: 'New Students',
        faqs: [
            {
                question: 'How do I get assigned to a house?',
                answer: 'Every student is automatically assigned to one of the 12 houses upon enrollment. Your house assignment is random and remains the same throughout your time at IITM BS. You\'ll receive your house details in your welcome email.'
            },
            {
                question: 'When can I join societies?',
                answer: 'Society registrations typically open in September at the start of the academic year. Most societies have open enrollment, while some competitive ones may have auditions or selections. Keep an eye on announcements!'
            },
            {
                question: 'What is Paradox?',
                answer: 'Paradox is the flagship annual festival of IITM BS, featuring competitions, performances, workshops, and celebrations across houses and societies. It\'s the highlight of the student activities calendar!'
            },
        ]
    },
    {
        id: 'activities-workload',
        name: 'Activities & Workload',
        faqs: [
            {
                question: 'How much time do student activities take?',
                answer: 'It depends on your involvement level. Casual participation in house events takes a few hours per month. Active society membership may require 2-4 hours weekly. Leadership roles require more commitment but are incredibly rewarding.'
            },
            {
                question: 'Can I balance activities with academics?',
                answer: 'Absolutely! Many top performers are also actively involved in student activities. Time management is key. Start with activities that genuinely interest you, and gradually expand your involvement as you find your balance.'
            },
            {
                question: 'Do activities count towards academic credit?',
                answer: 'While most activities don\'t directly count as academic credit, participation certificates and leadership experience are valuable for your resume and graduate school applications.'
            },
        ]
    },
    {
        id: 'houses-societies',
        name: 'Houses & Societies',
        faqs: [
            {
                question: 'Can I change my house?',
                answer: 'No, house assignments are permanent. This encourages long-term commitment and building lasting relationships within your house community. Embrace your house and make it your second family!'
            },
            {
                question: 'How do house points work?',
                answer: 'Houses earn points through participation in events, competitions, and activities. Points are tracked throughout the year, and the house with the most points wins the House Championship at the end of the academic year.'
            },
            {
                question: 'Can I join multiple societies?',
                answer: 'Yes! You can join as many societies as you like, as long as you can manage your commitments. We recommend starting with 2-3 societies that align with your interests and expanding from there.'
            },
            {
                question: 'How do I start a new society?',
                answer: 'Gather at least 10 interested students, draft a proposal outlining your society\'s goals and activities, and submit it to Student Activities. Check our Resources page for the detailed process and forms.'
            },
        ]
    },
    {
        id: 'events',
        name: 'Events',
        faqs: [
            {
                question: 'How do I register for events?',
                answer: 'Event registrations are announced on our official channels. Most events have registration forms linked in the event details. Some events are open to all, while others may require prior sign-up.'
            },
            {
                question: 'Can I host my own event?',
                answer: 'If you\'re part of a house or society leadership, you can propose and host events. Review the Event Hosting Guidelines in our Resources section and submit a proposal to Student Activities.'
            },
            {
                question: 'Are events online or offline?',
                answer: 'We offer both! Given our online-first program, many events are conducted virtually. Some special events like Paradox may have in-person components. Event types are clearly marked in our listings.'
            },
        ]
    },
];

function FAQItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="card"
            style={{
                marginBottom: 'var(--space-3)',
                cursor: 'pointer',
                overflow: 'hidden'
            }}
            onClick={() => setIsOpen(!isOpen)}
        >
            <div style={{
                padding: 'var(--space-5) var(--space-6)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 'var(--space-4)'
            }}>
                <h3 style={{ fontWeight: 600, flex: 1 }}>{question}</h3>
                {isOpen ? (
                    <ChevronUp size={20} style={{ color: 'var(--color-maroon)', flexShrink: 0 }} />
                ) : (
                    <ChevronDown size={20} style={{ color: 'var(--color-grey)', flexShrink: 0 }} />
                )}
            </div>
            {isOpen && (
                <div style={{
                    padding: '0 var(--space-6) var(--space-5)',
                    color: 'var(--color-grey)',
                    lineHeight: 1.7
                }}>
                    {answer}
                </div>
            )}
        </div>
    );
}

export default function FAQPage() {
    const [activeCategory, setActiveCategory] = useState('new-students');
    const activeData = faqCategories.find(cat => cat.id === activeCategory);

    return (
        <>
            <Navbar />

            <main className="pt-nav">
                {/* Hero Section */}
                <HeroSection
                    eyebrow="Help Center"
                    title="Frequently Asked"
                    titleAccent="Questions"
                    description="Find answers to common questions about student activities, houses, societies, and events at IITM BS."
                />

                {/* FAQ Section */}
                <section className="section bg-white">
                    <div className="container">
                        <div className="grid grid-cols-4" style={{ gap: 'var(--space-12)' }}>
                            {/* Sidebar */}
                            <div>
                                <h3 className="h4" style={{ marginBottom: 'var(--space-4)' }}>Categories</h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                                    {faqCategories.map((category) => (
                                        <button
                                            key={category.id}
                                            onClick={() => setActiveCategory(category.id)}
                                            style={{
                                                padding: 'var(--space-3) var(--space-4)',
                                                textAlign: 'left',
                                                background: activeCategory === category.id ? 'var(--color-off-white)' : 'transparent',
                                                border: 'none',
                                                borderRadius: 'var(--radius-md)',
                                                cursor: 'pointer',
                                                fontWeight: activeCategory === category.id ? 600 : 400,
                                                color: activeCategory === category.id ? 'var(--color-maroon)' : 'var(--color-charcoal)',
                                                transition: 'all 0.2s ease',
                                                borderLeft: activeCategory === category.id ? '3px solid var(--color-maroon)' : '3px solid transparent',
                                            }}
                                        >
                                            {category.name}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* FAQ Content */}
                            <div style={{ gridColumn: 'span 3' }}>
                                <SectionHeader
                                    title={activeData?.name}
                                    subtitle={`Common questions about ${activeData?.name.toLowerCase()}`}
                                />

                                {activeData?.faqs.map((faq, index) => (
                                    <FAQItem key={index} question={faq.question} answer={faq.answer} />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact CTA */}
                <section className="section bg-off-white">
                    <div className="container text-center">
                        <h2 className="h3" style={{ marginBottom: 'var(--space-4)' }}>
                            Still Have Questions?
                        </h2>
                        <p style={{ color: 'var(--color-grey)', marginBottom: 'var(--space-6)', maxWidth: '500px', margin: '0 auto var(--space-6)' }}>
                            Can't find what you're looking for? Reach out to us directly.
                        </p>
                        <a href="mailto:studentactivities@study.iitm.ac.in" className="btn btn-primary">
                            Contact Us
                        </a>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
