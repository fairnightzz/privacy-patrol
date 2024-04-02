import { Fragment } from "react";

import { Footer } from "@/app/components/Footer";
import Form from "@/app/components/Form";

import { useFormStep } from "@/app/hooks/use-form-step";
import { useForm } from "@/app/hooks/use-form";

import apps from '@/data/apps.json'
import { PrivacyTable } from "@/app/components/Table";

export function Amazon() {
  // const {} = useForm()

  const app = apps.find(({ App }) => App === "Amazon") || apps[0]
  const { handleNextStep, handlePreviousStep, moveToApp } = useFormStep()

  return (
    <Fragment>
      <Form.Card>
        <Form.Header
          title={app.App}
          description="Amazon Shopping offers app-only benefits to help make shopping on Amazon faster and easier than shopping on your desktop."
          image={`/images/${app.image}`}
        />

        <div className="flex flex-col gap-3 mt-5">
          <p className="text-black font-normal text-base ">
            Eager to prepare for a friend&apos;s birthday, you decided to find the perfect gift that would bring a smile to her face. Knowing her love for skincare, you turned to the trusted shopping app, [Amazon/Sephora/Temu/SHEIN/Walmart/Canadian Tire/Wish/eBay/Costco/H&M/AliExpress], with high hopes of finding a luxurious skincare product that would match her exquisite taste. As you navigated through the app, you were greeted by an array of options, from rejuvenating serums to nourishing creams, each promising to be the elixir of youth and beauty. With a cup of tea by your side and a determination to find the best, you dived deep into product descriptions, customer reviews, and ingredient lists, ensuring that whatever you chose would be both effective and safe for her sensitive skin.
          </p>

          <p className="text-black font-normal text-base ">
            However, as the hours ticked by, your initial excitement began to wane. Despite the vast selection and the high promises, none of the products felt quite right. Some had ingredients she was allergic to, others were from brands she didn&apos;t prefer, and a few just didn&apos;t seem special enough for such an occasion. The realization dawned on you that you might not find what you were looking for, no matter how convenient and extensive its offerings were. Reluctantly, you decided it was time to expand your search to other sites, hopeful that somewhere out there was the perfect skincare gift waiting to be discovered. With a renewed sense of purpose, you closed the app and began your quest anew, determined to find a gift that would epitomize your appreciation and affection for her.
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