import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const levels = ["Beginner", "Intermediate", "Advanced"];

const SkillLevel = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col justify-center px-6 py-12 bg-background">
      <div className="max-w-sm mx-auto w-full animate-fade-in space-y-8">
        <div className="space-y-2">
          <h1 className="text-2xl">Select your current level</h1>
          <p className="text-muted-foreground font-body text-sm">We'll customize your path</p>
        </div>

        <div className="flex flex-col gap-3">
          {levels.map((level) => (
            <Button
              key={level}
              variant={selected === level ? "pill-active" : "pill"}
              size="full"
              onClick={() => setSelected(level)}
            >
              {level}
            </Button>
          ))}
        </div>

        <Button size="full" disabled={!selected} onClick={() => navigate("/recommendations")}>
          Continue
        </Button>
      </div>
    </div>
  );
};

export default SkillLevel;
