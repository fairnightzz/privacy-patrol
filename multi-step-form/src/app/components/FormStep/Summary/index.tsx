import { Fragment, useEffect, useState } from "react";

import { useForm } from "../../../hooks/use-form";
import { useFormStep } from "../../../hooks/use-form-step";

import { Footer } from "../../Footer";
import Form from "../../Form";
import { PostConfirmation } from "./PostConfirmation";
import Image from 'next/image';
import { Select, Callout } from '@radix-ui/themes';
import { CheckIcon, InfoCircledIcon, Cross2Icon } from '@radix-ui/react-icons';

export function Summary() {
  const [submitted, setSubmitted] = useState(false)

  const { handlePreviousStep, moveToStep, setStorageStep } = useFormStep()
  const { clearForm, question1, question2, question3, question4, question5, question6, question7 } = useForm()


  function handleGoForwardStep() {
    setSubmitted(true)
  }

  useEffect(() => {
    if (submitted) {
      clearForm()
      setStorageStep(1)

      setTimeout(() => {
        moveToStep(1)
      }, 10000)
    }
  }, [submitted, moveToStep])

  if (submitted) {
    return (
      <PostConfirmation />
    )
  }

  const answers = ["Instagram", "Notion", "LinkedIn", "Walmart", "Delta Airlines", "No", "Ada"]
  const explanation = [`Facebook's business model heavily involves monetizing user information through targeted advertising, which has led to significant scrutiny and controversy over the years. While Facebook generates revenue by showing users ads that advertisers can target based on detailed aspects of users' profiles and behaviors, explicit news about Facebook "selling" customers' information in the traditional sense of the word might not be accurate. However, the platform has been involved in various scandals and legal actions related to privacy and data handling practices.
  One of the most significant legal actions against Facebook was the imposition of a $5 billion penalty by the Federal Trade Commission (FTC) for privacy violations. This penalty, announced in July 2019, came with sweeping new privacy restrictions and a modified corporate structure to hold the company accountable for the decisions it makes about its users' privacy. The FTC's action followed various incidents, including the Cambridge Analytica scandal, where data of millions of Facebook users was improperly accessed by a third-party company for political advertising purposes​​.
  Moreover, concerns have been raised about the broader implications of how Facebook and other social media platforms handle user data, especially in light of incidents where data was scraped or accessed without users' explicit consent. For example, data on over 1.5 billion Facebook users was reported to have been sold on hacker forums, with the data including sensitive personal information obtained through web scraping. This situation illustrates the risks associated with vast amounts of personal data being collected and potentially misused​​.
  These incidents underscore the complex dynamics of privacy, data security, and the responsibilities of social media platforms in safeguarding user information. While Facebook provides tools for users to control their privacy settings, the debates and legal actions around its data practices highlight ongoing challenges in the digital age's privacy landscape.
  `,
    "Notion's privacy privacy policy collects a lot of your data. They collect everything you write, and may share them with other companies or organizations. ",
    `When you were filling out your LinkedIn profile, you filled out a lot of information that isn't revelant for job finding. Most of your information is public on LinkedIn unless you
    change settings. Only give information that they require.
    `,
    "Walmart sells your data.",
    "Although airline companies have good security practices, a situation happened where a Delta customer's sensitive data was accidentally shared with a stranger.",
    "No. This is not a privacy issue, but an issue due to Delta's handling of data. Not all cases involve a company sharing your data, and it's important to be aware of the information you disclose to certain apps so you can be ready in the case a data breach happens.",
    "You were worrying that you may be exhibiting signs of diabetes. Unfortunately, Ada doesn't keep your information private and may share it with other companies. Insurance companies in particular can use this data to make decisions that you may not be aware of."
  ]

  return (
    <Fragment>
      <Form.Card>
        <Form.Header
          title="Results"
          description="See how you did!"
        />

        <div className="mt-5 flex flex-col gap-3">
          <div className="mt-5 flex flex-col gap-3">
            <Image src={`/images/yogurt.png`} className="w-full" unoptimized={true} width={500} height={100} alt="yogurt" style={{ objectFit: "contain" }} />
            <div className="text-black text-lg leading-5">You receive an email from Hi Yogurt, even though you do not recall giving them your email. Which app shared your data?</div>
            <Callout.Root color={answers[0] === question1.value ? "green" : "red"}>
              <Callout.Icon>
                {
                  answers[0] === question1.value ?
                    <CheckIcon /> :
                    <Cross2Icon />
                }
              </Callout.Icon>
              <Callout.Text>
                {question1.value}
              </Callout.Text>
            </Callout.Root>
            {
              answers[0] !== question1.value &&
              <div>
                <div>
                  Correct Answer:
                </div>
                <Callout.Root color="green">
                  <Callout.Icon>
                    <CheckIcon />
                  </Callout.Icon>
                  <Callout.Text>
                    {answers[0]}
                  </Callout.Text>
                </Callout.Root>
              </div>
            }
            <Callout.Root>
              <Callout.Icon>
                <InfoCircledIcon />
              </Callout.Icon>
              <Callout.Text>
                {explanation[0]}
              </Callout.Text>
            </Callout.Root>
          </div>

          <div className="mt-5 flex flex-col gap-3">
            <div className="text-black text-lg leading-5">Which app could have shared your data if you noticed while scrolling through TikTok, you began receiving posts focusing on
              people complaining about their teachers?</div>
            <Callout.Root color={answers[1] === question2.value ? "green" : "red"}>
              <Callout.Icon>
                {
                  answers[1] === question2.value ?
                    <CheckIcon /> :
                    <Cross2Icon />
                }
              </Callout.Icon>
              <Callout.Text>
                {question2.value}
              </Callout.Text>
            </Callout.Root>
            {
              answers[1] !== question2.value &&
              <div>
                <div>
                  Correct Answer:
                </div>
                <Callout.Root color="green">
                  <Callout.Icon>
                    <CheckIcon />
                  </Callout.Icon>
                  <Callout.Text>
                    {answers[1]}
                  </Callout.Text>
                </Callout.Root>
              </div>
            }
            <Callout.Root>
              <Callout.Icon>
                <InfoCircledIcon />
              </Callout.Icon>
              <Callout.Text>
                {explanation[1]}
              </Callout.Text>
            </Callout.Root>
          </div>

          <div className="mt-5 flex flex-col gap-3">
            <div className="text-black text-lg leading-5">One crisp autumn morning, as the golden hues of dawn began to illuminate your room, your phone buzzed with the arrival of a new message. Expecting it to be a routine notification or perhaps a message from a friend, you were instead greeted by something far more intriguing. The text message proclaimed that you had won a lottery prize specifically aimed at AI enthusiasts, a recognition of your status as a student from Waterloo in the CS program. The surprise and initial burst of excitement, however, were quickly overshadowed by a wave of skepticism. The message further instructed you to log in to a provided link using your CIBC account, a detail that sent a ripple of alarm through you. This was, indeed, the bank you used, a detail you hadn’t shared widely.

              The specificity of the message, tailored so precisely to your personal and academic life, left you puzzled and concerned. How did the sender obtain this information about your university program, your interest in AI, and, most unnervingly, your choice of bank?
              Given the personalized nature of the text message you received, which app could have revealed your information?</div>
            <Callout.Root color={answers[2] === question3.value ? "green" : "red"}>
              <Callout.Icon>
                {
                  answers[2] === question3.value ?
                    <CheckIcon /> :
                    <Cross2Icon />
                }
              </Callout.Icon>
              <Callout.Text>
                {question3.value}
              </Callout.Text>
            </Callout.Root>
            {
              answers[2] !== question3.value &&
              <div>
                <div>
                  Correct Answer:
                </div>
                <Callout.Root color="green">
                  <Callout.Icon>
                    <CheckIcon />
                  </Callout.Icon>
                  <Callout.Text>
                    {answers[2]}
                  </Callout.Text>
                </Callout.Root>
              </div>
            }
            <Callout.Root>
              <Callout.Icon>
                <InfoCircledIcon />
              </Callout.Icon>
              <Callout.Text>
                {explanation[2]}
              </Callout.Text>
            </Callout.Root>
          </div>

          <div className="mt-5 flex flex-col gap-3">
            <div className="text-black text-lg leading-5">While immersed in your gaming session, an advertisement for skincare products unexpectedly popped up,
              a stark departure from the usual game-related ads you are accustomed to seeing.
              Considering your recent online activities, it&apos;s peculiar that you&apos;d start receiving ads so closely aligned with a private plan you had—searching for a skincare gift for a friend.
              This shift in ad content suggests that information about your gift search, possibly entered or discussed in another app or platform,
              was shared with or accessed by the advertising network serving ads in your game.
              Reflecting on your recent digital interactions, which app or service could have shared your interest in purchasing a skincare gift,
              thereby influencing the advertisements you see while gaming?</div>
            <Callout.Root color={answers[3] === question4.value ? "green" : "red"}>
              <Callout.Icon>
                {
                  answers[3] === question4.value ?
                    <CheckIcon /> :
                    <Cross2Icon />
                }
              </Callout.Icon>
              <Callout.Text>
                {question4.value}
              </Callout.Text>
            </Callout.Root>
            {
              answers[3] !== question4.value &&
              <div>
                <div>
                  Correct Answer:
                </div>
                <Callout.Root color="green">
                  <Callout.Icon>
                    <CheckIcon />
                  </Callout.Icon>
                  <Callout.Text>
                    {answers[3]}
                  </Callout.Text>
                </Callout.Root>
              </div>
            }
            <Callout.Root>
              <Callout.Icon>
                <InfoCircledIcon />
              </Callout.Icon>
              <Callout.Text>
                {explanation[3]}
              </Callout.Text>
            </Callout.Root>
          </div>

          <div className="mt-5 flex flex-col gap-3">
            <div className="text-black text-lg leading-5">
              Discovering that your passport number had leaked was akin to a bolt from the blue on an otherwise unremarkable Tuesday afternoon. The alert came directly from your credit card company, which had implemented advanced monitoring services to protect its customers against fraud. They had found your passport number floating around in the shady corners of the internet, a place it most certainly did not belong. The revelation was both shocking and bewildering, sparking a flurry of questions and fears about the safety of your identity and the sanctity of your personal information.
            </div>
            <div className="text-black text-lg leading-5">
              Clearly, an app that you used had compromised your information. Which app could have leaked your passport information?
            </div>
            <Callout.Root color={answers[4] === question5.value ? "green" : "red"}>
              <Callout.Icon>
                {
                  answers[4] === question5.value ?
                    <CheckIcon /> :
                    <Cross2Icon />
                }
              </Callout.Icon>
              <Callout.Text>
                {question5.value}
              </Callout.Text>
            </Callout.Root>
            {
              answers[4] !== question5.value &&
              <div>
                <div>
                  Correct Answer:
                </div>
                <Callout.Root color="green">
                  <Callout.Icon>
                    <CheckIcon />
                  </Callout.Icon>
                  <Callout.Text>
                    {answers[4]}
                  </Callout.Text>
                </Callout.Root>
              </div>
            }
            <Callout.Root>
              <Callout.Icon>
                <InfoCircledIcon />
              </Callout.Icon>
              <Callout.Text>
                {explanation[4]}
              </Callout.Text>
            </Callout.Root>

            <div className="text-black text-lg leading-5">
              Do you think this is a privacy issue?
            </div>
            <Callout.Root color={answers[5] === question6.value ? "green" : "red"}>
              <Callout.Icon>
                {
                  answers[5] === question6.value ?
                    <CheckIcon /> :
                    <Cross2Icon />
                }
              </Callout.Icon>
              <Callout.Text>
                {question6.value}
              </Callout.Text>
            </Callout.Root>
            {
              answers[5] !== question6.value &&
              <div>
                <div>
                  Correct Answer:
                </div>
                <Callout.Root color="green">
                  <Callout.Icon>
                    <CheckIcon />
                  </Callout.Icon>
                  <Callout.Text>
                    {answers[5]}
                  </Callout.Text>
                </Callout.Root>
              </div>
            }
            <Callout.Root>
              <Callout.Icon>
                <InfoCircledIcon />
              </Callout.Icon>
              <Callout.Text>
                {explanation[5]}
              </Callout.Text>
            </Callout.Root>
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
            <Callout.Root color={answers[6] === question7.value ? "green" : "red"}>
              <Callout.Icon>
                {
                  answers[6] === question7.value ?
                    <CheckIcon /> :
                    <Cross2Icon />
                }
              </Callout.Icon>
              <Callout.Text>
                {question6.value}
              </Callout.Text>
            </Callout.Root>
            {
              answers[6] !== question7.value &&
              <div>
                <div>
                  Correct Answer:
                </div>
                <Callout.Root color="green">
                  <Callout.Icon>
                    <CheckIcon />
                  </Callout.Icon>
                  <Callout.Text>
                    {answers[6]}
                  </Callout.Text>
                </Callout.Root>
              </div>
            }
            <Callout.Root>
              <Callout.Icon>
                <InfoCircledIcon />
              </Callout.Icon>
              <Callout.Text>
                {explanation[6]}
              </Callout.Text>
            </Callout.Root>
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