import { Fragment } from "react";

import { Footer } from "@/app/components/Footer";
import Form from "@/app/components/Form";

import { useFormStep } from "@/app/hooks/use-form-step";
import { useForm } from "@/app/hooks/use-form";
import { PrivacyTable } from "@/app/components/Table";
import Image from 'next/image';

import apps from '@/data/apps.json'

export function Fitbit() {
  // const {} = useForm()

  const app = apps.find(({ App }) => App === "Fitbit") || apps[0]
  const { handleNextStep, handlePreviousStep, moveToApp } = useFormStep()

  return (
    <Fragment>
      <Form.Card>
        <Form.Header
          title={app.App}
          description="The Fitbit app is a comprehensive fitness and wellness application that tracks physical activity, sleep patterns, diet, and weight, offering insights and personalized guidance to help users achieve their health and fitness goals."
          image={`/images/${app.image}`}
        />

        <div className="flex flex-col gap-3 mt-5">
          <Image src={`/images/scenarios/fitbit.webp`} className="w-full" unoptimized={true} width={500} height={100} alt="yogurt" style={{ objectFit: "cover" }} />
          <p className="text-black font-normal text-base ">
            As a new graduate stepping into the daunting expanse of real life, the weight of expectations and the relentless pursuit of success often felt overwhelming. Amidst this whirlwind of responsibilities and ambitions, you clung to a semblance of peace through your Fitbit, a constant companion on your wrist that monitored more than just physical activity. It was your gateway to mindfulness and balance, tethered to a health app meticulously curated to guide you through meditations, breathing exercises, and stress management techniques. In moments when the world seemed too much, a glance at your watch was all it took to remind you to pause, breathe, and center yourself. This digital guardian became your anchor, helping navigate the turbulent seas of post-graduation life with a steady hand, reminding you that amidst the chaos, there was always a way to find calm and maintain your well-being.
          </p>
        </div>
        <PrivacyTable appName={app.App} />
      </Form.Card>
      <Footer
        handleGoBack={() => moveToApp("Your Phone")}
      />
    </Fragment>
  )
}