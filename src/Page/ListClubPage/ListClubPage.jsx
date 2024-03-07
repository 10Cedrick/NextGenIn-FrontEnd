import DashboardLayout from "../../Layout/DashboardLayout"
import { ClubOverview } from "../../component"
import { listClub, listAutreClub} from "../../constant/clubInfo"
export default function ListClubPage() {
  return (
    <DashboardLayout>
        <div className="">
            <h1 className="text-lg section-title ">Les clubs que vous suivez</h1>
            <div className="flex flex-row space-x-16 mt-16">
                {listClub.map((item, index) => (
                    <ClubOverview item={item} key={index}/>
                ))}
            </div>
        </div>
        <div className="mt-24 mb-24">
            <h1 className="text-lg section-title ">Autres clubs qui pourront vous intéresser</h1>
            <div className="flex flex-row space-x-16 mt-16">
                {listAutreClub.map((item, index) => (
                    <ClubOverview item={item} key={index}/>
                ))}
            </div>
        </div>
    </DashboardLayout>
  )
}
