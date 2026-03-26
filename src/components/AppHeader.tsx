import logo from "@/assets/logo.png";

const AppHeader = () => (
  <div className="flex items-center gap-2 py-3">
    <img src={logo} alt="SkillPath AI" width={32} height={32} className="w-8 h-8" />
    <span className="font-heading font-bold text-foreground text-lg">SkillPath AI</span>
  </div>
);

export default AppHeader;
