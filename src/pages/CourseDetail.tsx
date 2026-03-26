import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock, BarChart3, ArrowLeft } from "lucide-react";
import AppHeader from "@/components/AppHeader";

const CourseDetail = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="h-48 bg-gradient-to-br from-primary to-secondary relative">
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center">
            <ArrowLeft className="w-5 h-5 text-primary-foreground" />
          </button>
        </div>
      </div>

      <div className="px-6 py-6 max-w-sm mx-auto animate-fade-in space-y-5 -mt-6">
        <div className="bg-card rounded-lg p-6 shadow-card border border-border space-y-4">
          <h1 className="text-2xl">HTML & CSS Fundamentals</h1>
          <p className="text-muted-foreground font-body text-sm leading-relaxed">
            Learn the building blocks of web development. Master semantic HTML, modern CSS layouts with Flexbox and Grid, and responsive design techniques.
          </p>
          <div className="flex gap-4">
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground"><Clock className="w-4 h-4" /> 4 weeks</div>
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground"><BarChart3 className="w-4 h-4" /> Beginner</div>
          </div>
          <Button size="full" onClick={() => navigate("/progress")}>Start Course</Button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
