import React from 'react';
import { Book, Gavel, ChevronRight } from 'lucide-react';
import { GoldenTag } from '@/components/ui/golden-tag';

export default function Compliance() {
    return (
        <section className="w-full py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* Left Content */}
                <div className="flex flex-col items-start">
                    <GoldenTag>Transparency Repots</GoldenTag>

                    <h2 className="mt-6 mb-6">
                        Compliance by Design
                    </h2>

                    <div className="flex flex-col gap-6 text-gray-500 leading-relaxed">
                        <p className=" font-semibold ">
                            Built to meet regulatory standards, not adapted to them later.
                        </p>
                        <p>
                            Compliance is not an add-on to the platform.<br />
                            It is embedded directly into the system architecture.<br />
                            From licensing and custody to auditing and reporting, all core components are designed in alignment with regulatory frameworks, with a strong focus on GCC standards.
                            <br />
                            This approach ensures long-term legitimacy, operational stability, and institutional readiness.
                        </p>
                    </div>
                </div>

                {/* Right Content - Document Cards */}
                <div className="flex flex-col gap-6 w-full">

                    {/* Card 1: White Paper */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow bg-white w-full">
                        <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-500">
                            <Book className="w-8 h-8" />
                        </div>

                        <div className="flex flex-col items-start">
                            <h3 className="font-bold text-gray-900 text-lg mb-1">
                                GLDON White Paper (PDF)
                            </h3>
                            <p className="text-sm text-gray-500 mb-4">
                                Learn more about GLDON in our white paper.
                            </p>
                            <button className="flex items-center gap-1.5 px-4 py-2 bg-slate-100 text-slate-800 text-sm font-semibold rounded-lg hover:bg-slate-200 transition-colors">
                                Download PDF <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* Card 2: Regulatory Overview */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow bg-white w-full">
                        <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-500">
                            <Gavel className="w-8 h-8" />
                        </div>

                        <div className="flex flex-col items-start">
                            <h3 className="font-bold text-gray-900 text-lg mb-1">
                                Regulatory & Compliance Overview (PDF)
                            </h3>
                            <p className="text-sm text-gray-500 mb-4">
                                A detailed overview of the legal, compliance, and governance framework behind the platform.
                            </p>
                            <button className="flex items-center gap-1.5 px-4 py-2 bg-slate-100 text-slate-800 text-sm font-semibold rounded-lg hover:bg-slate-200 transition-colors">
                                Download PDF <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
