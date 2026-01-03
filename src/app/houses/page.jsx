import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import SectionHeader from '@/components/SectionHeader';
import { HouseCard } from '@/components/Card';
import Link from 'next/link';
import { Trophy, Medal, Award } from 'lucide-react';

// Correct house data from IITM BS - Named after Indian forests/national parks
const houses = [
    { name: 'Bandipur', fullName: 'Bandipur House', location: 'Karnataka', tagline: 'Spirit of the Wild', slug: 'bandipur' },
    { name: 'Corbett', fullName: 'Corbett House', location: 'Uttarakhand', tagline: 'Legacy of Champions', slug: 'corbett' },
    { name: 'Gir', fullName: 'Gir House', location: 'Gujarat', tagline: 'Pride of Lions', slug: 'gir' },
    { name: 'Kanha', fullName: 'Kanha House', location: 'Madhya Pradesh', tagline: 'Heart of India', slug: 'kanha' },
    { name: 'Kaziranga', fullName: 'Kaziranga House', location: 'Assam', tagline: 'Strength in Unity', slug: 'kaziranga' },
    { name: 'Nallamala', fullName: 'Nallamala House', location: 'Andhra Pradesh', tagline: 'Hills of Wisdom', slug: 'nallamala' },
    { name: 'Namdapha', fullName: 'Namdapha House', location: 'Arunachal Pradesh', tagline: 'Exploring Frontiers', slug: 'namdapha' },
    { name: 'Nilgiri', fullName: 'Nilgiri House', location: 'Tamil Nadu', tagline: 'Blue Mountain Spirit', slug: 'nilgiri' },
    { name: 'Pichavaram', fullName: 'Pichavaram House', location: 'Tamil Nadu', tagline: 'Roots of Resilience', slug: 'pichavaram' },
    { name: 'Saranda', fullName: 'Saranda House', location: 'Jharkhand', tagline: 'Forest of Seven Hundred Hills', slug: 'saranda' },
    { name: 'Sundarbans', fullName: 'Sundarbans House', location: 'West Bengal', tagline: 'Where Land Meets Sea', slug: 'sundarbans' },
    { name: 'Wayanad', fullName: 'Wayanad House', location: 'Kerala', tagline: 'Gateway to Green', slug: 'wayanad' },
];

// Sample leaderboard data
const leaderboard = [
    { rank: 1, name: 'Kaziranga', points: 2450 },
    { rank: 2, name: 'Corbett', points: 2380 },
    { rank: 3, name: 'Nilgiri', points: 2290 },
    { rank: 4, name: 'Sundarbans', points: 2150 },
    { rank: 5, name: 'Bandipur', points: 2080 },
];

export default function HousesPage() {
    return (
        <>
            <Navbar />

            <main className="pt-nav">
                {/* Hero Section */}
                <HeroSection
                    eyebrow="Your Community"
                    title="IITM BS"
                    titleAccent="Houses"
                    description="Every student is assigned to one of 12 houses named after India's magnificent forests and national parks. Build connections, earn points, and compete for glory!"
                    primaryCta="Find Your House"
                    primaryCtaHref="#houses-grid"
                    secondaryCta="View Leaderboard"
                    secondaryCtaHref="#leaderboard"
                />

                {/* About House System */}
                <section className="section bg-white">
                    <div className="container">
                        <div className="grid grid-cols-2" style={{ gap: 'var(--space-16)', alignItems: 'center' }}>
                            <div>
                                <SectionHeader
                                    eyebrow="How It Works"
                                    title="The House System"
                                    subtitle="A house is your home within IITM BS. You're automatically assigned to one of 12 houses upon enrollment, and this becomes your community throughout the program."
                                />
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
                                    <div className="flex gap-4">
                                        <div style={{
                                            width: '40px',
                                            height: '40px',
                                            borderRadius: 'var(--radius-lg)',
                                            backgroundColor: 'var(--color-maroon-subtle)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'var(--color-maroon)',
                                            fontWeight: 'bold',
                                            flexShrink: 0,
                                        }}>1</div>
                                        <div>
                                            <h4 style={{ fontWeight: 600, marginBottom: 'var(--space-1)' }}>Automatic Assignment</h4>
                                            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-grey)' }}>
                                                You're assigned based on your exam city and stay in your house permanently.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div style={{
                                            width: '40px',
                                            height: '40px',
                                            borderRadius: 'var(--radius-lg)',
                                            backgroundColor: 'var(--color-maroon-subtle)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'var(--color-maroon)',
                                            fontWeight: 'bold',
                                            flexShrink: 0,
                                        }}>2</div>
                                        <div>
                                            <h4 style={{ fontWeight: 600, marginBottom: 'var(--space-1)' }}>10 Regions Per House</h4>
                                            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-grey)' }}>
                                                Each house has members from Delhi, Chennai, Bengaluru, Hyderabad, Mumbai, Kolkata, Patna, Chandigarh, Lucknow, and International.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div style={{
                                            width: '40px',
                                            height: '40px',
                                            borderRadius: 'var(--radius-lg)',
                                            backgroundColor: 'var(--color-maroon-subtle)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'var(--color-maroon)',
                                            fontWeight: 'bold',
                                            flexShrink: 0,
                                        }}>3</div>
                                        <div>
                                            <h4 style={{ fontWeight: 600, marginBottom: 'var(--space-1)' }}>Earn House Points</h4>
                                            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-grey)' }}>
                                                Participate in events and competitions to earn points for your house championship.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Leaderboard */}
                            <div className="leaderboard" id="leaderboard">
                                <h3 className="h4" style={{ marginBottom: 'var(--space-6)', display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                                    <Trophy size={24} style={{ color: 'var(--color-gold)' }} />
                                    House Championship
                                </h3>
                                {leaderboard.map((house, index) => (
                                    <div key={house.rank} className="leaderboard-item">
                                        <div className={`leaderboard-rank leaderboard-rank-${house.rank}`}>
                                            {house.rank === 1 && <Trophy size={20} />}
                                            {house.rank === 2 && <Medal size={20} />}
                                            {house.rank === 3 && <Award size={20} />}
                                            {house.rank > 3 && house.rank}
                                        </div>
                                        <span className="leaderboard-name">{house.name}</span>
                                        <span className="leaderboard-points">{house.points.toLocaleString()} pts</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* All Houses Grid */}
                <section className="section" style={{ background: 'var(--color-cream)' }} id="houses-grid">
                    <div className="container">
                        <SectionHeader
                            eyebrow="All Houses"
                            title="12 Houses of IITM BS"
                            subtitle="Named after India's magnificent forests and national parks, each house represents a unique ecosystem of talent and camaraderie."
                            centered
                        />

                        <div className="grid grid-cols-4" style={{ gap: 'var(--space-5)' }}>
                            {houses.map((house) => (
                                <Link key={house.name} href={`/houses/${house.slug}`}>
                                    <HouseCard
                                        name={house.name}
                                        tagline={house.tagline}
                                        location={house.location}
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Leadership CTA */}
                <section className="section bg-white">
                    <div className="container">
                        <div style={{
                            textAlign: 'center',
                            maxWidth: '640px',
                            margin: '0 auto'
                        }}>
                            <SectionHeader
                                eyebrow="Get Involved"
                                title="Lead Your House"
                                subtitle="Each house has a Secretary, Deputy Secretary, and Regional Coordinators elected by members. Step up and make a difference!"
                                centered
                            />
                            <div className="flex justify-center gap-4">
                                <Link href="/por" className="btn btn-primary">
                                    Explore Leadership Roles
                                </Link>
                                <Link href="/resources" className="btn btn-secondary">
                                    View Guidelines
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
