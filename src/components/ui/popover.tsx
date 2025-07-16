import * as React from "react";

export interface PopoverProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}

export const Popover: React.FC<PopoverProps> = ({ open, onOpenChange, children }) => {
  if (!open) return null;
  return (
    <div style={{ position: "absolute", zIndex: 1000 }}>
      {children}
    </div>
  );
};

// PopoverTrigger: renders its children and calls onClick
export const PopoverTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean }
>(({ asChild, ...props }, ref) => {
  if (asChild) {
    // Render children directly, attach onClick
    return React.cloneElement(
      React.Children.only(props.children) as React.ReactElement,
      {
        ...props,
        ref,
        onClick: (e: any) => {
          props.onClick?.(e);
        },
      }
    );
  }
  return (
    <button ref={ref} {...props} onClick={props.onClick} />
  );
});
PopoverTrigger.displayName = "PopoverTrigger";

// PopoverContent: renders a styled div for the popover content
export const PopoverContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={className}
    style={{ background: "white", border: "1px solid #ccc", borderRadius: 4, boxShadow: "0 2px 8px rgba(0,0,0,0.15)", padding: 8, marginTop: 4 }}
    {...props}
  />
));
PopoverContent.displayName = "PopoverContent"; 