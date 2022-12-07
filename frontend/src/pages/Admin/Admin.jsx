import UserCard from "@components/UserCard/UserCard";

export default function Admin() {
  return (
    <>
      <h1>Admin dashboard</h1>
      <div className="validateUser">
        <h2>User to be validated</h2>
        <p>Users awaiting validation</p>
        <UserCard />
      </div>
    </>
  );
}
