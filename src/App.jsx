import AppLayout from "./components/AppLayout";
import Attribution from "./components/Attribution";
import Header from "./components/Header";
import Prep from "./components/Prep";
import "./sass/main.scss";

function App() {
  return (
    <AppLayout>
      <Header />
      <Prep />
      <Attribution />
    </AppLayout>
  );
}

export default App;
