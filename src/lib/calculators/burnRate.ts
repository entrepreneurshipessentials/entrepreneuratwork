export interface BurnRateInputs {
  monthlyRevenue: number       // $ incoming per month
  monthlyCosts: number         // $ total costs per month
  cashOnHand: number           // $ current cash balance
}

export interface BurnRateOutputs {
  grossBurn: number            // total monthly spend
  netBurn: number              // monthly spend minus revenue
  runwayMonths: number         // months of cash remaining
  runwayDate: Date | null      // calendar date cash runs out
  isRamenProfitable: boolean   // net burn <= 0
}

export function calculateBurnRate(inputs: BurnRateInputs): BurnRateOutputs {
  const { monthlyRevenue, monthlyCosts, cashOnHand } = inputs

  const grossBurn = monthlyCosts
  const netBurn = monthlyCosts - monthlyRevenue

  const isRamenProfitable = netBurn <= 0

  const runwayMonths = isRamenProfitable
    ? Infinity
    : cashOnHand / netBurn

  let runwayDate: Date | null = null
  if (!isRamenProfitable && isFinite(runwayMonths)) {
    const date = new Date()
    date.setMonth(date.getMonth() + Math.floor(runwayMonths))
    runwayDate = date
  }

  return {
    grossBurn,
    netBurn,
    runwayMonths: isFinite(runwayMonths) ? runwayMonths : Infinity,
    runwayDate,
    isRamenProfitable,
  }
}
