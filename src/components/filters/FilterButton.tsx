import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { FunnelIcon } from "lucide-react";

export default function FilterButton({
  content: Component,
  isFilterActive,
}: any) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="relative flex items-center gap-x-2 justify-between rounded-full border border-border px-5 pr-6 text-sm font-semibold text-se hover:bg-background/70 cursor-pointer h-[2.28rem] w-fit py-1.5 focus:outline-none">
          {isFilterActive && (
            <span className="absolute top-2 left-2 w-2 h-2 rounded-full bg-red-500" />
          )}
          <FunnelIcon className="w-4 h-4 text-foreground" />
          <span className="text-xs md:text-sm lg:text-sm 2xl:text-base text-foreground font-normal">
            Filter
          </span>
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content
        side="bottom"
        align="end"
        sideOffset={8}
        className="z-50 mt-2 w-max p-5 rounded-md bg-primary-foreground shadow-lg ring-1 ring-primary-foreground ring-opacity-5 focus:outline-none"
      >
        <Component />
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
