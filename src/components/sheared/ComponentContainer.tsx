import { Box } from '@mui/system';
import React from 'react';

interface ComponentContainerProps {
  children: React.ReactNode;
}

const ComponentContainer: React.FC<ComponentContainerProps> = ({
  children,
  ...props
}) => {
  return (
    <Box p={3} {...props}>
      {children}
    </Box>
  );
};

export default ComponentContainer;
