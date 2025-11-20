import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/abc")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/_auth/abc"!</div>;
}
