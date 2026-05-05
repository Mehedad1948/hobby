import { GoldenTag } from "@/components/ui/golden-tag";
import Image from "next/image";

export default function Advantages() {
    return (
        <section className="min-h-screen w-full bg-black text-white py-20 px-4 md:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* Header Section */}
                <div className="flex flex-col items-center text-center mb-16 lg:mb-24">
                    <GoldenTag className="mb-6" >
                        Why This Exists
                    </GoldenTag>

                    <h2 className="mb-6">
                        Trust Begins With What Is Real.
                    </h2>

                    <p className="max-w-3xl text-white text-base">
                        In an industry filled with abstractions, leverage, and promises, this project is built on the foundation of real assets, real custody, and real verification.
                    </p>
                </div>

                {/* Features & Image Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center relative">

                    {/* Left Features */}
                    <div className="flex flex-col space-y-8 lg:space-y-32 order-2 lg:order-1 z-10">
                        {/* Feature 1 */}
                        <div className="bg-gold-fade p-6 rounded-md shadow-lg">
                            <h4 className="text-white mb-2">Currency conversion</h4>
                            <p className=" text-base leading-relaxed">
                                Exportable reports for tax and accounting purposes.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-gold-fade p-6 rounded-md shadow-lg">
                            <h4 className="text-white mb-2">Data encryption</h4>
                            <p className=" text-base leading-relaxed">
                                Visual dashboards for trade performance.
                            </p>
                        </div>
                    </div>

                    {/* Center Graphic */}
                    <div className="flex justify-center items-center relative order-1 lg:order-2 z-0 h-80 lg:h-auto">
                        {/* Background Glow Effect */}
                        <div className="absolute w-64 h-64 lg:w-96 lg:h-96 bg-gold-fade/30 rounded-full blur-[100px]"></div>

                        {/* Image Placeholder */}
                        <div className="relative w-full max-w-[400px] aspect-square flex items-center justify-center border-2 border-dashed border-secondary-main/50 rounded-full">
                            <span className="text-secondary-main/70 text-sm font-mono text-center px-4">
                                [ REPLACE WITH YOUR GLOWING COIN IMAGE ] <br />
                                {`<Image src="/coin.png" alt="Coin" fill className="object-contain" />`}
                            </span>
                        </div>
                    </div>

                    {/* Right Features */}
                    <div className="flex flex-col space-y-8 lg:space-y-32 order-3 z-10">
                        {/* Feature 3 */}
                        <div className="bg-gold-fade p-6 rounded-md shadow-lg">
                            <h4 className="text-white mb-2">Cold wallet storage</h4>
                            <p className=" text-base leading-relaxed">
                                Regular updates on crypto trends and platform features.
                            </p>
                        </div>

                        {/* Feature 4 */}
                        <div className="bg-gold-fade p-6 rounded-md shadow-lg">
                            <h4 className="text-white mb-2">Transfer crypto & data</h4>
                            <p className=" text-base leading-relaxed">
                                Guides for beginners on crypto basics and trading.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
