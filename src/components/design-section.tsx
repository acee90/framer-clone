"use client";

import { Link, useNavigate } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "./ui/button";

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

export function DesignSection() {
	const navigate = useNavigate();

	const moveAnchor = (hash: string) => {
		navigate({
			to: "/",
			hash: hash,
		});
	};

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
					onValueChange={moveAnchor}
					className="sticky top-[120px] h-fit w-full max-w-[360px]"
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
									className="flex w-fit items-end gap-2 p-0! text-xl"
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
				<div id="features" className="flex flex-1 flex-col gap-y-10">
					{items.map((item) => (
						<div id={item.hash} className="min-h-screen border">
							<div className="flex h-full w-full items-center justify-center text-4xl">
								{item.title}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
