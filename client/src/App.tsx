import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Home from "@/pages/home";
import NotFound from "@/pages/not-found";

import Chairman from "@/pages/Chairman";
import ManagingDirector from "@/pages/ManagingDirector";
import Principal from "@/pages/Principal";
import Mission from "@/pages/Mission/Vision";
import Vision from "@/pages/Vision";
import FeeStructure from "./pages/fee-structure";
import Scholarships from "./pages/scholarships";
import ApplicationForm from "./pages/application-form";
import DeveloperProfile from "./pages/DeveloperProfile";
import Enrollment from "./pages/Enrollment";


function AppRoutes() {   // <-- renamed here
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/chairman" component={Chairman} />
      <Route path="/managing-director" component={ManagingDirector} />
      <Route path="/principal" component={Principal} />
      <Route path="/mission" component={Mission} />
      <Route path="/vision" component={Vision} />
      <Route path="/fee-structure" component={FeeStructure}/>
      <Route path="/scholarships" component={Scholarships}/>
      <Route path="/application-form" component={ApplicationForm}/>
      <Route path="/DeveloperProfile" component={DeveloperProfile}/>
      <Route path="/Enrollment" component={Enrollment}/>
    
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <AppRoutes />   {/* <-- use new name here */}
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
