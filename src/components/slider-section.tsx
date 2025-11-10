import useEmblaCarousel from "embla-carousel-react";

import "@/css/embla.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePrevNextButtons } from "./embla-carousel-arrow-buttons";
import { useDotButton } from "./embla-carousel-dot-button";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

export function SliderSection() {
	const [emblaRef, _emblaApi] = useEmblaCarousel({
		containScroll: false,
		loop: true,
	});

	const { selectedIndex, onDotButtonClick } = useDotButton(_emblaApi);

	const {
		prevBtnDisabled,
		nextBtnDisabled,
		onPrevButtonClick,
		onNextButtonClick,
	} = usePrevNextButtons(_emblaApi);

	const slides = Array.from(Array(5).keys());
	const _dots = ["Perplexity", "Visual Electric", "Biograph", "Cradle", "Miro"];

	return (
		<section className="flex flex-col gap-y-15 px-10 py-40">
			<div className="container">
				<h2 className="max-w-[520px] text-[60px] tracking-tighter">
					Powering ambitious teams worldwide
				</h2>
			</div>
			<div className="embla">
				<div className="embla__viewport" ref={emblaRef}>
					<div className="embla__container">
						{slides.map((index) => (
							<div className="embla__slide" key={index}>
								<Card className="grid aspect-video grid-cols-2 gap-0 overflow-hidden p-0">
									<div className="flex flex-col justify-between gap-y-10 p-15">
										<div className="aspect-square w-[60px]">
											<img src="https://framerusercontent.com/images/RkwWTf2otULCGv3QEORgS5bH7Eg.png?width=160&height=160" />
										</div>
										<p className="pr-15 font-semibold text-3xl">
											{`“Framer gives us everything we need to move fast. We don’t wait on dev. We don’t compromise on design.”`}
										</p>
										<div>
											{/* profile */}
											<Button variant="ghost">
												Read more
												<ChevronRight />
											</Button>
										</div>
									</div>
									<div className="flex items-center justify-center bg-gray-50/20">
										{index + 1}
									</div>
								</Card>
							</div>
						))}
					</div>

					{/* controls */}
					<div className="container relative mt-10 flex items-center">
						<div className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 flex items-center gap-4">
							{_dots.map((value, index) => (
								<div
									key={index}
									onClick={() => onDotButtonClick(index)}
									className={cn(
										"cursor-pointer font-semibold text-[14px] opacity-60 transition-opacity",
										{
											"opacity-100": index === selectedIndex,
										},
									)}
								>
									{value}
								</div>
							))}
						</div>

						<div className="ml-auto flex items-center gap-[5px]">
							<Button
								size="icon-sm"
								className="rounded-full bg-white/10 transition-transform duration-300 hover:bg-white/10 active:scale-90"
								onClick={onPrevButtonClick}
								disabled={prevBtnDisabled}
							>
								<ChevronLeft className="size-5" />
							</Button>

							<Button
								size="icon-sm"
								className="rounded-full bg-white/10 transition-transform duration-300 hover:bg-white/10 active:scale-90"
								onClick={onNextButtonClick}
								disabled={nextBtnDisabled}
							>
								<ChevronRight className="size-5" />
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
