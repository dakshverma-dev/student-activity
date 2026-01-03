import Link from 'next/link';

export default function SectionHeader({
    eyebrow,
    title,
    subtitle,
    centered = false,
    ctaText,
    ctaHref,
    className = ''
}) {
    return (
        <div className={`section-header ${centered ? 'section-header-centered' : ''} ${className}`}>
            {eyebrow && (
                <span className="section-eyebrow">{eyebrow}</span>
            )}
            <h2 className="section-title">{title}</h2>
            {subtitle && (
                <p className="section-subtitle">{subtitle}</p>
            )}
            {ctaText && ctaHref && (
                <Link href={ctaHref} className="btn btn-tertiary mt-4">
                    {ctaText} →
                </Link>
            )}
        </div>
    );
}
