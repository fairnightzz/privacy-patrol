import { Fragment } from "react";

import { Footer } from "@/app/components/Footer";
import Form from "@/app/components/Form";

import { useFormStep } from "@/app/hooks/use-form-step";
import { useForm } from "@/app/hooks/use-form";

import apps from '@/data/apps.json'
import { PrivacyTable } from "@/app/components/Table";

export function YouTube() {
  // const {} = useForm()

  const app = apps.find(({ App }) => App === "YouTube") || apps[0]
  const { handleNextStep, handlePreviousStep, moveToApp } = useFormStep()

  return (
    <Fragment>
      <Form.Card>
        <Form.Header
          title={app.App}
          description="A video sharing and social media platform that allows users to upload, share, and view videos, ranging from music clips to educational content, vlogs, and more."
          image={`/images/${app.image}`}
        />

        <div className="flex flex-col gap-3 mt-5">
          <p className="text-black font-normal text-base ">
            You open YouTube, greeted by a personalized homepage filled with recommendations that align with your interests, from music videos to tutorials. Intrigued by a thumbnail, you click on a video from a creator you&apos;ve been following, eager to dive into their latest content. As the video plays, you scroll through the comments, engaging with a community of viewers, sharing thoughts, and discovering related videos that keep you hooked, spiraling down a rabbit hole of endless entertainment and learning.
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