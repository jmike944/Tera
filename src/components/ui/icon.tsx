import { icons, type LucideProps } from "lucide-react";

type IconName = keyof typeof icons;

/* Map kebab-case lucide names (used in the design-system data) to the
   PascalCase icon export from lucide-react. */
function toPascal(name: string): IconName {
  return name
    .split("-")
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join("") as IconName;
}

export function Icon({
  name,
  size = 20,
  className,
  ...rest
}: { name: string } & Omit<LucideProps, "ref">) {
  const key = toPascal(name);
  const LucideIcon = icons[key];
  if (!LucideIcon) {
    return null;
  }
  return <LucideIcon size={size} className={className} {...rest} />;
}
