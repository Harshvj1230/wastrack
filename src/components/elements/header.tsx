import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Flame, Sun, Menu } from "lucide-react";

export default function Header() {
  const [streak, setStreak] = useState(350);
  const [viewSideBar, setViewSideBar] = useState(true);
  const navigate = useNavigate();

  const pages = ["1", "2", "3", "Social"];

  return (
    <div
      className="h-16 px-4 py-4 w-full bg-white flex justify-between bg-opacity-50 items-center content-center fixed top-0 left-0 bg-blur-20"
      style={{ zIndex: 100, backdropFilter: "blur(50px)" }}
    >
      <div className="flex justify-between items-center content-center md:space-x-0 md:ml-4">
        <Link to="/">
          <img
            src={
              "https://raw.githubusercontent.com/ForLoopCodes/wastrack/refs/heads/master/logo.png"
            }
            className="w-12 h-12 mr-4 mt-2 ml-2 rounded-lg bg-white"
            alt={"studium logo"}
          />
        </Link>
      </div>

      <div className="flex justify-between items-center content-center space-x-4 md:space-x-0 md:mr-4">
        <div className="flex items-center content-center space-x-4 w-content">
          <NavigationMenu className="!mr-4">
            <NavigationMenuList>
              <NavigationMenuItem>
                <div className="px-2 text-sm font-semibold text-neutral-500 hover:text-neutral-300 flex justify-center items-center transition-all">
                  <Sun strokeWidth={3} size={18} className="mr-2" />
                  
                </div>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/rewards">
                  <div className="px-2 text-sm font-semibold text-orange-500 hover:text-orange-500 flex justify-center items-center transition-all">
                    <Flame strokeWidth={3} size={18} className="mr-2" />
                    {streak}
                  </div>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <HoverCard>
            <HoverCardTrigger asChild className="text-sm font-bold">
              <Link to="/settings">
                <img
                  alt={`Meet's profile picture`}
                  src={"https://github.com/shadcn.png"}
                  className="w-8 h-8 mr-6 md:mr-0 rounded-lg"
                />
              </Link>
            </HoverCardTrigger>
            <HoverCardContent className="w-40">
              <Button
                variant="link"
                onClick={() => {
                  localStorage.removeItem("token");
                  localStorage.removeItem("userInfo");
                  navigate("/login");
                }}
              >
                Logout
              </Button>
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>
    </div>
  );
}
