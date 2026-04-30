import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock, Star } from "lucide-react";
import AppHeader from "@/components/AppHeader";

const steps = [
  { step: 1, title: "HTML & CSS Fundamentals", duration: "4 weeks", rating: 4.8, difficulty: "Beginner" },
  { step: 2, title: "JavaScript Essentials", duration: "6 weeks", rating: 4.9, difficulty: "Intermediate" },
  { step: 3, title: "React & Modern Frameworks", duration: "8 weeks", rating: 4.7, difficulty: "Advanced" },
];

const AIRecommendation = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen px-6 py-6 bg-background">
      <div className="max-w-sm mx-auto w-full">
        <AppHeader />
        <div className="animate-fade-in space-y-6 mt-4">
          <div className="space-y-2">
            <h1 className="text-2xl">Your Learning Path</h1>
            <p className="text-muted-foreground font-body text-sm">Based on your goal + level</p>
          </div>

          <div className="relative">
            <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-primary/20" />
            <div className="space-y-4">
              {steps.map((s, i) => (
                <div key={s.step} className="relative flex gap-4">
                  <div className="relative z-10 mt-5 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold text-sm shrink-0 shadow-soft">
                    {s.step}
                  </div>
                  <div className="flex-1 bg-card rounded-lg p-5 shadow-card border border-border space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold font-heading bg-accent text-accent-foreground px-3 py-1 rounded-pill">{s.difficulty}</span>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Star className="w-3.5 h-3.5 fill-primary text-primary" />{s.rating}
                      </div>
                    </div>
                    <h3 className="font-heading font-semibold text-foreground">{s.title}</h3>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="w-3.5 h-3.5" />{s.duration}
                    </div>
                    <Button size="sm" className="w-full" onClick={() => navigate("/course")}>
                      {i === 0 ? "Start" : "Locked"}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Button variant="ghost" className="w-full" onClick={() => navigate("/dashboard")}>Go to Dashboard →</Button>
        </div>
      </div>
    </div>
  );
};

export default AIRecommendation;
