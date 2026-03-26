import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Circle, ArrowLeft } from "lucide-react";

const lessons = [
  { title: "Introduction to HTML", done: true },
  { title: "HTML Elements & Tags", done: true },
  { title: "CSS Basics", done: true },
  { title: "Flexbox Layout", done: false },
  { title: "CSS Grid", done: false },
  { title: "Responsive Design", done: false },
];

const ProgressTracking = () => {
  const navigate = useNavigate();
  const completed = lessons.filter((l) => l.done).length;
  const pct = Math.round((completed / lessons.length) * 100);

  return (
    <div className="min-h-screen px-6 py-12 bg-background">
      <div className="max-w-sm mx-auto w-full animate-fade-in space-y-6">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-muted-foreground text-sm font-body hover:text-foreground transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back
        </button>

        <h1 className="text-2xl">Your Progress</h1>

        {/* Circle progress */}
        <div className="flex justify-center">
          <div className="relative w-36 h-36">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="50" fill="none" stroke="hsl(var(--muted))" strokeWidth="10" />
              <circle
                cx="60" cy="60" r="50" fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="10"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 50}`}
                strokeDashoffset={`${2 * Math.PI * 50 * (1 - pct / 100)}`}
                className="transition-all duration-700"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-heading font-bold text-3xl text-foreground">{pct}%</span>
            </div>
          </div>
        </div>

        {/* Checklist */}
        <div className="bg-card rounded-lg p-5 shadow-card border border-border space-y-3">
          {lessons.map((lesson, i) => (
            <div key={i} className="flex items-center gap-3">
              {lesson.done ? (
                <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
              ) : (
                <Circle className="w-5 h-5 text-muted-foreground shrink-0" />
              )}
              <span className={`font-body text-sm ${lesson.done ? "text-foreground" : "text-muted-foreground"}`}>
                {lesson.title}
              </span>
            </div>
          ))}
        </div>

        <Button size="full" onClick={() => navigate("/dashboard")}>
          Continue
        </Button>
      </div>
    </div>
  );
};

export default ProgressTracking;
