import { Fragment } from "react";

import { Footer } from "@/app/components/Footer";
import Form from "@/app/components/Form";

import { useFormStep } from "@/app/hooks/use-form-step";
import { useForm } from "@/app/hooks/use-form";

import apps from '@/data/apps.json'

export function Ada() {
  // const {} = useForm()

  const app = apps.find(({ App }) => App === "Ada") || apps[0]
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
            Concerned about experiencing symptoms that could be indicative of diabetes, such as increased thirst, frequent urination, and unexplained weight loss, you turned to the Ada app for insight. The app, known for its detailed symptom analysis, seemed like a discreet and immediate way to address your growing concerns without the initial overwhelm of a doctor&apos;s visit. After downloading Ada, you meticulously entered each symptom, taking care to include every relevant detail about your health and recent changes you had noticed. The process was intuitive, with Ada asking follow-up questions that made you feel as though you were having a conversation with a healthcare professional, guiding you through each step with precision and understanding.
          </p>
          <p className="text-black font-normal text-base ">
            Once you completed the questionnaire, Ada provided a preliminary assessment of your symptoms, suggesting that they could indeed be related to diabetes but also emphasizing the importance of consulting a healthcare provider for a definitive diagnosis and personalized advice. The app outlined possible next steps, including recommended tests and lifestyle adjustments that could be beneficial irrespective of the diagnosis. This information armed you with the knowledge and confidence needed to approach your healthcare journey proactively. While the possibility of diabetes was daunting, the clarity and direction Ada provided made the situation feel more manageable, encouraging you to schedule an appointment with your doctor for a comprehensive evaluation and to discuss the findings from the Ada app as part of your consultation.
          </p>
        </div>
      </Form.Card>
      <Footer
        handleGoBack={() => moveToApp("Your Phone")}
      />
    </Fragment>
  )
}