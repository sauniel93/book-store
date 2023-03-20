import { BrowserRouter } from "react-router-dom";
import Content from "./components/Content";
import TopNavbar from "./components/TopNavbar";
import Sidebar from "./components/Sidebar";
import "./index.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div
          className="w-full h-full"
          style={{
            background:
              "linear-gradient(to top, lightgrey 0%, lightgrey 1%, #e0e0e0 26%, #efefef 48%, #d9d9d9 75%, #bcbcbc 100%)",
          }}
        >
          <div
            className="w-full"
            style={{ height: "auto", marginBottom: "2px" }}
          >
            <TopNavbar />
          </div>
          <div
            className="w-full relative"
            style={{ overflow: "scroll", height: "90vh" }}
          >
            <Sidebar />
            <div style={{ margin: "auto" }}>
              <Content />
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
