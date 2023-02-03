import Head from 'next/head';
import React from 'react';
import Contact from '../components/Contact';
import FAQ from '../components/FAQ';
import { FeatureSet } from '../components/FeatureSet';
import Navbar from '../components/Navbar';

const copy = {
    title: 'Donate to the program',
    subtitle:
        'Help us grow the ecosystem by donating to the program. We will use the money to offer stipends to jr. bounty hunters.',
};

const features = [
    {
        name: 'Ecosystem growth',
        description:
            'Your donation will help us grow the world of web3 security. More auditors and bounty hunters will mean more secure protocol and a safer, bigger web3 ecosystem.',
        imageSrc:
            'https://images.unsplash.com/photo-1458014854819-1a40aa70211c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        imageAlt: 'Plant growing in harsh conditions',
    },
    {
        name: 'Tax write-offs',
        description:
            'If you are a company, you can write off your donation as a business expense. We are a registered non-profit organization in the United States.',
        imageSrc:
            'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1311&q=80',
        imageAlt: 'Accounting & tax write-offs',
    },
];

const faqs = [
    {
        question: "What is the program's mission?",
        answer: 'We want to help people become bounty hunters. Our goal is to grow the ecosystem by increasing the number of auditors and bounty hunters.',
    },
    {
        question: 'How do you use the money?',
        answer: 'We use the money to pay for the stipends of the students in the program. We also use the money to pay for the costs of running the program.',
    },
    {
        question: 'How do I donate?',
        answer: 'Contact us so we can issue tax forms for you. You can donate via bank transfer or crypto.',
    },
    {
        question: "Can I get access to the successfull students' resumes?",
        answer: 'Yes, you can. We will share the resumes of the students who have successfully completed the program (as long as they want to).',
    },
];

export default function Donate() {
    return (
        <>
            <Head>
                <title>{copy.title}</title>
                <meta name="description" content={copy.subtitle} />
            </Head>
            <Navbar />
            <FeatureSet copy={copy} features={features} />
            <FAQ faqs={faqs} />
            <Contact />
        </>
    );
}
