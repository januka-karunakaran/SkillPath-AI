import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Monitor, BarChart3, Megaphone } from "lucide-react";
import AppHeader from "@/components/AppHeader";

const goals = [
  { id: "dev", icon: Monitor, label: "Software Developer", desc: "Build apps & systems" },
  { id: "data", icon: BarChart3, label: "Data Analyst", desc: "Work with data" },
  { id: "marketing", icon: Megaphone, label: "Digital Marketer", desc: "Grow brands" },
];

const GoalSelection = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col px-6 py-6 bg-background">
      <AppHeader />
      <div className="flex-1 flex flex-col justify-center max-w-sm mx-auto w-full animate-fade-in space-y-8">
        <div className="space-y-2">
          <h1 className="text-2xl">What do you want to become?</h1>
          <p className="text-muted-foreground font-body text-sm">Choose your career path</p>
        </div>

        <div className="space-y-4">
          {goals.map((goal) => {
            const Icon = goal.icon;
            const isActive = selected === goal.id;
            return (
              <button
                key={goal.id}
                onClick={() => setSelected(goal.id)}
                className={`w-full flex items-center gap-4 p-5 rounded-lg bg-card border-2 transition-all duration-200 shadow-soft text-left ${
                  isActive ? "border-primary shadow-card-hover ring-2 ring-primary/20" : "border-transparent hover:border-primary/30"
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${isActive ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground"}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground">{goal.label}</p>
                  <p className="text-muted-foreground text-sm font-body">{goal.desc}</p>
                </div>
              </button>
            );
          })}
        </div>

        <Button size="full" disabled={!selected} onClick={() => navigate("/level")}>Continue</Button>
      </div>
    </div>
  );
};

export default GoalSelection;
