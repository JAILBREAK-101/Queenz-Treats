import * as React from "react";
import { cn } from "../../../views/app/lib/utils";

// Sidebar root component
const Sidebar = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  return (
    <>
      {isOpen && <SidebarOverlay onClick={onClose} />}
      <div
        className={cn(
          "fixed inset-y-0 right-0 z-50 transform transition-transform duration-300",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full w-64 bg-white dark:bg-neutral-950 shadow-lg">
          {children}
        </div>
      </div>
    </>
  );
};

// Sidebar trigger component
const SidebarTrigger = ({ onClick, children }: { onClick: () => void; children: React.ReactNode }) => (
  <button onClick={onClick} className="fixed top-4 right-4 z-10 p-2 bg-gray-800 text-white rounded-md">
    {children}
  </button>
);

// Sidebar overlay component
const SidebarOverlay = ({ onClick }: { onClick: () => void }) => (
  <div
    className="fixed inset-0 z-40 bg-black opacity-50"
    onClick={onClick}
  />
);

// Sidebar content components
const SidebarContent = ({ children }: { children: React.ReactNode }) => (
  <div className="p-4">{children}</div>
);

const SidebarHeader = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <div className={cn("p-4 border-b border-neutral-200 dark:border-neutral-800", className)}>
    {children}
  </div>
);

const SidebarFooter = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <div className={cn("mt-auto p-4 border-t border-neutral-200 dark:border-neutral-800", className)}>
    {children}
  </div>
);

export { Sidebar, SidebarTrigger, SidebarOverlay, SidebarContent, SidebarHeader, SidebarFooter };
