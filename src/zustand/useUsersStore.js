import { create } from "zustand";

const useUsersStore = create(function (set) {
  return {
    users: [], // 초기 상태

    // 유저 추가
    createUser: function (user) {
      set(function (state) {
        return { users: [...state.users, user] };
      });
    },

    // 유저 상태 변경 (isDone 토글)
    updateUser: (userId, updatedUser) => set((state) => ({
      users: state.users.map((user) =>
        user.id === userId ? { ...user, ...updatedUser } : user
      ),
    })),
  

    // 유저 삭제
    deleteUser: (userId) => set((state) => ({ users: state.users.filter((user) => user.id !== userId)}))
  
  }});

export default useUsersStore;
