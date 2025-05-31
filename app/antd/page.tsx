// ✅ v5.11.0 이상에서 권장되는 방식 (options prop 사용)
import { Select } from 'antd'

const DataBasedSelect = () => {
  return (
    <Select
      className="w-full"
      options={[
        {
          value: 'apple',
          label: '🍎 Apple',
        },
        {
          value: 'banana',
          label: '🍌 Banana',
        },
      ]}
    />
  )
}

// 🙅‍♀️ v5.11.0 미만에서 사용되던 방식 (컴파운드 컴포넌트 스타일)
const { Option } = Select

const CompoundStyleSelect = () => {
  return (
    <Select className="w-full">
      <Option value="apple">🍎 Apple</Option>
      <Option value="banana">🍌 Banana</Option>
    </Select>
  )
}

export default function AntdPage() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl font-bold">Ant Design Select</h1>
      <div>
        <h2 className="mb-2 text-lg font-semibold">
          🙅‍♀️ 컴파운드 스타일 Select (v5.11.0 미만)
        </h2>
        <CompoundStyleSelect />
      </div>
      <hr className="text-gray-200" />
      <div>
        <h2 className="mb-2 text-lg font-semibold">
          ✅ Data 기반 Select (v5.11.0+)
        </h2>
        <DataBasedSelect />
      </div>
    </div>
  )
}
