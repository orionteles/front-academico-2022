import Menu from "./components/Menu";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Cursos from "./pages/cursos/Cursos";
import CursosLista from "./pages/cursos/CursosLista";
import Disciplinas from "./pages/disciplinas/Disciplinas";
import DisciplinasLista from "./pages/disciplinas/DisciplinasLista";
import DisciplinasListaBackend from "./pages/disciplinas/DisciplinasListaBackend";
import DisciplinasBackend from "./pages/disciplinas/DisciplinasBackend";
import Alunos from "./pages/alunos/Alunos";
import AlunosLista from "./pages/alunos/AlunosLista";
import ProfessoresLista from "./pages/professores/ProfessoresLista";
import Professores from "./pages/professores/Professores";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Menu />
        <Container>
          <Routes>
            <Route path="/" element={<Cursos />} />
            <Route path="/cursos" element={<CursosLista />} />
            <Route path="/cursos/create" element={<Cursos />} />
            <Route path="/alunos" element={<AlunosLista />} />
            <Route path="/alunos/create" element={<Alunos />} />
            <Route path="/professores" element={<ProfessoresLista />} />
            <Route path="/professores/create" element={<Professores />} />
            <Route path="/disciplinas" element={<DisciplinasLista />} />
            <Route path="/disciplinas/create" element={<Disciplinas />} />
            <Route path="/disciplinas/:id" element={<Disciplinas />} />
            <Route path="/disciplinas-backend" element={<DisciplinasListaBackend />} />
            <Route path="/disciplinas-backend/create" element={<DisciplinasBackend />} />
            <Route path="/disciplinas-backend/:id" element={<DisciplinasBackend />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
