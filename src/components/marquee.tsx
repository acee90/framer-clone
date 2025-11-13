import { useGSAP } from "@gsap/react";
import { Link } from "@tanstack/react-router";
import { gsap } from "gsap";
import { useRef } from "react";
import { Button } from "./ui/button";

export interface MarqueeItem {
	title: string;
	description: string;
	id: number;
}

function MarqueeContent({ data }: { data: MarqueeItem[] }) {
	return data.map((v, index) => {
		const bgUrl1 = `https://picsum.photos/id/${200 + v.id * 2}/360/270`;
		const bgUrl2 = `https://picsum.photos/id/${200 + v.id * 2 + 1}/360/270`;
		return (
			<Link
				key={v.title}
				to="/"
				hash={v.title}
				className="flex w-[360px] shrink-0 flex-col gap-2"
			>
				<div className="group scene relative flex aspect-720/540 items-center justify-center overflow-hidden rounded-md border bg-gray-50/10">
					{/* 호버하지 않았을 때 보이는 씬 */}
					<div
						className="absolute flex h-full w-full items-center justify-center bg-center bg-cover transition-opacity duration-200 group-hover:opacity-0"
						style={{
							backgroundImage: `url(${bgUrl1})`,
						}}
					>
						<span className="font-bold text-2xl text-white">{v.id}</span>
					</div>

					{/* 호버했을 때 보이는 씬 */}
					<div
						className="absolute flex h-full w-full items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100"
						style={{
							backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${bgUrl2})`,
						}}
					>
						<Button className="translate-y-2 scale-95 opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100">
							View {`${v.description}`}
						</Button>
					</div>
				</div>
				<div>
					<div className="text-primary">{v.title}</div>
					<div className="text-muted-foreground">{v.description}</div>
				</div>
			</Link>
		);
	});
}

interface CommunityMarqueeProps {
	items: MarqueeItem[];
	reverse?: boolean;
}

export function CommunityMarquee({ items, reverse }: CommunityMarqueeProps) {
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
				{ x: reverse ? -contentWidth : 0 },
				{
					x: reverse ? 0 : -contentWidth,
					duration: 120,
					ease: "none",
					repeat: -1,
				},
			);
		},
		{ scope: wrapperRef },
	); // scope 지정으로 성능 최적화

	return (
		<div className="w-full overflow-hidden whitespace-nowrap py-3">
			<div className="inline-flex" ref={wrapperRef}>
				<div className="inline-flex flex-nowrap items-center gap-3 px-1.5">
					<MarqueeContent data={items} />
				</div>
				<div className="inline-flex flex-nowrap items-center gap-3 px-1.5">
					<MarqueeContent data={items} />
				</div>
			</div>
		</div>
	);
}
