import { useRef } from 'react';

import uniqueId from '../util/uniqueId';

export default function useUniqueId() {
  const idRef = useRef(uniqueId());

  return [idRef.current];
}
