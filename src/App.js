import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Project from "./pages/Project";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sertificate from "./pages/Sertificate";
import FinanceReport from "./pages/FinanceReport";
import FinDocPdfPage from "./pages/FinDocPdfPage";
import audit2023Pdf from './img/financeDoc/audit2023.pdf'
import audit2019Pdf from './img/financeDoc/audit2019.pdf'
import audit2022Pdf from './img/financeDoc/audit2022.pdf'
import audit2020Pdf from './img/financeDoc/audit2020.pdf'
import report2021Pdf from './img/financeDoc/report2021.pdf'
import report2025Pdf from './img/financeDoc/information01.01.2025.pdf'
import news1 from './img/news/news1.pdf';
import news2 from './img/news/news2.pdf';
import news3 from './img/news/news3.pdf';
import news4 from './img/news/news4.pdf';
import news5 from './img/news/news5.pdf';

// import coruption from './img/coruption/Appened.PDF'
// import coruption2025 from './img/coruption/protocol2025.PDF'
import coruption2026 from './img/coruption/protocol2026.pdf'
import ProfUnion from "./pages/ProfUnion";
import Corrumpere from "./pages/Corrumpere";
import PrivateQuestion from "./pages/PrivateQuestion";
import ForActioner from "./pages/ForActioner";
import Actioner from "./pages/Actioner";
import ForActioner2 from "./pages/ForActioner2";
import ReportForActioner from "./img/financeDoc/report_for_actioner2025.pdf"
import OrganizationsInfo from "./pages/OrganizationsInfo";
import Management from "./pages/Management";
import IdeologicalWork from "./pages/IdeologicalWork";
import CompanyInfo from "./pages/CompanyInfo";
import News from "./pages/News";
import SinglePagePdf from "./pages/SinglePagePdf";
import FullPdfScroll from "./pages/FullPdfScroll";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
        <Route path="/sertificate" element={<Sertificate />} />
        <Route path="/fin" element={<FinanceReport />} />
        <Route path="/news" element={<News/>} />
        <Route path="/profUnion" element={<ProfUnion />} />
        <Route path="/forActioner" element={<ForActioner />} />
        <Route path="/forActioner2" element={<ForActioner2 />} />
        <Route path="/Actioner" element={<Actioner />} />
        <Route path="/coruption" element={<Corrumpere/>} />
        <Route path="/audit2023" element={<FinDocPdfPage pdf={audit2023Pdf}/>} />
        <Route path="/audit2019" element={<FinDocPdfPage pdf={audit2019Pdf}/>} />
        <Route path="/audit2022" element={<FinDocPdfPage pdf={audit2022Pdf}/>} />
        <Route path="/audit2020" element={<FinDocPdfPage pdf={audit2020Pdf}/>} />
        <Route path="/report2021" element={<FinDocPdfPage pdf={report2021Pdf}/>} />
        <Route path="/report2025" element={<FinDocPdfPage pdf={report2025Pdf}/>} />
        <Route path="/news1" element={<FullPdfScroll pdfFile={news1} />} />
        <Route path="/news2" element={<FullPdfScroll pdfFile={news2} />} />
        <Route path="/news3" element={<FullPdfScroll pdfFile={news3} />} />
        <Route path="/news4" element={<FullPdfScroll pdfFile={news4} />} />
        <Route path="/news5" element={<FullPdfScroll pdfFile={news5} />} />
        <Route path="/report_for_actioner2025" element={<FinDocPdfPage pdf={ReportForActioner}/>} />
        {/*<Route path="/coruptionAppend2025" element={<FinDocPdfPage pdf={coruption2025}/>} />*/}
        <Route path="/coruptionAppend2026" element={<FinDocPdfPage pdf={coruption2026}/>} />
        {/*<Route path="/coruptionAppend" element={<FinDocPdfPage pdf={coruption}/>} />*/}
        <Route path="/privateQuestion" element={<PrivateQuestion/>} />
        <Route path="/contacts" element={<Contact/>} />
        <Route path="/organizationsInfo" element={<OrganizationsInfo/>} />
        <Route path="/managment" element={<Management/>} />
        <Route path="/idealog" element={<IdeologicalWork/>} />
        <Route path="/companyInfo" element={<CompanyInfo/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
