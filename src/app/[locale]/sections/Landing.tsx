import Container from "@/components/ui/container";

export default function Landing() {
    return (

        <section className="bg-black w-full  flex items-center">
            <Container>
                <div className="flex  gap-12 items-center py-16 lg:py-28">

                    {/* Left Column: Text Content */}
                    <div className="flex max-w-2xl w-full flex-col space-y-6 z-10">
                        <h1 className="  text-white">
                            <span className="text-secondary">Real Gold</span> <br className="hidden " />
                            Digitally <br />
                            Native Fully <br />
                            Verifiable
                        </h1>

                        <p className=" text-white text-xl">
                            A digital token backed by physical gold stored in a high-security vault.
                            Fast, secure, and easy to trade, bypassing traditional barriers to entry
                            in the global gold market.
                        </p>
                    </div>

                    {/* Right Column: Image Area */}
                    <div className="relative w-full  flex items-center justify-center">
                        {/* 
                          REPLACE THIS DIV WITH YOUR IMAGE TAG 
                          Example:
                          <img src="/your-image.png" alt="Robotic hand with gold" className="w-full h-auto object-cover" />
                        */}
                        <div className="w-full h-full border-2 border-dashed border-gray-700 rounded-xl flex items-center justify-center bg-gray-900/50">
                            <span className="text-gray-500 font-medium">Put your image here</span>
                        </div>
                    </div>

                </div>
            </Container>
        </section>
    );
}
