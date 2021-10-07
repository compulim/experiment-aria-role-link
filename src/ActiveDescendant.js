import './ActiveDescendant.css';
import ActiveDescendantList from './ActiveDescendantList';

export default function ActiveDescendant() {
  return (
    <section className="active-descendant">
      <header>
        <h1>Active descendant</h1>
      </header>
      <article>
        <h2>How to test</h2>
        <ol>
          <li>Focus on the list below, it should show a solid border;</li>
          <li>Turn off scan mode;</li>
          <li>Press up/down arrow keys to select different active descendant;</li>
        </ol>
        <p>
          EXPECT: It should narrate the content, including links with accessible name. For example, it should say, "this
          article is based on, link, a Wikipedia article."
        </p>
        <h2>Sample</h2>
        <h3>
          Web Chat today: <code>role="group"</code>
        </h3>
        <ActiveDescendantList boxRole="group" />
        <h3>
          <code>role="grid"</code> and <code>role="gridcell"</code>
        </h3>
        <ActiveDescendantList boxRole="grid" itemRole="gridcell" listRole="group" />
      </article>
    </section>
  );
}
