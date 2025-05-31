'use client'

import { useState } from 'react'
import {
  HeadlessToggleButton,
  HeadlessToggleOn,
  HeadlessToggleOff,
  HeadlessToggle,
} from '../_components/HeadlessToggle'
import { Switch } from '@headlessui/react'

export default function HeadlessTogglePage() {
  const [enabled, setEnabled] = useState(false)

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h2 className="mb-2 text-lg font-semibold">완전한 Headless 컴포넌트</h2>
        <HeadlessToggle>
          <HeadlessToggleButton>
            {(on) => (on ? '끄기 ❌' : '켜기 ✅')}
          </HeadlessToggleButton>

          {/* 스타일링 넣는 방법 */}
          {/* <HeadlessToggleButton>
            {(on) => (
              <button className="rounded-2xl bg-red-200 px-4 py-2">
                {on ? '끄기 ❌' : '켜기 ✅'}
              </button>
            )}
          </HeadlessToggleButton> */}

          <HeadlessToggleOn>
            <p>토글이 켜져있어요!</p>
          </HeadlessToggleOn>

          <HeadlessToggleOff>
            <p>토글이 꺼져있어요!</p>
          </HeadlessToggleOff>
        </HeadlessToggle>
      </div>
      <hr className="text-gray-200" />
      <h2 className="mb-2 text-lg font-semibold">Headless UI 라이브러리</h2>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? 'bg-blue-600' : 'bg-gray-300'} relative inline-flex h-6 w-11 items-center rounded-full`}
      >
        <span
          className={`${
            enabled ? 'translate-x-6' : 'translate-x-1'
          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
        />
      </Switch>
    </div>
  )
}
