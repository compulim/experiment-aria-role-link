import './App.css';

function App() {
  return (
    <div className="App">
      <h1>How to test</h1>
      <p>
        Use a screen reader to read the content of the following &lt;ul&gt;/&lt;li&gt;. It should narrate the link "a
        Wikipedia article, link" (or something similar). It should NOT narrate "a Wikipedia article, message".
      </p>
      <ul aria-roledescription="transcript">
        <li>
          <div aria-roledescription="activity">
            <div aria-roledescription="message">
              <p>
                This article based on{' '}
                <a href="https://en.wikipedia.org/wiki/Alice%27s_Adventures_in_Wonderland">a Wikipedia article</a>.
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default App;
