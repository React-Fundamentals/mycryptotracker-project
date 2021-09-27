import { Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import { ErrorFallback } from "../../../common/core";
import { logError } from "../../../common/utils";

export default function RouteWithErrorBoundary({
  children,
  exact = false,
  fallbackComponent = ErrorFallback,
  onError = logError,
  path,
  reset,
}) {
  return (
    <ErrorBoundary
      FallbackComponent={fallbackComponent}
      onReset={reset}
      onError={onError}
    >
      <Route exact={exact} path={path}>
        {children}
      </Route>
    </ErrorBoundary>
  );
}
