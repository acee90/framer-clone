import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import type React from "react";
import { useLayoutEffect, useRef } from "react";

// CSS 파일을 import하는 대신 Tailwind 클래스를 JSX에 직접 사용합니다.

gsap.registerPlugin(TextPlugin);

// TypeScript: 컴포N...의 Props 타입 정의
interface TypingDeleteLoopProps {
	texts: string[];
	typingSpeed?: number;
	pauseDuration?: number;
	clearDelay?: number;
}

const TypingDeleteLoop: React.FC<TypingDeleteLoopProps> = ({
	texts = ["안녕하세요.", "GSAP 예제입니다.", "Tailwind CSS로 만들었습니다."],
	typingSpeed = 100,
	pauseDuration = 2000,
	clearDelay = 500,
}) => {
	const textRef = useRef<HTMLSpanElement>(null);
	const cursorRef = useRef<HTMLSpanElement>(null);

	useLayoutEffect(() => {
		if (!textRef.current || !cursorRef.current) return;

		// --- 1. 커서 깜빡임 애니메이션 (GSAP) ---
		const cursorTween = gsap.to(cursorRef.current, {
			opacity: 0,
			repeat: -1,
			yoyo: true,
			duration: 0.5,
			ease: "steps(1)",
		});

		// --- 2. 메인 텍스트 애니메이션 타임라인 (GSAP) ---
		// (이 로직은 이전 예제와 100% 동일합니다)
		const tl = gsap.timeline({
			repeat: -1,
		});

		texts.forEach((text) => {
			const typeDuration = text.length * (typingSpeed / 1000);
			tl.to(textRef.current, {
				text: text,
				duration: typeDuration,
				ease: "none",
			});
			tl.to({}, { duration: pauseDuration / 1000 });
			tl.set(textRef.current, { text: "" });
			tl.to({}, { duration: clearDelay / 1000 });
		});

		return () => {
			tl.kill();
			cursorTween.kill();
		};
	}, [texts, typingSpeed, pauseDuration, clearDelay]);

	// --- 🎨 여기가 Tailwind CSS로 변경된 부분입니다 ---
	return (
		<div className="flex items-center justify-center font-mono text-base text-white">
			{/* mr-1: margin-right (커서와의 간격)
        h-10: (2.5rem) 텍스트가 비어있을 때도 높이를 유지하여 레이아웃이 밀리지 않게 함
      */}
			<span ref={textRef} className="mr-1 h-6"></span>
			<span ref={cursorRef} className="font-bold">
				|
			</span>
		</div>
	);
};

export default TypingDeleteLoop;
