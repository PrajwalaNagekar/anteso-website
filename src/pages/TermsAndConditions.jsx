import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div id="terms-and-conditions" className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
                <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Home
                </Link>
                <h1 className="text-4xl font-bold text-gray-900 mb-6">ANTESO Biomedical Terms & Conditions</h1>
                <p className="text-sm text-gray-600 mb-8">Last Updated: October 15, 2025</p>

                <div className="prose prose-lg max-w-none">
                    <p className="mb-6">
                        Anteso Biomedical (OPC) Private Limited ("Company", "we", "our", or "us"), a company incorporated under the Companies Act, 2013, with its registered office at Flat No. 290, 2nd Floor, D Block, Pocket 7, Sector 6, Rohini, New Delhi – 110 085, India, operates the ANTESO mobile application (the "App").
                    </p>

                    <p className="mb-6">
                        These Terms & Conditions ("Terms") govern your access to and use of the App, including all services, features, and content provided through it (collectively, the "Services"). The App is specifically designed for Quality Assurance (QA) testing of radiology equipment in compliance with the guidelines issued by the Atomic Energy Regulatory Board (AERB).
                    </p>

                    <p className="mb-8">
                        By downloading, installing, registering for, or using the App, you agree to be bound by these Terms, our Privacy Policy, and all applicable laws. If you do not agree to these Terms, you must not use the App.
                    </p>

                    <hr className="my-8" />

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Eligibility</h2>
                    <ul className="list-disc pl-6 mb-6">
                        <li><strong>Age Requirement:</strong> You must be at least 18 years old and legally competent to enter into binding agreements.</li>
                        <li><strong>Professional Use:</strong> The App is intended exclusively for licensed medical professionals, radiologists, biomedical engineers, and authorized personnel from healthcare institutions that comply with AERB regulations.</li>
                        <li><strong>Prohibited Users:</strong> Government entities, competitors, or any unauthorized individuals are strictly prohibited from accessing or using the Services.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. User Registration & Accounts</h2>
                    <ul className="list-disc pl-6 mb-6">
                        <li><strong>Account Creation:</strong> You must create an account using accurate and complete information, including your name, email, contact details, and organization credentials.</li>
                        <li><strong>Credentials:</strong> You are solely responsible for maintaining the confidentiality of your login credentials. Any unauthorized use or breach must be reported immediately to antesobiomedical.2014@gmail.com.</li>
                        <li><strong>Account Termination:</strong> We reserve the right to suspend or terminate accounts at our sole discretion for violations of these Terms, misuse of the App, or non-compliance with AERB regulations.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Services Description</h2>
                    <p className="mb-4">The App provides the following Services:</p>
                    <ol className="list-decimal pl-6 mb-6">
                        <li><strong>QA Testing Tools:</strong> Measurement of equipment parameters, analysis of image quality, and validation of radiation safety.</li>
                        <li><strong>Report Generation:</strong> Generation of AERB-compliant QA certificates and test reports.</li>
                        <li><strong>Data Management:</strong> Secure storage, management, and retrieval of test results and equipment logs.</li>
                        <li><strong>Compliance Tracking:</strong> Tracking of regulatory audit trails and management of certifications.</li>
                    </ol>
                    <p className="mb-6">
                        All Services are provided on an "as is" basis and may be subject to maintenance, updates, or modifications at our sole discretion.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. User Obligations & Responsibilities</h2>

                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">a. Compliance Requirements</h3>
                    <ul className="list-disc pl-6 mb-4">
                        <li>You must possess valid AERB authorization, medical licenses, or institutional approvals to perform radiology QA testing.</li>
                        <li>All equipment testing must strictly adhere to AERB Safety Code SC/MED-2 and other relevant guidelines.</li>
                        <li>You are solely responsible for ensuring the accuracy, integrity, and legality of any data uploaded to the App.</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">b. Prohibited Conduct</h3>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Uploading falsified test results or data that does not comply with applicable regulations.</li>
                        <li>Reverse engineering, decompiling, or attempting to extract the App's source code.</li>
                        <li>Using the App for purposes other than QA testing or for commercial resale.</li>
                        <li>Interfering with the App's functionality, security, or other users' data.</li>
                        <li>Sharing login credentials or allowing unauthorized access to your account.</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">c. Equipment & Data Accuracy</h3>
                    <ul className="list-disc pl-6 mb-6">
                        <li>You warrant that all equipment information and test parameters entered into the App are accurate and truthful.</li>
                        <li>The Company shall not be held liable for any errors or damages resulting from incorrect user input, equipment malfunction, or non-compliance with AERB guidelines.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Intellectual Property Rights</h2>

                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">a. Company IP</h3>
                    <ul className="list-disc pl-6 mb-4">
                        <li>The App, including its software, algorithms, QA templates, and all associated content, is the exclusive property of the Company.</li>
                        <li>The Company grants you a limited, non-exclusive, non-transferable, and revocable license to use the App solely for authorized QA purposes.</li>
                        <li>All trademarks, logos, and branding elements are protected under Indian trademark law and other applicable intellectual property laws.</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">b. User Content</h3>
                    <ul className="list-disc pl-6 mb-4">
                        <li>You retain ownership of any data or content you upload to the App, including test results and equipment photos.</li>
                        <li>By uploading content, you grant the Company a worldwide, royalty-free, non-exclusive license to process, store, and display such content for the purpose of delivering Services and ensuring regulatory compliance.</li>
                        <li>You represent and warrant that all content you upload does not infringe upon the rights of any third party and complies with applicable AERB standards and regulations.</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">c. Generated Reports</h3>
                    <ul className="list-disc pl-6 mb-6">
                        <li>AERB-compliant reports generated via the App are co-owned by you and the Company.</li>
                        <li>You may use these reports for regulatory and compliance purposes.</li>
                        <li>Commercial redistribution, resale, or third-party sharing of such reports requires prior written consent from the Company.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Fees & Payment</h2>
                    <ul className="list-disc pl-6 mb-6">
                        <li><strong>Current Pricing:</strong> Services may be offered on a subscription, per-test, or enterprise licensing basis. Specific pricing details will be provided during registration or on request.</li>
                        <li><strong>Payment Terms:</strong> All fees are non-refundable, except as required by applicable law. Payments must be made using approved methods only.</li>
                        <li><strong>Taxes:</strong> You are responsible for all applicable taxes, including GST, service taxes, or other duties arising from your use of the Services.</li>
                        <li><strong>Late Payments:</strong> Any overdue amounts will accrue interest at a rate of 1.5% per month or the maximum rate permitted by law, whichever is lower.</li>
                        <li><strong>Price Changes:</strong> The Company reserves the right to adjust fees at its discretion. Any changes will be communicated 30 days in advance via email or in-App notification.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Data Ownership & Privacy</h2>
                    <ul className="list-disc pl-6 mb-6">
                        <li><strong>Ownership:</strong> You retain ownership of all data you input into the App. The Company retains ownership of the App's output formats, analytics, and any derived insights.</li>
                        <li><strong>Privacy Policy:</strong> Your use of the App is also governed by the Company's Privacy Policy, which is incorporated herein by reference and forms part of these Terms.</li>
                        <li><strong>AERB Compliance:</strong> All data handling, storage, and processing by the Company will comply with applicable AERB record-keeping and regulatory requirements.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Warranties & Disclaimers</h2>

                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">a. Limited Warranty</h3>
                    <ul className="list-disc pl-6 mb-4">
                        <li>We warrant that the App will perform substantially as described, subject to proper use and internet connectivity.</li>
                        <li>Services comply with AERB technical standards for QA testing.</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">b. Disclaimers</h3>
                    <ul className="list-disc pl-6 mb-6">
                        <li><strong>NO MEDICAL ADVICE:</strong> The App is a QA tool, not a diagnostic or treatment platform. We do not guarantee equipment safety or patient outcomes.</li>
                        <li><strong>AS-IS BASIS:</strong> Services are provided "as is" without warranties of merchantability, fitness for purpose, or non-infringement.</li>
                        <li><strong>Third-Party Equipment:</strong> We are not responsible for hardware failures, calibration drift, or radiation exposure risks.</li>
                        <li><strong>Force Majeure:</strong> We are not liable for delays due to acts of God, regulatory changes, or third-party failures.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Limitation of Liability</h2>
                    <ul className="list-disc pl-6 mb-6">
                        <li><strong>Cap on Liability:</strong> The Company's total liability to you for any claims arising out of or related to your use of the App shall not exceed the fees paid by you in the twelve (12) months preceding the claim.</li>
                        <li><strong>Exclusions:</strong> The Company shall not be liable for any indirect, incidental, consequential, special, or punitive damages, including but not limited to data loss, business interruption, or regulatory fines.</li>
                        <li><strong>AERB Compliance:</strong> You agree to indemnify and hold the Company harmless from any claims, losses, or damages arising from your failure to comply with AERB guidelines, improper use of equipment, or violations of applicable laws.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Termination</h2>

                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">a. By User</h3>
                    <ul className="list-disc pl-6 mb-4">
                        <li>You may terminate your account at any time through the App settings or by contacting antesobiomedical.2014@gmail.com.</li>
                        <li>Upon termination, your access to the App will end immediately. Retention and handling of your data will be governed by our Privacy Policy.</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">b. By Company</h3>
                    <ul className="list-disc pl-6 mb-6">
                        <li>The Company may suspend or terminate your account and access to the App in the event of:
                            <ul className="list-circle pl-6 mt-2">
                                <li>Material breaches of these Terms.</li>
                                <li>Violations of AERB regulatory requirements.</li>
                                <li>Non-payment of fees.</li>
                                <li>Activities that pose security risks or involve illegal use of the App.</li>
                            </ul>
                        </li>
                        <li>Termination of your account does not relieve you of any payment obligations incurred prior to termination.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Indemnification</h2>
                    <p className="mb-4">You agree to indemnify, defend, and hold harmless the Company, its officers, directors, employees, and affiliates from and against any and all claims, damages, losses, liabilities, costs, and expenses (including reasonable legal fees) arising out of or related to:</p>
                    <ul className="list-disc pl-6 mb-6">
                        <li>Your violation of these Terms or any applicable laws and regulations.</li>
                        <li>The submission of inaccurate, misleading, or unlawful data through the App.</li>
                        <li>Non-compliance with AERB guidelines or improper use of radiology equipment.</li>
                        <li>Any third-party claims arising from your use of reports or other content generated via the App.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. Governing Law & Dispute Resolution</h2>
                    <ul className="list-disc pl-6 mb-6">
                        <li><strong>Governing Law:</strong> These Terms shall be governed by and construed in accordance with the laws of India, without regard to conflict of law principles.</li>
                        <li><strong>Jurisdiction:</strong> The courts of New Delhi shall have exclusive jurisdiction over any disputes arising from or relating to these Terms.</li>
                        <li><strong>Arbitration:</strong> Any disputes or claims arising out of or in connection with these Terms shall be resolved through arbitration under the Arbitration and Conciliation Act, 1996, conducted in New Delhi before a single arbitrator appointed by the Company.</li>
                        <li><strong>Class Actions:</strong> You agree that no class actions or representative proceedings shall be brought against the Company.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">13. Third-Party Services</h2>
                    <ul className="list-disc pl-6 mb-6">
                        <li>The App may integrate with third-party tools (e.g., cloud storage, payment gateways).</li>
                        <li>Your use of such services is subject to their terms; we are not responsible for their performance or data handling.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">14. Updates & Modifications</h2>
                    <ul className="list-disc pl-6 mb-6">
                        <li>We may update these Terms, the App, or Services at any time.</li>
                        <li>Material changes will be notified via email to antesobiomedical.2014@gmail.com or in-App.</li>
                        <li>Continued use after updates constitutes acceptance.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">15. Miscellaneous</h2>
                    <ul className="list-disc pl-6 mb-6">
                        <li><strong>Entire Agreement:</strong> These Terms, Privacy Policy, and any service orders constitute the full agreement.</li>
                        <li><strong>Severability:</strong> Invalid provisions do not affect remaining terms.</li>
                        <li><strong>No Waiver:</strong> Failure to enforce rights does not waive them.</li>
                        <li><strong>Assignment:</strong> We may assign these Terms; you may not without our consent.</li>
                        <li><strong>Force Majeure:</strong> Excused from performance due to unforeseen events beyond control.</li>
                        <li><strong>Contact:</strong> For questions, email antesobiomedical.2014@gmail.com.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TermsAndConditions;