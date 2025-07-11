// src/components/Auth/Signup.jsx
import React, { useState } from "react";
import { signupUser } from "../../services/authService";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [zodiac, setZodiac] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await signupUser(email, password, zodiac);
      alert("가입 성공! 환영합니다 " + user.email);
    } catch (err) {
      alert("에러: " + err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="이메일" required />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="비밀번호" required />
      <select value={zodiac} onChange={e => setZodiac(e.target.value)} required>
        <option value="">별자리 선택</option>
        <option value="aries">양자리</option>
        <option value="taurus">황소자리</option>
        <option value="gemini">쌍둥이자리</option>
        {/* ... 나머지 별자리 */}
      </select>
      <button type="submit">회원가입</button>
    </form>
  );
}
