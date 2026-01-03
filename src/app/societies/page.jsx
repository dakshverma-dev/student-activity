import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import SectionHeader from '@/components/SectionHeader';
import { SocietyCard } from '@/components/Card';
import Link from 'next/link';

// Correct societies data from IITM BS
const societies = [
    { id: 1, name: 'Aayam', fullName: 'IITM BS Drama Society', category: 'Cultural', email: 'drama.society@study.iitm.ac.in', instagram: 'https://www.instagram.com/iitmbs_dramasociety/' },
    { id: 2, name: 'Adhyay', fullName: 'The Civil Services Society', category: 'Academic', email: 'civilservices.society@study.iitm.ac.in', instagram: 'https://instagram.com/adhyay.iitm' },
    { id: 3, name: 'AKORD', fullName: 'Music Society', category: 'Cultural', email: 'music.society@study.iitm.ac.in', instagram: 'https://www.instagram.com/akord_iitm' },
    { id: 4, name: 'AWS Cloud Club', fullName: 'AWS Cloud Club, IIT Madras', category: 'Technical', email: 'cloudcoders@study.iitm.ac.in', instagram: '' },
    { id: 5, name: 'Cosmos', fullName: 'IITM BS Tech Society', category: 'Technical', email: 'tech.society@study.iitm.ac.in', instagram: 'https://instagram.com/cosmos_iitm' },
    { id: 6, name: 'Deva-Bhasha', fullName: 'The Sanskrit Society', category: 'Cultural', email: 'sanskrit.society@study.iitm.ac.in', instagram: 'https://www.instagram.com/sanskritsociety_iitmbs/' },
    { id: 7, name: 'ERUDITE', fullName: 'The Oratory Society', category: 'Literary', email: 'erudite.society@study.iitm.ac.in', instagram: 'https://instagram.com/erudite_iitm_bs' },
    { id: 8, name: 'Heighers', fullName: 'eSports Club', category: 'Sports', email: 'esports.club@study.iitm.ac.in', instagram: 'https://instagram.com/heighers.esports_iitm' },
    { id: 9, name: 'Shah-Maat', fullName: 'IITM BS Chess Community', category: 'Sports', email: 'chess.club@study.iitm.ac.in', instagram: 'https://www.instagram.com/shahmaatiitm/' },
    { id: 10, name: 'Pravāha', fullName: 'The Dance Society', category: 'Cultural', email: 'dance.society@study.iitm.ac.in', instagram: 'https://instagram.com/pravaha_iitm' },
    { id: 11, name: 'RAAHAT', fullName: 'Mental Health & Wellness Society', category: 'Wellness', email: 'wellness.society@study.iitm.ac.in', instagram: 'https://instagram.com/wellness.society_iitm' },
    { id: 12, name: 'RaSoR', fullName: 'Ramanujan Society of Research', category: 'Academic', email: 'research.society@study.iitm.ac.in', instagram: 'https://instagram.com/rasor_iitm' },
    { id: 13, name: 'SAHARA', fullName: 'The Social Welfare Society', category: 'Social', email: 'connectwithsahara@study.iitm.ac.in', instagram: 'https://www.instagram.com/sahara_iitmbs/' },
    { id: 14, name: 'Sahityika', fullName: 'Literary Society', category: 'Literary', email: 'literary.society@study.iitm.ac.in', instagram: 'https://www.instagram.com/sahityika_iitm/' },
    { id: 15, name: 'SYNAPSE', fullName: 'Social & Cultural Studies Society', category: 'Cultural', email: 'culturalstudy.society@study.iitm.ac.in', instagram: 'https://www.instagram.com/synapse_iitmbs/' },
    { id: 16, name: 'Women in Tech', fullName: 'Women in Tech Society', category: 'Technical', email: 'womenintech.society@study.iitm.ac.in', instagram: 'https://instagram.com/womenintech.iitm' },
    { id: 17, name: 'WYZ Kids', fullName: 'The IITM BS Quiz Club', category: 'Literary', email: 'quiz.club@study.iitm.ac.in', instagram: 'https://www.instagram.com/wyzkids.iitmbs/' },
    { id: 18, name: 'Boundless', fullName: 'IITM BS Travel Club', category: 'Lifestyle', email: 'boundless.club@study.iitm.ac.in', instagram: 'https://www.instagram.com/boundless_iitmbs/' },
    { id: 19, name: 'Elan', fullName: 'Fashion Society', category: 'Cultural', email: 'fashion.society@study.iitm.ac.in', instagram: 'https://instagram.com/elan_iitm' },
    { id: 20, name: 'Film Society', fullName: 'IIT Madras BS Film Society', category: 'Media', email: 'film.society@study.iitm.ac.in', instagram: 'https://instagram.com/iitm_bsfilmsociety' },
    { id: 21, name: 'Diplomacia', fullName: 'Model UN & Diplomacy Society', category: 'Academic', email: 'diplomacia@study.iitm.ac.in', instagram: 'https://instagram.com/iitm_diplomacia' },
];

