import React, { useEffect, useState } from "react";
import User from "../../types/User";

export default function UserPage() {
  const [user, setUser] = useState<User | undefined>(undefined);

  async function fetchUser(id: number) {
    const res = await fetch(`/api/users?id=${id}`);
    const data = await res.json();
    setUser(data);
  }

  useEffect(() => {
    fetchUser(1);
  }, []);

  return (
    <div>
      <h1>User page example</h1>
      <p>{user?.email}</p>
    </div>
  );
}
