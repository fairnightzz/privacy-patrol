import { Fragment } from "react";

import { useForm } from "../../../hooks/use-form";
import { useFormStep } from "../../../hooks/use-form-step";
import { useLocalStorage } from "../../../hooks/use-local-storage";

import { AddOnOption } from "./AddOnOption";
import { Footer } from "../../Footer";
import Form from "../../Form";
import { AddonWithPrices, Addon } from "../../../types/add-ons";
import { Select, Callout } from '@radix-ui/themes';

import apps from '@/data/apps.json'

export function PrivacyTest() {

  const { addOns, setAddOns, isYearly } = useForm()

  const { handleNextStep, handlePreviousStep } = useFormStep()

  const { saveValueToLocalStorage } = useLocalStorage()

  function handleSelectAddon(addOn: AddonWithPrices) {
    const formattedAddOn = {
      title: addOn.title,
      description: addOn.description,
      price: addOn.price[isYearly ? 'yearly' : 'monthly']
    }
    setAddOns((currentAddons) => [...currentAddons, formattedAddOn])
  }

  function handleUnselectedAddon(addOn: Addon) {
    setAddOns((currentAddons) => currentAddons.filter(currentAddon => currentAddon.title !== addOn.title))
  }

  function handleGoForwardStep() {
    saveValueToLocalStorage('add-ons', JSON.stringify(addOns))
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
            <div className="text-black text-lg leading-5">Random question. Give me the answer</div>
            <Select.Root >
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
            <div className="text-black text-lg leading-5">Random question. Give me the answer</div>
            <Select.Root >
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