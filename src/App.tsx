import { Button, Icon, Layout } from "@stellar/design-system";
import "./App.module.css";
import ConnectAccount from "./components/ConnectAccount.tsx";
import BottomNav from "./components/BottomNav.tsx";
import ProfileTypeSelector from "./components/ProfileTypeSelector.tsx";
import HeaderLogo from "./components/HeaderLogo.tsx";
import { Routes, Route, Outlet, NavLink } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Debugger from "./pages/Debugger.tsx";
import Explore from "./pages/Explore.tsx";
import Wallet from "./pages/Wallet.tsx";
import Activity from "./pages/Activity.tsx";
import Profile from "./pages/Profile.tsx";

const AppLayout: React.FC = () => (
  <main>
    <Layout.Header
      projectId="dropsland"
      contentCenter={
        <div className="header-center">
          <HeaderLogo />
          <div className="header-divider-vertical" />
          <ProfileTypeSelector />
        </div>
      }
      contentRight={
        <div className="header-content-right">
          <div className="header-divider-vertical" />

          <ConnectAccount />
          <nav className="header-nav header-nav-developer">
            <NavLink
              to="/debug"
              style={{
                textDecoration: "none",
              }}
            >
              {({ isActive }) => (
                <Button
                  variant="tertiary"
                  size="sm"
                  onClick={() => (window.location.href = "/debug")}
                  disabled={isActive}
                >
                  <Icon.Code02 size="md" />
                  Debugger
                </Button>
              )}
            </NavLink>
          </nav>
        </div>
      }
    />
    <Outlet />
    <Layout.Footer></Layout.Footer>
    <BottomNav />
  </main>
);

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/scaffold" element={<Home />} />
        <Route path="/debug" element={<Debugger />} />
        <Route path="/debug/:contractName" element={<Debugger />} />
      </Route>
    </Routes>
  );
}

export default App;
