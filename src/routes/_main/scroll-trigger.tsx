import { createFileRoute } from "@tanstack/react-router";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

export const Route = createFileRoute("/_main/scroll-trigger")({
	component: ScrubExample,
});

gsap.registerPlugin(ScrollTrigger);

function ScrubExample() {
	const boxRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		gsap.fromTo(
			boxRef.current,
			{ x: 0, rotation: 0 },
			{
				x: 600, // 오른쪽으로 이동
				rotation: 360, // 한 바퀴 회전
				ease: "none", // 스크롤 위치에 완전히 동기화되려면 ease는 none
				scrollTrigger: {
					trigger: boxRef.current,
					start: "top 80%", // 시작 시점
					end: "top 20%", // 끝 시점 (이 구간 길이에 따라 진행 속도 결정)
					scrub: true, // ✅ 스크롤 위치와 애니메이션을 동기화
					markers: true, // (디버깅용) 시작/끝 위치 표시
				},
			},
		);
	}, []);

	return (
		<div className="flex h-[200vh] items-center justify-center">
			<div
				ref={boxRef}
				className="flex h-32 w-32 items-center justify-center rounded-xl bg-blue-500 text-white"
			>
				Scrub!
			</div>
		</div>
	);
}
