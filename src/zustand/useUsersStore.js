import { create } from "zustand";
import useAuthStore from "./useAuthStore";

const useUsersStore = create((set) => ({
  users: [], // 초기 상태

  // ✅ users 상태를 직접 설정하는 setUsers 추가
  setUsers: (newUsers) => set({ users: newUsers }),

  // 유저 추가
  createUser: (user) => set((state) => ({
    users: [...state.users, user],
  })),

  // 유저 상태 변경 (updateUser)
  updateUser: (userId, updatedUser) =>
    set((state) => ({
      users: state.users.map((user) =>
        user.id === userId ? { ...user, ...updatedUser } : user
      ),
    })),

  // 유저 삭제
  deleteUser: (userId) =>
    set((state) => ({
      users: state.users.filter((user) => user.id !== userId),
    })),
}));

export default useUsersStore;




    // // 유저 로그인
    // userLogin: (userdata) => set((state) => {
    //   const user = state.users.find((user) => user.id === userdata.id && user.password === userdata.password);
      
    //   if (user) {
    //     // 로그인 성공 시 상태 변경
    //     useAuthStore.getState().login(); // 로그인 상태 변경
    //     alert("로그인이 완료되었습니다.");
    //     return { users: state.users }; // users 상태 변경없이 유지
    //   } else {
    //     alert("로그인 실패");
    //     return state; // 실패 시 상태 변경 안함
    //   }
    // }),