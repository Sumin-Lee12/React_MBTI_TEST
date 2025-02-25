import React, { useState, useRef } from "react";
import useUsersStore from "../zustand/useUsersStore";

const Profile = () => {
  const { user, updateUser } = useUsersStore(); // zustand에서 user와 updateUser 가져오기
  const [nickname, setNickname] = useState(user?.nickname || "");
  const [imgPreview, setImgPreview] = useState(user?.profileImage || ""); // 초기 프로필 이미지
  const imgRef = useRef(null);

  // 닉네임 변경 핸들러
  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  // 이미지 변경 핸들러
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImgPreview(reader.result); // Base64로 변환하여 미리보기 저장
      };
      reader.readAsDataURL(file);
    }
  };

  // 프로필 업데이트 핸들러
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user?.id) {
      alert("사용자 정보가 없습니다.");
      return;
    }

    updateUser(user.id, { nickname, profileImage: imgPreview });
    alert("프로필이 업데이트되었습니다.");
  };

  return (
    <div className="w-full min-h-screen py-11 flex flex-col items-center">
      <div className="bg-blue-100 min-h-[500px] min-w-[500px] p-5 rounded-xl flex justify-around items-center flex-col">
        <h1 className="font-black text-3xl">프로필 수정</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-5"
        >
          {/* 프로필 이미지 미리보기 */}
          <div className="relative">
            {imgPreview && (
              <img
                src={imgPreview}
                alt="프로필 미리보기"
                className="w-32 h-32 rounded-full object-cover border border-gray-300"
              />
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              ref={imgRef}
              className="hidden"
            />
            <button
              type="button"
              onClick={() => imgRef.current.click()}
              className="mt-2 text-blue-100 underline transition duration-300 hover:text-[#3c68a5] hover:font-bold"
            >
              프로필 사진 변경
            </button>
          </div>

          {/* 닉네임 입력 */}
          <div className="flex flex-col items-start">
            <label className="font-semibold">닉네임</label>
            <input
              type="text"
              value={nickname}
              onChange={handleNicknameChange}
              className="border p-2 rounded-lg w-64"
            />
          </div>

          {/* 업데이트 버튼 */}
          <button
            type="submit"
            className="bg-blue-500 text-white px-5 py-2 rounded-lg"
          >
            프로필 업데이트
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
