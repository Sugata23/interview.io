import { BrowserRouter as Router, Routes, Route } from "react-router"

import PublicLayout from "@/layouts/public-layout"
import AuthenticationLayout from "@/layouts/auth-layout"
import ProtectRoutes from "@/layouts/protected-routes"
import { MainLayout } from "@/layouts/main-layout"

import HomePage from "@/routes/homePage"  
import { SignInPage } from "./routes/sign-in"
import { SignUpPage } from "./routes/sign-up"
import { Generate } from "./components/generate"
import { Dashboard } from "./routes/dashboard"
import { CreateEditPage } from "./routes/createEditPage"

const App = () => {
  return (
    <Router>
      <Routes>
        {/* public route */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<HomePage />} />
        </Route>

        {/* auth route */}
        <Route path="/" element={<AuthenticationLayout />}>
          <Route path="/signin/*" element={<SignInPage />} />
          <Route path="/signup/*" element={<SignUpPage />} />
        </Route>

        {/* protected route */}
        <Route
          element={
            <ProtectRoutes>
              <MainLayout />
            </ProtectRoutes>
          }
        >
          {/* all protect routes */}
          <Route element={<Generate />} path="/generate">
            <Route index element={<Dashboard />} />
            <Route path=":interviewId" element={<CreateEditPage />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default App