import './App.css';

function App() {
  return (
    <div className="App">
      <h1>How to test</h1>
      <p>
        Use a screen reader to read the content of the following <code>&lt;ul&gt;</code>/<code>&lt;li&gt;</code>. It
        should narrate the link "a Wikipedia article, link" (or something similar). It should NOT narrate "a Wikipedia
        article, message".
      </p>
      <p>Windows Narrator with CAPS + up/down arrow: "Bullet, this article is based on, link, a Wikipedia article."</p>
      <p>VoiceOver (macOS) with up/down arrow: "Bullet, this article is based on, link, a Wikipedia article."</p>
      <p>VoiceOver (iPadOS) with two-finger swipe: "This article based on a Wikpiedia article, link."</p>
      <h1>Try these out</h1>
      <p><small>bullet</small> this article is based on <small>link</small> a wikipedia article</p>
      <p><ins>bullet</ins> this article is based on <ins>link</ins> a wikipedia article</p>
      <h1>Sample</h1>
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
