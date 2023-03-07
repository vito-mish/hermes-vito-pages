import { Route, Routes } from "react-router-dom"
import { CompanyPrivacyPolicyPage } from "./pages/CompanyPrivacyPolicy"
import { HomePage } from "./pages/Home"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/privacy-policy" element={<CompanyPrivacyPolicyPage />} />
    </Routes>
  )
}

export default App
