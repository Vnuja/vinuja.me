import { cn } from "../../lib/cn";

export default function Button({ as:Tag="button", variant="primary", className="", ...props }) {
  const base = "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium transition focus:outline-none focus-visible:ring";
  const styles = {
    primary: "bg-black text-white hover:opacity-90 focus-visible:ring-black/30",
    ghost: "bg-transparent hover:bg-black/5",
    soft: "bg-black/5 hover:bg-black/10",
  };
  return <Tag className={cn(base, styles[variant], className)} {...props} />;
}
