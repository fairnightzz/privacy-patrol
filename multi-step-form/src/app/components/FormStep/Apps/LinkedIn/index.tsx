import { Fragment } from "react";

import { Footer } from "@/app/components/Footer";
import Form from "@/app/components/Form";

import { useFormStep } from "@/app/hooks/use-form-step";
import { useForm } from "@/app/hooks/use-form";
import { PrivacyTable } from "@/app/components/Table";

import apps from '@/data/apps.json'

export function LinkedIn() {
  // const {} = useForm()

  const app = apps.find(({ App }) => App === "LinkedIn") || apps[0]
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
            After finally deciding to take the plunge into the professional world, you download LinkedIn, keenly aware of its reputation as a crucial platform for job seekers, especially for a university student eager to secure promising co-op opportunities. The signup process begins, and you&apos;re soon faced with a barrage of personal questions. From your educational background to detailed work experiences and even personal achievements, LinkedIn&apos;s questionnaire seems to probe deeper than you anticipated. Initially taken aback by the request for what feels like an exhaustive inventory of your life, you hesitate, wondering if divulging so much about yourself online is truly wise. Despite these reservations, the thought of enhancing your job prospects convinces you to proceed, filling out each field with a mix of hope and apprehension about how this information might be used to shape your professional image.
          </p>

          <p className="text-black font-normal text-base ">
            As you meticulously enter your data, a part of you questions the necessity of such detailed information for a job-seeking platform. &quot;Do they really need to know about my participation in a high school science fair?&quot; you wonder, pausing at questions that seem only tangentially related to your career aspirations. Yet, driven by the belief that a comprehensive profile could be your ticket to standout co-op opportunities, you press on. You reflect on the stories of peers who&apos;ve landed their dream roles through connections made on LinkedIn, and this motivates you to share even the minutiae of your achievements and experiences. With each piece of information you provide, you&apos;re investing in the hope that it will pay dividends in the form of job offers and professional networks that will launch your career to new heights.
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