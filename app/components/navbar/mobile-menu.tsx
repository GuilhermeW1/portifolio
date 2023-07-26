import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Link } from "@remix-run/react";

type ModalMenuProps = {
  isDark: boolean;
}

export default function MobileMenu({isDark}: ModalMenuProps){
  return(
    <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button aria-label="open menu" className="p-[11px] border border-black dark:border-white rounded block md:hidden">
              <HamburgerMenuIcon color={isDark ? "white" : "black"} className="w-5 h-5"/>
            </button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content 
              sideOffset={5}
              align="end"
              className="bg-white  p-2 rounded-lg w-48"
            >
              <DropdownMenu.Item className=" p-2">
                <Link 
                  to="/works" 
                    className="dark:text-black" 
                  >
                    Works
                  </Link>
              </DropdownMenu.Item>

              <DropdownMenu.Item className="p-2">
                <Link 
                  to="/about" 
                  className=" dark:text-black"
                >
                  About
                </Link>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
  );
}