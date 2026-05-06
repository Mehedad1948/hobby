import Container from "@/components/ui/container";
import { imageUrlHandler } from "@/lib/helpers/image-url-handler";
import Image from "next/image";

export default function Landing() {
    return (
        <section className="bg-black w-full relative flex flex-col-reverse md:flex-row items-center overflow-hidden">
            <Container className="w-full relative z-10 py-2 lg:py-28">
                <div className="flex w-full max-w-2xl flex-col  md:pt-16 space-y-6 pr-4 lg:pr-12">
                    <h1 className="text-white text-center md:text-left">
                        <span className="text-secondary">Real Gold</span> <br className="hidden" />
                        Digitally <br />
                        Native Fully <br />
                        Verifiable
                    </h1>

                    <p className="text-white text-xl">
                        A digital token backed by physical gold stored in a high-security vault.
                        Fast, secure, and easy to trade, bypassing traditional barriers to entry
                        in the global gold market.
                    </p>
                </div>
            </Container>

            <div className="relative w-full md:absolute top-6 md:top-0 md:right-0 md:bottom-0 md:w-1/2 flex items-end md:items-center justify-end z-0">
                <Image
                    src={imageUrlHandler('Section.png', `/dev-only/Section.png`)}
                    alt="Robotic hand with gold"
                    width={800}
                    height={800}
                    priority // Crucial for LCP: tells the browser to preload this immediately
                    sizes="(max-width: 768px) 100vw, 50vw" // Crucial for mobile: serves smaller image files to small screens
                    className="w-4/5 md:w-full h-fit md:h-full object-contain object-bottom md:object-right"
                />
            </div>
        </section>
    );
}
