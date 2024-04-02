import { Fragment } from "react";

import { Footer } from "@/app/components/Footer";
import Form from "@/app/components/Form";

import { useFormStep } from "@/app/hooks/use-form-step";
import { useForm } from "@/app/hooks/use-form";

import apps from '@/data/apps.json'
import { PrivacyTable } from "@/app/components/Table";

export function Twitch() {
  // const {} = useForm()

  const app = apps.find(({ App }) => App === "Twitch") || apps[0]
  const { handleNextStep, handlePreviousStep, moveToApp } = useFormStep()

  return (
    <Fragment>
      <Form.Card>
        <Form.Header
          title={app.App}
          description="A live streaming platform for gamers where viewers can watch, chat, and interact with streamers and communities around the world."
          image={`/images/${app.image}`}
        />

        <div className="flex flex-col gap-3 mt-5">
          <p className="text-black font-normal text-base ">
            You navigate to Twitch, the screen lighting up with live streams from around the world, showcasing gamers, artists, and talk show hosts. With a quick search, you find a streamer playing your favorite video game, engaging in high-level play that captivates your attention. You join the chat, interacting with fellow viewers and the streamer, becoming part of a community that shares your passion, all while watching live gameplay that entertains and sometimes educates you on strategies and techniques.
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