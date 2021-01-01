import React from 'react';
import { ItemsGrid, ItemStyles } from '../styles/Grids';

function LoadingGrid({ count }) {
  return (
    <ItemsGrid>
      {/* Create an array the size of the number of count */}
      {Array.from({ length: count }, (_, i) => (
        <ItemStyles key={i}>
          <p>
            <span className="mark"> Loading...</span>
          </p>
          <img
            src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAECAQAAADsOj3LAAAADklEQVR42mNkgANGQkwAAJoABWH6GPAAAAAASUVORK5CYII="
            className="loading"
            alt="Loading"
            width="500"
            height="400"
          />
        </ItemStyles>
      ))}
    </ItemsGrid>
  );
}

export default LoadingGrid;
