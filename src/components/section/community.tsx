import { Button } from "@/components/ui/button";
import { CommunityMarquee } from "../marquee";

const data = [
	{
		id: 1,
		title: "Notion",
		description: "Plugin",
	},
	{
		id: 2,
		title: "Hover Zoom",
		description: "Component",
	},
	{
		id: 3,
		title: "Archer",
		description: "Template",
	},
	{
		id: 4,
		title: "Workshop",
		description: "Plugin",
	},
	{
		id: 5,
		title: "Image Slider",
		description: "Component",
	},
	{
		id: 6,
		title: "Milo",
		description: "Template",
	},
];

const data2 = [
	{
		id: 7,
		title: "Animated Gradients",
		description: "Component",
	},
	{
		id: 8,
		title: "JSON Sync",
		description: "Plugin",
	},
	{
		id: 9,
		title: "Baseform",
		description: "Template",
	},
	{
		id: 10,
		title: "Digital Rotary Radio",
		description: "Component",
	},
	{
		id: 11,
		title: "Apex Flims",
		description: "Template",
	},
	{
		id: 12,
		title: "Flip Card",
		description: "Component",
	},
];

export function CommunitySection() {
	return (
		<section className="mt-25">
			<div className="container mb-10 flex items-end justify-between">
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
			<div>
				<CommunityMarquee items={data} />
				<CommunityMarquee items={data2} reverse />
			</div>
		</section>
	);
}
