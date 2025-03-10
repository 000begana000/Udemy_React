import { useState } from "react";

import ProjectsSidebar from "./components/ProjectsSidebar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";

// button clicks = New Project (done)
// default = fallback area (done)
// fetch values and create new project (done)
// see the project on the sidebar (done)
// cancel button
// warning modal for invalid (empty) value
// display project detail

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleAddNewProject(projectData) {
    setProjectState(prevState => {
      const newProject = {
        ...projectData, // an object
        id: Math.random(),
      };
      return {
        ...prevState,
        selectedProjectId: undefined, // temporary
        projects: [...prevState.projects, newProject],
      };
    });
  }
  // console.log(projectState);

  function handleSelectProject(id) {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  let content;

  if (projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddNewProject} />;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  } else {
    content = projectState.selectedProjectId;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onStartAddProject={handleStartAddProject}
        onSelectProject={handleSelectProject}
        projects={projectState.projects}
      />
      {content}
    </main>
  );
}

export default App;
