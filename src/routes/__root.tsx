import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const Route = createRootRoute({
	component: RootLayout,
});

function RootLayout() {
	return (
		<>
			<div className="flex min-h-screen flex-col overflow-x-clip">
				<Navbar />
				<main className="flex-1">
					<Outlet />
				</main>
				<Footer />
			</div>
			<TanStackRouterDevtools />
		</>
	);
}
