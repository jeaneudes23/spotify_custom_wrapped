import { create } from "zustand";

interface PageGridState {
  leftSidebarExpanded: boolean
  rightSidebarVisible: boolean
  toggleRightSideBar: () => void
  toggleLeftSideBar: () => void
}

export const usePageGridStore = create<PageGridState>((set) => ({
  leftSidebarExpanded: true,
  rightSidebarVisible: true,
  toggleRightSideBar: () => set((state) => ({leftSidebarExpanded: !state.leftSidebarExpanded})),
  toggleLeftSideBar: () => set((state) => ({rightSidebarVisible: !state.rightSidebarVisible}))
}))