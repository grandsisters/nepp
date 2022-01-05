import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProfileTagged, ProfileSaved, ProfileIndex, TopNav } from "./components/organisms";
import { Login, Signup, Main, Profile, Landing, Setting, Direct, Explore } from "./components/pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/" element={<TopNav />}>
          <Route path="main" element={<Main />} />
          <Route path="setting" element={<Setting />} />
          <Route path="direct" element={<Direct />} />
          <Route path="explore" element={<Explore />} />
          <Route path="profile" element={<Profile />}>
            <Route path="index" element={<ProfileIndex />} />
            <Route path="saved" element={<ProfileSaved />} />
            <Route path="tagged" element={<ProfileTagged />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
