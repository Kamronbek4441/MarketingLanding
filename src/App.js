import './App.css';
import Header from "./components/header/Header.jsx"
import Hero  from "./components/hero/Hero.jsx"
import TextLine from "./components/textline/TextLine.jsx"
import MarketingBlock from './components/marketing/MarketingBlock.jsx';
import ProblemsSection from './components/problem/ProblemsSection.jsx';
import Workflow from './components/workflow/WorkFlow.jsx';
import FunnelTable from './components/funnel/FunnelTable.jsx';
import ZoomSection from './components/zoom/ZoomSection.jsx';
import CaseSection from "./components/case/CaseSection.jsx"
import Portfolio from './components/portfolio/Portfolio.jsx';
import NicheSection from './components/niche/NicheSection.jsx';
import Footer from "./components/footer/Footer.jsx"

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <TextLine />
      <MarketingBlock />
      <ProblemsSection />
      <Workflow />
      <FunnelTable />
      <ZoomSection />
      <CaseSection />
      <Portfolio />
      <NicheSection />
      <Footer />
    </div>
  );
}

export default App;
