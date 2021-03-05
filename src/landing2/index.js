import React from "react";

import Footer from "../general/footer";
import TopNav from "../general/top-nav";
import Companies from "../general/companies";
import TeamSpeed from "./features/team-speed";
import Collaborate from "./features/collaborate";
import Integrations from "../general/integrations";
import FooterAction from "./features/footer-action";
import AutomatedTask from "./features/automated-task";
import TeamActivities from "./features/team-activities";
import LeadManagement from "./features/lead-management";
import CustomerSupport from "./features/customer-support";
import ReportGenerator from "./features/report-generator";

const Landing2 = () => {
  return (
    <>
      <TopNav />
      <Collaborate />
      <Companies />
      <TeamActivities />
      <TeamSpeed />
      <AutomatedTask />
      <Integrations />
      <ReportGenerator />
      <LeadManagement />
      <CustomerSupport />
      <FooterAction />
      <Footer />
    </>
  );
};

export default Landing2;
