import React from "react";
// import Layout from "./layout";
import Link from "next/link";
// const UserList = React.lazy(() => import("./components/UserList"));
// import UserList from "./components/UserList";

export default function Page() {
  return (
    <ul>
      <li>
        <Link href={"/posts"}>Posts</Link>
      </li>
      <li></li>
    </ul>

  );
}
