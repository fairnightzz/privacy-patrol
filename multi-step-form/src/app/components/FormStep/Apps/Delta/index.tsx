import { Fragment } from "react";

import { Footer } from "@/app/components/Footer";
import Form from "@/app/components/Form";

import { useFormStep } from "@/app/hooks/use-form-step";
import { useForm } from "@/app/hooks/use-form";
import { PrivacyTable } from "@/app/components/Table";

import apps from '@/data/apps.json'

export function Delta() {
  // const {} = useForm()

  const app = apps.find(({ App }) => App === "Delta Airlines") || apps[0]
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
            After hearing rave reviews from fellow travelers about its efficiency and utility, you decided to download the Delta app to streamline your travel plans. The app promised a one-stop solution for all travel needs, from booking flights to day-of-travel coordination, including boarding and flight status updates. Upon setting up your profile, you noticed the app requested quite a bit of personal and sensitive information. Details such as your full name, date of birth, and payment information were expected, but the app also sought more comprehensive data, including passport details and travel history. Understanding the importance of a complete profile for security and personalized service, you cautiously proceeded to input the requested information, relying on the app&apos;s security assurances to protect your data.
          </p>

          <p className="text-black font-normal text-base ">
            As you began to use the Delta app more extensively, its value in managing your travel itinerary became abundantly clear. The convenience of having all your travel details at your fingertips, from gate changes to SkyMiles tracking, made navigating through airports a breeze. Especially beneficial was the ability to update and manage sensitive information securely, enhancing your travel experience with personalized alerts and streamlined check-ins. The app became an indispensable tool for your travels, providing not just logistical support but also peace of mind that your sensitive information was handled with care. With each notification that guided you smoothly through your journey, you grew more confident in the decision to trust the app with your travel arrangements and personal details.
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