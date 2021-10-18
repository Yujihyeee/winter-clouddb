import React, { useState } from 'react';


export default function User() {

  return (
    <div>
      <form action="login.php" method="POST">
        <ul>
            <li>
                <label for="id"> ID</label>
                <input type="text" id="id"/>
            </li>
            <li>
                <label for="pw">Password</label>
                <input type="password" id="pw"/>
            </li>
            <li>
                <input type="submit" title="login" value="login"/>
            </li>
        </ul>
      </form>
    </div>
  );
}
