import React, { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

interface DialogContentProps {
  dialogContent: {
    title: string;
    description?: ReactNode;
  };
}

function GhostHelper({ dialogContent }: DialogContentProps) {
  return (
    <Dialog>
      <DialogTrigger asChild aria-label={"Get Hint"}>
        <button className={"ghost-helper"}>
          <div className="ghost-background"></div>
          <div id="ghost-container">
            <div id="spooky">
              <div id="body">
                <div id="eyes"></div>
                <div id="mouth"></div>
                <div id="feet">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
            <div id="shadow"></div>
          </div>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white">
        <DialogHeader>
          <DialogTitle>{dialogContent.title}</DialogTitle>
          <>{dialogContent.description}</>
        </DialogHeader>
        <DialogFooter>
          <DialogClose
            className={
              "bg-black text-white w-full p-2 text-center rounded block"
            }
            type="submit"
          >
            Ok
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default GhostHelper;
