import React from "react";

import How from "./features/how";
import Best from "./features/best";
import Learn from "./features/learn";
import Footer from "../general/footer";
import TopNav from "../general/top-nav";
import Solution from "./features/solution";
import Testimony from "./features/testimony";
import Companies from "../general/companies";
import Integrations from "../general/integrations";
// import TopNav from "../features/top-nav";
// import Companies from "../features/companies";
// import TeamSpeed from "../features/team-speed";
// import Collaborate from "../features/collaborate";
// import Integrations from "../features/integrations";
// import FooterAction from "../features/footer-action";
// import AutomatedTask from "../features/automated-task";
// import TeamActivities from "../features/team-activities";
// import LeadManagement from "../features/lead-management";
// import CustomerSupport from "../features/customer-support";
// import ReportGenerator from "../features/report-generator";

const Enterprise = () => {
  return (
    <>
      <TopNav />
      <Solution />
      <Companies />
      <How />
      <Best />
      <Integrations />
      <Testimony />
      <Learn />
      <Footer />
    </>
  );
};

export default Enterprise;
