'use cache'



import ScrollSlider from "@/components/widgets/FeatureSlider/FeatureSlider";
import { SliderDots } from "@/components/widgets/FeatureSlider/SliderDots";
import Advantages from "./sections/Advantages";
import { BackingTransparencySection } from "./sections/BackingTransparency";
import Landing from "./sections/Landing";
import FeatureSlider from "./sections/FeatureSlider";
import Compliance from "./sections/Compliance";

const slides = [
  <div key="1" className="w-full h-full flex flex-col items-center justify-center p-12 bg-gradient-to-br from-blue-50 to-white">
    <h2 className="text-4xl font-bold mb-4">Direct Gold Ownership</h2>
    <p className="text-center text-lg text-gray-700">
      Each token corresponds to a specific amount of physical gold, precisely defined and securely stored.
    </p>
  </div>,
  <div key="2" className="w-full h-full flex flex-col items-center justify-center p-12 bg-gradient-to-br from-yellow-50 to-white">
    <h2 className="text-4xl font-bold mb-4">Backed by Real Gold</h2>
    <p className="text-center text-lg text-gray-700">
      Each token represents a clearly defined portion of physical gold securely stored in trusted and regulated vaults.
    </p>
  </div>,
  <div key="3" className="w-full h-full flex flex-col items-center justify-center p-12 bg-gradient-to-br from-green-50 to-white">
    <h2 className="text-4xl font-bold mb-4">Secure & Transparent</h2>
    <p className="text-center text-lg text-gray-700">
      Full transparency and security backed by blockchain technology.
    </p>
  </div>,
  <div key="4" className="w-full h-full flex flex-col items-center justify-center p-12 bg-gradient-to-br from-purple-50 to-white">
    <h2 className="text-4xl font-bold mb-4">Easy Trading</h2>
    <p className="text-center text-lg text-gray-700">
      Trade your gold tokens instantly on our platform.
    </p>
  </div>,
];

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const locale = (await params).locale;


  return (
    <section className="flex flex-col items-center justify-center pb-40">
      <Landing />

      <Advantages />

      <BackingTransparencySection />

      {/* <FeatureSlider slides={slides} /> */}

      <Compliance />
    </section>
  );
}
