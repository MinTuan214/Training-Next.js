import React, { Suspense } from "react";
import Layout from "./layout";
import Template from "./template";
import ErrorBoundary from "../app/state/errorBoundary";
import Error from "./error";
import Loading from "./loading";
import NotFound from "./not-found";
const UserList = React.lazy(() => import("./components/UserList"));

export default function Page() {
  return (
    <Layout>
      <Template>
        <ErrorBoundary fallback={<Error />}>
          <Suspense fallback={<Loading />}>
            <ErrorBoundary fallback={<NotFound />}>
              <UserList />
            </ErrorBoundary>
          </Suspense>
        </ErrorBoundary>
      </Template>
    </Layout>
  );
}
