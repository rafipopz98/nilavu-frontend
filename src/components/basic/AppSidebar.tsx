import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  useSidebar,
} from "../ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  User2,
  ChevronUp,
  ArrowRightToLine,
  ArrowLeftToLine,
} from "lucide-react";
import { Link } from "react-router-dom";
import { TalentSidebar } from "../../lib/sidebarItems/TalentSidebarConst";
import { EmployerSidebar } from "../../lib/sidebarItems/EmployerSidebarConst";
import { cn } from "../../lib/utils";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { role } from "../../lib/constants";
import { TALENT_ROUTES } from "../../lib/routes/TalentRoutes";
import { EMPLOYER_ROUTES } from "../../lib/routes/EmployerRoutes";

const AppSidebar = () => {
  // const { role } = useRole();
  const { state, toggleSidebar } = useSidebar();
  const sidebarItems = role === "talent" ? TalentSidebar : EmployerSidebar;
  const DashboardLink =
    role === "talent" ? TALENT_ROUTES.DASHBOARD : EMPLOYER_ROUTES.DASHBOARD;

  return (
    <Sidebar collapsible="icon">
      {/* Header */}

      <SidebarHeader className="py-4">
        <div
          className={cn(
            "flex w-full items-center",
            state === "collapsed" ? "flex-col gap-2" : "justify-between"
          )}
        >
          {/* Logo */}
          <SidebarMenu>
            <SidebarMenuItem>
              <Link to={DashboardLink} className="flex items-center gap-2">
                <img
                  src="/logo.svg"
                  alt="logo"
                  className={cn("mix-blend-exclusion data:mix-blend-screen ease-in-out w-8 h-8")}
                />
                {state === "expanded" && <span>Nilavu</span>}
              </Link>
            </SidebarMenuItem>
          </SidebarMenu>
          {/* Toggle Button */}
          <button
            onClick={toggleSidebar}
            className={cn(
              "rounded-full p-2 transition-colors",
              "bg-muted hover:bg-muted/80",
              "text-muted-foreground hover:text-foreground",
              "border border-border"
            )}
          >
            {state === "collapsed" ? (
              <ArrowRightToLine className="size-4" />
            ) : (
              <ArrowLeftToLine className="size-4" />
            )}
            <span className="sr-only">Toggle Sidebar</span>
          </button>
        </div>
      </SidebarHeader>
      {/* Dynamic Sidebar Content */}
      <SidebarContent>
        {sidebarItems.map((group) => (
          <SidebarGroup key={group.label} className="-mt-4">
            <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
            <SidebarGroupContent className="">
              <SidebarMenu>
                {group.items.map((item, key) => (
                  <Tooltip delayDuration={100} key={key}>
                    <TooltipTrigger asChild>
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild>
                          <Link to={item.url}>
                            <item.icon />
                            <span>{item.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </TooltipTrigger>
                    {state === "collapsed" && (
                      <TooltipContent side="right" className="ml-2">
                        {item.title}
                      </TooltipContent>
                    )}
                  </Tooltip>
                ))}
              </SidebarMenu>
              <SidebarSeparator className="mx-auto my-2" />
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 /> John Doe <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Account</DropdownMenuItem>
                <DropdownMenuItem>Setting</DropdownMenuItem>
                <DropdownMenuItem>Sign out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
