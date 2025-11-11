"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	type CarouselApi,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

/** SliderSection과 같은 캐로셀이지만, Shadcn carousel로 구현 */
export function ExpertSection() {
	const [api, setApi] = React.useState<CarouselApi>();
	const [current, setCurrent] = React.useState(0);
	const [count, setCount] = React.useState(0);

	React.useEffect(() => {
		if (!api) {
			return;
		}
		setCount(api.scrollSnapList().length);
		setCurrent(api.selectedScrollSnap() + 1);
		api.on("select", () => {
			setCurrent(api.selectedScrollSnap() + 1);
		});
	}, [api]);

	return (
		<section className="px-10 py-25">
			<div className="container flex items-end justify-between">
				<h2 className="max-w-[520px] text-[60px] tracking-tight">
					Get pro help from handpicked experts
				</h2>
				<div className="flex gap-2">
					<Button>Get matched</Button>
					<Button variant="secondary">Find an Expert</Button>
				</div>
			</div>

			<div className="container mt-10">
				<Carousel setApi={setApi} className="w-full" opts={{ loop: true }}>
					<CarouselContent>
						{Array.from({ length: 2 }).map((_, index) => (
							<CarouselItem key={index}>
								<div className="grid w-full grid-cols-4 gap-2">
									{Array.from({ length: 4 }).map((_, i) => (
										<Card>
											<CardContent className="flex aspect-4/3 items-center justify-center p-6">
												<span className="font-semibold text-4xl">
													{index * 4 + i + 1}
												</span>
											</CardContent>
										</Card>
									))}
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<div className="relative mt-5 min-h-5">
						<div className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 flex justify-center gap-2 py-2">
							{Array.from({ length: count }).map((_, index) => (
								<button
									key={index}
									onClick={() => api?.scrollTo(index)}
									className={cn(
										"size-2 cursor-pointer rounded-full bg-primary opacity-60 transition-opacity",
										{
											"opacity-100": current === index + 1,
										},
									)}
									aria-label={`${index + 1}번째 슬라이드로 이동`}
								/>
							))}
						</div>
						<div className="ml-auto flex items-center justify-end gap-2">
							<Button
								variant="secondary"
								size="icon-sm"
								onClick={() => api?.scrollPrev()}
							>
								<ChevronLeft className="size-5" />
							</Button>
							<Button
								variant="secondary"
								size="icon-sm"
								onClick={() => api?.scrollNext()}
							>
								<ChevronRight className="size-5" />
							</Button>
						</div>
					</div>
				</Carousel>
			</div>
		</section>
	);
}
