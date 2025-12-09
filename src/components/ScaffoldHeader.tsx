import React from "react";
import { NavLink } from "react-router-dom";
import { Code2 } from "lucide-react";
import HeaderLogo from "./HeaderLogo";
import ProfileTypeSelector from "./ProfileTypeSelector";
import ConnectAccount from "./ConnectAccount";
import { Button } from "./ui/button";

const ScaffoldHeader: React.FC = () => {
  return (
    <header className="sticky top-0 z-30 border-b border-border/40 bg-background/80 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center gap-4">
        <div className="flex flex-1 items-center gap-4">
          <HeaderLogo />
          <div className="hidden h-6 w-px bg-border/40 lg:block" />
          <ProfileTypeSelector />
        </div>
        <div className="flex items-center gap-3">
          {/* ConnectAccount includes Wallet, Fund Button, and Network Pill */}
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
  );
};

export default ScaffoldHeader;
