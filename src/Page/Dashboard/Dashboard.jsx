import React from "react";
import { ClubOverview, ImportantEventContainer, ListItemPic, FaqItem } from "../../component";
import { clubs, sameInterestUsers } from "../../constant/clubInfo";
import { faqList } from "../../constant/faq";
import { Divider } from 'antd';
import './Dashboard.css';
import DashboardLayout from "../../Layout/DashboardLayout";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div>
        <h1 className="text-4xl section-title mb-8">Événements Marquants</h1>
        <ImportantEventContainer className="" />
      </div>

      <div className="pt-8 mt-24">
        <h1 className="text-4xl section-title mb-16">Clubs qui pourraient vous intéresser</h1>
        <div className="flex flex-wrap gap-8 md:flex-wrap justify-center items-center">
          {clubs.map((item, index) => (
            <ClubOverview item={item} key={index} />
          ))}
        </div>
      </div>

      <div className="pt-8 mt-24">
        <h1 className="text-4xl section-title mb-8">Personnes ayant les mêmes centres d'intérêt que vous</h1>
        <div className="flex flex-row gap-16 mt-16 justify-center items-center">
          {sameInterestUsers.map((item, index) => (
            <ListItemPic item={item} type={"large"} key={index} />
          ))}
        </div>
      </div>

      <div className="pt-8 mt-24 border-t border-slate-700 mb-24">
        <h1 className="text-4xl section-title mb-4">Questions les plus posées par les novices</h1>
        {faqList.map((item) => (
          <React.Fragment key={item.id}>
            <FaqItem item={item} />
            <Divider />
          </React.Fragment>
        ))}
      </div>
    </DashboardLayout>
  );
}
