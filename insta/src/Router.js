import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProfileTagged, ProfileSaved, ProfileIndex, TopNav } from "./components/organisms";
import { Login, Signup, Main, Profile, Landing, Setting, Direct, Explore } from "./components/pages";
import {
  Contract,
  Edit,
  Emails,
  EmailsSent,
  Help,
  LoginActivity,
  ManageAccess,
  Password,
  Privacy,
  Push,
  Actived,
  Expired,
  Deleted,
  Security,
  ETC,
  PAHelp,
  Request,
  HelpMenu,
  RequestMenu,
  Declaration,
  Violation,
} from "../src/components/organisms/setting";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route path="/" element={<TopNav />}>
          <Route path="main" element={<Main />} />
          <Route path="direct" element={<Direct />} />
          <Route path="explore" element={<Explore />} />

          <Route path="profile" element={<Profile />}>
            <Route path="index" element={<ProfileIndex />} />
            <Route path="saved" element={<ProfileSaved />} />
            <Route path="tagged" element={<ProfileTagged />} />
          </Route>

          <Route path="setting" element={<Setting />}>
            <Route path="edit" element={<Edit />} />
            <Route path="password" element={<Password />} />

            <Route path="manageAccess" element={<ManageAccess />}>
              <Route index element={<Actived />} />
              <Route path="expired" element={<Expired />} />
              <Route path="deleted" element={<Deleted />} />
            </Route>
            <Route path="emails" element={<Emails />} />
            <Route path="push" element={<Push />} />
            <Route path="contract" element={<Contract />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="loginActivity" element={<LoginActivity />} />
            <Route path="emailsSent" element={<EmailsSent />}>
              <Route index element={<Security />} />
              <Route path="etc" element={<ETC />} />
            </Route>
            <Route path="help" element={<Help />}>
              <Route index element={<HelpMenu />} />
              <Route path="pahelp" element={<PAHelp />} />
              <Route path="request" element={<Request />}>
                <Route index element={<RequestMenu />} />
                <Route path="declaration" element={<Declaration />} />
                <Route path="violation" element={<Violation />} />
              </Route>
            </Route>
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
