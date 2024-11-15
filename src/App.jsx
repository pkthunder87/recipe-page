import { useEffect, useState } from "react";
import AppLayout from "./components/AppLayout";
import Attribution from "./components/Attribution";
import Header from "./components/Header";
import Ingredients from "./components/Ingredients";
import Instructions from "./components/Instructions";
import Nutrition from "./components/Nutrition";
import "./sass/main.scss";

function App() {
  let [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 600) setIsMobile(true);
  }, []);

  if (isMobile)
    return (
      <div>
        <AppLayout>
          <Header />
          <Ingredients />
          <Instructions />
          <Nutrition />
          <Attribution />
        </AppLayout>
      </div>
    );

  return (
    <div>
      <AppLayout>
        <Header />
        <Ingredients />
        <Instructions />
        <Nutrition />
      </AppLayout>
      <Attribution />
    </div>
  );
}

export default App;
