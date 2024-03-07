import DashboardLayout from "../../Layout/DashboardLayout"
import { ImportantDateContainer, CalendarComponent } from "../../component"
import { importantDates } from "../../constant/CalendarInfo";


const eventData = {
    '2024-04-03': [
      { type: 'info', content: "Début des examens (1ère session)" },
    ],
    '2024-04-17': [
      { type: 'info', content: "Début de séances de rattrapage (1ère session)" },
    ],
    '2024-04-22': [
      { type: 'info', content: "Début des cours théoriques séances pairs" },
    ],
    '2024-07-17': [
      { type: 'info', content: "Début des examens (2ème session)" },
    ],
  };


export default function CalendrierPage() {
  return (
    <DashboardLayout>
        <div className="">
            <div>
                <h1 className="text-lg section-title">Date important à venir</h1>
            </div>
            <div className="flex flex-row gap-4 mt-16">
                {importantDates.map((item, index) => (
                    <ImportantDateContainer key={"k" + index} date={item}/>)
                )}
            </div>

            <div className="mt-16">
                <h1 className="text-lg section-title ">Calendrier Pédagogique</h1>
            </div>
            <div className="flex flex-row gap-4 mt-16">
                <CalendarComponent eventData={eventData} />;
            </div>
        </div>
    </DashboardLayout>
  )
}
