import { createFileRoute } from "@tanstack/react-router";
import { DesignSection } from "@/components/design-section";
import { FramerSection1 } from "@/components/framer-section-1";
import { SliderSection } from "@/components/slider-section";
import TypingDeleteLoop from "@/components/typing-loop";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
	component: HomeComponent,
});

function HomeComponent() {
	const myTexts = [
		"Yesterday: Custom Fonts",
		"2w ago: Dynamic Optimization",
		"2w ago: Copy-Paste Markdown Contents & Links",
		"It just works ✨",
	];

	return (
		<>
			{/* Hero Section */}
			<section className="container mx-auto py-24 pb-[100px] md:pt-20">
				<div className="mx-auto flex max-w-4xl flex-col items-center gap-5">
					<TypingDeleteLoop
						texts={myTexts}
						typingSpeed={80}
						pauseDuration={2000}
						clearDelay={500}
					/>
					<h1 className="max-w-[560px] text-center font-semibold text-5xl leading-24 tracking-tight md:text-[100px]">
						Build better sites, faster
					</h1>
					<p className="max-w-[517px] px-10 text-center font-semibold text-2xl text-muted-foreground md:text-2xl">
						Framer is the design tool for websites. Design freely, publish fast,
						and scale with CMS, SEO, analytics, and more.
					</p>
					<div className="flex flex-col items-center justify-center gap-2 sm:flex-row">
						<Button
							size="lg"
							className="h-9! rounded-full bg-white px-4 text-black hover:bg-white hover:opacity-70"
						>
							Start for free
						</Button>
						<Button
							size="lg"
							className="rounded-full border-none bg-[rgba(255,255,255,0.15)] px-4 hover:bg-[rgba(255,255,255,0.15)] hover:opacity-70"
						>
							Start with AI
						</Button>
					</div>
				</div>
			</section>

			<FramerSection1 />

			<DesignSection />

			<SliderSection />

			{/* CTA Section */}
			<section className="border-t py-24">
				<div className="container mx-auto">
					<div className="mx-auto max-w-3xl text-center">
						<h2 className="mb-4 font-bold text-4xl tracking-tight md:text-5xl">
							Start building today
						</h2>
						<p className="mb-8 text-muted-foreground text-xl">
							Join thousands of designers and developers who build with Framer.
						</p>
						<Button size="lg" className="bg-blue-600 hover:bg-blue-700">
							Start for free
						</Button>
					</div>
				</div>
			</section>
		</>
	);
}
