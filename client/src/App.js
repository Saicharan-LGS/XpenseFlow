import React from "react";
import Home from "./components/Home/Home.js";
import { Route, Routes } from "react-router-dom";
import PrivacyPolicy from "./components/Pages/Privacy/Privacy";
import AboutUs from "./components/Pages/AboutUs";
import Support from "./components/Pages/Support/support";
import Terms from "./components/Pages/TermsAndConditions/Terms";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Verify from "./components/Verify/verify.js";
import Pricing from "./components/Pages/pricing/pricing.js";
import SubscriptionForm from "./SuperAdmin/Subscription/index.js";

import SuperadminSignup from "./SuperAdmin/SuperAdminSignUp/superadminSignup.js";
import SuperadminLogin from "./SuperAdmin/SuperAdminLogin/superadminLogin.js";
import SuperadminVerify from "./SuperAdmin/SuperAdminVerify/superadminVerify.js";
import SubscriptionList from "./SuperAdmin/SubscriptionList/index.js";
import OrganizationForm from "./SuperAdmin/OrganizationRegistration/index.js";
import OrganizationList from "./SuperAdmin/OrganizationList/index.js";
import SuperAdminHome from "./SuperAdmin/SuperAdminHome/SuperAdminHome.js";

import SubscriptionDetailView from "./SuperAdmin/SubscriptionViewDetail/index.js";
import OrganizationViewDetail from "./SuperAdmin/OrganizationViewDetail/index.js";
import SuperForgotPassword from "./SuperAdmin/SuperForgotPassword/SuperForgotPassword.js";
function App() {
  return (
    <Routes>
      <Route path="/superSignup" element={<SuperadminSignup />} />
      <Route path="/superlogin" element={<SuperadminLogin />} />
      <Route path="/superadminverify" element={<SuperadminVerify />} />
      <Route path="/organizationList" element={<OrganizationList />} />
      <Route path="/organizationRegistration" element={<OrganizationForm />} />
      <Route path="/subscriptionlist" element={<SubscriptionList />} />
      <Route path="/superhome" element={<SuperAdminHome />} />
      <Route path="/subscriptionForm" element={<SubscriptionForm />} />
      <Route
        path="/subscriptionViewDetail/:id"
        element={<SubscriptionDetailView />}
      />

      <Route
        path="/organizationViewDetail/658124601449baa84a477458"
        element={<OrganizationViewDetail />}
      />
      <Route path="/super-forgot" element={<SuperForgotPassword />} />

      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/Support" element={<Support />} />
      <Route path="/" element={<Home />} />
      <Route path="/Terms-and-conditions" element={<Terms />} />
      <Route path="/Privacy-Policy" element={<PrivacyPolicy />} />
      <Route exact path="/login" element={<Login />} />
      <Route path="/verify" element={<Verify />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
