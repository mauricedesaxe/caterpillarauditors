import { EnvelopeIcon } from '@heroicons/react/24/outline';
import React from 'react';

export default function Contact() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl py-16 px-6 lg:px-8">
                <div className="mx-auto max-w-lg md:grid md:max-w-none md:grid-cols-2 md:gap-8">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">Join</h2>
                        <div className="mt-3">
                            <p className="text-lg text-gray-500">
                                Contact us to learn more about the program.  We love to hear from aspiring auditors!
                            </p>
                        </div>
                        <div className="mt-9">
                            <div className="mt-6 flex">
                                <div className="flex-shrink-0">
                                    <EnvelopeIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                                </div>
                                <div className="ml-3 text-base text-gray-500">
                                    <p>join@caterpillarauditors.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 sm:mt-16 md:mt-0">
                        <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">Donate</h2>
                        <div className="mt-3">
                            <p className="text-lg text-gray-500">
                                Interested in donating to the Caterpillar Auditors non-profit?
                            </p>
                        </div>
                        <div className="mt-9">
                            <div className="mt-6 flex">
                                <div className="flex-shrink-0">
                                    <EnvelopeIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                                </div>
                                <div className="ml-3 text-base text-gray-500">
                                    <p>donate@caterpillarauditors.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
