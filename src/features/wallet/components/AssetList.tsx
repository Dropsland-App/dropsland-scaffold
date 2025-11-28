import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { CreditCard } from "lucide-react";
import { Balance } from "@/util/wallet";

interface AssetListProps {
  balances: Balance[];
}

const isCreditAsset = (
  balance: Balance,
): balance is Balance & { asset_code: string; asset_issuer: string } => {
  return (
    balance.asset_type !== "native" &&
    balance.asset_type !== "liquidity_pool_shares" &&
    "asset_code" in balance &&
    "asset_issuer" in balance
  );
};

export const AssetList = ({ balances }: AssetListProps) => {
  const creditBalances = balances.filter(isCreditAsset);

  const formatAddress = (addr: string) =>
    `${addr.slice(0, 4)}...${addr.slice(-4)}`;

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-white flex items-center gap-2">
        <CreditCard className="w-5 h-5 text-primary" /> Assets
      </h3>

      <div className="rounded-2xl border border-white/5 bg-white/5 backdrop-blur-md overflow-hidden">
        {creditBalances.length === 0 ? (
          <div className="p-8 text-center">
            <p className="text-muted-foreground">
              No assets found. Start your collection by supporting an artist!
            </p>
            <Button
              variant="link"
              className="text-primary mt-2"
              onClick={() => (window.location.href = "/explore")}
            >
              Explore Marketplace
            </Button>
          </div>
        ) : (
          <div className="divide-y divide-white/5">
            {creditBalances.map((balance) => (
              <div
                key={`${balance.asset_code}-${balance.asset_issuer}`}
                className="group flex items-center justify-between p-4 hover:bg-white/5 transition-colors cursor-default"
              >
                <div className="flex items-center gap-4">
                  <Avatar className="h-10 w-10 border border-white/10 bg-white/5">
                    <AvatarImage
                      src={`https://api.dicebear.com/7.x/shapes/svg?seed=${balance.asset_code}`}
                      className="object-cover"
                    />
                    <AvatarFallback className="text-xs font-bold bg-primary/10 text-primary">
                      {balance.asset_code[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-bold text-white group-hover:text-primary transition-colors">
                      {balance.asset_code}
                    </p>
                    <p className="text-xs text-muted-foreground font-mono">
                      Issuer: {formatAddress(balance.asset_issuer)}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-mono font-medium text-white">
                    {balance.balance}
                  </p>
                  <p className="text-xs text-muted-foreground">Tokens</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
