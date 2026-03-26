import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail, Lock } from "lucide-react";

const LoginScreen = () => {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="min-h-screen flex flex-col justify-center px-6 py-12 bg-background">
      <div className="max-w-sm mx-auto w-full animate-fade-in space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl">{isSignUp ? "Create Account ✨" : "Welcome Back 👋"}</h1>
          <p className="text-muted-foreground font-body">
            {isSignUp ? "Start your learning journey" : "Continue your learning journey"}
          </p>
        </div>

        <div className="space-y-4">
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="email"
              placeholder="Email address"
              className="w-full h-14 pl-12 pr-4 rounded-pill bg-card border border-border shadow-soft font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="password"
              placeholder="Password"
              className="w-full h-14 pl-12 pr-4 rounded-pill bg-card border border-border shadow-soft font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>

          <Button size="full" onClick={() => navigate("/goals")}>
            {isSignUp ? "Sign Up" : "Login"}
          </Button>
        </div>

        <p className="text-center text-muted-foreground font-body text-sm">
          {isSignUp ? "Already have an account? " : "Don't have an account? "}
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-primary font-semibold hover:underline"
          >
            {isSignUp ? "Login" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginScreen;
