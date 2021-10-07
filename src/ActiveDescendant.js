import { useCallback, useState } from 'react';
import classNames from 'classnames';

import './ActiveDescendant.css';

const LIST_ITEMS = {
  'id-0': 'Hello, World!',
  'id-1': 'Aloha!',
  'id-2': <span lang="zh-Hant-HK">您好！</span>,
  'id-3': (
    <span>
      This article is based on{' '}
      <a href="https://en.wikipedia.org/wiki/Alice%27s_Adventures_in_Wonderland">a Wikipedia article</a>.
    </span>
  )
};

export default function ActiveDescendant() {
  const [activeId, setActiveId] = useState(Object.keys(LIST_ITEMS)[0]);

  const setRelativeActive = useCallback(
    delta => {
      setActiveId(activeId => {
        const keys = Object.keys(LIST_ITEMS);

        const index = keys.indexOf(activeId);

        if (~index) {
          return keys[Math.max(0, Math.min(keys.length - 1, index + delta))];
        }

        return activeId;
      });
    },
    [setActiveId]
  );

  const setNextActive = useCallback(() => setRelativeActive(1), [setRelativeActive]);
  const setPrevActive = useCallback(() => setRelativeActive(-1), [setRelativeActive]);

  const handleKeyPress = useCallback(
    event => {
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        setNextActive();
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        setPrevActive();
      }
    },
    [setNextActive, setPrevActive]
  );

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
        <ul
          aria-activedescendant={activeId}
          className="active-descendant__list"
          onKeyDown={handleKeyPress}
          role="grid"
          tabIndex="0"
        >
          {Object.entries(LIST_ITEMS).map(([key, value]) => (
            <li
              className={classNames('active-descendant__item', { 'active-descendant__item--active': key === activeId })}
              id={key}
              key={key}
              role="gridcell"
            >
              {value}
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}
