'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import { CheckCircle, XCircle, Search, Shield } from 'lucide-react';

export default function VerifyPage() {
    const [certificateId, setCertificateId] = useState('');
    const [verificationResult, setVerificationResult] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleVerify = async (e) => {
        e.preventDefault();

        if (!certificateId.trim()) return;

        setIsLoading(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Demo: IDs starting with "SA" are valid
        if (certificateId.toUpperCase().startsWith('SA')) {
            setVerificationResult({
                valid: true,
                data: {
                    name: 'John Doe',
                    certificateId: certificateId.toUpperCase(),
                    event: 'Inter-House Quiz Competition',
                    date: 'January 15, 2025',
                    issuedBy: 'Student Activities, IITM BS',
                    type: 'Participation Certificate'
                }
            });
        } else {
            setVerificationResult({
                valid: false,
                message: 'Certificate not found. Please check the ID and try again.'
            });
        }

        setIsLoading(false);
    };

    return (
        <>
            <Navbar />

            <main className="pt-nav">
                {/* Hero Section */}
                <HeroSection
                    eyebrow="Authentication"
                    title="Verify"
                    titleAccent="Certificate"
                    description="Verify the authenticity of certificates issued by Student Activities, IITM BS. Enter the certificate ID to check its validity."
                />

                {/* Verification Section */}
                <section className="section bg-white">
                    <div className="container" style={{ maxWidth: '640px' }}>
                        <div className="card" style={{ padding: 'var(--space-8)' }}>
                            <div style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
                                <div style={{
                                    width: '64px',
                                    height: '64px',
                                    borderRadius: 'var(--radius-full)',
                                    backgroundColor: 'var(--color-off-white)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto var(--space-4)',
                                    color: 'var(--color-maroon)'
                                }}>
                                    <Shield size={32} />
                                </div>
                                <h2 className="h3">Certificate Validator</h2>
                                <p style={{ color: 'var(--color-grey)', marginTop: 'var(--space-2)' }}>
                                    Enter the certificate ID found on your certificate
                                </p>
                            </div>

                            <form onSubmit={handleVerify}>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="certificateId">
                                        Certificate ID
                                    </label>
                                    <div style={{ position: 'relative' }}>
                                        <input
                                            type="text"
                                            id="certificateId"
                                            className="form-input form-input-lg"
                                            placeholder="e.g., SA-2025-001234"
                                            value={certificateId}
                                            onChange={(e) => setCertificateId(e.target.value)}
                                            style={{ paddingRight: 'var(--space-12)' }}
                                        />
                                        <Search
                                            size={20}
                                            style={{
                                                position: 'absolute',
                                                right: 'var(--space-4)',
                                                top: '50%',
                                                transform: 'translateY(-50%)',
                                                color: 'var(--color-grey-light)'
                                            }}
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary btn-lg"
                                    style={{ width: '100%', justifyContent: 'center' }}
                                    disabled={isLoading || !certificateId.trim()}
                                >
                                    {isLoading ? (
                                        <>
                                            <span className="loading-spinner" style={{ width: '20px', height: '20px' }}></span>
                                            Verifying...
                                        </>
                                    ) : (
                                        'Verify Certificate'
                                    )}
                                </button>
                            </form>

                            {/* Verification Result */}
                            {verificationResult && (
                                <div className={`verify-result ${verificationResult.valid ? 'verify-result-valid' : 'verify-result-invalid'}`}>
                                    <div className="verify-result-icon">
                                        {verificationResult.valid ? (
                                            <CheckCircle size={24} />
                                        ) : (
                                            <XCircle size={24} />
                                        )}
                                    </div>

                                    {verificationResult.valid ? (
                                        <>
                                            <h3 style={{ fontWeight: 600, marginBottom: 'var(--space-4)', color: '#03543F' }}>
                                                ✓ Valid Certificate
                                            </h3>
                                            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                                                <div>
                                                    <span style={{ fontSize: 'var(--text-xs)', color: '#03543F', opacity: 0.7 }}>Recipient</span>
                                                    <p style={{ fontWeight: 500, color: '#03543F' }}>{verificationResult.data.name}</p>
                                                </div>
                                                <div>
                                                    <span style={{ fontSize: 'var(--text-xs)', color: '#03543F', opacity: 0.7 }}>Certificate ID</span>
                                                    <p style={{ fontWeight: 500, color: '#03543F' }}>{verificationResult.data.certificateId}</p>
                                                </div>
                                                <div>
                                                    <span style={{ fontSize: 'var(--text-xs)', color: '#03543F', opacity: 0.7 }}>Event</span>
                                                    <p style={{ fontWeight: 500, color: '#03543F' }}>{verificationResult.data.event}</p>
                                                </div>
                                                <div>
                                                    <span style={{ fontSize: 'var(--text-xs)', color: '#03543F', opacity: 0.7 }}>Date Issued</span>
                                                    <p style={{ fontWeight: 500, color: '#03543F' }}>{verificationResult.data.date}</p>
                                                </div>
                                                <div>
                                                    <span style={{ fontSize: 'var(--text-xs)', color: '#03543F', opacity: 0.7 }}>Issued By</span>
                                                    <p style={{ fontWeight: 500, color: '#03543F' }}>{verificationResult.data.issuedBy}</p>
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <h3 style={{ fontWeight: 600, marginBottom: 'var(--space-2)', color: '#9B1C1C' }}>
                                                ✗ Invalid Certificate
                                            </h3>
                                            <p style={{ color: '#9B1C1C' }}>{verificationResult.message}</p>
                                        </>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Help Text */}
                        <div style={{ textAlign: 'center', marginTop: 'var(--space-8)', color: 'var(--color-grey)' }}>
                            <p style={{ marginBottom: 'var(--space-4)' }}>
                                <strong>Where to find your Certificate ID?</strong>
                            </p>
                            <p style={{ fontSize: 'var(--text-sm)' }}>
                                The Certificate ID is typically located at the bottom of the certificate,
                                starting with "SA-" followed by the year and a unique number.
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
