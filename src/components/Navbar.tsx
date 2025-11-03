import {
	Database,
	Menu,
	Palette,
	Rocket,
	Search,
	Sparkles,
	Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

interface MenuItem {
	title: string;
	href: string;
	subitems?: {
		title: string;
		href: string;
		description?: string;
		icon?: React.ComponentType<{ className?: string }>;
		badge?: string;
	}[];
}

const menuItems: MenuItem[] = [
	{
		title: "Product",
		href: "#",
		subitems: [
			{
				title: "AI",
				href: "#",
				description: "Set your ideas free",
				icon: Sparkles,
			},
			{
				title: "Design",
				href: "#",
				description: "Create stunning designs",
				icon: Palette,
			},
			{
				title: "Collaborate",
				href: "#",
				description: "Work together seamlessly",
				icon: Users,
			},
			{
				title: "CMS",
				href: "#",
				description: "Manage your content easily",
				icon: Database,
			},
			{
				title: "Publish",
				href: "#",
				description: "Share your work with the world",
				icon: Rocket,
			},
			{
				title: "SEO",
				href: "#",
				description: "Optimize your site for search engines",
				icon: Search,
			},
		],
	},
];

export function Navbar() {
	return (
		<nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
			<div className="container relative mx-auto flex h-16 items-center justify-between">
				{/* Logo */}
				<div className="flex items-center gap-8">
					<a href="/" className="flex items-center space-x-2">
						<div className="h-8 w-8 rounded-lg bg-linear-to-br from-purple-600 to-blue-600" />
						<span className="font-bold text-xl">Framer</span>
					</a>

					{/* Desktop Navigation */}
					<NavigationMenu className="-translate-x-1/2 absolute left-1/2 hidden transform md:flex">
						<NavigationMenuList>
							{menuItems.map((item) => (
								<NavigationMenuItem key={item.title}>
									<NavigationMenuTrigger className="font-medium text-sm">
										{item.title}
									</NavigationMenuTrigger>
									<NavigationMenuContent>
										<ul className="grid w-[260px] grid-cols-1 gap-3">
											{item.subitems?.map((subitem) => {
												const Icon = subitem.icon;
												return (
													<li key={subitem.title}>
														<NavigationMenuLink asChild>
															<a
																href={subitem.href}
																className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors"
															>
																<div className="flex items-center gap-3">
																	{Icon && (
																		<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-muted p-4 transition-colors group-hover:bg-foreground">
																			<Icon className="mt-0.5 h-5 w-5 shrink-0 text-foreground transition-colors group-hover:text-background" />
																		</div>
																	)}
																	<div className="flex flex-1 flex-col gap-1">
																		<div className="font-medium text-sm leading-none">
																			{subitem.title}
																		</div>
																		<p className="line-clamp-2 text-muted-foreground text-sm leading-snug transition-colors group-hover:text-foreground">
																			{subitem.description}
																		</p>
																	</div>
																</div>
															</a>
														</NavigationMenuLink>
													</li>
												);
											})}
										</ul>
									</NavigationMenuContent>
								</NavigationMenuItem>
							))}
						</NavigationMenuList>
					</NavigationMenu>
				</div>

				{/* Right side */}
				<div className="flex items-center gap-4">
					{/* Desktop CTA */}
					<div className="hidden md:flex md:items-center md:gap-4">
						<Button variant="ghost" size="sm">
							Sign in
						</Button>
						<Button size="sm" className="bg-blue-600 hover:bg-blue-700">
							Start for free
						</Button>
					</div>

					{/* Mobile Menu */}
					<Sheet>
						<SheetTrigger asChild className="md:hidden">
							<Button variant="ghost" size="icon">
								<Menu className="h-5 w-5" />
								<span className="sr-only">Toggle menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent side="right">
							<SheetHeader>
								<SheetTitle>Menu</SheetTitle>
							</SheetHeader>
							<div className="mt-8 flex flex-col gap-4">
								<div className="flex flex-col gap-2">
									<h3 className="font-semibold">Product</h3>
									<a href="#" className="text-muted-foreground text-sm">
										Design
									</a>
									<a href="#" className="text-muted-foreground text-sm">
										Prototype
									</a>
									<a href="#" className="text-muted-foreground text-sm">
										Collaborate
									</a>
									<a href="#" className="text-muted-foreground text-sm">
										Publish
									</a>
								</div>

								<div className="flex flex-col gap-2">
									<h3 className="font-semibold">Features</h3>
									<a href="#" className="text-muted-foreground text-sm">
										Animations
									</a>
									<a href="#" className="text-muted-foreground text-sm">
										Components
									</a>
									<a href="#" className="text-muted-foreground text-sm">
										CMS
									</a>
									<a href="#" className="text-muted-foreground text-sm">
										SEO
									</a>
								</div>

								<div className="flex flex-col gap-2">
									<h3 className="font-semibold">Resources</h3>
									<a href="#" className="text-muted-foreground text-sm">
										Documentation
									</a>
									<a href="#" className="text-muted-foreground text-sm">
										Learn
									</a>
									<a href="#" className="text-muted-foreground text-sm">
										Community
									</a>
									<a href="#" className="text-muted-foreground text-sm">
										Templates
									</a>
								</div>

								<div className="mt-4 flex flex-col gap-2">
									<Button variant="outline" className="w-full">
										Sign in
									</Button>
									<Button className="w-full bg-blue-600 hover:bg-blue-700">
										Start for free
									</Button>
								</div>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</nav>
	);
}
