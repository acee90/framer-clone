import { createFileRoute } from "@tanstack/react-router";
import ParallaxExample from "@/components/parallax";

export const Route = createFileRoute("/_main/about")({
	component: AboutComponent,
});

function AboutComponent() {
	return (
		<div className="p-2">
			<h3>About</h3>
			<ParallaxExample />
		</div>
	);
}
