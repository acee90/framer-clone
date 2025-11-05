import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ParallaxComponent() {
  // --- Refs ---
  // 1. 전체 래퍼
  const mainRef = useRef<HTMLElement>(null);
  // 2. 배경 이미지
  const backgroundRef = useRef<HTMLDivElement>(null);
  // 3. 첫 번째 섹션 (텍스트를 트리거하기 위함)
  const firstSectionRef = useRef<HTMLElement>(null);
  // 4. 첫 번째 섹션의 텍스트
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // context 스코프를 mainRef로 설정
    const ctx = gsap.context(() => {
      // 1. 배경 레이어 애니메이션 (전체 스크롤에 걸쳐 적용)
      gsap.to(backgroundRef.current, {
        yPercent: 10, // 전체 200vh 스크롤에 걸쳐 20%만 이동 (속도 조절)
        ease: "none",
        scrollTrigger: {
          trigger: mainRef.current, // ✅ 트리거를 main 래퍼로 변경
          scrub: true,
          start: "top top",
          end: "bottom bottom", // ✅ 끝을 'bottom bottom'으로 변경
        },
      });

      // 2. 텍스트 레이어 애니메이션 (첫 섹션에서만 적용)
      gsap.to(textRef.current, {
        yPercent: -100,
        ease: "none",
        scrollTrigger: {
          trigger: firstSectionRef.current, // ✅ 트리거를 첫 번째 섹션으로 지정
          scrub: true,
          start: "top top",
          end: "bottom top", // 첫 번째 섹션이 끝날 때 애니메이션도 종료
        },
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    // 1. 모든 요소의 부모가 될 main 래퍼 (relative가 기준점이 됨)
    <main ref={mainRef} className="relative bg-black overflow-hidden">
      {/* 2. 배경 레이어 (z-10) */}
      {/* 이 div는 이제 main 래퍼에 속하며 모든 섹션의 배경이 됩니다. */}
      <div
        ref={backgroundRef}
        className="absolute top-[-30%] left-0 w-full h-[120%]
                   bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80')]
                   bg-cover bg-center z-10"
        // 참고: h-screen 2개를 커버해야 하므로
        // top/height 값을 넉넉하게(예: top-[-30%], h-[160%]) 조정합니다.
      ></div>

      {/* 3. 첫 번째 콘텐츠 섹션 (z-20) */}
      <section
        ref={firstSectionRef} // GSAP 텍스트 애니메이션의 트리거용 ref
        className="relative h-screen w-full
                   flex justify-center items-center
                   overflow-hidden z-20" // ✅ z-index 추가
      >
        <h1
          ref={textRef}
          className="text-[7vw] text-white font-bold drop-shadow-lg text-center"
        >
          GSAP Parallax
        </h1>
      </section>

      {/* 4. 두 번째 콘텐츠 섹션 (z-20) */}
      <section
        className="relative h-screen p-10
                   flex flex-col justify-center items-center
                   text-center  z-20" // ✅ z-index 추가
        // ✅ 불투명한 bg-gray-900 제거
      >
        {/* (선택 사항) 텍스트 가독성을 위한 반투명 오버레이 */}
        <div className="absolute inset-0 bg-gray-900/70 z-[-1]"></div>

        <h2 className="relative text-4xl font-bold text-white">Scroll Down</h2>
        <p className="relative text-lg text-gray-200">
          배경 이미지가 연속적으로 스크롤됩니다.
        </p>
        <p className="relative text-lg text-gray-200">
          콘텐츠만 위로 스크롤됩니다.
        </p>
      </section>

      {/* 여기에 세 번째, 네 번째 섹션을 z-20으로 추가해도 배경은 계속 이어집니다. */}
    </main>
  );
}

export default ParallaxComponent;
