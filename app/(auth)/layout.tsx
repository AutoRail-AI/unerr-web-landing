import Link from "next/link"
import { APP_NAME } from "@/lib/utils/constants"

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      {/* Left side - Branding */}
      <div className="bg-accent-fade relative hidden overflow-hidden lg:flex lg:w-1/2">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative z-10 flex flex-col justify-between p-12 text-white">
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-grotesk text-2xl font-bold">{APP_NAME}</span>
            </Link>
          </div>

          <div className="space-y-6">
            <blockquote className="text-xl leading-relaxed font-medium">
              &ldquo;The missing backend for AI coding agents — a living knowledge graph that turns every AI suggestion
              into architecture-safe code.&rdquo;
            </blockquote>
            <div className="flex items-center space-x-4">
              <div className="h-px flex-1 bg-white/30" />
              <span className="text-sm text-white/70">Start building safer</span>
              <div className="h-px flex-1 bg-white/30" />
            </div>
          </div>

          <div className="text-sm text-white/60">
            &copy; {new Date().getFullYear()} {APP_NAME} Inc.
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -right-24 -bottom-24 h-96 w-96 rounded-full bg-white/5" />
        <div className="absolute -top-12 -right-12 h-48 w-48 rounded-full bg-white/5" />
      </div>

      {/* Right side - Auth forms */}
      <div className="bg-background flex flex-1 items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          {/* Mobile logo */}
          <div className="text-center lg:hidden">
            <Link href="/" className="inline-flex items-center space-x-2">
              <span className="font-grotesk text-gradient text-2xl font-bold">{APP_NAME}</span>
            </Link>
          </div>

          {children}
        </div>
      </div>
    </div>
  )
}
