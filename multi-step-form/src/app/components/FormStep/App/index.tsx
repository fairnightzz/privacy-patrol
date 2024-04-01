import { Fragment } from "react";

import { PlanCard } from "./PlanCard";
import { Footer } from "../../Footer";
import Form from "../../Form";

import { useFormStep } from "@/app/hooks/use-form-step";
import { useLocalStorage } from "@/app/hooks/use-local-storage";
import { useForm } from "@/app/hooks/use-form";
import { TypeOfPlan, PlanWithPrices } from "@/app/types/plan";
import { Switch } from "./Switch";

import plans from '@/app/../data/plans.json'

export function SpecificApp() {
  const {
    selectedPlan,
    setSelectedPlan,
    isYearly,
    setIsYearly
  } = useForm()

  const typeOfPlan: TypeOfPlan = isYearly ? 'yearly' : 'monthly';

  const { handleNextStep, handlePreviousStep, moveToApp } = useFormStep()

  const { saveValueToLocalStorage } = useLocalStorage()

  function handleGoForwardStep() {
    if (!selectedPlan) return;
    saveValueToLocalStorage('plan', JSON.stringify({
      name: selectedPlan,
      price: plans.find(plan => plan.name === selectedPlan.name)?.price[typeOfPlan],
      isYearly
    }))
    handleNextStep()
  }

  function handleSelectPlan(plan: PlanWithPrices) {
    setSelectedPlan({
      name: plan.name,
      price: plan.price[typeOfPlan]
    })
  }


  function handlePlanTypeChange() {
    setIsYearly(!isYearly);
  }

  const scenario = `On a quiet Thursday evening, as the soft glow of the sunset bathed your room in a warm light, you found yourself lost in the endless scroll of your social media feed. Between the snippets of daily lives, the splash of occasional news, and the ever-entertaining array of pet videos, your digital wanderlust was in full swing. It was during this leisurely scroll that a notification popped up, a message from Alex, one of your closest friends. Curiosity piqued, you opened it to find a post shared with you, accompanied by Alex's message: "Thought you'd love this!"


  The post was about Hi Yoghurt, a new brand that had apparently taken a novel approach to yoghurt, infusing it with flavors inspired by desserts from around the world. Intrigued by the concept and the vibrant, mouth-watering images of their yoghurt varieties, you found yourself clicking through to Hi Yoghurt's page. The brand's story, their commitment to natural ingredients, and the creativity behind each flavor captured your imagination. It wasn't just yoghurt; it was a culinary journey. Before you knew it, you had liked their page and were deep in a rabbit hole of their posts, each more enticing than the last.
  
  
  The excitement of discovering something new and delightful was too good to keep to yourself. You quickly composed a message, bundling your newfound enthusiasm for Hi Yoghurt with a few choice posts that had particularly caught your eye. You sent it off to a handful of friends who shared your zest for food and innovation. "You guys have to check this out!" you typed, knowing well that they'd appreciate the blend of culinary artistry and wellness. What followed was a flurry of messages, emojis, and plans to taste-test Hi Yoghurt's creations together. It turned your routine scroll through social media into a shared adventure, a small yet joyful expedition into the world of gourmet yoghurt, all sparked by a single post shared by a friend.
  `

  return (
    <Fragment>
      <Form.Card>
        <Form.Header
          title="Title of App"
          description="asdf"
        />

        <p className="text-black font-normal text-base ">{scenario}</p>

        {/* <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          {plans.map(plan => (
            <PlanCard
              key={plan.name}
              plan={plan}
              icon={plan.icon}
              isSelected={plan.name === selectedPlan?.name}
              handleSelectPlan={handleSelectPlan}
              freeTrialDescription={plan.freeTrialDescription}
            />
          ))}
        </div>

        <div className="flex justify-center items-center gap-6 py-4 bg-very-light-grey mt-6 rounded-lg sm:mt-8">
          <Switch
            handlePlanTypeChange={handlePlanTypeChange}
            isYearly={isYearly}
          />
        </div> */}


      </Form.Card>
      <Footer
        handleGoForwardStep={handleGoForwardStep}
        handleGoBack={() => moveToApp("Your Phone")}
      />
    </Fragment>
  )
}