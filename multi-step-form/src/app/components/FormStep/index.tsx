import { useFormStep } from "../../hooks/use-form-step";

import { YourPhone } from "./YourPhone";
import { YourInfo } from "./YourInfo";
import { YourApps } from "./YourApps";
import { Plans } from "./Plans";
import { ScenarioOne } from "./ScenarioOne";
import { AddOns } from "./AddOns";
import { Summary } from "./Summary";

const steps = [
  {
    step: 1,
    component: YourApps
  },
  {
    step: 2,
    component: YourPhone
  },
  {
    step: 2.1,
    component: ScenarioOne // Targeted Advertising
  },
  {
    step: 3,
    component: AddOns
  },
  {
    step: 4,
    component: AddOns
  },
  {
    step: 5,
    component: Summary
  }
]

export function FormStep() {
  const { currentStep } = useFormStep();

  const step = steps.find(({ step }) => step === currentStep);

  return (
    <div className="flex flex-col flex-1 justify-between">
      {step && step.component()}
    </div>
  )
} 