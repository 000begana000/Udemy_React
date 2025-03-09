import { useState } from "react";

import ProjectsSidebar from "./components/ProjectsSidebar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProject from "./components/NoProjectSelected.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";

// button clicks = New Project
// default = fallback area (done)
// fetch values and create new project

function App() {
  const [isCreatingNewProject, setIsCreatingNewProject] = useState(false);

  function handleAddNewProject() {
    setIsCreatingNewProject(prevState => !prevState);
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onAddNewProject={handleAddNewProject} />
      {isCreatingNewProject && <NewProject />}
      {!isCreatingNewProject && <NoProjectSelected />}
    </main>
  );
}

export default App;
