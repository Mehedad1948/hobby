import { GoldenTag } from '@/components/ui/golden-tag';

export default function CompanyIntroduction() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Text Content */}
          <div className="flex flex-col items-start">
            <GoldenTag>Who We Are</GoldenTag>
            
            <h2 className="mt-3 mb-4">
              Company Introduction
            </h2>
            
            <div className="space-y-4 text-[#637381]">
              <p>
                We are a financial technology company focused on building infrastructure for 
                gold-backed digital assets.
              </p>
              <p>
                Our work spans asset issuance, reserve management, and transparency 
                mechanisms designed to support compliant and trustworthy digital value 
                systems.
              </p>
              <p>
                The company operates at the intersection of traditional asset custody and 
                modern digital finance, providing institutions and platforms with the tools 
                required to issue, manage, and scale gold-backed products responsibly.
              </p>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden">
            {/* Placeholder container - remove this once you add the real image */}
            <div className="absolute inset-0 bg-gray-100 border border-gray-200 flex items-center justify-center">
                <span className="text-gray-400">Team Meeting Image Placeholder</span>
            </div>
            
            {/* Uncomment and update src when your image is ready in the public folder */}
            {/* 
            <Image 
              src="/images/company-introduction.jpg" 
              alt="Company team meeting" 
              fill 
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            /> 
            */}
          </div>

        </div>
      </div>
    </section>
  );
}
