import { Github, Linkedin, Twitter, Youtube } from "lucide-react";

export function Footer() {
	return (
		<footer className="border-t bg-background">
			<div className="container py-12 md:py-16">
				<div className="grid grid-cols-2 gap-8 md:grid-cols-5">
					{/* Product */}
					<div className="flex flex-col gap-3">
						<h3 className="font-semibold">Product</h3>
						<a
							href="/product/design"
							className="text-muted-foreground text-sm hover:text-foreground"
						>
							Design
						</a>
						<a
							href="/product/prototype"
							className="text-muted-foreground text-sm hover:text-foreground"
						>
							Prototype
						</a>
						<a
							href="/product/develop"
							className="text-muted-foreground text-sm hover:text-foreground"
						>
							Develop
						</a>
						<a
							href="/product/collaborate"
							className="text-muted-foreground text-sm hover:text-foreground"
						>
							Collaborate
						</a>
						<a
							href="/product/publish"
							className="text-muted-foreground text-sm hover:text-foreground"
						>
							Publish
						</a>
					</div>

					{/* Resources */}
					<div className="flex flex-col gap-3">
						<h3 className="font-semibold">Resources</h3>
						<a
							href="/resources/documentation"
							className="text-muted-foreground text-sm hover:text-foreground"
						>
							Documentation
						</a>
						<a
							href="/resources/learn"
							className="text-muted-foreground text-sm hover:text-foreground"
						>
							Learn
						</a>
						<a
							href="/resources/blog"
							className="text-muted-foreground text-sm hover:text-foreground"
						>
							Blog
						</a>
						<a
							href="/resources/templates"
							className="text-muted-foreground text-sm hover:text-foreground"
						>
							Templates
						</a>
						<a
							href="/resources/showcase"
							className="text-muted-foreground text-sm hover:text-foreground"
						>
							Showcase
						</a>
					</div>

					{/* Company */}
					<div className="flex flex-col gap-3">
						<h3 className="font-semibold">Company</h3>
						<a
							href="/company/about"
							className="text-muted-foreground text-sm hover:text-foreground"
						>
							About
						</a>
						<a
							href="/company/careers"
							className="text-muted-foreground text-sm hover:text-foreground"
						>
							Careers
						</a>
						<a
							href="/company/newsroom"
							className="text-muted-foreground text-sm hover:text-foreground"
						>
							Newsroom
						</a>
						<a
							href="/company/contact"
							className="text-muted-foreground text-sm hover:text-foreground"
						>
							Contact
						</a>
					</div>

					{/* Legal */}
					<div className="flex flex-col gap-3">
						<h3 className="font-semibold">Legal</h3>
						<a
							href="/legal/terms"
							className="text-muted-foreground text-sm hover:text-foreground"
						>
							Terms
						</a>
						<a
							href="/legal/privacy"
							className="text-muted-foreground text-sm hover:text-foreground"
						>
							Privacy
						</a>
						<a
							href="/legal/cookies"
							className="text-muted-foreground text-sm hover:text-foreground"
						>
							Cookies
						</a>
						<a
							href="/legal/licenses"
							className="text-muted-foreground text-sm hover:text-foreground"
						>
							Licenses
						</a>
					</div>

					{/* Social */}
					<div className="flex flex-col gap-3">
						<h3 className="font-semibold">Community</h3>
						<div className="flex gap-3">
							<a
								href="https://twitter.com"
								className="text-muted-foreground transition-colors hover:text-foreground"
								aria-label="Twitter"
							>
								<Twitter className="h-5 w-5" />
							</a>
							<a
								href="https://github.com"
								className="text-muted-foreground transition-colors hover:text-foreground"
								aria-label="GitHub"
							>
								<Github className="h-5 w-5" />
							</a>
							<a
								href="https://youtube.com"
								className="text-muted-foreground transition-colors hover:text-foreground"
								aria-label="YouTube"
							>
								<Youtube className="h-5 w-5" />
							</a>
							<a
								href="https://linkedin.com"
								className="text-muted-foreground transition-colors hover:text-foreground"
								aria-label="LinkedIn"
							>
								<Linkedin className="h-5 w-5" />
							</a>
						</div>
					</div>
				</div>

				{/* Copyright */}
				<div className="mt-12 border-t pt-8">
					<div className="flex flex-col items-center justify-between gap-4 md:flex-row">
						<p className="text-muted-foreground text-sm">
							© 2024 Framer Clone. All rights reserved.
						</p>
						<div className="flex items-center gap-2">
							<div className="h-6 w-6 rounded bg-gradient-to-br from-purple-600 to-blue-600" />
							<span className="font-semibold text-sm">Framer</span>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
