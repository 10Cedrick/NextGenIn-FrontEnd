import {  ClubOverview, ImportantEventContainer, ListItemPic, FaqItem} from "../../component"
import { clubs, sameInterestUsers } from "../../constant/clubInfo"
import { faqList } from "../../constant/faq"
import { Divider } from 'antd';
import './Dashboard.css'
import DashboardLayout from "../../Layout/DashboardLayout";
export default function Dashboard() {
  return (
    <DashboardLayout>
        <div>
            <h1 className="text-4xl section-title  ">Evenement Marquant</h1>
            <ImportantEventContainer className=""/>
        </div>
        <div className="pt-8 mt-24 ">
                <h1 className="text-4xl section-title  ">Club qui pourrait vous intéresser</h1>
                <div className="flex flex-row gap-2 mt-16">
                    {clubs.map((item, index) => (
                        <ClubOverview item={item} key={index}/>
                    )
                        )}
                </div>
            </div>
            <div className="pt-8 mt-24 ">
                <h1 className="text-4xl section-title  ">Personne ayant les mêmes centres d'intérêt que vous</h1>
                <div className="flex flex-row gap-16 mt-16 justify-center items-center">
                    {sameInterestUsers.map((item, index) => (
                        <ListItemPic item={item} type={"large"} key={index}/>
                    ))}
                </div>
            </div> 
            <div className="pt-8 mt-24 border-t border-slate-700 mb-24">
                <h1 className="text-4xl section-title  mb-4">Question les plus posés par les novices</h1>
                {faqList.map((item) => (
                    <>
                        <FaqItem key={item.id} item={item}/>
                        <Divider />
                    </>
                ))}
            </div>
    </DashboardLayout>
  )
}
