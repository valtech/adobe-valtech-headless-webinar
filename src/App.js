import logo from "./logo.svg";
import "./App.css";
import Event from "./components/Event/Event";
import { useEffect, useState } from "react";
import {HelmetProvider, Helmet} from 'react-helmet-async'
import { AUTHOR_HOST, PUBLISH_HOST } from "./utils/environment";



function App() {
  const [event, setEvent] = useState();
  
  useEffect(() => {
    if (!event) {
      async function fetchEvent() {
        let currentTimeMillis = Date.now();
        const response = await fetch(
          `${PUBLISH_HOST}/graphql/execute.json/adobe-valtech-headless-spa/eventByPath;path=/content/dam/adobe-valtech-headless-spa/events/adobe-valtech-webinar?ck=${currentTimeMillis}`
        );
        const json = await response.json();
        setEvent(json.data.eventByPath.item);
      }
      fetchEvent();
    }
  });

  //

  return (
    <HelmetProvider>
      <div className="App">
      <Helmet>
        <meta name="urn:auecon:aemconnection" content={`aem:${AUTHOR_HOST}`}/>
      </Helmet>
        <header className="App-header">
          <h1>Approach 3: Standalone App</h1>
        </header>
        <div className="main">
          <Event {...event} />
        </div>
      </div>
    </HelmetProvider>
  );
}

export default App;
