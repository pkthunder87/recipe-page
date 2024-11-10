import AppLayout from "./components/AppLayout";
import Attribution from "./components/Attribution";
import Header from "./components/Header";
import Ingredients from "./components/Ingredients";
import Instructions from "./components/Instructions";
import Nutrition from "./components/Nutrition";
import Prep from "./components/Prep";
import "./sass/main.scss";

function App() {
  return (
    <AppLayout>
      <Header />
      <Prep />
      <Ingredients />
      <Instructions />
      <Nutrition />
      <Attribution />
    </AppLayout>
  );
}

export default App;
