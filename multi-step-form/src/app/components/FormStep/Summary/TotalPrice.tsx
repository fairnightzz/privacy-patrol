import { priceFormatter } from "@/app/util/price-formatter";

interface TotalPriceProps {
  isYearly: boolean;
  finalPrice: number;
}

export function TotalPrice({ finalPrice, isYearly }: TotalPriceProps) {

  const period = isYearly ? 'per year' : 'per month'

  return (
    <div className="mt-6 flex items-center justify-between px-4 sm:px-6">
      <strong className="text-sm leading-relaxed font-normal text-grey">
        {`Total (${period})`}
      </strong>
      <span className="text-base leading-relaxed font-bold text-purple sm:text-xl">
        {priceFormatter(finalPrice, isYearly)}
      </span>
    </div>
  )
}