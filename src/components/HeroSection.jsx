import Link from 'next/link';
import Image from 'next/image';
import { Play, ArrowRight } from 'lucide-react';

export default function HeroSection({
    eyebrow = "ADMISSIONS OPEN FOR 2026",
    title,
    titleAccent,
    titleSuffix = "Experience.",
    description,
    primaryCta,
    primaryCtaHref = '#',
    secondaryCta,
    secondaryCtaHref = '#',
}) {
    return (
        <>
            <section className="hero-new">
                {/* Subtle background gradient */}
                <div className="hero-new-bg" />

                {/* Decorative sparkle */}
                <div className="hero-sparkle hero-sparkle-1">✦</div>
                <div className="hero-sparkle hero-sparkle-2">✦</div>

                <div className="container">
                    <div className="hero-new-grid">
                        {/* Left Content */}
                        <div className="hero-new-content">
                            {eyebrow && (
                                <div className="hero-new-eyebrow">
                                    <span className="hero-new-eyebrow-dot" />
                                    {eyebrow}
                                </div>
                            )}

                            <h1 className="hero-new-title">
                                Redefining the
                                <br />
                                <span className="hero-new-accent">{titleAccent || 'Student'}</span>
                                <br />
                                {titleSuffix}
                            </h1>

                            {description && (
                                <p className="hero-new-description">{description}</p>
                            )}

                            <div className="hero-new-actions">
                                {primaryCta && (
                                    <Link href={primaryCtaHref} className="btn btn-primary btn-lg hero-new-btn-primary">
                                        {primaryCta} <ArrowRight size={18} />
                                    </Link>
                                )}
                                {secondaryCta && (
                                    <Link href={secondaryCtaHref} className="btn btn-ghost btn-lg hero-new-btn-secondary">
                                        <span className="hero-play-btn">
                                            <Play size={12} fill="currentColor" />
                                        </span>
                                        {secondaryCta}
                                    </Link>
                                )}
                            </div>

                            {/* Avatars Row */}
                            <div className="hero-avatars">
                                <div className="hero-avatars-stack">
                                    <div className="hero-avatar">
                                        <Image src="/students-group.png" alt="Student" width={36} height={36} />
                                    </div>
                                    <div className="hero-avatar">
                                        <Image src="/students-discussion.png" alt="Student" width={36} height={36} />
                                    </div>
                                    <div className="hero-avatar hero-avatar-more">
                                        <Image src="/students-group.png" alt="Student" width={36} height={36} />
                                    </div>
                                </div>
                                <span className="hero-avatars-text">Joined by <strong>15,000+</strong> Students</span>
                            </div>
                        </div>

                        {/* Right Images */}
                        <div className="hero-new-images">
                            <div className="hero-image-frame hero-image-frame-1">
                                <Image
                                    src="/students-discussion.png"
                                    alt="Students collaborating"
                                    width={320}
                                    height={320}
                                    className="hero-image"
                                />
                            </div>
                            <div className="hero-image-frame hero-image-frame-2">
                                <Image
                                    src="/students-group.png"
                                    alt="Students in discussion"
                                    width={380}
                                    height={280}
                                    className="hero-image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Marquee Banner */}
            <div className="hero-marquee-new">
                <div className="hero-marquee-track-new">
                    <div className="hero-marquee-content-new">
                        {['INNOVATE', 'CREATE', 'INSPIRE', 'LEAD', 'INNOVATE', 'CREATE', 'INSPIRE', 'LEAD'].map((word, index) => (
                            <span key={index} className="hero-marquee-item-new">
                                <span className="hero-marquee-star">★</span>
                                {word}
                            </span>
                        ))}
                    </div>
                    <div className="hero-marquee-content-new">
                        {['INNOVATE', 'CREATE', 'INSPIRE', 'LEAD', 'INNOVATE', 'CREATE', 'INSPIRE', 'LEAD'].map((word, index) => (
                            <span key={index} className="hero-marquee-item-new">
                                <span className="hero-marquee-star">★</span>
                                {word}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
