import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react';

const faqs = [
    {
        value: "item-1",
        question: "What is this token backed by?",
        answer: "The token is fully backed by physical gold reserves, securely stored and verifiably documented.",
    },
    {
        value: "item-2",
        question: "How is the gold reserve verified?",
        answer: "Our gold reserves are regularly audited by independent third-party firms. The audit reports are published transparently on our platform for all token holders to verify.",
    },
    {
        value: "item-3",
        question: "Is the token redeemable for physical gold?",
        answer: "Yes, eligible token holders who pass the necessary compliance checks can redeem their tokens for physical gold, subject to minimum redemption quantities and standard delivery fees.",
    },
    {
        value: "item-4",
        question: "Who can participate in the platform?",
        answer: "Participation is open to individuals and institutions who successfully complete our KYC/AML onboarding process and meet the regulatory requirements of their jurisdiction.",
    },
    {
        value: "item-5",
        question: "Why is a whitelist required?",
        answer: "A whitelist ensures that all participants have passed our compliance checks (KYC/AML), maintaining the integrity and regulatory compliance of the entire platform.",
    },
    {
        value: "item-6",
        question: "How is transparency ensured?",
        answer: "Transparency is ensured through blockchain immutability, regular third-party reserve audits, and real-time tracking dashboards available to all verified users.",
    },
];

export default function FAQSection() {
    return (
        <section className="w-full py-16 md:py-24 bg-white">
            <div className="max-w-5xl mx-auto px-4 lg:px-5">
                <h2 className="text-center mb-6 md:mb-8">
                    Frequently asked questions
                </h2>

                <Accordion type="single" collapsible className="space-y-4" defaultValue="item-1">
                    {faqs.map((faq) => (
                        <AccordionItem
                            key={faq.value}
                            value={faq.value}
                            // We remove the default bottom border and add our own full border & rounded corners
                            className="border border-gray-200 rounded-xl px-6 data-[state=open]:border-gray-300 transition-colors bg-white border-b"
                        >
                            <AccordionTrigger className="hover:no-underline font-semibold text-left py-3 text-[16px]">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-700 text-[15px] leading-relaxed pb-3 border-t border-gray-100 pt-3">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

            </div>
        </section>
    );
}
