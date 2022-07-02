import React from 'react';
import {Link} from 'react-router-dom'


const Navigation = () => (
  <article>
    <ul>
      <li>
        <Link to = '/signin'>Sign In</Link>
      </li>
      <li>
        <Link to = '/langing'>Landing</Link>
      </li>
      <li>
        <Link to = '/home'>Home</Link>
      </li>
      <li>
        <Link to = '/account'>Account</Link>
      </li>
      <li>
        <Link to = '/admin'>Admin</Link>
      </li>
    </ul>
  </article>
);

export default Navigation;
