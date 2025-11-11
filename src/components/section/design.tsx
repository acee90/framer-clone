"use client";

import { Link, useNavigate } from "@tanstack/react-router";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronRight } from "lucide-react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const items = [
	{
		title: "AI",
		description:
			"Generate site layouts and advanced components in seconds with AI, so you can skip the blank canvas and start designing with confidence.",
		hash: "feat-ai",
	},
	{
		title: "Design",
		description:
			"Craft responsive layouts and bring them to life with smooth effects, interactions, and animations. Build exactly what you imagine, visually.",
		hash: "feat-design",
	},
	{
		title: "CMS",
		description:
			"Manage and update your content effortlessly with a built-in CMS. Keep your site fresh without touching code.",
		hash: "feat-cms",
	},
	{
		title: "Collaborate",
		description:
			"Whether you\U+2019re collaborating on the canvas or editing copy directly on the page, updates are seamless and handoff-free.",
		hash: "feat-collaborate",
	},
];

gsap.registerPlugin(ScrollTrigger);

export function DesignSection() {
	const navigate = useNavigate();
	const [activeValue, setActiveValue] = useState("feat-ai");

	const componentRef = useRef(null);
	const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

	// 박스 ref를 배열에 추가하는 헬퍼 함수

	const moveAnchor = (hash: string) => {
		navigate({
			to: "/",
			hash: hash,
		});
	};

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						const hash = entry.target.id;
						setActiveValue(hash);
						break;
					}
				}
			},
			{
				threshold: 0.3, // 30% 보일 때 트리거
				rootMargin: "-20% 0px -20% 0px", // 상하 20% 여백
			},
		);

		for (const ref of featureRefs.current) {
			if (ref) observer.observe(ref);
		}

		return () => {
			observer.disconnect();
		};
	}, []);

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			// boxRef.current (실제 DOM 노드)를 대상으로 애니메이션 설정

			featureRefs.current.forEach((box) =>
				gsap.fromTo(
					box,
					{
						// from: 초기 상태
						opacity: 0,
						x: 100,
					},
					{
						// to: 최종 상태
						opacity: 1,
						x: 0,
						// scrub를 사용할 때는 ease를 'none'으로 설정하는 것이
						// 스크롤과 애니메이션이 1:1로 정확하게 매핑됩니다.
						ease: "none",
						scrollTrigger: {
							trigger: box, // 이 요소를 기준으로
							// start: "top bottom", // "요소의 상단(top)이 뷰포트 하단(bottom)에 닿을 때" 시작
							start: "top 90%", //요소의 상단이 뷰포트의 90% 닿을때 시작 (좀더늦게시작)
							end: "top bottom-=50%",

							scrub: true, // 스크롤 위치에 따라 애니메이션을 부드럽게 문지르듯이(scrub) 재생
							toggleActions: "play none none none", // 한 번만 재생
							// 개발용 마커 (위치 확인 시 주석 해제)
							// markers: true,
						},
					},
				),
			);
		}, componentRef);

		return () => ctx.revert();
	}, []);

	return (
		<section id="design" className="flex flex-col gap-y-20 pt-20">
			<div className="container">
				<h2 className="max-w-[304px] text-[62px] tracking-tight">
					Create, collaborate, and go live
				</h2>
			</div>

			<div className="container flex gap-x-8">
				{/* design nav */}
				<Accordion
					type="single"
					collapsible={false}
					defaultValue="feat-ai"
					value={activeValue}
					onValueChange={moveAnchor}
					className="sticky top-[120px] h-fit w-full max-w-[360px] shrink-0"
				>
					{items.map((item) => (
						<AccordionItem key={item.hash} value={item.hash}>
							<AccordionTrigger className="text-2xl">
								{item.title}
							</AccordionTrigger>
							<AccordionContent className="flex flex-col gap-4 text-balance text-lg">
								<p className="text-muted-foreground leading-tight">
									{item.description}
								</p>
								<Button
									variant="ghost"
									asChild
									className="flex w-fit items-end gap-2 p-0! text-lg"
								>
									<Link to="/" hash={item.hash}>
										<span>Learn more</span>
										<ChevronRight className="size-5" />
									</Link>
								</Button>
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>

				{/* feature */}
				<div
					id="features"
					className="flex flex-1 flex-col gap-y-10"
					ref={componentRef}
				>
					{items.map((item, index) => (
						<div
							key={item.hash}
							id={item.hash}
							ref={(el) => {
								featureRefs.current[index] = el;
							}}
							className="min-h-[80vh]"
						>
							<div className="feature-item flex h-full w-[1240px] items-center justify-center overflow-hidden rounded-md bg-gray-50/10 text-4xl">
								{item.title}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
