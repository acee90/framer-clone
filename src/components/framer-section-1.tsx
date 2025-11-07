import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

// 랜덤 높이 생성 (320-360px)
function getRandomHeight() {
	return Math.floor(Math.random() * (360 - 320 + 1)) + 320;
}

// 랜덤 색상 배열 (터미널 컬러 테마 - 검은 배경에 어울리는 vivid 색상)
const colors = [
	"#FF6B6B", // Red (bright red)
	"#4ECDC4", // Cyan (bright cyan)
	"#95E1D3", // Aqua (bright aqua)
	"#F38181", // Light Red (salmon)
	"#AA96DA", // Purple (bright purple)
	"#FCBAD3", // Pink (bright pink)
	"#FFFFD2", // Yellow (bright yellow)
	"#A8D8EA", // Blue (sky blue)
	"#FFD93D", // Gold (bright gold)
	"#6BCF7F", // Green (bright green)
	"#FF8FB1", // Rose (bright rose)
	"#C490E4", // Lavender (bright lavender)
	"#A3D9FF", // Light Blue
	"#FFB6B9", // Peach
	"#B4E7CE", // Mint (bright mint)
	"#F6C6EA", // Magenta (bright magenta)
];

// 3000px를 채우기 위해 필요한 카드 생성
function generateCards() {
	const cards = [];
	let totalHeight = 0;
	const gap = 10; // gap-y-2.5 = 10px

	while (totalHeight < 1200) {
		const height = getRandomHeight();
		const color = colors[Math.floor(Math.random() * colors.length)];
		cards.push({ height, color, id: Math.random() });
		totalHeight += height + gap;
	}

	return cards;
}

function Column() {
	const cards = generateCards();

	//  마스크
	//   0deg: 0도 방향 = 아래에서 위로 그라데이션 (↑)
	//   rgba(0, 0, 0, 0) 10%: 시작점(아래쪽)에서 10%까지는 완전 투명
	//   rgb(0, 0, 0) 40%: 40% 지점부터는 완전 불투명 (검은색)

	return (
		<div
			className="flex w-90 flex-col gap-y-2.5"
			style={{
				maskImage:
					"linear-gradient(0deg, rgba(0, 0, 0, 0) 10%, rgb(0, 0, 0) 40%)",
				WebkitMaskImage:
					"linear-gradient(0deg, rgba(0, 0, 0, 0) 10%, rgb(0, 0, 0) 40%)",
			}}
		>
			{cards.map((card) => (
				<div
					key={card.id}
					className="w-full shrink-0 rounded-lg"
					style={{ height: `${card.height}px`, backgroundColor: card.color }}
				/>
			))}
		</div>
	);
}

function Scroll() {
	const cards = generateCards();

	return (
		<div
			className="flex w-40 flex-col gap-y-2.5 overflow-hidden"
			style={{
				maskImage:
					"linear-gradient(0deg, rgba(0, 0, 0, 0) 10%, rgb(0, 0, 0) 40%)",
				WebkitMaskImage:
					"linear-gradient(0deg, rgba(0, 0, 0, 0) 10%, rgb(0, 0, 0) 40%)",
			}}
		>
			{cards.map((card) => (
				<div
					key={card.id}
					className="w-full shrink-0 rounded-lg"
					style={{ height: `${card.height}px`, backgroundColor: card.color }}
				/>
			))}
		</div>
	);
}

function Stories() {
	const logos = [
		"Bird",
		"SpaceX",
		"Visual Electronic",
		"Dribbble",
		"miro",
		"perplexity",
		"doordash",
		"mixpanel",
	];
	return (
		<div className="group relative mx-auto py-8">
			<div className="grid h-full w-full max-w-[640px] animate-out grid-cols-4 gap-x-6 gap-y-10 transition-all delay-75 duration-300 group-hover:blur-xs">
				{logos.map((logo) => (
					<div className="mx-auto flex h-10 items-center text-nowrap font-serif text-white text-xl">
						{logo}
					</div>
				))}
			</div>
			<div className="absolute top-0 left-0 z-10 flex h-full w-full items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
				<Button
					variant="ghost"
					className="flex items-center gap-2 leading-4"
					asChild
				>
					<Link to="/stories">
						<span>Meet out customers</span>
						<ChevronRight className="size-4" />
					</Link>
				</Button>
			</div>
		</div>
	);
}

export function FramerSection1() {
	return (
		<div className="relative h-[1200px] w-screen overflow-clip">
			<div className="-translate-x-1/2 absolute top-0 left-1/2 flex h-[1200px] w-[3000px] gap-x-2.5 overflow-clip">
				<Column />
				<Scroll />
				<Column />
				<Scroll />
				<Column />
				<Column />
				<Scroll />
				<Scroll />
				<Column />
				<Column />
			</div>
			<div className="absolute bottom-0 flex w-full justify-center">
				<Stories />
			</div>
		</div>
	);
}
