'use client'

import { useState, useMemo } from 'react'
import { calculateBurnRate, BurnRateInputs, BurnRateOutputs } from '@/lib/calculators/burnRate'

const defaults: BurnRateInputs = {
  monthlyRevenue: 0,
  monthlyCosts: 20000,
  cashOnHand: 150000,
}

export function useBurnRate() {
  const [inputs, setInputs] = useState<BurnRateInputs>(defaults)

  const results: BurnRateOutputs = useMemo(
    () => calculateBurnRate(inputs),
    [inputs]
  )

  function update(field: keyof BurnRateInputs, value: number) {
    setInputs((prev) => ({ ...prev, [field]: value }))
  }

  return { inputs, results, update }
}
