import Link from "next/link"

export default function NotFound() {
  return (
    <div className="bg-background flex min-h-screen items-center justify-center px-6">
      <div className="animate-fade-in max-w-md text-center">
        <p className="font-grotesk text-muted-foreground/20 mb-4 text-[120px] leading-none font-bold">404</p>
        <h1 className="font-grotesk text-foreground mb-3 text-2xl font-bold">Page not found</h1>
        <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="bg-accent-fade text-primary-foreground inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-medium transition-opacity hover:opacity-90"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}
