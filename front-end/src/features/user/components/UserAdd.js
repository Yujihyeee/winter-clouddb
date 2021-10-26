import React, { useCallback, useState } from 'react';
import { useHistory  } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { joinPage } from 'features/user/reducer/userSlice';

export default function UserAdd() {
    const history = useHistory()
    const dispatch= useDispatch()
    const [join, setJoin] = useState({
        username:'', password:'', email:'', name:'', regDate: new Date().toLocaleDateString()
    })
    const {username, password, email, name} = join
    const handleChange = useCallback(
        e => {
            const { value, name } = e.target
            setJoin({
                ...join,
                [name] : value
            })
        }, [join]
    )
    const handleSubmit = e => {
        e.preventDefault()
        const joinRequest = {...join}

        userJoin(joinRequest)
        .then(res =>{
            alert('회원가입 성공')
            history.push('/users/login')
        })
        .catch(err =>{
            alert(`회원가입 실패 : ${err}`)
        })

  }

  return (
    <div>
         <h1>회원 가입을 환영합니다.</h1>
    <form onSubmit={handleSubmit} method='POST'>
        <ul>
            <li>
                <label>
                    아이디 : <input type="text" id="username" name="username" value={username} onChange={handleChange}
                    size="10" minlength="4" maxlength="15"/>
                </label>
                <small>4~15자리 이내의 영문과 숫자</small>
            </li>
            <li>
                <label>
                    이메일 : <input type="email" id="email" name="email" value={email} onChange={handleChange}/>
                </label>
            </li>
            <li>
                <label>
                    비밀 번호 : <input type="password" id="password" name="password" value={password} onChange={handleChange}/>
                </label>
            </li>
            <li>
                <label>
                    이름 : <input type="text" id="name" name="name" value={name} onChange={handleChange}/>
                </label>
            </li>
           
            <li>
                <input type="submit" value="회원가입"/>
            </li>

        </ul>
    </form>
    </div>
  );
}