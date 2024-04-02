import { Fragment } from "react";

import { Footer } from "@/app/components/Footer";
import Form from "@/app/components/Form";

import { useFormStep } from "@/app/hooks/use-form-step";
import { useForm } from "@/app/hooks/use-form";

import apps from '@/data/apps.json'
import { PrivacyTable } from "@/app/components/Table";

export function PianoTiles() {
  // const {} = useForm()

  const app = apps.find(({ App }) => App === "Piano Tiles") || apps[0]
  const { handleNextStep, handlePreviousStep, moveToApp } = useFormStep()

  return (
    <Fragment>
      <Form.Card>
        <Form.Header
          title={app.App}
          description="Classic piano games just got fine-tuned! Play the popular, top piano game Piano Tiles 2™ and tap to play your favorite tunes! Test your rhythmic reaction skills in addicting, challenging levels, get cool bonuses and try limited-time events.
          "
          image={`/images/${app.image}`}
        />

        <div className="flex flex-col gap-3 mt-5">
          <p className="text-black font-normal text-base ">
            You open Piano Tiles, your screen turning into a sleek, black-and-white keyboard awaiting your touch. As the first notes of a classical melody scroll down, you tap rapidly, each tile playing a note, creating a flow of music under your fingers. Your focus sharpens, the tiles speed up, challenging your reflexes and timing, as you strive to keep the melody flowing without missing a beat.
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