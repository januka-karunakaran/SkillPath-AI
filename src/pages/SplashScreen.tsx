import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const SplashScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-br from-primary via-primary/80 to-secondary relative overflow-hidden">
      <div className="absolute top-[-80px] right-[-80px] w-64 h-64 rounded-full bg-primary-foreground/10" />
      <div className="absolute bottom-[-60px] left-[-60px] w-48 h-48 rounded-full bg-primary-foreground/10" />

      <div className="flex flex-col items-center gap-8 animate-fade-in z-10">
        <div className="w-28 h-28 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center shadow-card">
          <img src={logo} alt="SkillPath AI" width={80} height={80} className="w-20 h-20" />
        </div>

        <div className="text-center space-y-3">
          <h1 className="text-4xl text-primary-foreground tracking-tight">SkillPath AI</h1>
          <p className="text-primary-foreground/80 text-lg font-body">
            Find your perfect learning path
          </p>
        </div>

        <Button variant="hero" size="lg" className="mt-6" onClick={() => navigate("/login")}>
          Get Started 🚀
        </Button>
      </div>
    </div>
  );
};

export default SplashScreen;
