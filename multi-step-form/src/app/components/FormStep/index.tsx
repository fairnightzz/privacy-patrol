import { useFormStep } from "../../hooks/use-form-step";

import { YourPhone } from "./YourPhone";
import { YourInfo } from "./YourInfo";
import { YourApps } from "./YourApps";
import { Plans } from "./Plans";
import { ScenarioOne } from "./ScenarioOne";
import { SpecificApp } from "./App";
import { Instagram } from "./Apps/Instagram";
import { PrivacyTest } from "./PrivacyTest";
import { Summary } from "./Summary";
import { Discord } from "./Apps/Discord";
import { Signal } from "./Apps/Signal";
import { Notion } from "./Apps/Notion";
import { Notability } from "./Apps/Notability";
import { LinkedIn } from "./Apps/LinkedIn";
import { Walmart } from "./Apps/Walmart";
import { Amazon } from "./Apps/Amazon";
import { Sephora } from "./Apps/Sephora";
import { Delta } from "./Apps/Delta";
import { Journal } from "./Apps/Journal";
import { Fitbit } from "./Apps/Fitbit";
import { Ada } from "./Apps/Ada";
import { AngryBirds } from "./Apps/AngryBirds";
import { TalkingTom } from "./Apps/TalkingTom";
import { PianoTiles } from "./Apps/PianoTiles";
import { Netflix } from "./Apps/Netflix";
import { Twitch } from "./Apps/Twitch";
import { YouTube } from "./Apps/YouTube";


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
    step: 2.01,
    component: SpecificApp // Targeted Advertising
  },
  {
    step: 2.02,
    component: Instagram
  },
  { component: Discord, step: 2.03 },
  { component: Signal, step: 2.04 },
  { component: Notion, step: 2.05 },
  { component: Notability, step: 2.06 },
  { component: LinkedIn, step: 2.07 },
  { component: Walmart, step: 2.08 },
  { component: Amazon, step: 2.09 },
  { component: Sephora, step: 2.10 },
  { component: Delta, step: 2.11 },
  { component: Journal, step: 2.12 },
  { component: Fitbit, step: 2.13 },
  { component: Ada, step: 2.14 },
  { component: AngryBirds, step: 2.15 },
  { component: TalkingTom, step: 2.16 },
  { component: PianoTiles, step: 2.17 },
  { component: Netflix, step: 2.18 },
  { component: Twitch, step: 2.19 },
  { component: YouTube, step: 2.20 },
  {
    step: 3,
    component: PrivacyTest
  },
  // {
  //   step: 4,
  //   component: AddOns
  // },
  {
    step: 4,
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