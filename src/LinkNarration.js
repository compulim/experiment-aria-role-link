import './LinkNarration.css';

export default function LinkNarration() {
  return (
    <section className="link-narration">
      <header>
        <h1>Link role narration</h1>
      </header>
      <article>
        <h2>Background</h2>
        <p>Screen reader should narrate the role of the hyperlink, as "link". It should give a pause to emphasis on the role.</p>
        <h2>How to test</h2>
        <p>
          Use a screen reader to read the content of the following <code>&lt;ul&gt;</code>/<code>&lt;li&gt;</code>. It
          should narrate the link "a Wikipedia article, link" (or something similar). It should NOT narrate "a Wikipedia
          article, message".
        </p>
        <p>
          Windows Narrator with CAPS + up/down arrow: "Bullet, this article is based on, link, a Wikipedia article."
        </p>
        <p>VoiceOver (macOS) with up/down arrow: "Bullet, this article is based on, link, a Wikipedia article."</p>
        <p>VoiceOver (iPadOS) with two-finger swipe: "This article based on a Wikpiedia article, link."</p>
        <h2>Try these out</h2>
        <cite>
          IDEAL: Bullet &lt;pause&gt; this article is based on &lt;pause&gt; link &lt;pause&gt; a Wikipedia article.
        </cite>
        <p className="link-narration__try-out">Bullet, this article is based on, link, a Wikipedia article.</p>
        <p className="link-narration__try-out">
          <small>bullet</small> this article is based on <small>link</small> a wikipedia article.
        </p>
        <p className="link-narration__try-out">
          <ins>bullet</ins> this article is based on <ins>link</ins> a wikipedia article.
        </p>
        <p className="link-narration__try-out">
          <br />
          bullet
          <br /> this article is based on <br />
          link
          <br /> a wikipedia article.
        </p>
        <p className="link-narration__try-out">
          <div>bullet</div> this article is based on <div>link</div> a wikipedia article.
        </p>
        <p className="link-narration__try-out">
          <em>bullet</em> this article is based on <em>link</em> a wikipedia article.
        </p>
        <h2>Sample</h2>
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
      </article>
    </section>
  );
}
