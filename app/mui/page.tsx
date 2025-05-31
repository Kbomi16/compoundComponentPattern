'use client'

import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import { ChangeEvent, useState } from 'react'

export default function MuiPage() {
  const [checked, setChecked] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked)
  }

  return (
    <div className="flex flex-col gap-8">
      <h1 className="mb-4 text-2xl font-bold">MUI Switch</h1>
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label={checked ? '켜짐 ✅' : '꺼짐 ❌'}
      />
    </div>
  )
}
