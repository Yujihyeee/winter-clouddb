import React from "react";
import { useHistory } from "react-router";

const Logout = () => {
    const history = useHistory()
    return <button
        onClick={e => {
            e.preventDefault()
            e.stopPropagation()
            localStorage.clear(e)

            history.push('/')
        }}> 로그아웃
    </button>
}

export default Logout