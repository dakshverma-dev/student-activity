import Link from 'next/link';
import Badge from './Badge';
import { ArrowRight, ExternalLink, Mail, Instagram } from 'lucide-react';

// Generic Card
export function Card({ children, className = '', ...props }) {
    return (
        <div className={`card ${className}`} {...props}>
            {children}
        </div>
    );
}

// House Card - for houses named after Indian forests
export function HouseCard({ name, tagline, location, href }) {
    const content = (
        <div className="card house-card">
            <div className="house-card-icon">
                {name.charAt(0)}
            </div>
            <h3 className="house-card-name">{name}</h3>
            {location && (
                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-gold-dark)', marginBottom: 'var(--space-2)', fontWeight: 500 }}>
                    {location}
                </p>
            )}
            <p className="house-card-tagline">{tagline}</p>
        </div>
    );

    if (href) {
        return <Link href={href}>{content}</Link>;
    }
    return content;
}

// Event Card
export function EventCard({ title, date, month, host, type, isUpcoming, href }) {
    return (
        <div className="card event-card">
            <div className="card-body">
                <div className="flex gap-4">
                    <div className="event-card-date">
                        <span className="event-card-date-day">{date}</span>
                        <span className="event-card-date-month">{month}</span>
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                        <div className="flex gap-2 mb-2">
                            <Badge variant={isUpcoming ? 'upcoming' : 'past'}>
                                {isUpcoming ? 'Upcoming' : 'Past'}
                            </Badge>
                            <Badge variant={type === 'online' ? 'online' : 'offline'}>
                                {type}
                            </Badge>
                        </div>
                        <h3 className="card-title" style={{ marginBottom: 'var(--space-1)' }}>{title}</h3>
                        <p className="card-text" style={{ marginBottom: 0 }}>
                            Hosted by {host}
                        </p>
                    </div>
                    <ArrowRight size={20} style={{ color: 'var(--color-grey-light)', flexShrink: 0 }} />
                </div>
            </div>
        </div>
    );
}

// Society Card - Updated to show full info
export function SocietyCard({ name, fullName, category, email, instagram }) {
    return (
        <div className="card society-card">
            <div className="society-card-logo">
                {name.charAt(0)}
            </div>
            <div className="society-card-info">
                <h3 className="society-card-name">{name}</h3>
                {fullName && (
                    <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-grey)', marginBottom: 'var(--space-1)' }}>
                        {fullName}
                    </p>
                )}
                <Badge variant="society" style={{ display: 'inline-flex' }}>{category}</Badge>
            </div>
            <div style={{ display: 'flex', gap: 'var(--space-2)', flexShrink: 0 }}>
                {instagram && (
                    <a
                        href={instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-icon"
                        style={{ width: '36px', height: '36px' }}
                        aria-label="Instagram"
                    >
                        <Instagram size={16} />
                    </a>
                )}
                {email && (
                    <a
                        href={`mailto:${email}`}
                        className="btn-icon"
                        style={{ width: '36px', height: '36px' }}
                        aria-label="Email"
                    >
                        <Mail size={16} />
                    </a>
                )}
            </div>
        </div>
    );
}

// Quick Link Card
export function QuickLinkCard({ title, icon, href, description }) {
    return (
        <Link href={href} className="quick-link-card">
            <div className="quick-link-icon">
                {icon}
            </div>
            <span className="quick-link-title">{title}</span>
            {description && (
                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-grey)', margin: 0 }}>{description}</p>
            )}
        </Link>
    );
}
