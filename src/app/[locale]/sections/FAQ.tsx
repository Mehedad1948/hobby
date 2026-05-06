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
        answer: "The gold backing GLDON is independently verified through regular third-party audits and secure custody reports. Each reserve update is documented and made accessible to ensure that every token is backed by real, physical gold held in trusted vaults.",
    },
    {
        value: "item-3",
        question: "Is the token redeemable for physical gold?",
        answer: "Yes. GLDON is designed to be redeemable for physical gold, subject to minimum thresholds and verification requirements. The redemption process ensures that token holders can convert their digital assets into allocated gold in a secure and compliant manner.",
    },
    {
        value: "item-4",
        question: "Who can participate in the platform?",
        answer: "The platform is open to individuals and institutions who meet the required compliance standards. Users may need to complete identity verification depending on their region and level of participation.",
    },
    {
        value: "item-5",
        question: "Why is a whitelist required?",
        answer: "Whitelist procedures are in place to ensure regulatory compliance and platform security. They help prevent unauthorized access, reduce risk, and ensure that all participants meet legal and operational requirements.",
    },
    {
        value: "item-6",
        question: "How is transparency ensured?",
        answer: "Transparency is maintained through a combination of audit reports, on-chain data, and regular disclosures. Users can verify key information related to token supply, reserves, and transactions at any time.",
    }
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
