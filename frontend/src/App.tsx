import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import SplashScreen from "./pages/SplashScreen";
import LoginScreen from "./pages/LoginScreen";
import GoalSelection from "./pages/GoalSelection";
import SkillLevel from "./pages/SkillLevel";
import AIRecommendation from "./pages/AIRecommendation";
import Dashboard from "./pages/Dashboard";
import CourseDetail from "./pages/CourseDetail";
import ProgressTracking from "./pages/ProgressTracking";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/goals" element={<GoalSelection />} />
          <Route path="/level" element={<SkillLevel />} />
          <Route path="/recommendations" element={<AIRecommendation />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/course" element={<CourseDetail />} />
          <Route path="/progress" element={<ProgressTracking />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
