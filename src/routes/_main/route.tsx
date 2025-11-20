import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const Route = createFileRoute("/_main")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="flex min-h-screen flex-col overflow-x-clip">
			<Navbar />
			<Outlet />
			<Footer />
		</div>
	);
}
