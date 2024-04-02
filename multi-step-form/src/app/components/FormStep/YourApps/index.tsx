'use client';

import { Fragment } from "react";

import { useFormStep } from "@/app/hooks/use-form-step";
import { useLocalStorage } from "@/app/hooks/use-local-storage";
import { useForm } from "@/app/hooks/use-form";
import { ACTIONS } from "@/app/contexts/form";

import { TextInput } from "../../Form/TextInput";
import Form from "../../Form";
import { Footer } from "../../Footer";
import { Select, Callout, Card } from '@radix-ui/themes';
// import * as Select from "@radix-ui/react-select";
import { CheckIcon, ChevronDownIcon, ChevronUpIcon, InfoCircledIcon } from '@radix-ui/react-icons';

import apps from '@/data/apps.json'


export function YourApps() {
  const {
    socialMedia1Field,
    dispatchSocialMedia1Field,
    socialMedia2Field,
    dispatchSocialMedia2Field,

    shopping1Field,
    dispatchShopping1Field,
    shopping2Field,
    dispatchShopping2Field,

    health1Field,
    dispatchHealth1Field,
    health2Field,
    dispatchHealth2Field,

    entertainment1Field,
    dispatchEntertainment1Field,
    entertainment2Field,
    dispatchEntertainment2Field,

    games1Field,
    dispatchGames1Field,
    games2Field,
    dispatchGames2Field,

    // old values
    nameField,
    dispatchNameField,
    emailField,
    dispatchEmailField,
    phoneNumberField,
    dispatchPhoneNumberField
  } = useForm()

  const { handleNextStep, handlePreviousStep } = useFormStep()

  const { saveValueToLocalStorage } = useLocalStorage()

  function validateForm() {
    let formHasError = false

    // if (!nameField.value) {
    //   dispatchNameField({ type: ACTIONS.SET_ERROR, errorMessage: 'Name is required' })
    //   formHasError = true
    // }

    // if (!emailField.value) {
    //   dispatchEmailField({ type: ACTIONS.SET_ERROR, errorMessage: 'Email is required' })
    //   formHasError = true
    // } else {
    //   const emailRegex = /\S+@\S+\.\S+/
    //   if (!emailRegex.test(emailField.value)) {
    //     dispatchEmailField({ type: ACTIONS.SET_ERROR, errorMessage: 'Email is invalid' })
    //     formHasError = true
    //   }
    // }

    // if (!phoneNumberField.value) {
    //   dispatchPhoneNumberField({ type: ACTIONS.SET_ERROR, errorMessage: 'Phone number is required' })
    //   formHasError = true
    // } else {
    //   if (phoneNumberField.value.length < 6) {
    //     dispatchPhoneNumberField({ type: ACTIONS.SET_ERROR, errorMessage: 'Phone number is invalid' })
    //     formHasError = true
    //   }
    // }

    return !formHasError
  }

  function handleGoForwardStep() {
    const isValid = validateForm()
    if (isValid) {

      saveValueToLocalStorage('apps', JSON.stringify({
        socialMedia1: socialMedia1Field.value,
        socialMedia2: socialMedia2Field.value,
        shopping1Field: shopping1Field.value,
        shopping2Field: shopping2Field.value,
      }))

      saveValueToLocalStorage('your-info', JSON.stringify({
        name: nameField.value,
        email: emailField.value,
        phoneNumber: phoneNumberField.value
      }))

      handleNextStep()
    }
  }

  return (
    <Fragment>
      <Form.Card>
        <Form.Header
          title="Your Apps"
          description="You just downloaded your new phone! Begin by reviewing the apps that you will use."
        />

        <div className="mt-5 flex flex-col gap-4">
          <Callout.Root>
            <Callout.Icon>
              <InfoCircledIcon />
            </Callout.Icon>
            <Callout.Text>
              Since you are a university student, you want to stay connected with your peers.
            </Callout.Text>
          </Callout.Root>

          {
            apps.filter(app => app.Category === "Social Media").map((app, index) => (
              <Card key={index}>
                {app.App}
              </Card>
            ))
          }

          <Callout.Root>
            <Callout.Icon>
              <InfoCircledIcon />
            </Callout.Icon>
            <Callout.Text>
              You need to shop for groceries or gifts, and this means you need some more apps.
            </Callout.Text>
          </Callout.Root>

          {
            apps.filter(app => app.Category === "Shopping").map((app, index) => (
              <Card key={index}>
                {app.App}
              </Card>
            ))
          }

          <Callout.Root>
            <Callout.Icon>
              <InfoCircledIcon />
            </Callout.Icon>
            <Callout.Text>
              Health is important, and this means managing your well being.
            </Callout.Text>
          </Callout.Root>

          {
            apps.filter(app => app.Category === "Health").map((app, index) => (
              <Card key={index}>
                {app.App}
              </Card>
            ))
          }

          <Callout.Root>
            <Callout.Icon>
              <InfoCircledIcon />
            </Callout.Icon>
            <Callout.Text>
              You are a student, which means you have some note taking apps.
            </Callout.Text>
          </Callout.Root>

          {
            apps.filter(app => app.Category === "Productivity").map((app, index) => (
              <Card key={index}>
                {app.App}
              </Card>
            ))
          }

          <Callout.Root>
            <Callout.Icon>
              <InfoCircledIcon />
            </Callout.Icon>
            <Callout.Text>
              You need to relax after long assignments, and this means having entertainment!
            </Callout.Text>
          </Callout.Root>

          {
            apps.filter(app => app.Category === "Entertainment").map((app, index) => (
              <Card key={index}>
                {app.App}
              </Card>
            ))
          }

          <Callout.Root>
            <Callout.Icon>
              <InfoCircledIcon />
            </Callout.Icon>
            <Callout.Text>
              You love games. They keep you sane in Waterloo.
            </Callout.Text>
          </Callout.Root>

          {
            apps.filter(app => app.Category === "Games").map((app, index) => (
              <Card key={index}>
                {app.App}
              </Card>
            ))
          }
        </div>
      </Form.Card>
      <Footer
        handleGoForwardStep={handleGoForwardStep}
        handleGoBack={handlePreviousStep}
      />
    </Fragment>
  )
} 