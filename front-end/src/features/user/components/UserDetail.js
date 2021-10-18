import React, { useState } from 'react';


export default function User() {
  return (
    <div>
        <figure>
            <img src="images/pf.png" alt=""/>
            <figcaption>OnlineProfile</figcaption>
        </figure>
        <h1>Jihye Yu</h1>
        <p>E-mail : rladnddl@naver.com</p>
        <h2>Who I am?</h2>
        <p>Hi. I am Jihye Yu.</p>
        <h2>GitHub</h2>
        <ul>
            <li><a href="https://github.com/Yujihyeee" target="_blank">GitHub</a>
            </li>
        </ul>
        <hr></hr>
        <h2>Skills</h2>
        <ul>
            <li>Available languages
                <ul>
                    <li><mark>HTML</mark></li>
                    <li><mark>CSS</mark></li>
                    <li>JAVA</li>
                    <li>Python</li>
                    <li>MongoDB</li>
                    <li>MySQL</li>
                    <li></li>
                </ul>
            </li>
            <li>Available Tools
                <ul>
                    <li>IntelliJ</li>
                    <li>PyCharm</li>
                    <li>Visual Studio Code</li>
                    <li>Spring Boot</li>
                    <li>Flask</li>
                </ul>
            </li>
        </ul>
        <h2>Academic</h2>
        <table border="1">
            <caption>Educational Background</caption>
            <thead>
                <tr>
                    <th>School of origin</th>
                    <th>Major</th>
                    <th>Period</th>
                    <th>Graduation classification</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>OOO high school</td>
                    <td>Finance</td>
                    <td>2011.03 ~ 2014.02</td>
                    <td>Graduation</td>
                </tr>
                <tr>
                    <td>OOO University</td>
                    <td>Business Administration</td>
                    <td>2019.09 ~ </td>
                    <td>In school</td>
                </tr>
            </tbody>
        </table>
    </div>
  );
}
