import logo from "../assets/logo.png";

export function Header() {
  return (
    <header className="flex h-72 w-full justify-center bg-background-header bg-cover bg-center bg-no-repeat p-16">
      <img src={logo} alt="logo" className="h-[98px] w-[148px]" />
    </header>
  );
}
