import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import AboutKrysalis from "@/pages/AboutKrysalis";
import ManagingDirector from "./components/ui/managing-director";
import Principal from "./components/ui/principal";
import Chairman from "./pages/Chairman";
import Navbar from "./pages/Navbar";




function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      
     <Route path="/about-krysalis" component={AboutKrysalis} />
     <Route path="/chairman" component={Chairman} />
<Route path="/managing-director" component={ManagingDirector} />
<Route path="/principal" component={Principal} />


       
      <Route component={NotFound} />
      
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
       
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
