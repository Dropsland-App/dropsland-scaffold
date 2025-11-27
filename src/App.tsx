import { Routes, Route, Outlet } from "react-router-dom";
import MainHeader from "./components/MainHeader.tsx";
import ScaffoldHeader from "./components/ScaffoldHeader.tsx";
import BottomNav from "./components/BottomNav.tsx";
import Home from "./pages/Home.tsx";
import Debugger from "./pages/Debugger.tsx";
import Explore from "./pages/Explore.tsx";
import Wallet from "./pages/Wallet.tsx";
import Activity from "./pages/Activity.tsx";
import Profile from "./pages/Profile.tsx";
import { OnboardingModal } from "./components/OnboardingModal.tsx";

const MainLayout: React.FC = () => (
  <div className="flex min-h-screen flex-col bg-[#030712] text-foreground">
    <OnboardingModal />
    <MainHeader />
    <main className="flex-1 pb-24">
      <Outlet />
    </main>
    <footer className="border-t border-border/40 bg-background/80">
      <div className="container mx-auto flex flex-col gap-2 py-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between px-4">
        <p>© {new Date().getFullYear()} Dropsland. All rights reserved.</p>
        <p className="text-muted-foreground/80">Built on Stellar Soroban.</p>
      </div>
    </footer>
    <BottomNav />
  </div>
);

const DebugLayout: React.FC = () => (
  <div className="flex min-h-screen flex-col bg-[#030712] text-foreground">
    <OnboardingModal />
    <ScaffoldHeader />
    <main className="flex-1 p-4">
      <Outlet />
    </main>
  </div>
);

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/profile" element={<Profile />} />
      </Route>

      <Route path="/debug" element={<DebugLayout />}>
        <Route index element={<Debugger />} />
        <Route path=":contractName" element={<Debugger />} />
      </Route>
    </Routes>
  );
}

export default App;
