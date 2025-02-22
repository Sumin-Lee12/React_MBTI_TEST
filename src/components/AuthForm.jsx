import React, { useState } from "react";
import axios from "axios";

// 회원가입인지 로그인인지 구분하기 위해 mode 를 props 로 받습니다.
// onSubmit 도 회원가입과 로그인 페이지에서 각각 구현을 하고 props 로 넘겨줄 겁니다.
const AuthForm = ({ mode, onSubmit }) => {
  
  // 무엇을 formData 에 넣어야 할까요?
  const [userInfo, setUserInfo] = useState({
		id: "",
    password: "",
    nickname: "",
  });


  // id 입력을 위한 input 만 힌트로 만들어 두었습니다. 참고해서 한번 만들어봅시다! 
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSubmit(userInfo)
    }
      }>
      <input
        type="text"
        name="id"
        value={userInfo.id}
        autoComplete="username"
        onChange={(e) => {
          setUserInfo({...userInfo, id:e.target.value});
        }}
        minLength={4}
        maxLength={15}
        placeholder="아이디"
        required
      />

      <input
        type="password"
        name="password"
        value={userInfo.password}
        autoComplete="current-password"
        onChange={(e) => {
          setUserInfo({...userInfo, password:e.target.value});
        }}
        minLength={4}
        maxLength={15}
        placeholder="비밀번호"
        required
      />

      {mode === "signup" && (
        <input
          type="text"
          name="nickname"
          value={userInfo.nickname}
          onChange={(e) => {
            setUserInfo({...userInfo, nickname:e.target.value});
          }}
          minLength={4}
          maxLength={15}
          placeholder="닉네임"
          required
          className="w-full p-4 border border-gray-300 rounded-lg"
        />
      )}
      <button type="submit">
        {mode === "login" ? "로그인" : "회원가입"}
      </button>
    </form>
  );
};

export default AuthForm;








// import React from "react";

// const AuthForm = ({ mode, onSubmit }) => {
//   return (
//     <form onSubmit={onSubmit}>
//       <div>
//         <label>이메일</label>
//         <input type="email" name="email" required />
//       </div>

//       <div>
//         <label>비밀번호</label>
//         <input type="password" name="password" required />
//       </div>

//       {mode === "signup" && (
//         <div>
//           <label>비밀번호 확인</label>
//           <input type="password" name="confirmPassword" required />
//         </div>
//       )}

//       <button type="submit">
//         {mode === "login" ? "로그인" : "회원가입"}
//       </button>
//     </form>
//   );
// };

// export default AuthForm;
