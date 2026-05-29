import React, { createContext, useState } from "react";
import { create } from "zustand";


export const useUserStore = create((set) => ({
    userInfo: null,
    setUserInfo: (user) => set({userInfo: user})
 }))