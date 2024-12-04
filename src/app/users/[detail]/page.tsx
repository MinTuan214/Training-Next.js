"use client";

import { useEffect, useState } from "react";
import { User } from "@/app/types/User";

export default function UserDetail({
  params,
}: {
  params: Promise<{ detail: string }>;
}) {
  const [id, setId] = useState<number>();
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const getId = async () => {
      const getParams = await params;
      setId(Number(getParams.detail));
    };
    getId();
  }, [params]);

  useEffect(() => {
    if (id) {
      const fetchUser = async () => {
        const getUser = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        const data: User = await getUser.json();
        setUser(data);
      };
      fetchUser();
    }
  }, [id]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="font-semibold text-2xl mb-6 text-center">User Detail </h1>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        {user && (
          <>
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Id:</h2>
              <p className="text-gray-600">{user.id}</p>
            </div>
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Name:</h2>
              <p className="text-gray-600">{user.name}</p>
            </div>

            <div className="mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Username:</h2>
              <p className="text-gray-600">{user.username}</p>
            </div>

            <div className="mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Email:</h2>
              <p className="text-gray-600">{user.email}</p>
            </div>

            <div className="mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Phone:</h2>
              <p className="text-gray-600">{user.phone}</p>
            </div>

            <div className="mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Website:</h2>
              <p className="text-gray-600">{user.website}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
