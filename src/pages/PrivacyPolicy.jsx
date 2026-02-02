import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
    return (
        <div id="privacy-policy" className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
                <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Home
                </Link>
                <h1 className="text-4xl font-bold text-gray-900 mb-6">ANTESO Biomedical Privacy Policy</h1>
                <p className="text-sm text-gray-600 mb-8">Last Updated: October 15, 2025</p>

                <div className="prose prose-lg max-w-none">
                    <p className="mb-6">
                        Anteso Biomedical (OPC) Private Limited ("Company", "we", "our", or "us") operates the ANTESO mobile application (the "App"). This Privacy Policy describes how we collect, use, store, share, and protect your personal information when you use our App.
                    </p>

                    <p className="mb-6">
                        <strong>Legal Compliance:</strong> We comply with the Digital Personal Data Protection Act, 2023 (DPDP Act), Information Technology Act, 2000, and AERB guidelines. As a Data Fiduciary under DPDP Act, we are responsible for processing your personal data lawfully and securely.
                    </p>

                    <p className="mb-8">
                        By accessing or using the App, you consent to the practices described herein.
                    </p>

                    <hr className="my-8" />

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Company Information</h2>
                    <p className="mb-4">
                        <strong>Anteso Biomedical (OPC) Private Limited</strong><br />
                        Flat No. 290, 2nd Floor, D Block, Pocket 7, Sector 6, Rohini, New Delhi – 110 085, India
                    </p>
                    <p className="mb-4">
                        <strong>Contact:</strong> antesobiomedical.2014@gmail.com | +91 84709 09720<br />
                        <strong>Grievance Officer:</strong> Same contact details (DPDP Act requirement)
                    </p>
                    <p className="mb-6">
                        We specialise in conducting Quality Assurance (QA) testing of radiology equipment in compliance with the guidelines of the Atomic Energy Regulatory Board (AERB).
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Information We Collect</h2>

                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">a. Personal Information</h3>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Full Name, Email Address, Contact Number, and Organization Name</li>
                        <li>User Credentials and Authentication Data</li>
                        <li>Professional Qualifications (as required for AERB compliance)</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">b. Sensitive Technical Data</h3>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Equipment parameters: Radiation dosage, calibration data, and related technical specifications</li>
                        <li>QA test results: Image quality metrics, safety parameters, and performance verification data</li>
                        <li>Medical facility details: License numbers, AERB approvals, and other regulatory identifiers</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">c. Device & Usage Data</h3>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Device identifiers, IP address, OS version</li>
                        <li>App usage logs, crash reports</li>
                        <li>Location data (with explicit consent for field testing)</li>
                    </ul>

                    <p className="mb-6">
                        <strong>Data Minimization:</strong> Data strictly necessary for AERB-compliant QA testing, regulatory reporting, and the efficient execution of services shall be collected, processed, and maintained in accordance with applicable regulatory and organizational standards.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Lawful Basis for Processing</h2>
                    <p className="mb-4">We process personal and technical data on the following lawful bases:</p>
                    <ul className="list-disc pl-6 mb-6">
                        <li><strong>Contract:</strong> To provide QA services, generate reports, and fulfill obligations under service agreements.</li>
                        <li><strong>Legal Obligation:</strong> To comply with AERB regulations and other statutory record-keeping requirements.</li>
                        <li><strong>Legitimate Interest:</strong> To ensure proper functioning of applications, monitor system security, and improve operational efficiency.</li>
                        <li><strong>Explicit Consent:</strong> For processing location data, marketing communications, or any other activities requiring clear user consent.</li>
                    </ul>
                    <p className="mb-6">
                        All data processing activities are conducted in accordance with applicable regulatory frameworks and organizational policies.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Consent Management</h2>
                    <p className="mb-4">We ensure that user consent is obtained, managed, and respected in accordance with applicable data protection laws:</p>
                    <ul className="list-disc pl-6 mb-6">
                        <li><strong>Granular Consent:</strong> Separate permissions are obtained for different types of data and processing activities.</li>
                        <li><strong>Easy Withdrawal:</strong> Users may withdraw consent at any time via the application settings or by contacting us via email.</li>
                        <li><strong>Consent Records:</strong> Verifiable records of consent are maintained for accountability and compliance purposes.</li>
                        <li><strong>No Penalty:</strong> Withdrawal of consent will not affect any data processing that was lawful prior to the withdrawal.</li>
                    </ul>
                    <p className="mb-6">
                        All consent management practices are designed to uphold user rights and ensure transparency in data processing activities.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. How We Use Your Information</h2>
                    <ul className="list-disc pl-6 mb-6">
                        <li>Generate AERB-compliant QA certificates and reports</li>
                        <li>Perform equipment calibration and safety validation</li>
                        <li>Manage user authentication and access</li>
                        <li>Maintain regulatory audits and compliance documentation</li>
                        <li>Improve services and fix bugs</li>
                    </ul>
                    <p className="mb-6">
                        All data usage is conducted in strict adherence to applicable regulatory standards and organizational policies.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Data Security Measures</h2>

                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Technical Safeguards:</h3>
                    <ul className="list-disc pl-6 mb-4">
                        <li><strong>Encryption:</strong> AES-256 for data at rest and TLS 1.3 for data in transit.</li>
                        <li><strong>Access Controls:</strong> Multi-factor authentication and role-based access management.</li>
                        <li><strong>Secure Storage:</strong> Data hosted on ISO 27001-compliant cloud infrastructure.</li>
                        <li><strong>Regular Audits:</strong> Annual penetration testing and comprehensive security assessments.</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Organizational Measures:</h3>
                    <ul className="list-disc pl-6 mb-6">
                        <li><strong>Data Classification:</strong> Sensitive medical data is flagged for enhanced protection.</li>
                        <li><strong>Access Logging:</strong> All data access events are recorded and actively monitored.</li>
                        <li><strong>Employee Training:</strong> Mandatory annual data protection and security training for all employees.</li>
                        <li><strong>Incident Response:</strong> 24/7 monitoring with a defined breach response protocol in place.</li>
                    </ul>
                    <p className="mb-6">
                        All technical and organizational measures are implemented to ensure the confidentiality, integrity, and availability of data in accordance with applicable regulatory and organizational standards.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Storage Locations</h2>
                    <ul className="list-disc pl-6 mb-4">
                        <li><strong>Primary:</strong> Servers located in India, in compliance with data localization requirements.</li>
                        <li><strong>Backup:</strong> Encrypted backups maintained with geographic redundancy to ensure data availability and disaster recovery.</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Retention Periods:</h3>
                    <ul className="list-disc pl-6 mb-6">
                        <li><strong>Personal Data:</strong> Retained for the duration of the service relationship plus two years.</li>
                        <li><strong>QA Records:</strong> Retained for a minimum of ten years in accordance with AERB requirements.</li>
                        <li><strong>Technical Logs:</strong> Retained for 90 days for security purposes and up to seven years for audit requirements.</li>
                        <li><strong>Deletion:</strong> Data is securely erased following NIST SP 800-88 standards when the retention period expires.</li>
                    </ul>
                    <p className="mb-6">
                        All storage and retention practices are designed to ensure compliance with regulatory requirements and organizational data protection policies.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Sharing & Disclosure</h2>
                    <p className="mb-4">We do not sell personal or technical data. Limited sharing of data occurs only under the following circumstances:</p>
                    <ul className="list-disc pl-6 mb-4">
                        <li><strong>Regulatory Bodies:</strong> Data may be shared with AERB, the Atomic Energy Commission, or other statutory authorities as required by law.</li>
                        <li><strong>Service Providers:</strong> Data may be shared with authorized service providers under formal Data Processing Agreements (DPAs), including:
                            <ul className="list-circle pl-6 mt-2">
                                <li>Cloud Hosting: AWS or GCP servers located in India.</li>
                                <li>Analytics: Only anonymized data is shared for analysis purposes.</li>
                            </ul>
                        </li>
                        <li><strong>Legal Compliance:</strong> Disclosure may be required to comply with court orders or governmental requests.</li>
                    </ul>
                    <p className="mb-6">
                        <strong>Vendor Requirements:</strong> All external processors are required to maintain equivalent security standards, adhere to applicable data protection regulations, and permit audits to ensure compliance.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Cross-Border Data Transfers</h2>
                    <ul className="list-disc pl-6 mb-6">
                        <li><strong>India-First Policy:</strong> All primary data processing activities are conducted within India to comply with data localization requirements.</li>
                        <li><strong>International Transfers:</strong> Cross-border data transfers occur only under Standard Contractual Clauses (SCCs) or where an adequacy decision has been provided by the relevant authority.</li>
                        <li><strong>Transfer Impact Assessments:</strong> A thorough assessment is conducted for all cross-border data flows to ensure compliance with applicable data protection laws and to mitigate risks.</li>
                    </ul>
                    <p className="mb-6">
                        All cross-border transfers are subject to strict organizational controls and regulatory compliance requirements.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Your Rights (Under DPDP Act, 2023)</h2>
                    <p className="mb-4">As a Data Principal, you are entitled to the following rights regarding your personal data:</p>
                    <ol className="list-decimal pl-6 mb-4">
                        <li><strong>Access:</strong> Obtain a free copy of your data twice per year.</li>
                        <li><strong>Correction:</strong> Request updates or corrections to any inaccurate or incomplete information.</li>
                        <li><strong>Erasure:</strong> Exercise the "Right to be Forgotten," subject to applicable legal or regulatory retention requirements.</li>
                        <li><strong>Nomination:</strong> Appoint a nominee to manage your data on your behalf.</li>
                        <li><strong>Grievance Redressal:</strong> Escalate any concerns or complaints to the designated Grievance Officer.</li>
                    </ol>

                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Process for Exercising Rights:</h3>
                    <ul className="list-disc pl-6 mb-6">
                        <li>Submit requests via email to antesobiomedical.2014@gmail.com.</li>
                        <li><strong>Timeline:</strong> Initial acknowledgment within 7 days; resolution within 30 days.</li>
                        <li><strong>Verification:</strong> KYC or other identity documents may be required to verify the requestor's identity.</li>
                        <li><strong>Appeals:</strong> If a request is denied, you may escalate to the Grievance Officer for further review.</li>
                    </ul>
                    <p className="mb-6">
                        All requests will be handled in accordance with applicable regulatory requirements and organizational policies to ensure your rights are fully respected.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Data Breach Response</h2>
                    <p className="mb-4">To ensure timely and effective management of data breaches, the following measures are implemented:</p>
                    <ul className="list-disc pl-6 mb-6">
                        <li><strong>Detection:</strong> Continuous real-time monitoring using SIEM (Security Information and Event Management) systems.</li>
                        <li><strong>Containment:</strong> Immediate isolation of affected systems to prevent further data compromise.</li>
                        <li><strong>Notification:</strong>
                            <ul className="list-circle pl-6 mt-2">
                                <li>Users: Notification within 72 hours if the breach poses a high risk to data principals.</li>
                                <li>Regulators: Notification to AERB and MeitY within 6 hours, in accordance with DPDP draft rules.</li>
                            </ul>
                        </li>
                        <li><strong>Remediation:</strong> Conduct a full forensic investigation and implement system hardening measures to prevent recurrence.</li>
                        <li><strong>Transparency:</strong> Share a post-incident report with affected users detailing the nature of the breach and corrective actions taken.</li>
                    </ul>
                    <p className="mb-6">
                        All breach response activities are executed in alignment with applicable regulatory requirements and organizational security policies.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. Cookies & Tracking</h2>
                    <p className="mb-4">The application may collect information through cookies and similar tracking technologies as follows:</p>
                    <ul className="list-disc pl-6 mb-6">
                        <li><strong>Essential:</strong> Necessary for core application functionality; consent is not required.</li>
                        <li><strong>Analytics:</strong> Usage patterns may be tracked in an anonymized form; users have the option to opt out.</li>
                        <li><strong>Advertising:</strong> No advertising or targeted tracking is currently implemented.</li>
                    </ul>
                    <p className="mb-6">
                        <strong>Transparency:</strong> Detailed information regarding all tracking mechanisms is disclosed within the application settings to ensure user awareness and control.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">13. Third-Party Services</h2>
                    <ul className="list-disc pl-6 mb-6">
                        <li><strong>External SDKs:</strong> No third-party software development kits (SDKs) collect personal data without explicit user consent.</li>
                        <li><strong>App Store Compliance:</strong> The application adheres to all relevant Google Play and Apple App Store policies regarding data privacy and user protection.</li>
                        <li><strong>External Links:</strong> Any links to external websites are not covered under this Data Collection and Handling Policy; users are advised to review the privacy policies of those external sites separately.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">14. Children's Privacy</h2>
                    <p className="mb-4">
                        <strong>Professional Use Only:</strong> The application is restricted to users who are 18 years of age or older and possess the required professional qualifications.
                    </p>
                    <p className="mb-6">
                        <strong>Parental Consent:</strong> Not applicable, as the application is intended solely for qualified professionals and does not target children.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">15. Data Protection Officer</h2>
                    <p className="mb-4">
                        <strong>DPO Contact:</strong> antesobiomedical.2014@gmail.com
                    </p>
                    <p className="mb-6">
                        <strong>Role:</strong> Responsible for overseeing regulatory compliance, managing data subject requests, and serving as the primary liaison with regulatory authorities.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">17. Complaint Procedure</h2>
                    <ol className="list-decimal pl-6 mb-6">
                        <li><strong>Initial Contact:</strong> Submit complaints or concerns directly to the designated Grievance Officer.</li>
                        <li><strong>Acknowledgment:</strong> A written response will be provided within 7 days of receiving the complaint.</li>
                        <li><strong>Resolution:</strong> The complaint will be investigated and resolved within 30 days.</li>
                        <li><strong>Escalation:</strong> If the resolution is unsatisfactory, the complaint may be escalated to the Data Protection Board of India for further review.</li>
                    </ol>
                    <p className="mb-6">
                        All complaints will be handled in accordance with applicable regulatory requirements and organizational policies to ensure timely and fair resolution.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">18. Governing Law & Jurisdiction</h2>
                    <ul className="list-disc pl-6 mb-6">
                        <li><strong>Governing Law:</strong> This Policy and all related data processing activities shall be governed by the laws of India.</li>
                        <li><strong>Jurisdiction:</strong> Any disputes arising under or in connection with this Policy shall be subject to the exclusive jurisdiction of the courts in New Delhi.</li>
                        <li><strong>Applicable Regulations:</strong> Compliance will be maintained with the Digital Personal Data Protection (DPDP) Act, 2023, IT Rules, 2021, and relevant AERB Guidelines.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">19. Changes to Policy</h2>
                    <ul className="list-disc pl-6 mb-6">
                        <li><strong>Material Changes:</strong> Users will be notified at least 30 days in advance of any material changes to this Policy via the application or email.</li>
                        <li><strong>Minor Updates:</strong> Non-material updates will be posted with an updated "Last Updated" date.</li>
                        <li><strong>Continued Use:</strong> Continued use of the application following any updates constitutes acceptance of the revised Policy.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">20. Contact Information</h2>
                    <p className="mb-2">
                        <strong>Anteso Biomedical (OPC) Private Limited</strong><br />
                        Flat No. 290, 2nd Floor, D Block, Pocket 7, Sector 6, Rohini, New Delhi – 110 085
                    </p>
                    <p className="mb-6">
                        <strong>General:</strong> antesobiomedical.2014@gmail.com | +91 84709 09720
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;