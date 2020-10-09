import React from 'react';

import './RunwayItem.scss';

export const RunwayItem = ({ runway }) => {
  return (
    <div className='runway-item'>
      <p>Name: {runway.name}</p>
      <p>Identifier: {runway.ident}</p>
      <p>Length: {`${runway.length}ft`}</p>
      <p>Width: {`${runway.width}ft`}</p>
      <p>Surface Type: {runway.surfaceType}</p>
      <p>
        Surface Quality: {runway.surfaceQuality ? runway.surfaceQuality : 'N/A'}
      </p>
    </div>
  );
};

export default RunwayItem;
