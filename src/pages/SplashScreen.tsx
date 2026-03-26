import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const SplashScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-br from-primary via-primary/80 to-secondary relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-[-80px] right-[-80px] w-64 h-64 rounded-full bg-primary-foreground/10" />
      <div className="absolute bottom-[-60px] left-[-60px] w-48 h-48 rounded-full bg-primary-foreground/10" />

      <div className="flex flex-col items-center gap-8 animate-fade-in z-10">
        {/* Logo */}
        <div className="w-24 h-24 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center shadow-card">
          <Sparkles className="w-12 h-12 text-primary-foreground" />
        </div>

        {/* Title */}
        <div className="text-center space-y-3">
          <h1 className="text-4xl text-primary-foreground tracking-tight">SkillPath AI</h1>
          <p className="text-primary-foreground/80 text-lg font-body">
            Find your perfect learning path
          </p>
        </div>

        {/* CTA */}
        <Button
          variant="hero"
          size="lg"
          className="mt-6"
          onClick={() => navigate("/login")}
        >
          Get Started 🚀
        </Button>
      </div>
    </div>
  );
};

export default SplashScreen;
