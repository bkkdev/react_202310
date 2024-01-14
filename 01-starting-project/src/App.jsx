import { useState } from "react";

import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import TabButton from "./components/TabButton";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("Please click a button");

  function fnOnClick(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedButton + " was clicked.");
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton p_fnOnClick={() => fnOnClick("components")}>
              Components
            </TabButton>
            <TabButton p_fnOnClick={() => fnOnClick("jsx")}>JSX</TabButton>
            <TabButton p_fnOnClick={() => fnOnClick("props")}>Props</TabButton>
            <TabButton p_fnOnClick={() => fnOnClick("state")}>State</TabButton>
          </menu>
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;
