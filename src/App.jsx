import AppLayout from "./components/AppLayout";
import Attribution from "./components/Attribution";
import Header from "./components/Header";
import Ingredients from "./components/Ingredients";
import Prep from "./components/Prep";
import "./sass/main.scss";

function App() {
  return (
    <AppLayout>
      <Header />
      <Prep />
      <Ingredients />
      <Attribution />
    </AppLayout>
  );
}

export default App;
