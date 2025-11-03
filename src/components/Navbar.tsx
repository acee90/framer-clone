import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";

export function Navbar() {
	return (
		<nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-16 items-center justify-between">
				{/* Logo */}
				<div className="flex items-center gap-8">
					<a href="/" className="flex items-center space-x-2">
						<div className="h-8 w-8 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600" />
						<span className="text-xl font-bold">Framer</span>
					</a>

					{/* Desktop Navigation */}
					<div className="hidden items-center gap-6 md:flex">
						<DropdownMenu>
							<DropdownMenuTrigger className="text-sm font-medium transition-colors hover:text-foreground/80">
								Product
							</DropdownMenuTrigger>
							<DropdownMenuContent align="start">
								<DropdownMenuItem>Design</DropdownMenuItem>
								<DropdownMenuItem>Prototype</DropdownMenuItem>
								<DropdownMenuItem>Collaborate</DropdownMenuItem>
								<DropdownMenuItem>Publish</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>

						<DropdownMenu>
							<DropdownMenuTrigger className="text-sm font-medium transition-colors hover:text-foreground/80">
								Features
							</DropdownMenuTrigger>
							<DropdownMenuContent align="start">
								<DropdownMenuItem>Animations</DropdownMenuItem>
								<DropdownMenuItem>Components</DropdownMenuItem>
								<DropdownMenuItem>CMS</DropdownMenuItem>
								<DropdownMenuItem>SEO</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>

						<DropdownMenu>
							<DropdownMenuTrigger className="text-sm font-medium transition-colors hover:text-foreground/80">
								Resources
							</DropdownMenuTrigger>
							<DropdownMenuContent align="start">
								<DropdownMenuItem>Documentation</DropdownMenuItem>
								<DropdownMenuItem>Learn</DropdownMenuItem>
								<DropdownMenuItem>Community</DropdownMenuItem>
								<DropdownMenuItem>Templates</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>
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
									<a href="#" className="text-sm text-muted-foreground">
										Design
									</a>
									<a href="#" className="text-sm text-muted-foreground">
										Prototype
									</a>
									<a href="#" className="text-sm text-muted-foreground">
										Collaborate
									</a>
									<a href="#" className="text-sm text-muted-foreground">
										Publish
									</a>
								</div>

								<div className="flex flex-col gap-2">
									<h3 className="font-semibold">Features</h3>
									<a href="#" className="text-sm text-muted-foreground">
										Animations
									</a>
									<a href="#" className="text-sm text-muted-foreground">
										Components
									</a>
									<a href="#" className="text-sm text-muted-foreground">
										CMS
									</a>
									<a href="#" className="text-sm text-muted-foreground">
										SEO
									</a>
								</div>

								<div className="flex flex-col gap-2">
									<h3 className="font-semibold">Resources</h3>
									<a href="#" className="text-sm text-muted-foreground">
										Documentation
									</a>
									<a href="#" className="text-sm text-muted-foreground">
										Learn
									</a>
									<a href="#" className="text-sm text-muted-foreground">
										Community
									</a>
									<a href="#" className="text-sm text-muted-foreground">
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
