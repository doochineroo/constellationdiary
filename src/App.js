import './styles/App.css';
import Signup from './components/Auth/Signup';
function App() {
  return (
    <Router>
        <Routes>
            <Route path = "/signup" element={<Signup />}/>

        </Routes>
    </Router>
  );
}

export default App;
