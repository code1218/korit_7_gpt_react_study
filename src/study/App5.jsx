import React from 'react';

function App5(props) {
    /**
     * 회원 정보를 입력받아 userList에 user객체들을 가입하기 버튼을 누를 때마다 저장한다.
     * 로그인 정보를 입력받아 userList에 해당 username이 있는지 확인하고
     * 없으면 '사용자 정보를 다시 확인하세요.' 메세지 출력(alert)
     * 있으면 비밀번호가 일치하는지 검사
     * 비밀번호가 일치하지 않으면 '사용자 정보를 다시 확인하세요.' 메세지 출력(alert)
     * 일치하면 이름(이메일)님 환영합니다. 출력(alert)
     */

    return (
        <div>
            <h1>회원가입</h1>
            <input type="text" name='username' placeholder='username'/>
            <input type="password" name='password' placeholder='password'/>
            <input type="text" name='name' placeholder='name'/>
            <input type="text" name='email' placeholder='email'/>
            <div>
                <button>가입하기</button>
            </div>
            <h1>로그인</h1>
            <input type="text" name='username' placeholder='username'/>
            <input type="password" name='password' placeholder='password'/>
            <div>
                <button>로그인</button>
            </div>
        </div>
    );
}

export default App5;