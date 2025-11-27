import { Routes, Route, Outlet, NavLink } from "react-router-dom";
import { Code2 } from "lucide-react";
import ConnectAccount from "./components/ConnectAccount.tsx";
import BottomNav from "./components/BottomNav.tsx";
import ProfileTypeSelector from "./components/ProfileTypeSelector.tsx";
import HeaderLogo from "./components/HeaderLogo.tsx";
import Home from "./pages/Home.tsx";
import Debugger from "./pages/Debugger.tsx";
import Explore from "./pages/Explore.tsx";
import Wallet from "./pages/Wallet.tsx";
import Activity from "./pages/Activity.tsx";
import Profile from "./pages/Profile.tsx";
import { Button } from "./components/ui/button.tsx";
import { OnboardingModal } from "./components/OnboardingModal.tsx";

const AppLayout: React.FC = () => (
  <div className="flex min-h-screen flex-col bg-[#030712] text-foreground">
    <OnboardingModal />
    <header className="sticky top-0 z-30 border-b border-border/40 bg-background/80 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center gap-4">
        <div className="flex flex-1 items-center gap-4">
          <HeaderLogo />
          <div className="hidden h-6 w-px bg-border/40 lg:block" />
          <ProfileTypeSelector />
        </div>
        <div className="flex items-center gap-3">
          <ConnectAccount />
          <NavLink
            to="/debug"
            className="inline-flex"
            style={{ textDecoration: "none" }}
          >
            {({ isActive }) => (
              <Button
                type="button"
                size="sm"
                variant={isActive ? "default" : "outline"}
                className="gap-2"
              >
                <Code2 className="size-4" />
                Debugger
              </Button>
            )}
          </NavLink>
        </div>
      </div>
    </header>
    <main className="flex-1 pb-24">
      <Outlet />
    </main>
    <footer className="border-t border-border/40 bg-background/80">
      <div className="container mx-auto flex flex-col gap-2 py-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Dropsland. All rights reserved.</p>
        <p className="text-muted-foreground/80">
          Built with Stellar + Tailwind.
        </p>
      </div>
    </footer>
    <BottomNav />
  </div>
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
