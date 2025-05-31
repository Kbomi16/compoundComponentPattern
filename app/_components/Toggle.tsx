'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

type ToggleContextType = {
  on: boolean
  toggle: () => void
}

// 토글 상태와 토글 함수(on, toggle)를 공유하기 위한 컨텍스트
const ToggleContext = createContext<ToggleContextType | undefined>(undefined)

// 부모 컴포넌트: 상태 관리만 담당
export function Toggle({ children }: { children: ReactNode }) {
  const [on, setOn] = useState(false)
  const toggle = () => setOn((prev) => !prev)

  return (
    <ToggleContext.Provider value={{ on, toggle }}>
      <div className="flex flex-col items-center gap-4">{children}</div>
    </ToggleContext.Provider>
  )
}

// 토글 버튼
export function ToggleButton() {
  const { toggle, on } = useToggleContext()

  return (
    <button
      onClick={toggle}
      className="cursor-pointer rounded-2xl bg-blue-500 px-4 py-2 text-white"
    >
      {on ? '끄기' : '켜기'}
    </button>
  )
}

// 자식 토글: on이 true일 때
export function ToggleOn({ children }: { children: ReactNode }) {
  const { on } = useToggleContext()

  return on ? <div>{children}</div> : null
}

// 자식 토글: on이 false일 때
export function ToggleOff({ children }: { children: ReactNode }) {
  const { on } = useToggleContext()

  return !on ? <div>{children}</div> : null
}

const useToggleContext = () => {
  const context = useContext(ToggleContext)
  if (!context)
    throw new Error('Toggle compound components must be used within <Toggle>')
  return context
}
