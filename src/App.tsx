import * as React from 'react'
import { 
  createRouter, 
  RouterProvider, 
  createRootRoute, 
  createRoute as createTanStackRoute, 
  Outlet 
} from '@tanstack/react-router'
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import GameHome from "./pages/GameHome";
import Act1 from "./pages/Act1";
import Act2 from "./pages/Act2";
import Act3 from "./pages/Act3";
import Ending from "./pages/Ending";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Create root route with providers
const rootRoute = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Outlet />
      </TooltipProvider>
    </QueryClientProvider>
  ),
})

// Home route
const homeRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: GameHome,
});

// Act 1 route
const act1Route = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/act1',
  component: Act1,
});

// Act 2 route
const act2Route = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/act2',
  component: Act2,
});

// Act 3 route
const act3Route = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/act3',
  component: Act3,
});

// Ending route
const endingRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/ending',
  component: Ending,
});

// About route
const aboutRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: About,
});

// Contact route
const contactRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: Contact,
});

// NotFound route (catch-all)
const notFoundRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '*',
  component: NotFound,
});

// Create route tree
const routeTree = rootRoute.addChildren([
  homeRoute,
  act1Route,
  act2Route,
  act3Route,
  endingRoute,
  aboutRoute,
  contactRoute,
  notFoundRoute
])

// Create router
const router = createRouter({ 
  routeTree,
  defaultPreload: 'intent' as const,
  defaultPreloadStaleTime: 0,
})

// Register for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const App = () => <RouterProvider router={router} />

export default App;