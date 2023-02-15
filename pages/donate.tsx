import Head from 'next/head';
import React from 'react';
import Contact from '../components/Contact';
import FAQ from '../components/FAQ';
import { FeatureSet } from '../components/FeatureSet';
import Navbar from '../components/Navbar';

const copy = {
    title: 'Donate to Caterpillar Auditors',
    subtitle:
        'Help us grow the web3 security ecosystem',
};

const features = [
    {
        name: 'Ecosystem Growth',
        description:
            'Your donation will help us grow the world of web3 security. More auditors and bounty hunters will mean more secure protocols and a safer, healthier web3 ecosystem.',
        imageSrc:
            'https://images.unsplash.com/photo-1458014854819-1a40aa70211c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        imageAlt: 'Plant growing in harsh conditions',
    },
    {
        name: 'Tax Write-Offs',
        description:
            'You can write off your donation for tax purposes. We are a registered non-profit organization in the United States.',
        imageSrc:
            'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1311&q=80',
        imageAlt: 'Accounting & tax write-offs',
    },
];

const faqs = [
    {
        question: "What is the program's mission?",
        answer: 'We want to transition promising junior auditors who are spending nights and weekends finding bugs, to full-time security researchers, by giving them the financial flexibility to make the leap.',
    },
    {
        question: 'How do you use the money?',
        answer: 'The money is used to pay living stipends to promising junior auditors.',
    },
    {
        question: 'How do I donate?',
        answer: 'Contact us so we can issue the appropriate tax forms. You can donate via bank transfer or crypto.',
    },
    {
        question: "Can I get access to the successful students resumes?",
        answer: 'Yes, you can. We will share the resumes of the students who have successfully completed the program with their consent.',
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
