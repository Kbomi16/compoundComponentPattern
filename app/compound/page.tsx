'use client'

import {
  Toggle,
  ToggleOn,
  ToggleOff,
  ToggleButton,
} from '../_components/Toggle'

export default function CompoundPage() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl font-bold">컴파운드 컴포넌트 Toggle</h1>
      <Toggle>
        <ToggleButton />
        <ToggleOn>✅ 토글 ON 상태입니다.</ToggleOn>
        <ToggleOff>❌ 토글 OFF 상태입니다.</ToggleOff>
      </Toggle>
    </div>
  )
}
