import { useGSAP } from "@gsap/react";
import { Link } from "@tanstack/react-router";
import { gsap } from "gsap";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

function MarqueeContent() {
	return Array.from({ length: 10 }).map((_, index) => (
		<Link
			key={index}
			to="/"
			hash={index.toString()}
			className="flex w-[360px] shrink-0 flex-col gap-2"
		>
			<div className="flex aspect-720/540 items-center justify-center rounded-md border bg-gray50/10">
				{index + 1}
			</div>
			<div>
				<div className="text-primary">Image Slider</div>
				<div className="text-muted-foreground">Components</div>
			</div>
		</Link>
	));
}

export function CommunitySection() {
	const wrapperRef = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			if (!wrapperRef.current) return;

			const wrapper = wrapperRef.current;
			const firstContent = wrapper.children[0] as HTMLElement;
			if (!firstContent) return;

			// 원본 콘텐츠 너비 측정
			const contentWidth = firstContent.offsetWidth;

			if (contentWidth === 0) return;

			// GSAP 애니메이션 - cleanup 자동 처리
			gsap.fromTo(
				wrapper,
				{ x: 0 },
				{
					x: -contentWidth,
					duration: 20,
					ease: "none",
					repeat: -1,
				},
			);
		},
		{ scope: wrapperRef },
	); // scope 지정으로 성능 최적화

	return (
		<section className="mt-25">
			<div className="container flex items-end justify-between">
				<h2 className="max-w-[580px] text-[60px] tracking-tight">
					Launch faster with community resources
				</h2>
				<div className="flex gap-2">
					<Button variant="secondary">Templates</Button>
					<Button variant="secondary">Plugins</Button>
					<Button variant="secondary">Components</Button>
				</div>
			</div>
			{/* marquee */}
			<div className="w-full overflow-hidden whitespace-nowrap py-3">
				<div className="inline-flex gap-2" ref={wrapperRef}>
					<div className="inline-flex flex-nowrap items-center gap-2">
						<MarqueeContent />
					</div>
					<div className="inline-flex flex-nowrap items-center gap-2">
						<MarqueeContent />
					</div>
				</div>
			</div>
		</section>
	);
}
