import { useState } from "react";

import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";

import { CORE_CONCEPTS, EXAMPLES } from "./data-with-examples.js";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("");

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please Select Button</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>{EXAMPLES[selectedTopic].code}</pre>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((item) => (
              <CoreConcept key={item.title} {...item} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              onSelect={() => handleSelect("components")}
              isSelected={selectedTopic === "components"}
            >
              Components
            </TabButton>
            <TabButton
              onSelect={() => handleSelect("jsx")}
              isSelected={selectedTopic === "jsx"}
            >
              JSX
            </TabButton>
            <TabButton
              onSelect={() => handleSelect("props")}
              isSelected={selectedTopic === "props"}
            >
              Props
            </TabButton>
            <TabButton
              onSelect={() => handleSelect("state")}
              isSelected={selectedTopic === "state"}
            >
              State
            </TabButton>
          </menu>
        </section>
        {tabContent}
      </main>
    </div>
  );
}

export default App;
