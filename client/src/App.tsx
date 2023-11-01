import { Footer, Navbar } from "./components";
import { Home, Login, Register } from "./pages";
import { Route, Routes } from "react-router-dom";
import { PUBLIC_ROUTES } from "./models/routes";
import ApartmentDetail from "./pages/Apartments/Apartments";
import './i18n';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={PUBLIC_ROUTES.LOGIN} element={<Login />} />
        <Route path={PUBLIC_ROUTES.REGISTER} element={<Register />} />
        <Route path={PUBLIC_ROUTES.HOME} element={<Home />} />
        <Route path={`${PUBLIC_ROUTES.APARMENTS}/:id`} element={<ApartmentDetail />} />
      </Routes>
      <Footer />
    </>
  )
}
export default App
