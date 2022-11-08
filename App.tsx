import * as React from 'react';
import MapRouter from 'react-router-map';

import { routes } from './router/routes';

export default function App() {
  return (
    <div>
      <MapRouter routes={routes} />
    </div>
  );
}
