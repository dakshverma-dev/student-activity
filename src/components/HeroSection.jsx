import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection({
    eyebrow,
    title,
    titleAccent,
    description,
    primaryCta,
    primaryCtaHref = '#',
    secondaryCta,
    secondaryCtaHref = '#',
}) {
    return (
        <>
            <section className="hero-modern">
                {/* Subtle background elements */}
                <div className="hero-modern-bg">
                    <div className="hero-modern-orb hero-modern-orb-1" />
                    <div className="hero-modern-orb hero-modern-orb-2" />
                    <div className="hero-modern-line" />
                </div>

                <div className="container">
                    <div className="hero-modern-content">
                        {eyebrow && (
                            <div className="hero-modern-eyebrow">
                                <span className="hero-modern-eyebrow-dot" />
                                {eyebrow}
                            </div>
                        )}

                        <h1 className="hero-modern-title">
                            {title}
                            {titleAccent && (
                                <>
                                    {' '}<span className="hero-modern-accent">{titleAccent}</span>
                                </>
                            )}
                        </h1>

                        {description && (
                            <p className="hero-modern-description">{description}</p>
                        )}

                        <div className="hero-modern-actions">
                            {primaryCta && (
                                <Link href={primaryCtaHref} className="btn btn-primary btn-lg">
                                    {primaryCta}
                                </Link>
                            )}
                            {secondaryCta && (
                                <Link href={secondaryCtaHref} className="btn btn-secondary btn-lg">
                                    {secondaryCta}
                                </Link>
                            )}
                        </div>

                        {/* Stats row */}
                        <div className="hero-modern-stats">
                            <div className="hero-modern-stat">
                                <span className="hero-modern-stat-value">12</span>
                                <span className="hero-modern-stat-label">Houses</span>
                            </div>
                            <div className="hero-modern-stat-divider" />
                            <div className="hero-modern-stat">
                                <span className="hero-modern-stat-value">21+</span>
                                <span className="hero-modern-stat-label">Societies</span>
                            </div>
                            <div className="hero-modern-stat-divider" />
                            <div className="hero-modern-stat">
                                <span className="hero-modern-stat-value">3</span>
                                <span className="hero-modern-stat-label">Paradox Fests</span>
                            </div>
                            <div className="hero-modern-stat-divider" />
                            <div className="hero-modern-stat">
                                <span className="hero-modern-stat-value">10K+</span>
                                <span className="hero-modern-stat-label">Students</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
