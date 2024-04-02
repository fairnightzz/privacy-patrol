import { Fragment } from "react";

import { Footer } from "@/app/components/Footer";
import Form from "@/app/components/Form";

import { useFormStep } from "@/app/hooks/use-form-step";
import { useForm } from "@/app/hooks/use-form";

import apps from '@/data/apps.json'
import { PrivacyTable } from "@/app/components/Table";

export function TalkingTom() {
  // const {} = useForm()

  const app = apps.find(({ App }) => App === "Talking Tom") || apps[0]
  const { handleNextStep, handlePreviousStep, moveToApp } = useFormStep()

  return (
    <Fragment>
      <Form.Card>
        <Form.Header
          title={app.App}
          description="Talking Tom is the cat making every day a fun adventure. Players adopt this virtual pet, keep him happy and help him explore his world."
          image={`/images/${app.image}`}
        />

        <div className="flex flex-col gap-3 mt-5">
          <p className="text-black font-normal text-base ">
            You tap the icon for Talking Tom, and the screen comes to life with Tom, the grey tabby cat, greeting you with his cheerful demeanor. As you speak, Tom mimics your words in a high-pitched, amusing voice, causing you to chuckle at the silly echoes of your own sentences. You swipe and tap to feed Tom, stroke his fur, and engage in a series of mini-games, enjoying the interactive antics of your virtual pet.
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