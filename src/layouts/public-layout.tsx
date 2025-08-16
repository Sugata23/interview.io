import Footer from "@/components/footer"
import Header from "@/components/header"
import { Outlet } from "react-router"

const PublicLayout = () => {
    return (
        <div className="w-full">
            {/* handler to check if user is logged in or not */}
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default PublicLayout