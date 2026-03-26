import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, Trophy } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();
  const progress = 60;

  return (
    <div className="min-h-screen px-6 py-12 bg-background">
      <div className="max-w-sm mx-auto w-full animate-fade-in space-y-6">
        <div>
          <h1 className="text-2xl">Welcome, Kavindu 👋</h1>
          <p className="text-muted-foreground font-body text-sm">Let's keep learning</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { icon: BookOpen, label: "Courses", value: "3" },
            { icon: Clock, label: "Hours", value: "24" },
            { icon: Trophy, label: "Completed", value: "1" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="bg-card rounded-lg p-4 shadow-card border border-border text-center">
              <Icon className="w-5 h-5 text-primary mx-auto mb-1" />
              <p className="font-heading font-bold text-lg text-foreground">{value}</p>
              <p className="text-muted-foreground text-xs font-body">{label}</p>
            </div>
          ))}
        </div>

        {/* Progress */}
        <div className="bg-card rounded-lg p-5 shadow-card border border-border space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-heading font-semibold text-foreground text-sm">Your Progress 📈</span>
            <span className="text-primary font-heading font-bold">{progress}%</span>
          </div>
          <div className="h-3 rounded-pill bg-muted overflow-hidden">
            <div
              className="h-full rounded-pill bg-gradient-to-r from-primary to-secondary transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Current Course */}
        <div className="bg-card rounded-lg p-5 shadow-card border border-border space-y-3">
          <span className="text-xs font-heading font-semibold bg-accent text-accent-foreground px-3 py-1 rounded-pill">
            In Progress
          </span>
          <h3 className="font-heading font-semibold text-foreground">HTML & CSS Fundamentals</h3>
          <p className="text-muted-foreground text-sm font-body">Lesson 4 of 8</p>
          <Button size="full" onClick={() => navigate("/course")}>
            Continue Learning
          </Button>
        </div>

        {/* Nav */}
        <div className="flex gap-3">
          <Button variant="outline" className="flex-1" onClick={() => navigate("/recommendations")}>
            Path
          </Button>
          <Button variant="outline" className="flex-1" onClick={() => navigate("/progress")}>
            Progress
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
