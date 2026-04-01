import { headers } from "next/headers"
import { ContentBlock, ContentBlockHeader, ContentBlockTitle } from "@/components/ui/content-block"
import { Metric, MetricGrid } from "@/components/ui/metric"
import { auth } from "@/lib/auth"
import { prisma } from "@/lib/db/prisma"

export default async function AdminDashboard() {
  await auth.api.getSession({ headers: await headers() })

  // Get stats from Prisma
  const userCount = await prisma.user.count()
  let orgCount = 0
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    orgCount = (await (prisma as any).organization?.count()) || 0
  } catch {
    // Organization model might not exist yet
  }

  return (
    <div className="container mx-auto max-w-7xl space-y-6 px-4 sm:px-6 lg:px-8">
      <div className="space-y-0.5">
        <h1 className="text-lg font-semibold">Admin Dashboard</h1>
        <p className="text-foreground mt-0.5 text-sm">Platform administration and monitoring</p>
      </div>

      <MetricGrid>
        <Metric label="Users" value={userCount} description="Total registered users" />
        <Metric label="Organizations" value={orgCount} description="Total organizations" />
      </MetricGrid>

      <ContentBlock>
        <ContentBlockHeader>
          <ContentBlockTitle>Recent Activity</ContentBlockTitle>
        </ContentBlockHeader>
        <p className="text-muted-foreground text-sm">Activity logging will be available once connected to Supabase.</p>
      </ContentBlock>
    </div>
  )
}
