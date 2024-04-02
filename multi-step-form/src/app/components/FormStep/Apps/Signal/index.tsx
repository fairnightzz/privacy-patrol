import { Fragment } from "react";

import { Footer } from "@/app/components/Footer";
import Form from "@/app/components/Form";

import { useFormStep } from "@/app/hooks/use-form-step";
import { useForm } from "@/app/hooks/use-form";
import { PrivacyTable } from "@/app/components/Table";
import Image from 'next/image';

import apps from '@/data/apps.json'

export function Signal() {
  // const {} = useForm()

  const app = apps.find(({ App }) => App === "Signal") || apps[0]
  const { handleNextStep, handlePreviousStep, moveToApp } = useFormStep()

  return (
    <Fragment>
      <Form.Card>
        <Form.Header
          title={app.App}
          description="Signal is a privacy-focused messaging app that offers end-to-end encryption for secure communication, including text messages, voice and video calls, aimed at protecting user privacy and security."
          image={`/images/${app.image}`}
        />

        <div className="flex flex-col gap-3 mt-5">
          <p className="text-black font-normal text-base ">
            On a quiet Thursday evening, as the soft glow of the sunset bathed your room in a warm light, you find yourself messaging your friends on Signal.
          </p>

          <p className="text-black font-normal text-base ">
            While scrolling through the weather app, you receive a notification from your friend Alex, who sent you a message, saying: &quot;Thought you&apos;d love this!&quot;
          </p>

          <Image src={`/images/scenarios/signal.webp`} className="w-full" unoptimized={true} width={500} height={100} alt="yogurt" style={{ objectFit: "cover" }} />
          <p className="text-black font-normal text-base ">
            The message was about Hi Yoghurt, a new brand that had apparently taken a novel approach to yoghurt, infusing it with flavors inspired by desserts from around the world. Intrigued by the concept and the vibrant, mouth-watering images of their yoghurt varieties, you found yourself looking it up on Hi Yoghurt&apos;s page. The brand&apos;s story, their commitment to natural ingredients, and the creativity behind each flavor captured your imagination. It wasn&apos;t just yoghurt; it was a culinary journey.
          </p>

          <p className="text-black font-normal text-base ">
            The excitement of discovering something new and delightful was too good to keep to yourself. You quickly composed a message, bundling your newfound enthusiasm for Hi Yoghurt and sent it off to a handful of friends who shared your zest for food and innovation. &quot;You folks have to check this out!&quot; you typed, knowing well that they&apos;d appreciate the blend of culinary artistry and wellness. What followed was a flurry of messages, emojis, and plans to taste-test Hi Yoghurt&apos;s creations together. It turned your routine messaging through Signal into a shared adventure, a small yet joyful expedition into the world of gourmet yoghurt, all sparked by a single message sent by a friend.
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