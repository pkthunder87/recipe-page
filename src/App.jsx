import AppLayout from "./components/AppLayout";
import Attribution from "./components/Attribution";
import Header from "./components/Header";
import "./sass/main.scss";

function App() {
  return (
    <AppLayout>
      <Header />
      <Attribution />
    </AppLayout>
  );
}

export default App;
