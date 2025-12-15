import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import Enquiry from "@/pages/Enquiry";
import AboutUs from "@/pages/AboutUs";
import Certificates from "@/pages/Certificates";
import Reach from "@/pages/Reach";
import Products from "@/pages/Products";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about-us" component={AboutUs} />
      <Route path="/certificates" component={Certificates} />
      <Route path="/reach" component={Reach} />
      <Route path="/products" component={Products} />
      <Route path="/enquiry" component={Enquiry} />
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
