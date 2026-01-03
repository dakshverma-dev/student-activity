'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeader from '@/components/SectionHeader';
import Badge from '@/components/Badge';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Sample calendar events
const calendarEvents = {
    '2025-01-15': [{ title: 'Paradox 2025 Kickoff', type: 'paradox' }],
    '2025-01-22': [{ title: 'Inter-House Quiz', type: 'house' }],
    '2025-01-25': [{ title: 'Open Mic Night', type: 'society' }],
    '2025-01-28': [{ title: 'Cultural Night', type: 'society' }],
    '2025-02-05': [{ title: 'Tech Talk: AI', type: 'society' }],
    '2025-02-10': [{ title: 'Hackathon 2025', type: 'society' }],
};

const eventTypeColors = {
    house: 'var(--color-maroon)',
    society: 'var(--color-gold)',
    paradox: '#7C3AED',
};

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function CalendarPage() {
    const [currentDate, setCurrentDate] = useState(new Date(2025, 0, 1)); // January 2025

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const prevMonth = () => {
        setCurrentDate(new Date(year, month - 1, 1));
    };

    const nextMonth = () => {
        setCurrentDate(new Date(year, month + 1, 1));
    };

    const getDayEvents = (day) => {
        const dateKey = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        return calendarEvents[dateKey] || [];
    };

    // Generate calendar days
    const calendarDays = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
        calendarDays.push(null);
    }
    for (let day = 1; day <= daysInMonth; day++) {
        calendarDays.push(day);
    }

    return (
        <>
            <Navbar />

            <main className="pt-nav">
                {/* Header */}
                <section className="hero" style={{ paddingBottom: 'var(--space-12)' }}>
                    <div className="container">
                        <span className="hero-eyebrow">Stay Updated</span>
                        <h1 className="hero-title">
                            Events <span className="hero-title-accent">Calendar</span>
                        </h1>
                        <p className="hero-description">
                            View all upcoming events across houses, societies, and Paradox.
                        </p>
                    </div>
                </section>

                {/* Calendar */}
                <section className="section bg-white" style={{ paddingTop: 'var(--space-8)' }}>
                    <div className="container">
                        {/* Calendar Header */}
                        <div className="flex justify-between items-center" style={{ marginBottom: 'var(--space-8)' }}>
                            <button className="btn btn-secondary" onClick={prevMonth}>
                                <ChevronLeft size={18} /> Previous
                            </button>
                            <h2 className="h2" style={{ margin: 0 }}>
                                {months[month]} {year}
                            </h2>
                            <button className="btn btn-secondary" onClick={nextMonth}>
                                Next <ChevronRight size={18} />
                            </button>
                        </div>

                        {/* Legend */}
                        <div className="flex gap-6 justify-center" style={{ marginBottom: 'var(--space-6)' }}>
                            <div className="flex items-center gap-2">
                                <div style={{ width: '12px', height: '12px', borderRadius: 'var(--radius-full)', backgroundColor: eventTypeColors.house }} />
                                <span style={{ fontSize: 'var(--text-sm)' }}>House Events</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div style={{ width: '12px', height: '12px', borderRadius: 'var(--radius-full)', backgroundColor: eventTypeColors.society }} />
                                <span style={{ fontSize: 'var(--text-sm)' }}>Society Events</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div style={{ width: '12px', height: '12px', borderRadius: 'var(--radius-full)', backgroundColor: eventTypeColors.paradox }} />
                                <span style={{ fontSize: 'var(--text-sm)' }}>Paradox</span>
                            </div>
                        </div>

                        {/* Calendar Grid */}
                        <div className="card" style={{ padding: 'var(--space-6)', overflow: 'hidden' }}>
                            {/* Week days header */}
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(7, 1fr)',
                                gap: 'var(--space-2)',
                                marginBottom: 'var(--space-4)'
                            }}>
                                {weekDays.map((day) => (
                                    <div key={day} style={{
                                        textAlign: 'center',
                                        fontWeight: 600,
                                        fontSize: 'var(--text-sm)',
                                        color: 'var(--color-grey)',
                                        padding: 'var(--space-2)'
                                    }}>
                                        {day}
                                    </div>
                                ))}
                            </div>

                            {/* Calendar days */}
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(7, 1fr)',
                                gap: 'var(--space-2)'
                            }}>
                                {calendarDays.map((day, index) => {
                                    const events = day ? getDayEvents(day) : [];
                                    const isToday = day === 3 && month === 0 && year === 2026; // Demo today

                                    return (
                                        <div
                                            key={index}
                                            style={{
                                                minHeight: '100px',
                                                padding: 'var(--space-2)',
                                                backgroundColor: day ? 'var(--color-off-white)' : 'transparent',
                                                borderRadius: 'var(--radius-md)',
                                                border: isToday ? '2px solid var(--color-maroon)' : '1px solid var(--color-grey-lighter)',
                                            }}
                                        >
                                            {day && (
                                                <>
                                                    <span style={{
                                                        fontSize: 'var(--text-sm)',
                                                        fontWeight: isToday ? 700 : 400,
                                                        color: isToday ? 'var(--color-maroon)' : 'var(--color-charcoal)'
                                                    }}>
                                                        {day}
                                                    </span>
                                                    {events.length > 0 && (
                                                        <div style={{ marginTop: 'var(--space-2)' }}>
                                                            {events.map((event, i) => (
                                                                <div
                                                                    key={i}
                                                                    style={{
                                                                        fontSize: '10px',
                                                                        padding: '2px 4px',
                                                                        backgroundColor: eventTypeColors[event.type],
                                                                        color: event.type === 'society' ? 'var(--color-charcoal)' : 'white',
                                                                        borderRadius: 'var(--radius-sm)',
                                                                        marginBottom: '2px',
                                                                        overflow: 'hidden',
                                                                        textOverflow: 'ellipsis',
                                                                        whiteSpace: 'nowrap',
                                                                    }}
                                                                >
                                                                    {event.title}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}
                                                </>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Upcoming List */}
                <section className="section bg-off-white">
                    <div className="container text-center">
                        <h2 className="h3" style={{ marginBottom: 'var(--space-4)' }}>
                            Want a List View?
                        </h2>
                        <p style={{ color: 'var(--color-grey)', marginBottom: 'var(--space-6)' }}>
                            Check out our events page for a complete list of upcoming activities.
                        </p>
                        <a href="/events" className="btn btn-primary">View All Events</a>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
