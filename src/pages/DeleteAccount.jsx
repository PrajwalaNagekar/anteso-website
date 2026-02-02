import { Trash2, AlertTriangle } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const DeleteAccount = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!phoneNumber || !isConfirmed) {
            alert('Please fill in all required fields and confirm the action.');
            return;
        }
        // Handle account deletion logic here
        console.log('Account deletion requested for:', phoneNumber);
        alert('Account deletion request submitted. A verification code will be sent to your phone.');
    };

    return (
        <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
                <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Home
                </Link>

                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    {/* Header */}
                    <div className="bg-red-50 px-6 sm:px-8 py-8 sm:py-10 text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-red-100 rounded-full mb-4">
                            <Trash2 className="w-8 h-8 sm:w-10 sm:h-10 text-red-600" />
                        </div>
                        <h1 className="text-2xl sm:text-3xl font-bold text-red-600 mb-2">Account Deletion</h1>
                        <p className="text-base sm:text-lg text-red-700">We're sorry to see you go</p>
                    </div>

                    {/* Content */}
                    <div className="px-6 sm:px-8 py-6 sm:py-8">
                        {/* Warning Box */}
                        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 sm:p-5 mb-6 sm:mb-8 rounded-r-lg">
                            <div className="flex items-start">
                                <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600 mt-0.5 flex-shrink-0" />
                                <div className="ml-3">
                                    <h3 className="text-base sm:text-lg font-semibold text-yellow-800 mb-2">Before you proceed</h3>
                                    <ul className="space-y-2 text-sm sm:text-base text-yellow-700">
                                        <li className="flex items-start">
                                            <span className="mr-2">•</span>
                                            <span>Account deletion is permanent and cannot be undone.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="mr-2">•</span>
                                            <span>All your data, including property and tenant records, will be wiped.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="mr-2">•</span>
                                            <span>Please ensure you have backed up any necessary information.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                            {/* Phone Number Input */}
                            <div>
                                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Phone Number Verification
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    className="w-full px-4 py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition"
                                    placeholder="Enter your registered phone number"
                                    required
                                />
                                <p className="mt-2 text-xs sm:text-sm text-gray-500">We'll send a verification code to this number.</p>
                            </div>

                            {/* Confirmation Checkbox */}
                            <div className="flex items-start">
                                <input
                                    type="checkbox"
                                    id="confirm"
                                    checked={isConfirmed}
                                    onChange={(e) => setIsConfirmed(e.target.checked)}
                                    className="mt-1 w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                                    required
                                />
                                <label htmlFor="confirm" className="ml-3 text-sm sm:text-base text-gray-700">
                                    I understand that this action is irreversible and I confirm I want to permanently delete my account.
                                </label>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 sm:py-3.5 rounded-lg transition shadow-md text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                                disabled={!phoneNumber || !isConfirmed}
                            >
                                Delete My Account
                            </button>
                        </form>

                        {/* Help Text */}
                        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-200 text-center">
                            <p className="text-sm sm:text-base text-gray-600">
                                Changed your mind?{' '}
                                <Link to="/" className="text-blue-600 hover:text-blue-800 font-semibold">
                                    Return to homepage
                                </Link>
                            </p>
                            <p className="mt-2 text-xs sm:text-sm text-gray-500">
                                Need help? Contact us at{' '}
                                <a href="mailto:info@antesobiomedicalopc.com" className="text-blue-600 hover:underline">
                                    info@antesobiomedicalopc.com
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteAccount;
