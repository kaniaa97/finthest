import { Route, Routes } from "react-router-dom";
import { BottomNavBar, Layout } from "@/components/templates";
import {
  ArticlePage,
  CsvPage,
  DashboardPage,
  ForgotPasswordPage,
  ForgotPasswordRequestPage,
  LoginPage,
  ProfilePage,
  QuestionPage,
  RegisterPage,
  ShowFeaturesPage,
  StartingPage,
  PengeluaranPage,
  StatisticPage,
  TermsConditionsPage,
  UpdateProfilePage,
} from "@/pages";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/start" element={<StartingPage />} /> 
        <Route path="/what-features" element={<ShowFeaturesPage />} />  
        <Route path="/articles" element={<ArticlePage />} /> 
        <Route path="/register" element={<RegisterPage />} /> 
        <Route path="/login" element={<LoginPage />} />  
        <Route path="/forgot-password-request" element={<ForgotPasswordRequestPage />} />  
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />  
        <Route path="/terms-conditions" element={<TermsConditionsPage />} />  
        <Route path="/question" element={<QuestionPage />} />    
        <Route  element={<BottomNavBar />}> 
          <Route path="/dashboard" element={<DashboardPage />} /> 
          <Route path="/statistic" element={<StatisticPage />} /> 
          <Route path="/statistic/pengaturan" element={<CsvPage />} /> 
          <Route path="/pengeluaran" element={<PengeluaranPage />} /> 
          <Route path="/profile" element={<ProfilePage />} /> 
          <Route path="/update-profile" element={<UpdateProfilePage />} />
        </Route>
      </Route>
    </Routes>
  );
}
