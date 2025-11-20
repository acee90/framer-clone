import { createFileRoute } from "@tanstack/react-router";
import ParallaxComponent from "@/components/parallax-gemini";

export const Route = createFileRoute("/_main/parallax")({
	component: RouteComponent,
});

function RouteComponent() {
	return <ParallaxComponent />;
}
