import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxSmooth() {
	const container = useRef(null);
	const bgRef = useRef(null);
	const midRef = useRef(null);
	const fgRef = useRef(null);

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: container.current,
					start: "top top",
					end: "bottom bottom",
					scrub: 1, // ✅ 약간의 관성 추가 (더 부드러움)
				},
			});

			tl.to(bgRef.current, { yPercent: -20, ease: "none" }, 0)
				.to(midRef.current, { yPercent: -40, ease: "none" }, 0)
				.to(fgRef.current, { yPercent: -60, ease: "none" }, 0);

			ScrollTrigger.refresh();
		}, container);

		return () => ctx.revert();
	}, []);

	return (
		<div
			ref={container}
			style={{
				position: "relative",
				height: "300vh",
				overflow: "hidden",
				backgroundColor: "#111",
				color: "white",
			}}
		>
			{/* 배경 */}
			<img
				ref={bgRef}
				src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80"
				style={{
					position: "absolute",
					inset: 0,
					width: "100%",
					height: "100%",
					objectFit: "cover",
					willChange: "transform", // ✅ GPU 가속 유도
				}}
				alt="background"
			/>

			{/* 중간층 */}
			<img
				ref={midRef}
				src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1200&q=80"
				style={{
					position: "absolute",
					inset: 0,
					width: "100%",
					height: "100%",
					objectFit: "cover",
					opacity: 0.8,
					willChange: "transform", // ✅
				}}
				alt="middle"
			/>

			{/* 전경 */}
			<div
				ref={fgRef}
				style={{
					position: "absolute",
					inset: 0,
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					textAlign: "center",
					willChange: "transform", // ✅
				}}
			>
				<h1
					style={{ fontSize: "4rem", fontWeight: "bold", marginBottom: "1rem" }}
				>
					Parallax Magic
				</h1>
				<p style={{ fontSize: "1.5rem" }}>Scroll to feel the depth</p>
			</div>
		</div>
	);
}
