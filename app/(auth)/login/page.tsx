import type { Metadata } from "next"
import { LoginForm, OAuthButtons } from "@/components/auth"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your account",
}

export default function LoginPage() {
  return (
    <div className="mx-auto max-w-md space-y-6">
      <div className="space-y-0.5 text-center">
        <h1 className="text-lg font-semibold">Welcome back</h1>
        <p className="text-foreground mt-0.5 text-sm">Sign in to your account to continue</p>
      </div>

      <div className="space-y-4">
        <OAuthButtons mode="login" />

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <Separator className="w-full" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background text-muted-foreground px-2">Or continue with email</span>
          </div>
        </div>

        <LoginForm />
      </div>
    </div>
  )
}
