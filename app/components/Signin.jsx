import { doSignIn } from "../actions";

const Signin = () => {
  return (
    <div>
      <form action={doSignIn}>
             <button type="submit">Sign In With Google</button>
         </form>
    </div>
  );
};

export default Signin;