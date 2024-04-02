import { Fragment } from "react";

import { useForm } from "@/app/hooks/use-form";
import { useFormStep } from "@/app/hooks/use-form-step";
import { useLocalStorage } from "@/app/hooks/use-local-storage";

import { AddOnOption } from "./AddOnOption";
import { Footer } from "../../Footer";
import Form from "../../Form";
import { AddonWithPrices, Addon } from "@/app/types/add-ons";
import { Select, Callout } from '@radix-ui/themes';
import { ACTIONS } from "@/app/contexts/form";
import Image from 'next/image';

import apps from '@/data/apps.json'

export function PrivacyTest() {

  const { dispatchQuestion1,
    dispatchQuestion2,
    dispatchQuestion3,
    dispatchQuestion4,
    dispatchQuestion5,
    dispatchQuestion6,
    dispatchQuestion7,
    question1,
    question2,
    question3,
    question4,
    question5,
    question6,
    question7
  } = useForm()

  const { handleNextStep, handlePreviousStep } = useFormStep()

  const { saveValueToLocalStorage } = useLocalStorage()


  function handleGoForwardStep() {
    const questions = {
      "q1": question1.value,
      "q2": question2.value,
      "q3": question3.value,
      "q4": question4.value,
      "q5": question5.value,
      "q6": question6.value,
      "q7": question7.value,
    }
    saveValueToLocalStorage('questions', JSON.stringify(questions))
    handleNextStep()
  }

  return (
    <Fragment>
      <Form.Card>
        <Form.Header
          title="Privacy Test"
          description="Answer each question based on what you think is most likely. If you are unsure, go back and read some of the app scenarios."
        />

        <div className="mt-5 flex flex-col gap-3">
          <div className="mt-5 flex flex-col gap-3">
            <Image src={`/images/yogurt.png`} className="w-full" unoptimized={true} width={500} height={100} alt="yogurt" style={{ objectFit: "contain" }} />
            <div className="text-black text-lg leading-relaxed">You receive an email from Hi Yogurt, even though you do not recall giving them your email. Which app shared your data?</div>
            <Select.Root onValueChange={(value: string) => dispatchQuestion1({ type: ACTIONS.SET_VALUE, value })}>
              <Select.Trigger />
              <Select.Content>
                <Select.Group>
                  {
                    apps.map((app, index) => (
                      <Select.Item value={app.App} key={index}>
                        {app.App}
                      </Select.Item>
                    ))
                  }
                </Select.Group>
              </Select.Content>
            </Select.Root>
          </div>

          <div className="mt-5 flex flex-col gap-3">
            <div className="text-black text-lg leading-relaxed">Which app could have shared your data if you noticed while scrolling through TikTok, you began receiving posts focusing on
              people complaining about their teachers?</div>
            <Select.Root onValueChange={(value: string) => dispatchQuestion2({ type: ACTIONS.SET_VALUE, value })}>
              <Select.Trigger />
              <Select.Content>
                <Select.Group>
                  {
                    apps.map((app, index) => (
                      <Select.Item value={app.App} key={index}>
                        {app.App}
                      </Select.Item>
                    ))
                  }
                </Select.Group>
              </Select.Content>
            </Select.Root>
          </div>

          <div className="mt-5 flex flex-col gap-3">
            <div className="text-black text-lg leading-relaxed">
              You received a text message early one morning saying you won a lottery prize aimed at AI enthusiasts from Waterloo&apos;s CS program. It asked you to log in with your CIBC account, causing concern over how the sender knew about your university program, interest in AI, and your bank.
              You clearly know that this is a scam, but the the message is tailored so precisely to your personal and academic life leaving you concerned.
              Given the personalized nature of the text message you received, which app could have revealed your information?
            </div>
            <Select.Root onValueChange={(value: string) => dispatchQuestion3({ type: ACTIONS.SET_VALUE, value })}>
              <Select.Trigger />
              <Select.Content>
                <Select.Group>
                  {
                    apps.map((app, index) => (
                      <Select.Item value={app.App} key={index}>
                        {app.App}
                      </Select.Item>
                    ))
                  }
                </Select.Group>
              </Select.Content>
            </Select.Root>
          </div>

          <div className="mt-5 flex flex-col gap-3">
            <div className="text-black text-lg leading-relaxed">While gaming, you encountered a skincare ad, unexpected compared to the usual game-related ads. This suggests your recent search for a skincare gift for a friend was somehow shared with the game&apos;s ad network. What app or service could have leaked your intent to buy a skincare gift for a friend, influencing the ads you see during gaming?</div>
            <Select.Root onValueChange={(value: string) => dispatchQuestion4({ type: ACTIONS.SET_VALUE, value })}>
              <Select.Trigger />
              <Select.Content>
                <Select.Group>
                  {
                    apps.map((app, index) => (
                      <Select.Item value={app.App} key={index}>
                        {app.App}
                      </Select.Item>
                    ))
                  }
                </Select.Group>
              </Select.Content>
            </Select.Root>
          </div>

          <div className="mt-5 flex flex-col gap-3">
            <div className="text-black text-lg leading-relaxed">
              Discovering that your passport number had leaked was akin to a bolt from the blue on an otherwise unremarkable Tuesday afternoon. The alert came directly from your credit card company, which had implemented advanced monitoring services to protect its customers against fraud. They had found your passport number floating around in the shady corners of the internet, a place it most certainly did not belong. The revelation was both shocking and bewildering, sparking a flurry of questions and fears about the safety of your identity and the sanctity of your personal information.
            </div>
            <div className="text-black text-lg leading-relaxed">
              Clearly, an app that you used had compromised your information. Which app could have leaked your passport information?
            </div>
            <Select.Root onValueChange={(value: string) => dispatchQuestion5({ type: ACTIONS.SET_VALUE, value })}>
              <Select.Trigger />
              <Select.Content>
                <Select.Group>
                  {
                    apps.map((app, index) => (
                      <Select.Item value={app.App} key={index}>
                        {app.App}
                      </Select.Item>
                    ))
                  }
                </Select.Group>
              </Select.Content>
            </Select.Root>
            <div className="text-black text-lg leading-relaxed">
              Do you think this is a privacy issue?
            </div>
            <Select.Root onValueChange={(value: string) => dispatchQuestion6({ type: ACTIONS.SET_VALUE, value })}>
              <Select.Trigger />
              <Select.Content>
                <Select.Group>
                  <Select.Item value="Yes">
                    Yes
                  </Select.Item>
                  <Select.Item value="No">
                    No
                  </Select.Item>
                </Select.Group>
              </Select.Content>
            </Select.Root>
          </div>

          <div className="mt-5 flex flex-col gap-3">
            <div className="text-black text-lg leading-relaxed">
              After saving for years, you finally bought your first car, a significant milestone. The purchase process went smoothly, but when you went to get car insurance, the quote was unexpectedly high. Upon inquiry, you found out your insurance premium was influenced by a note in your file about potential health risks, despite being in excellent health. Which app could have shared such misinformation, affecting your insurance profile?
            </div>
            <Select.Root onValueChange={(value: string) => dispatchQuestion7({ type: ACTIONS.SET_VALUE, value })}>
              <Select.Trigger />
              <Select.Content>
                <Select.Group>
                  {
                    apps.map((app, index) => (
                      <Select.Item value={app.App} key={index}>
                        {app.App}
                      </Select.Item>
                    ))
                  }
                </Select.Group>
              </Select.Content>
            </Select.Root>
          </div>
        </div>

      </Form.Card>
      <Footer
        handleGoForwardStep={handleGoForwardStep}
        handleGoBack={handlePreviousStep}
      />
    </Fragment>
  )
}