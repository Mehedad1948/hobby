import Container from "@/components/ui/container";
import { imageUrlHandler } from "@/lib/helpers/image-url-handler";
import Image from "next/image";

export default function Landing() {
    return (
        <section className="bg-black w-full relative flex flex-col md:flex-row items-center overflow-hidden">
            {/* 
              Container holds only the text. 
              It maintains your standard margins/paddings on the left.
            */}
            <Container className="w-full relative z-10 py-16 lg:py-28">
                <div className="flex w-full max-w-2xl flex-col pt-12 md:pt-16 space-y-6 pr-4 lg:pr-12">
                    <h1 className="text-white">
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

            {/* 
              Right Column: Image Area 
              Absolutely positioned on desktop to snap to the right edge of the viewport.
            */}
            <div className="relative w-full md:absolute md:top-0 md:right-0 md:bottom-0 md:w-1/2 flex items-center justify-end z-0">
                <Image
                    src={imageUrlHandler('Section.png', `/dev-only/Section.png`)}
                    alt="Robotic hand with gold"
                    width={800}
                    height={800}
                    // Use object-cover if you want the image to fill the space, or object-right to align it right
                    className="w-full h-full object-contain md:object-right"
                />
            </div>
        </section>
    );
}
