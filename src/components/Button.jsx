import Link from 'next/link';

export default function Button({
    children,
    variant = 'primary',
    size = 'md',
    href,
    icon,
    className = '',
    ...props
}) {
    const variantClasses = {
        primary: 'btn-primary',
        secondary: 'btn-secondary',
        tertiary: 'btn-tertiary',
    };

    const sizeClasses = {
        sm: 'btn-sm',
        md: '',
        lg: 'btn-lg',
    };

    const classes = `btn ${variantClasses[variant]} ${sizeClasses[size]} ${className}`.trim();

    if (href) {
        return (
            <Link href={href} className={classes} {...props}>
                {icon && <span className="btn-icon-left">{icon}</span>}
                {children}
            </Link>
        );
    }

    return (
        <button className={classes} {...props}>
            {icon && <span className="btn-icon-left">{icon}</span>}
            {children}
        </button>
    );
}
