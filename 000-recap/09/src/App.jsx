import { useState } from "react";

import ProjectsSidebar from "./components/ProjectsSidebar.jsx";
import NewProject from "./components/NewProject.jsx";

// button clicks = New Project
// default = fallback area
// fetch values and create new project

function App() {
  const [isAdding, setIsAdding] = useState(false);

  function handleAddNewProject() {
    console.log("clicked");
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar />
      <NewProject />
    </main>
  );
}

export default App;
