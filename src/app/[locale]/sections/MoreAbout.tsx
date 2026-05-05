import { GoldenTag } from '@/components/ui/golden-tag';
import { Coins, Link as LinkIcon, Users } from 'lucide-react'; // Placeholder icons

export default function MoreAboutSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Top Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <GoldenTag>More About GLDON</GoldenTag>
          
          <h2 className="mt-6 mb-6 text-white">
            The Perfect Blend of Gold & Blockchain
          </h2>
          
          <p className="max-w-4xl text-white">
            GLDON is a digital asset backed by physical gold reserves stored in top-tier, insured vaults. 
            It brings the reliability of gold to the blockchain, offering a stable, transparent, and 
            efficient store of value.
          </p>
        </div>

        {/* Content Layout: Image Left, Features Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Vault Image */}
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
            {/* Replace src with your actual vault image path */}
            <div className="absolute inset-0 bg-primary-dark/50 flex items-center justify-center border border-slate-800 rounded-2xl">
                <span className="text-secondary-main/50">[Vault Image Placeholder]</span>
            </div>
            {/* Example of how to use next/image once you have the asset:
            <Image 
              src="/images/vault.png" 
              alt="GLDON Gold Vault" 
              fill 
              className="object-cover"
            /> 
            */}
          </div>

          {/* Right: Feature List */}
          <div className="flex flex-col gap-10">
            
            {/* Feature 1 */}
            <div className="flex items-center gap-5">
              <div className="flex-shrink-0 w-14 h-14 bg-secondary-lighter text-secondary-main rounded-full flex items-center justify-center">
                <Coins size={28} strokeWidth={2} />
              </div>
              <div>
                <h4 className="text-white mb-2">Backed by Real Gold</h4>
                <p className="text-white">
                  1 GLDON = 1 gram of physical gold stored in secure vaults.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center gap-5">
              <div className="flex-shrink-0 w-14 h-14 bg-secondary-lighter text-secondary-main rounded-full flex items-center justify-center">
                <LinkIcon size={28} strokeWidth={2} />
              </div>
              <div>
                <h4 className="text-white mb-2">Built on Blockchain</h4>
                <p className="text-white">
                  Secured by decentralized technology for transparency and immutability.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-center gap-5">
              <div className="flex-shrink-0 w-14 h-14 bg-secondary-lighter text-secondary-main rounded-full flex items-center justify-center">
                <Users size={28} strokeWidth={2} />
              </div>
              <div>
                <h4 className="text-white mb-2">Designed for Everyone</h4>
                <p className="text-white">
                  Easy to buy, hold, send, and trade with low fees and fast transactions.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
