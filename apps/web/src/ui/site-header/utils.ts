export type MenuName = "company" | "expertise" | "consultants";

export const menuItems = [
  { id: "company", label: "About us" },
  { id: "expertise", label: "Expertise" },
  { id: "consultants", label: "Consultants" }
] satisfies { id: MenuName; label: string }[];

export function isMenuCurrent(menu: MenuName, pathname: string) {
  if (menu === "consultants") return pathname.startsWith("/consultants");
  if (menu === "expertise") return pathname === "/about-us/our-expertise";
  return (
    pathname.startsWith("/about-us") && pathname !== "/about-us/our-expertise"
  );
}
