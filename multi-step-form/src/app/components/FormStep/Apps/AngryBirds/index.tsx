import { Fragment } from "react";

import { Footer } from "@/app/components/Footer";
import Form from "@/app/components/Form";

import { useFormStep } from "@/app/hooks/use-form-step";
import { useForm } from "@/app/hooks/use-form";

import apps from '@/data/apps.json'
import { PrivacyTable } from "@/app/components/Table";

export function AngryBirds() {
  // const {} = useForm()

  const app = apps.find(({ App }) => App === "Angry Birds") || apps[0]
  const { handleNextStep, handlePreviousStep, moveToApp } = useFormStep()

  return (
    <Fragment>
      <Form.Card>
        <Form.Header
          title={app.App}
          description="Play the world's best bird flinging, pig popping game! Use the slingshot to fling birds at the piggies' towers and bring them crashing down - all to save the precious eggs."
          image={`/images/${app.image}`}
        />

        <div className="flex flex-col gap-3 mt-5">
          <p className="text-black font-normal text-base ">
            You launch the Angry Birds app, the familiar theme music filling the room as the menu pops up, showcasing the latest levels. With a swipe and a tap, you select your first level, the slingshot loaded with a determined red bird eyeing the structures hiding the smirking green pigs. You pull back, aim with precision, and release, watching as the bird arcs through the air, crashing into the structure and causing a satisfying collapse, the pigs vanishing in a puff of smoke.
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