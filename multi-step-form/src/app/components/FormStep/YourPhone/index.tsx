'use client';

import { Fragment } from "react";

import { useFormStep } from "../../../hooks/use-form-step";
import { useLocalStorage } from "../../../hooks/use-local-storage";
import { useForm } from "../../../hooks/use-form";
import { ACTIONS } from "../../../contexts/form";

import { TextInput } from "../../Form/TextInput";
import Form from "../../Form";
import { Footer } from "../../Footer";
import { IconButton } from '@radix-ui/themes';
import { FaBars } from 'react-icons/fa';
import Image from 'next/image';
import apps from '@/data/apps.json'

export function YourPhone() {
  const {
    nameField,
    dispatchNameField,
    emailField,
    dispatchEmailField,
    phoneNumberField,
    dispatchPhoneNumberField
  } = useForm()

  const { handleNextStep, handlePreviousStep, moveToApp } = useFormStep()

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
      saveValueToLocalStorage('your-info', JSON.stringify({
        name: nameField.value,
        email: emailField.value,
        phoneNumber: phoneNumberField.value
      }))
      handleNextStep()
    }
  }

  const phoneScreenBackground = "/images/phone.png"

  return (
    <Fragment>
      <Form.Card>
        <Form.Header
          title="Your Phone"
          description="Click on each app to view a scenarios that could arise. When you are ready, start the privacy test!"
        />

        {/* <div className="mt-5 flex flex-col gap-4">


        </div> */}

        <div
          className="flex flex-col justify-center items-center w-full mx-auto bg-white p-5 h-[700px] sm:h-[700px] md:h-[900px] lg:h-[900px]"
          style={{ backgroundImage: `url(${phoneScreenBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="grid grid-cols-3 gap-8 pt-4 justify-items-center">
            {apps.map((app, index) => (
              <div key={index} className="flex flex-col justify-center items-center">
                <IconButton size="4" radius="full" variant="soft" onClick={() => moveToApp(app.App)}>
                  <Image src={`/images/${app.image}`} alt="Instagram" width={50} height={50} style={{ objectFit: "contain" }} className="cursor-pointer" />
                  {/* <FaBars /> */}
                </IconButton>
                <div>{app.App}</div>
              </div>
            ))}
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