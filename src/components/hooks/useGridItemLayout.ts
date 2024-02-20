import { useEffect, useState } from 'react';
import { GridItemLayout } from '../../types';

export const useGridItemLayout = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [currentGridItemLayout, setCurrentGridItemLayout] = useState(
    GridItemLayout.Computer
  );

  useEffect(() => {
    const handleWindowResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  useEffect(() => {
    if (viewportWidth > 1200) {
      setCurrentGridItemLayout(GridItemLayout.Computer);
      return;
    }

    if (viewportWidth < 768) {
      setCurrentGridItemLayout(GridItemLayout.Mobile);
      return;
    }

    setCurrentGridItemLayout(GridItemLayout.Tablet);
  }, [viewportWidth]);

  return currentGridItemLayout;
};
