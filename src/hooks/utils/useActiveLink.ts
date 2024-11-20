import { useLocation } from 'react-router-dom';

export const useActiveLink = (path: string) => {
  const location = useLocation();
  return location.pathname === path;
};
