import { Fragment } from "react";

import { Footer } from "@/app/components/Footer";
import Form from "@/app/components/Form";

import { useFormStep } from "@/app/hooks/use-form-step";
import { useForm } from "@/app/hooks/use-form";

import apps from '@/data/apps.json'
import { PrivacyTable } from "@/app/components/Table";

export function Netflix() {
  // const {} = useForm()

  const app = apps.find(({ App }) => App === "Netflix") || apps[0]
  const { handleNextStep, handlePreviousStep, moveToApp } = useFormStep()

  return (
    <Fragment>
      <Form.Card>
        <Form.Header
          title={app.App}
          description="A streaming service offering a wide array of TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices."
          image={`/images/${app.image}`}
        />

        <div className="flex flex-col gap-3 mt-5">
          <p className="text-black font-normal text-base ">
            You settle into your favorite spot and open Netflix, greeted by a cascade of movie and series thumbnails spanning genres and interests. With a scroll and a few taps, you dive into the vast library, selecting a critically acclaimed series that you&apos;ve been meaning to watch. As the episode begins, you&apos;re drawn into an intricately woven narrative, the outside world fading away as you embark on a binge-watching journey, immersing yourself in the lives of characters and stories from across the globe.
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