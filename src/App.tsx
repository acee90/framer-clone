import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";

function App() {
	return (
		<div className="flex min-h-screen flex-col">
			<Navbar />

			{/* Main Content */}
			<main className="flex-1">
				{/* Hero Section */}
				<section className="container mx-auto py-24 md:py-32">
					<div className="mx-auto max-w-4xl">
						<h1 className="mx-auto mb-6 max-w-[540px] font-bold text-5xl tracking-tight md:text-8xl">
							Build better sites, faster
						</h1>
						<p className="mb-8 text-muted-foreground text-xl md:text-2xl">
							Zero code, maximum speed. Make professional sites at the speed of
							thought.
						</p>
						<div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
							<Button size="lg" className="bg-blue-600 hover:bg-blue-700">
								Start for free
							</Button>
							<Button size="lg" variant="outline">
								See showcase
							</Button>
						</div>
					</div>
				</section>

				{/* Features Section */}
				<section className="border-t bg-muted/50 py-24">
					<div className="container mx-auto">
						<div className="mx-auto max-w-3xl text-center">
							<h2 className="mb-4 font-bold text-4xl tracking-tight">
								Everything you need to build a site
							</h2>
							<p className="text-lg text-muted-foreground">
								Design, prototype, and publish with the power of code — without
								writing any.
							</p>
						</div>

						<div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
							{/* Feature Cards */}
							{[
								{
									title: "Visual Design",
									description:
										"Create stunning designs with an intuitive canvas that feels like magic.",
								},
								{
									title: "Animations",
									description:
										"Bring your site to life with smooth, performant animations.",
								},
								{
									title: "CMS",
									description:
										"Manage your content with a powerful, easy-to-use CMS.",
								},
								{
									title: "SEO",
									description:
										"Built-in SEO tools to help your site rank in search engines.",
								},
								{
									title: "Responsive",
									description:
										"Design for any screen size with powerful responsive controls.",
								},
								{
									title: "Fast",
									description:
										"Lightning-fast sites that load instantly for your visitors.",
								},
							].map((feature) => (
								<div
									key={feature.title}
									className="rounded-lg border bg-background p-6"
								>
									<h3 className="mb-2 font-semibold text-xl">
										{feature.title}
									</h3>
									<p className="text-muted-foreground">{feature.description}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* CTA Section */}
				<section className="border-t py-24">
					<div className="container mx-auto">
						<div className="mx-auto max-w-3xl text-center">
							<h2 className="mb-4 font-bold text-4xl tracking-tight md:text-5xl">
								Start building today
							</h2>
							<p className="mb-8 text-muted-foreground text-xl">
								Join thousands of designers and developers who build with
								Framer.
							</p>
							<Button size="lg" className="bg-blue-600 hover:bg-blue-700">
								Start for free
							</Button>
						</div>
					</div>
				</section>
			</main>

			<Footer />
		</div>
	);
}

export default App;
