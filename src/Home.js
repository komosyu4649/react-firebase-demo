import { signInWithPopup, signOut } from "firebase/auth";
import React from "react";
import { auth, provider } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function Home() {
  const [user] = useAuthState(auth);
  return (
    <div>
      {user ? (
        <>
          <UserInfo />
          <SignOutButton />
        </>
      ) : (
        <SignInButton />
      )}
    </div>
  );
}

export default Home;

// sign in
function SignInButton() {
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider);
  };
  return (
    <button onClick={signInWithGoogle}>
      <span>Googleでサインインする</span>
    </button>
  );
}

// sign out
function SignOutButton() {
  return (
    <button onClick={() => auth.signOut()}>
      <span>Googleでサインアウトする</span>
    </button>
  );
}

// sign out
function UserInfo() {
  return (
    <div className="userInfo">
      <img src={auth.currentUser.photoURL} />
      <p>{auth.currentUser.displayName}</p>
    </div>
  );
}
