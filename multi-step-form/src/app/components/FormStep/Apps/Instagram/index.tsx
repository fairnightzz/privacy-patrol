import { Fragment } from "react";

import { Footer } from "@/app/components/Footer";
import Form from "@/app/components/Form";

import { useFormStep } from "@/app/hooks/use-form-step";
import { useForm } from "@/app/hooks/use-form";
import { PrivacyTable } from "@/app/components/Table";

import apps from '@/data/apps.json'

export function Instagram() {
  // const {} = useForm()

  const app = apps.find(({ App }) => App === "Instagram") || apps[0]
  const { handleNextStep, handlePreviousStep, moveToApp } = useFormStep()

  return (
    <Fragment>
      <Form.Card>
        <Form.Header
          title={app.App}
          description="Instagram is an photo and video sharing social networking service owned by Meta Platforms. It allows users to upload media that can be edited with filters, be organized by hashtags, and be associated with a location via geographical tagging. Posts can be shared publicly or with preapproved followers."
          image={`/images/${app.image}`}
        />

        <div className="flex flex-col gap-3 mt-5">
          <p className="text-black font-normal text-base ">
            On a quiet Thursday evening, as the soft glow of the sunset bathed your room in a warm light, you found yourself lost in the endless scroll of your social media feed on Instagram.
          </p>

          <p className="text-black font-normal text-base ">
            Between the snippets of daily lives, the splash of occasional news, and the ever-entertaining array of pet videos, your digital wanderlust was in full swing. It was during this leisurely scroll that a notification popped up, a message from Alex, one of your closest friends. Curiosity piqued, you opened it to find a post shared with you, accompanied by Alex&apos;s message: &quot;Thought you&apos;d love this!&quot;
          </p>

          <p className="text-black font-normal text-base ">
            The post was about Hi Yoghurt, a new brand that had apparently taken a novel approach to yoghurt, infusing it with flavors inspired by desserts from around the world. Intrigued by the concept and the vibrant, mouth-watering images of their yoghurt varieties, you found yourself clicking through to Hi Yoghurt&apos;s page. The brand&apos;s story, their commitment to natural ingredients, and the creativity behind each flavor captured your imagination. It wasn&apos;t just yoghurt; it was a culinary journey.
          </p>

          <p className="text-black font-normal text-base ">
            The excitement of discovering something new and delightful was too good to keep to yourself. You quickly composed a message, bundling your newfound enthusiasm for Hi Yoghurt with a few choice posts that had particularly caught your eye. You sent it off to a handful of friends who shared your zest for food and innovation. &quot;You folks have to check this out!&quot; you typed, knowing well that they&apos;d appreciate the blend of culinary artistry and wellness. What followed was a flurry of messages, emojis, and plans to taste-test Hi Yoghurt&apos;s creations together. It turned your routine scroll through social media into a shared adventure, a small yet joyful expedition into the world of gourmet yoghurt, all sparked by a single post shared by a friend.
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