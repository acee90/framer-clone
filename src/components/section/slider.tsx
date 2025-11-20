import useEmblaCarousel from "embla-carousel-react";
import { useRef } from "react";

import "@/css/embla.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePrevNextButtons } from "@/components/embla-carousel-arrow-buttons";
import { useDotButton } from "@/components/embla-carousel-dot-button";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const _data = [
	{
		id: "1",
		icon: "https://framerusercontent.com/images/4gKZnsOSKARj5SbgbbbF1CNqro.png?width=240&height=240",
		dot: "Perplexity",
		description:
			"\"Framer gives us everything we need to move fast. We don't wait on dev. We don't compromise on design.\"",
		image: "https://picsum.photos/seed/101/600/600",
		video: "https://www.pexels.com/ko-kr/download/video/5081433/",
	},
	{
		id: "2",
		icon: "https://framerusercontent.com/images/MHx8YZeRYEt84rFq3Xjf510ukFI.png?scale-down-to=512&width=1024&height=762",
		dot: "Visual Electric",
		description:
			'"Launching on Framer was seamless. Live in no time, no friction."',
		image: "https://picsum.photos/seed/102/600/600",
		video: "https://www.pexels.com/ko-kr/download/video/6394054/",
	},
	{
		id: "3",
		icon: "https://framerusercontent.com/images/VVlSsBCZwRNiKHsE4BiCZqBThM.png?width=225&height=225",
		dot: "Biograph",
		description:
			'"Framer gave us full creative freedom. No code limits, no handoffs. We shipped an immersive brand site in days."',
		image: "https://picsum.photos/seed/103/600/600",
		video: "https://www.pexels.com/ko-kr/download/video/854053/",
	},
	{
		id: "4",
		icon: "https://framerusercontent.com/images/RkwWTf2otULCGv3QEORgS5bH7Eg.png?width=160&height=160",
		dot: "Cradle",
		description:
			"\"Framer gives us everything we need to move fast. We don't wait on dev. We don't compromise on design.\"",
		image: "https://picsum.photos/seed/104/600/600",
		video: "https://www.pexels.com/ko-kr/download/video/6394054/",
	},
	{
		id: "5",
		icon: "https://framerusercontent.com/images/f0zD56BWH0z8GfKM9dd8nMsCkc.png?width=240&height=240",
		dot: "Miro",
		description:
			'"With Framer, our designers can ship updates daily. No dev handoff. No staging hassle."',
		image: "https://picsum.photos/seed/105/600/600",
		video: "https://www.pexels.com/ko-kr/download/video/1536315/",
	},
];

function SlideItem({
	data,
}: {
	data: {
		id: string;
		icon: string;
		dot: string;
		description: string;
		image: string;
		video: string;
	};
}) {
	const videoRef = useRef<HTMLVideoElement>(null);

	const handleMouseEnter = () => {
		if (videoRef.current) {
			videoRef.current.play();
		}
	};

	const handleMouseLeave = () => {
		if (videoRef.current) {
			videoRef.current.pause();
		}
	};

	return (
		<Card
			className="group grid aspect-1200/560 grid-cols-2 gap-0 overflow-hidden bg-transparent p-0"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<div className="flex flex-col justify-between gap-y-10 p-15">
				<div className="aspect-square w-[60px] overflow-hidden rounded-lg">
					<img src={data.icon} alt={data.dot} />
				</div>
				<p className="pr-15 font-semibold text-3xl">{data.description}</p>
				<div>
					{/* profile */}
					<Button
						variant="ghost"
						className="opacity-0 transition-opacity duration-300 group-hover:opacity-100"
					>
						Read more
						<ChevronRight />
					</Button>
				</div>
			</div>
			<div className="relative flex items-center justify-center overflow-hidden">
				<img
					className="absolute top-0 left-0 z-1 h-full w-full animate-out object-cover transition-[scale,opacity] duration-500 group-hover:scale-105 group-hover:opacity-75"
					src={data.image}
					alt=""
				/>
				<div className="z-10 h-[300px] w-[480px] overflow-hidden rounded-md">
					<video
						className="h-full w-full object-cover"
						ref={videoRef}
						src={data.video}
						loop
						muted
					/>
				</div>
			</div>
		</Card>
	);
}

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

	return (
		<section className="flex flex-col gap-y-15 px-10 pt-40">
			<div className="container">
				<h2 className="max-w-[520px] text-[60px] tracking-tighter">
					Powering ambitious teams worldwide
				</h2>
			</div>
			<div className="embla">
				<div className="embla__viewport" ref={emblaRef}>
					<div className="embla__container">
						{_data.map((data) => (
							<div className="embla__slide" key={data.id}>
								<SlideItem data={data} />
							</div>
						))}
					</div>

					{/* controls */}
					<div className="container relative mt-10 flex items-center">
						<div className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 flex items-center gap-4">
							{_data.map(({ dot }, index) => (
								<button
									key={dot}
									onClick={() => onDotButtonClick(index)}
									type="button"
									className={cn(
										"cursor-pointer font-semibold text-[14px] opacity-60 transition-opacity",
										{
											"opacity-100": index === selectedIndex,
										},
									)}
								>
									{dot}
								</button>
							))}
						</div>

						<div className="ml-auto flex items-center gap-[5px]">
							<Button
								size="icon-sm"
								className="cursor-pointer rounded-full bg-white/10 transition-transform duration-300 hover:bg-white/10 active:scale-90"
								onClick={onPrevButtonClick}
								disabled={prevBtnDisabled}
							>
								<ChevronLeft className="size-5" />
							</Button>

							<Button
								size="icon-sm"
								className="cursor-pointer rounded-full bg-white/10 transition-transform duration-300 hover:bg-white/10 active:scale-90"
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
