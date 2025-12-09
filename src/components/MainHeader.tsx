import React from "react";
import HeaderLogo from "./HeaderLogo";
import ProfileTypeSelector from "./ProfileTypeSelector";
import { WalletButton } from "./WalletButton";

const MainHeader: React.FC = () => {
  return (
    <header className="sticky top-0 z-30 border-b border-border/40 bg-background/80 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <HeaderLogo />
          <div className="hidden h-6 w-px bg-border/40 sm:block" />
          <ProfileTypeSelector />
        </div>

        <div className="flex items-center gap-3">
          <WalletButton />
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
