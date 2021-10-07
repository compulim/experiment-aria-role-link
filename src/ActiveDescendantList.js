import { useCallback, useState } from 'react';
import classNames from 'classnames';

import './ActiveDescendantList.css';
import useUniqueId from './hook/useUniqueId';

const LIST_ITEMS = {
  'id-0': 'Hello, World!',
  'id-1': 'Aloha!',
  'id-2': <p lang="ja-JP">こんにちは！</p>,
  'id-3': <p lang="yue">您好！</p>,
  'id-4': (
    <p>
      This article is based on{' '}
      <a href="https://en.wikipedia.org/wiki/Alice%27s_Adventures_in_Wonderland">a Wikipedia article</a>. Follow the
      link to read more.
    </p>
  )
};

export default function ActiveDescendantList({ boxRole, itemRole, listRole }) {
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

  const itemIdPrefix = useUniqueId('active-descendant__item-') + '-';
  const labelId = useUniqueId('active-descendant__label-');

  return (
    <div
      aria-activedescendant={itemIdPrefix + activeId}
      aria-labelledby={labelId}
      className="active-descendant-list"
      onKeyDown={handleKeyPress}
      role={boxRole}
      tabIndex="0"
    >
      <div id={labelId}>Press up and down arrow keys to navigate.</div>
      <ul role={listRole}>
        {Object.entries(LIST_ITEMS).map(([key, value]) => (
          <li
            className={classNames('active-descendant-list__item', {
              'active-descendant-list__item--active': key === activeId
            })}
            id={itemIdPrefix + key}
            key={key}
            role={itemRole}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}
