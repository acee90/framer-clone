import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_main/stories")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/stories"!</div>;
}
