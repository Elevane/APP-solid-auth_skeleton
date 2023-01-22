import { Navigate } from "@solidjs/router";

export default function NotFound() {
  return (
    <>
      <p>Not Found</p>
      <a href="/login">click here to login</a>
    </>
  );
}
