import React from "react";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "../ui/menubar";
import Link from "next/link";
import { Button } from "../ui/button";
import { User, UserRound } from "lucide-react";
import { cn } from "@/shared/lib/utils";
import { signOut, useSession } from "next-auth/react";

interface Props {
  setType: React.Dispatch<
    React.SetStateAction<"login" | "register" | "verification">
  >;
  setOpenAuthModal: React.Dispatch<React.SetStateAction<boolean>>;
  status: "authenticated" | "loading" | "unauthenticated";
}

const HeaderNavigation = ({ setType, setOpenAuthModal, status }: Props) => {
  const { data: session } = useSession();

  return (
    <div className="flex items-center gap-3">
      {!session ? (
        <>
          <Button
            onClick={() => {
              setType("login");
              setOpenAuthModal(true);
            }}
            className={cn("group relative w-full h-8", {
              "w-[105px]": status === "loading",
            })}
            variant={"ghost"}
          >
            Log in
          </Button>
          <Button
            loading={status === "loading"}
            className={cn("group relative w-full text-start h-8", {
              "w-[105px]": status === "loading",
            })}
            onClick={() => {
              setType("register");
              setOpenAuthModal(true);
            }}
            variant={"ghost"}
          >
            Sign up
          </Button>
        </>
      ) : (
        <Button
          loading={status === "loading"}
          className={cn("group relative w-full text-start h-8", {
            "w-[105px]": status === "loading",
          })}
          onClick={() => signOut()}
          variant={"ghost"}
        >
          Log out
        </Button>
      )}
      <Link href={"/profile"}>
        <User />
      </Link>
    </div>
  );
};

export default HeaderNavigation;
