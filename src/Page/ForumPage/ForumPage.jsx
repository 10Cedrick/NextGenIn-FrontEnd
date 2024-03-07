import DashboardLayout from "../../Layout/DashboardLayout"
import { ForumListItem } from "../../component"
import { listeForums } from "../../constant/ForumInfo"
export default function ForumPage() {
  return (
    <DashboardLayout>
    <div className="w-full bg-yellow-300">
        {listeForums.map((forum) => (
            <ForumListItem key={forum.id} forum={forum} />
        ))}
    </div>
</DashboardLayout>
  )
}
