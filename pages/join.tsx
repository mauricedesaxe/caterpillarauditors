import Head from 'next/head';
import React from 'react';
import Contact from '../components/Contact';
import FAQ from '../components/FAQ';
import { FeatureSet } from '../components/FeatureSet';
import Navbar from '../components/Navbar';

const copy = {
    title: 'Become a Caterpillar Auditor',
    subtitle:
        'Receive a monthly stipend to supplant the income from your job so you can spend that time increasing your skills, finding bugs, and ultimately replacing your income with bug bounties, contests, and traditional auditing income.',
};

const features = [
    {
        name: 'Financial Support',
        description:
            'We pay you a monthly stipend so you can focus on finding bugs & learning.',
        imageSrc:
            'https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        imageAlt: 'Man giving a helping hand',
    },
    {
        name: 'Guidance From Experts',
        description:
            'We\'re well-connected professional auditors so we can advise you on where to most effectively spend your time.  We want to make the program as successful for you as we can.',
        imageSrc:
            'https://images.unsplash.com/photo-1598618589929-b1433d05cfc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        imageAlt: 'A library of books',
    },
];

const faqs = [
    {
        question: 'Who is this program for?',
        answer: 'You do not need to have any prior experience in web3 security, but it is a must that you have at least basic programming skills.',
    },
    {
        question: 'How long does the program last?',
        answer: 'The program duration is flexible depending on grant recipient needs.  However, the typical length is 3 to 6 months.',
    },
    {
        question: 'What happens after the program?',
        answer: 'We can help you find a job as an auditor at one of the organizations that are donors of ours. If you have managed to become self-sufficient as an auditor, we will negociate a payment plan with you such that you repay our investment back.',
    },
    {
        question: 'What if I do not find a job after the program?',
        answer: 'If you cannot sustain yourself as an auditor after the program, we will not require you to pay us back.',
    },
    {
        question: 'Why do we need the money back if I find a job?',
        answer: 'We are a non-profit organization and we need to pay our bills. We also need to pay for the next batch of students. The more people pay us back, the more people we can help.',
    },
    {
        question: 'How do I apply?',
        answer: 'Send an email to join@caterpillarauditors.com with your resume and/or any bugs you\'ve found.',
    },
];

export default function Join() {
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
