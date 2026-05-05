'use client'

import ScrollSlider from "@/components/widgets/FeatureSlider/FeatureSlider";
import { SliderDots } from "@/components/widgets/FeatureSlider/SliderDots";

export default function FeatureSlider({ slides }: { slides: any }) {
    return (
        <ScrollSlider
            renderDots={(currentIndex, total) => (
                <SliderDots
                    currentIndex={currentIndex}
                    total={total}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2"
                />
            )}
        >
            {slides}
        </ScrollSlider>
    );
}