'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

type HeadlessToggleContextType = {
  on: boolean
  toggle: () => void
}

const HeadlessToggleContext = createContext<
  HeadlessToggleContextType | undefined
>(undefined)

export function HeadlessToggle({ children }: { children: ReactNode }) {
  const [on, setOn] = useState(false)
  const toggle = () => setOn((prev) => !prev)

  return (
    <HeadlessToggleContext.Provider value={{ on, toggle }}>
      {children}
    </HeadlessToggleContext.Provider>
  )
}

// UI는 렌더 프롭 방식으로 넘겨받음
// 현재 토글 상태 on 값을 함수에 넘겨서, 그 함수가 리턴하는 UI를 버튼 안에 넣음.
export function HeadlessToggleButton({
  children,
}: {
  children: (on: boolean) => React.ReactNode
}) {
  const { toggle, on } = useToggleContext()
  return <button onClick={toggle}>{children(on)}</button>
}

export function HeadlessToggleOn({ children }: { children: ReactNode }) {
  const { on } = useToggleContext()
  return on ? <>{children}</> : null
}

export function HeadlessToggleOff({ children }: { children: ReactNode }) {
  const { on } = useToggleContext()
  return !on ? <>{children}</> : null
}

export const useToggleContext = () => {
  const context = useContext(HeadlessToggleContext)
  if (!context) {
    throw new Error(
      'HeadlessToggle compound components must be used within <HeadlessToggle>',
    )
  }
  return context
}
