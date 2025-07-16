import * as React from "react";

export interface CommandProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Command = React.forwardRef<HTMLDivElement, CommandProps>(
  ({ children, ...props }, ref) => (
    <div ref={ref} tabIndex={0} {...props}>
      {children}
    </div>
  )
);
Command.displayName = "Command";

export const CommandEmpty: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => (
  <div {...props}>{children}</div>
);
CommandEmpty.displayName = "CommandEmpty";

export const CommandGroup: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => (
  <div {...props}>{children}</div>
);
CommandGroup.displayName = "CommandGroup";

export const CommandInput = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  (props, ref) => <input ref={ref} {...props} />
);
CommandInput.displayName = "CommandInput";

interface CommandItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  onSelect?: () => void;
}

export const CommandItem: React.FC<CommandItemProps> = ({ children, onSelect, ...props }) => {
  const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
    onSelect?.();
    props.onClick?.(e);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLLIElement>) => {
    if (onSelect && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      onSelect();
    }
    props.onKeyDown?.(e);
  };
  return (
    <li tabIndex={0} {...props} onClick={handleClick} onKeyDown={handleKeyDown} style={{ cursor: "pointer", ...props.style }}>
      {children}
    </li>
  );
};
CommandItem.displayName = "CommandItem";

export const CommandList: React.FC<React.HTMLAttributes<HTMLUListElement>> = ({ children, ...props }) => (
  <ul {...props}>{children}</ul>
);
CommandList.displayName = "CommandList";
