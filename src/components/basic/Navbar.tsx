import { BellRing, HelpCircle, LogOut, Moon, Sun, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { useTheme } from "../theme-provider";
import { SidebarTrigger } from "../ui/sidebar";
import Greetings from "./Greetings";
import { role } from "../../lib/constants";
import { TALENT_ROUTES } from "../../lib/routes/TalentRoutes";
import { EMPLOYER_ROUTES } from "../../lib/routes/EmployerRoutes";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { setTheme } = useTheme();

  const DashboardLink =
    role === "talent" ? TALENT_ROUTES.DASHBOARD : EMPLOYER_ROUTES.DASHBOARD;

  return (
    <nav className="p-4">
      {/* Top row */}
      <div className="flex items-center justify-between">
        {/* Left side (Logo + SidebarTrigger on mobile) */}
        <div className="flex items-center gap-2 sm:hidden">
          <Link to={DashboardLink}>
            <img src="/nilavu.png" alt="logo" width={25} height={25} />
          </Link>
          <SidebarTrigger />
        </div>

        {/* Greetings on desktop */}
        <div className="hidden sm:flex items-center gap-2">
          <Greetings />
        </div>

        {/* Right side controls */}
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <BellRing />
          <HelpCircle />
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage src="https://github.com/rafipopz98.png" />
                <AvatarFallback>MR</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent sideOffset={10} align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="h-[1.2rem] w-[1.2rem] mr-2" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem variant="destructive">
                <LogOut className="h-[1.2rem] w-[1.2rem] mr-2" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Mobile-only greeting below the top bar */}
      <div className="mt-2 sm:hidden">
        <Greetings />
      </div>
    </nav>
  );
};

export default Navbar;

// planning to have navbar like this
// collapse button                                           theme.   notification.   help.   will do stuff later
//    |                                                        |           |           |            |
//  {icon}                                                   {icon}      {icon}      {icon}     {user_logo}
