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
          description="Answer each question based on what you think is most likely"
        />

        <div className="mt-5 flex flex-col gap-3">
          <div className="mt-5 flex flex-col gap-3">
            <Image src={`/images/yogurt.png`} className="w-full" unoptimized={true} width={500} height={100} alt="yogurt" style={{ objectFit: "contain" }} />
            <div className="text-black text-lg leading-5">You receive an email from Hi Yogurt, even though you do not recall giving them your email. Which app shared your data?</div>
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
            <div className="text-black text-lg leading-5">Which app could have shared your data if you noticed while scrolling through TikTok, you began receiving posts focusing on
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
            <div className="text-black text-lg leading-5">One crisp autumn morning, as the golden hues of dawn began to illuminate your room, your phone buzzed with the arrival of a new message. Expecting it to be a routine notification or perhaps a message from a friend, you were instead greeted by something far more intriguing. The text message proclaimed that you had won a lottery prize specifically aimed at AI enthusiasts, a recognition of your status as a student from Waterloo in the CS program. The surprise and initial burst of excitement, however, were quickly overshadowed by a wave of skepticism. The message further instructed you to log in to a provided link using your CIBC account, a detail that sent a ripple of alarm through you. This was, indeed, the bank you used, a detail you hadn’t shared widely.

              The specificity of the message, tailored so precisely to your personal and academic life, left you puzzled and concerned. How did the sender obtain this information about your university program, your interest in AI, and, most unnervingly, your choice of bank?
              Given the personalized nature of the text message you received, which app could have revealed your information?</div>
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
            <div className="text-black text-lg leading-5">While immersed in your gaming session, an advertisement for skincare products unexpectedly popped up,
              a stark departure from the usual game-related ads you are accustomed to seeing.
              Considering your recent online activities, it&apos;s peculiar that you&apos;d start receiving ads so closely aligned with a private plan you had—searching for a skincare gift for a friend.
              This shift in ad content suggests that information about your gift search, possibly entered or discussed in another app or platform,
              was shared with or accessed by the advertising network serving ads in your game.
              Reflecting on your recent digital interactions, which app or service could have shared your interest in purchasing a skincare gift,
              thereby influencing the advertisements you see while gaming?</div>
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
            <div className="text-black text-lg leading-5">
              Discovering that your passport number had leaked was akin to a bolt from the blue on an otherwise unremarkable Tuesday afternoon. The alert came directly from your credit card company, which had implemented advanced monitoring services to protect its customers against fraud. They had found your passport number floating around in the shady corners of the internet, a place it most certainly did not belong. The revelation was both shocking and bewildering, sparking a flurry of questions and fears about the safety of your identity and the sanctity of your personal information.
            </div>
            <div className="text-black text-lg leading-5">
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
            <div className="text-black text-lg leading-5">
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
            <div className="text-black text-lg leading-5">
              After years of diligently saving from your first job out of college, the moment had finally arrived: you were about to buy your very own car. The sense of independence and achievement was overwhelming as you meticulously researched models, test-drove various cars, and finally settled on the one that felt just right. It was not merely a vehicle; it was a milestone, a symbol of your hard work and dedication. The purchasing process was smooth, and the exhilaration of driving off the dealership lot in a car you could call your own was unmatched. The next logical step was to secure car insurance, a straightforward task you anticipated would be as smooth as the rest of your car-buying experience.
            </div>
            <div className="text-black text-lg leading-5">
              However, upon receiving your insurance quote, you were taken aback by the unexpectedly high premium.
              Confused and concerned, you reached out to the insurance company for clarification, only to discover that your rate had been influenced by a note in your file indicating potential health risks.
              This was perplexing; you were in excellent health, with no known conditions that could be deemed risky by any standard.
              Which app could have shared misinformation, impacting your insurance profile?
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