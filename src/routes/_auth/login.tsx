import { createFileRoute } from "@tanstack/react-router";
import Logo from "@/assets/framer-logo.svg?react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/_auth/login")({
	component: RouteComponent,
});

const gridItems = [
	{
		id: "grid-item-1",
		url: "https://picsum.photos/seed/login-grid-1/320/320",
	},
	{
		id: "grid-item-2",
		url: "https://picsum.photos/seed/login-grid-2/320/320",
	},
	{
		id: "grid-item-3",
		url: "https://picsum.photos/seed/login-grid-3/320/320",
	},
	{
		id: "grid-item-4",
		url: "https://picsum.photos/seed/login-grid-4/320/320",
	},
	{
		id: "grid-item-5",
		url: "https://picsum.photos/seed/login-grid-5/320/320",
	},
	{
		id: "grid-item-6",
		url: "https://picsum.photos/seed/login-grid-6/320/320",
	},
	{
		id: "grid-item-7",
		url: "https://picsum.photos/seed/login-grid-7/320/320",
	},
	{
		id: "grid-item-8",
		url: "https://picsum.photos/seed/login-grid-8/320/320",
	},
];

function RouteComponent() {
	return (
		<main className="flex h-screen w-screen gap-x-4 bg-white">
			{/* login section */}
			<section className="flex flex-auto items-center justify-center">
				<form className="flex max-w-[260px] flex-col gap-5">
					<Logo className="mx-auto h-6 w-4 text-primary-foreground" />
					<div className="py-2.5 text-center text-primary-foreground tracking-tighter">
						<h1 className="text-2xl leading-none">Welcome to Framer</h1>
						<h2 className="text-2xl leading-none opacity-50">
							Start publishing now.
						</h2>
					</div>
					<Button variant="secondary" className="rounded-sm text-xs" size="sm">
						Continue with Google
					</Button>

					<div className="flex items-center justify-center gap-1 before:w-[92px] before:border-card/30 before:border-b before:content-[''] after:w-[92px] after:border-card/30 after:border-b after:content-['']">
						<span className="font-semibold text-card text-xs">OR</span>
					</div>
					<div className="flex flex-col gap-2">
						<input
							type="email"
							placeholder="Enter your work email..."
							className="rounded-sm bg-[#f3f3f3] p-2 font-semibold text-primary-foreground text-xs placeholder:text-primary-foreground/50"
						/>
						<Button
							variant="secondary"
							size="sm"
							className="rounded-sm bg-[#f3f3f3] text-primary-foreground hover:bg-[#eeeeee]"
						>
							Continue
						</Button>
					</div>
				</form>
			</section>
			<div className="grid h-full grid-cols-2 grid-rows-4 gap-2 p-2">
				{gridItems.map((value) => (
					<div
						key={value.id}
						className="aspect-square overflow-clip rounded-xs"
					>
						<img
							src={value.url}
							alt={value.id}
							width={320}
							height={320}
							className="h-full w-full object-cover"
						/>
					</div>
				))}
			</div>
		</main>
	);
}