// Category filters
const categories = ['All', 'Cultural', 'Technical', 'Literary', 'Academic', 'Sports', 'Wellness', 'Social', 'Media', 'Lifestyle'];

export default function SocietiesPage() {
    return (
        <>
            <Navbar />

            <main className="pt-nav">
                {/* Hero Section */}
                <HeroSection
                    eyebrow="Explore Your Interests"
                    title="IITM BS"
                    titleAccent="Societies"
                    description="Discover 21+ student-run societies covering culture, technology, literature, wellness, and more. Find your community and pursue your passions!"
                    primaryCta="Browse Societies"
                    primaryCtaHref="#society-grid"
                    secondaryCta="Start a Society"
                    secondaryCtaHref="/resources"
                />

                {/* Societies Grid */}
                <section className="section bg-white" id="society-grid">
                    <div className="container">
                        <SectionHeader
                            eyebrow="All Societies"
                            title="Find Your Community"
                            subtitle="Click on any society to learn more and join. Membership is open to all IITM BS students."
                        />

                        {/* Tabs Filter */}
                        <div className="tabs" style={{ marginBottom: 'var(--space-8)', flexWrap: 'wrap' }}>
                            {categories.map((cat, index) => (
                                <button
                                    key={cat}
                                    className={`tab ${index === 0 ? 'active' : ''}`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {/* Society Grid */}
                        <div className="grid grid-cols-2" style={{ gap: 'var(--space-4)' }}>
                            {societies.map((society) => (
                                <SocietyCard
                                    key={society.id}
                                    name={society.name}
                                    fullName={society.fullName}
                                    category={society.category}
                                    email={society.email}
                                    instagram={society.instagram}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Join CTA */}
                <section className="section" style={{ background: 'var(--color-cream)' }}>
                    <div className="container">
                        <div className="grid grid-cols-2" style={{ alignItems: 'center', gap: 'var(--space-16)' }}>
                            <div>
                                <SectionHeader
                                    eyebrow="Get Involved"
                                    title="Want to Start a New Society?"
                                    subtitle="Have a unique interest not represented? We encourage students to propose new clubs and communities."
                                />
                                <div className="flex gap-4">
                                    <Link href="/resources" className="btn btn-primary">
                                        View Guidelines
                                    </Link>
                                    <a href="mailto:studentactivities@study.iitm.ac.in" className="btn btn-secondary">
                                        Contact Student Affairs
                                    </a>
                                </div>
                            </div>
                            <div className="card" style={{ padding: 'var(--space-8)', backgroundColor: 'var(--color-white)' }}>
                                <h3 className="h4" style={{ marginBottom: 'var(--space-5)' }}>Starting a Society</h3>
                                <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', color: 'var(--color-grey)' }}>
                                    <li className="flex gap-3">
                                        <span style={{ color: 'var(--color-gold)', fontWeight: 'bold' }}>1.</span>
                                        Submit Expression of Interest (EoI) to Student Affairs
                                    </li>
                                    <li className="flex gap-3">
                                        <span style={{ color: 'var(--color-gold)', fontWeight: 'bold' }}>2.</span>
                                        Include proposed name, goals, activities, and executive body structure
                                    </li>
                                    <li className="flex gap-3">
                                        <span style={{ color: 'var(--color-gold)', fontWeight: 'bold' }}>3.</span>
                                        Get approval and receive official email ID
                                    </li>
                                    <li className="flex gap-3">
                                        <span style={{ color: 'var(--color-gold)', fontWeight: 'bold' }}>4.</span>
                                        Elect Secretary, Deputy Secretary & Coordinators
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
