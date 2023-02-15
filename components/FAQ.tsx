import React from 'react';

export default function FAQ({ faqs }: { faqs: { question: string; answer: string }[] }) {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl py-16 px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
                        Frequently Asked Questions
                    </h2>
                </div>
                <div className="mt-20">
                    <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:gap-x-10">
                        {faqs.map((faq, index) => (
                            <div key={index}>
                                <dt className="text-base font-semibold leading-7 text-gray-900">{faq.question}</dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">{faq.answer}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
}
