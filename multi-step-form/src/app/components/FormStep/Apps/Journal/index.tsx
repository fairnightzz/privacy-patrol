import { Fragment } from "react";

import { Footer } from "@/app/components/Footer";
import Form from "@/app/components/Form";

import { useFormStep } from "@/app/hooks/use-form-step";
import { useForm } from "@/app/hooks/use-form";
import { PrivacyTable } from "@/app/components/Table";

import apps from '@/data/apps.json'

export function Journal() {
  // const {} = useForm()

  const app = apps.find(({ App }) => App === "Journal") || apps[0]
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
            In an effort to manage the swirling thoughts and concerns crowding your mind, you decided to use the Journal app as a means to declutter and process your feelings. The app, with its easy-to-navigate interface and secure privacy features, seemed like the perfect space to candidly express your worries and aspirations. One evening, as the stress of future financial obligations weighed heavily on you, you opened the Journal app to confront one of your most pressing anxieties: the fear of not being able to pay off your OSAP loans. The blank digital page offered a non-judgmental canvas for you to lay bare the intricacies of your situation, detailing your current financial status, your repayment plan, and the looming uncertainties that made the future seem daunting.
          </p>

          <p className="text-black font-normal text-base ">
            As you typed, the act of articulating your fears and breaking down your financial strategy brought a sense of clarity and calm. The Journal app not only kept these sensitive reflections secure but also helped you organize your thoughts in a structured manner, making your problems seem less insurmountable. You detailed various scenarios, calculating repayment schedules and considering alternative income sources, turning abstract fears into tangible challenges that could be addressed. This exercise of opening up about your vulnerabilities in a private, secure space allowed you to explore solutions you hadn&apos;t previously considered. It was through this digital reflection that you realized the power of facing your fears head-on, armed with a plan and the knowledge that the first step to overcoming any challenge is acknowledging it exists.
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