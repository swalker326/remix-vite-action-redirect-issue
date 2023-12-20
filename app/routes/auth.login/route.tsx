import { redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";

export function action() {
  console.log("ACTION FIRED");
  return redirect("/auth/verify?code=123");
}

export default function LoginRoute() {
  return (
    <div>
      <Form method="POST">
        <button>Submit</button>
      </Form>
    </div>
  );
}
