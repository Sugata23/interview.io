import { useAuth } from "@clerk/clerk-react"
import { Container } from "./container";
import { cn } from "@/lib/utils";
import { NavLink } from "react-router";

import { LogoContainer } from "./logoContainer";
import { NavigationRoutes } from "./navigationRoutes";
import { ProfileContainer } from "./profileContainer";
import { ToggleContainer } from "./toggleContainer";

const Header = () => {
  const { userId } = useAuth();

  return (
    <header className={cn("w-full border-b duration-150 transition-all ease-in-out")}>
      <Container>
        <div className="flex items-center w-full gap-4">
          {/* logo section */}
          <LogoContainer />

          {/* navigation routes */}
          <nav className="hidden md:flex items-center gap-3">
            <NavigationRoutes />
            {userId && (
              <NavLink
                to={"/generate"}
                className={({ isActive }) =>
                  cn(
                    "text-base text-neutral-600",
                    isActive && "text-neutral-900 font-semibold"
                  )
                }
              >
                Take An Interview
              </NavLink>
            )}
          </nav>

          <div className="ml-auto flex items-center gap-6">
            {/* profile section */}
            <ProfileContainer />

            {/* mobile toggle section */}
            <ToggleContainer />
          </div>

        </div>
      </Container>
    </header>
  );
}

export default Header