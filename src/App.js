import {useEffect} from 'react'
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter as Router,useLocation,withRouter } from 'react-router-dom';

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
      window.scrollTo(0, 0);
  }, [pathname]);
  return props.children
}
const ScrollToTop = withRouter(_ScrollToTop)
function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <Header />
          <Body />
          <Footer />
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
