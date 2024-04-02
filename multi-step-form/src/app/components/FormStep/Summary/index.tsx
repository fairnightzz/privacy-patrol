import { ChangeEvent, ChangeEventHandler, Fragment, useEffect, useState } from "react";

import { useForm } from "../../../hooks/use-form";
import { useFormStep } from "../../../hooks/use-form-step";

import { Footer } from "../../Footer";
import Form from "../../Form";
import { PostConfirmation } from "./PostConfirmation";
import Image from 'next/image';
import { Select, Callout, TextArea } from '@radix-ui/themes';
import { CheckIcon, InfoCircledIcon, Cross2Icon } from '@radix-ui/react-icons';
import addData from "@/firebase/addData";

export function Summary() {
  const [submitted, setSubmitted] = useState(false)

  const { handlePreviousStep, moveToStep, setStorageStep } = useFormStep()
  const { clearForm, question1, question2, question3, question4, question5, question6, question7 } = useForm()
  const [response, setResponse] = useState("")

  useEffect(() => {
    window.scrollTo(0, 0);
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
  const explanation = ["Instagram, like its parent company Facebook, has faced criticism for its approach to monetizing user data through targeted advertising. This strategy involves sharing a significant amount of user data with third-party advertisers to tailor ads more effectively. While Instagram does not sell user information in the traditional sense, its practice of allowing advertisers to target users based on detailed aspects of their profiles and behaviors has sparked privacy concerns. The platform's data-sharing practices have led to discussions about the balance between personalized advertising and user privacy. Instagram offers privacy settings to help users manage their data, yet the extent of data shared with third parties remains a contentious issue, reflecting broader challenges in digital privacy and security.",
    "Notion's privacy privacy policy collects a lot of your data. They collect everything you write, and may share them with other companies or organizations. ",
    `When you were filling out your LinkedIn profile, you filled out a lot of information that isn't revelant for job finding. Most of your information is public on LinkedIn unless you
    change settings. Only give information that they require.
    `,
    "Walmart sells your data.",
    "Although airline companies have good security practices, a situation happened where a Delta customer's sensitive data was accidentally shared with a stranger.",
    "No. This is not a privacy issue, but an issue due to Delta's handling of data. Not all cases involve a company sharing your data, and it's important to be aware of the information you disclose to certain apps so you can be ready in the case a data breach happens.",
    "You were worrying that you may be exhibiting signs of diabetes. Unfortunately, Ada doesn't keep your information private and may share it with other companies. Insurance companies in particular can use this data to make decisions that you may not be aware of."
  ]


  const comparison = [question1.value === answers[0],
  question2.value === answers[1],
  question3.value === answers[2],
  question4.value === answers[3],
  question5.value === answers[4],
  question6.value === answers[5],
  question7.value === answers[6]
  ].filter(item => item === true).length

  const handleGoForwardStep = async () => {
    const data = {
      score: comparison,
      response: response
    }

    const { result, error } = await addData('quiz', data)

    // do things here
    setSubmitted(true)
  }

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.currentTarget.value
    setResponse(newValue)
  }

  return (
    <Fragment>
      <Form.Card>
        <Form.Header
          title="Summary"
          description="See how you did!"
        />

        <div className="mt-5 flex flex-col gap-3">
          <h1 className="text-denim font-bold text-xl sm:text-2xl">Score: {Math.round(comparison / 7 * 100)}%</h1>
          <div className="text-black text-lg leading-relaxed">After taking the test and viewing your score, does this change how you will share data with apps that you are using?</div>
          <TextArea placeholder="Share your thoughts!" onChange={onChange} />

          <h1 className="text-denim font-bold text-2xl sm:text-3xl mt-5">Results</h1>
          <div className="mt-5 flex flex-col gap-3">
            <Image src={`/images/yogurt.png`} className="w-full" unoptimized={true} width={500} height={100} alt="yogurt" style={{ objectFit: "contain" }} />
            <div className="text-black text-lg leading-relaxed">You receive an email from Hi Yogurt, even though you do not recall giving them your email. Which app shared your data?</div>
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
            <div className="text-black text-lg leading-relaxed">Which app could have shared your data if you noticed while scrolling through TikTok, you began receiving posts focusing on
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
            <div className="text-black text-lg leading-relaxed">
              You received a text message early one morning saying you won a lottery prize aimed at AI enthusiasts from Waterloo&apos;s CS program. It asked you to log in with your CIBC account, causing concern over how the sender knew about your university program, interest in AI, and your bank.
              You clearly know that this is a scam, but the the message is tailored so precisely to your personal and academic life leaving you concerned.
              Given the personalized nature of the text message you received, which app could have revealed your information?
            </div>
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
            <div className="text-black text-lg leading-relaxed">While gaming, you encountered a skincare ad, unexpected compared to the usual game-related ads. This suggests your recent search for a skincare gift for a friend was somehow shared with the game&apos;s ad network. What app or service could have leaked your intent to buy a skincare gift for a friend, influencing the ads you see during gaming?</div>
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
            <div className="text-black text-lg leading-relaxed">
              Discovering that your passport number had leaked was akin to a bolt from the blue on an otherwise unremarkable Tuesday afternoon. The alert came directly from your credit card company, which had implemented advanced monitoring services to protect its customers against fraud. They had found your passport number floating around in the shady corners of the internet, a place it most certainly did not belong. The revelation was both shocking and bewildering, sparking a flurry of questions and fears about the safety of your identity and the sanctity of your personal information.
            </div>
            <div className="text-black text-lg leading-relaxed">
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

            <div className="text-black text-lg leading-relaxed">
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
            <div className="text-black text-lg leading-relaxed">
              After saving for years, you finally bought your first car, a significant milestone. The purchase process went smoothly, but when you went to get car insurance, the quote was unexpectedly high. Upon inquiry, you found out your insurance premium was influenced by a note in your file about potential health risks, despite being in excellent health. Which app could have shared such misinformation, affecting your insurance profile?
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
                {question7.value}
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