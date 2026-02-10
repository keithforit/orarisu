import { Navigate } from 'react-router';

export function RedirectToCompliance() {
  return <Navigate to="/compliance" replace />;
}
