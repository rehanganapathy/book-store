import { Route, Routes, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Home from "./pages/Home";
import CreateBook from "./pages/CreateBook";
import ShowBook from "./pages/ShowBook";
import EditBook from "./pages/EditBook";
import DeleteBook from "./pages/DeleteBook";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";
import "./App.css"; // Create this CSS file for your animations

const App = () => {
  const location = useLocation();

  return (
    <ThemeProvider theme={theme}>
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={300}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books/create" element={<CreateBook />} />
            <Route path="/books/details/:id" element={<ShowBook />} />
            <Route path="/books/edit/:id" element={<EditBook />} />
            <Route path="/books/delete/:id" element={<DeleteBook />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </ThemeProvider>
  );
};

export default App;
