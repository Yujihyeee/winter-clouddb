import React, { useState } from 'react';


export default function UserAdd() {
  return (
    <div>
      <h1>Welcome to Join membership</h1>
    <form>
        <ul>
            <li>
                <label>
                    ID: <input type="text" id="user_id" size="10" minlength="4" maxlength="15"/>
                </label>
                <small> Within 4 ~ 15 digits english and numbers </small>
            </li>
            <li>
                <label>
                    Email: <input type="email" id="user_email"/>
                </label>
            </li>
            <li>
                <label>
                    Password: <input type="password" id="user_pwd"/>
                </label>
            </li>
            <li>
                <label>
                    Check Password: <input type="password" id="check_pwd"/>
                </label>
            </li>
            <li>
                <input type="submit" value="Join"/>
            </li>
        </ul>
    </form>
    </div>
  );
}
