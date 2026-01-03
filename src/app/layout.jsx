import './globals.css'

export const metadata = {
    title: 'Student Activities | IITM BS',
    description: 'The non-academic ecosystem for IITM BS students covering Houses, Societies, Events, and Community.',
    keywords: 'IITM BS, Student Activities, Houses, Societies, Events, IIT Madras',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    )
}
