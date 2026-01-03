export default function Badge({ children, variant = 'default', className = '' }) {
    const variantClasses = {
        default: '',
        upcoming: 'badge-upcoming',
        past: 'badge-past',
        online: 'badge-online',
        offline: 'badge-offline',
        house: 'badge-house',
        society: 'badge-society',
    };

    return (
        <span className={`badge ${variantClasses[variant]} ${className}`}>
            {children}
        </span>
    );
}
