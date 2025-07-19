import CoreConcept from "./components/CoreConcept/CoreConcept";
import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header";
import { TabButton } from "./components/TabButton/TabButton";
import { useState } from "react";
import { EXAMPLES } from "./data";
function App() {
  const [selectedTopic, setSelectedTopic] = useState('');

  const handleClick = (selectedButton) => {
    setSelectedTopic(selectedButton);
  };
  return (
    <div>
      <main>
        <Header />
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem)=>(
              <CoreConcept key={conceptItem.title} {...conceptItem}/>
            ))}
            
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === 'components'}
              onSelect={() => {
                handleClick("components");
              }}
            >
              components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'jsx'}
              onSelect={() => {
                handleClick("jsx");
              }}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'props'}
              onSelect={() => {
                handleClick("props");
              }}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'state'}
              onSelect={() => {
                handleClick("state");
              }}
            >
              State
            </TabButton>
          </menu>
          {!selectedTopic && <p>Click any of the above to read more</p>}
          {selectedTopic && (<div id="tab-content">
            
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>)}
        </section>
      </main>
    </div>
  );
}

export default App;
