import { create } from "zustand";

const useAuthStore = create(function (set) {
  return {
    isLogin: !!localStorage.getItem("accessToken"),

    login: function () {
      set(function () {
        return { isLogin: true };
      });
    },

    logout: function () {
      localStorage.clear();
      set(function () {
        return { isLogin: false };
      });
    },
  };
});

export default useAuthStore;
