import { doSignOut } from "../actions";

const Signout = () => {
  return (
    <div>
     <form action={doSignOut}>
        <button type="submit">Sign Out</button>
    </form>
    </div>
  );
};

export default Signout;