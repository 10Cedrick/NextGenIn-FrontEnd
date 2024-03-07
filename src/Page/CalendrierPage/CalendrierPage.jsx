import DashboardLayout from "../../Layout/DashboardLayout"
import { ImportantDateContainer } from "../../component"
import { importantDates } from "../../constant/CalendarInfo"
export default function CalendrierPage() {
  return (
    <DashboardLayout>
        <div className=" h-screen">
            <div>
                <h1 className="text-lg section-title">Date important à venir</h1>
            </div>
            <div className="flex flex-row gap-4 mt-16">
                {importantDates.map((item, index) => (
                    <ImportantDateContainer key={"k" + index} date={item}/>)
                )}
            </div>
        </div>
    </DashboardLayout>
  )
}
