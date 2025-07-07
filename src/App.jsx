import { Switch, Route } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import HomePage from "./pages/HomePage";
import './App.css';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;