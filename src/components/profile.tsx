import React from 'react';
import { Link } from 'react-router-dom';
import { useUserContext } from '../user-context';


const Profile: React.FC = () => {
  const { user } = useUserContext();
  const logout = () => {
    fetch('/auth/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      if (res.status === 200) {
        window.location.href = '/';
      }
    })
  }

  return (
    <div title="Me">
      {!user ?
        <div className="space-y-4">
          <h2 className="text-2xl">Access Denied</h2>
          <p>
            <Link to={"/"}>
              <a className="underline underline-offset-4">You must be signed in to view this page</a>
            </Link>
          </p>
        </div> :
        <div className="space-y-4">
          <h1>User Logged in!</h1>
          {user.name && <h2 className="text-2xl">Welcome: {user.name}</h2>}
          {user.given_name && <h3 className="text-2xl">Your First Name: {user.given_name}</h3>}
          {user.family_name && <h3 className="text-2xl">Your Last Name: {user.family_name}</h3>}
          <h3 className="text-2xl">Your Email: {user.email}</h3>
          {user.username && <h3 className="text-2xl">Your Username: {user.username}</h3>}
          <hr></hr>
          <button onClick={logout} type="button">Logout</button>
        </div>
      }
    </div>
  );
};

export default Profile;
