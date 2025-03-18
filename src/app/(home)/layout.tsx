import { Header } from "@/components/header"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (<>
    <Header />
    <div className="pt-[5rem] px-4">
      {children}
    </div>
  </>)
}