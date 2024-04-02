import { Fragment } from "react";

import { Footer } from "@/app/components/Footer";
import Form from "@/app/components/Form";

import { useFormStep } from "@/app/hooks/use-form-step";
import { useForm } from "@/app/hooks/use-form";
import { PrivacyTable } from "@/app/components/Table";
import Image from 'next/image';

import apps from '@/data/apps.json'

export function Walmart() {
  // const {} = useForm()

  const app = apps.find(({ App }) => App === "Walmart") || apps[0]
  const { handleNextStep, handlePreviousStep, moveToApp } = useFormStep()

  return (
    <Fragment>
      <Form.Card>
        <Form.Header
          title={app.App}
          description="The Walmart app is a comprehensive mobile platform that allows customers to shop for a wide range of products, access Walmart's grocery pickup and delivery services, and benefit from exclusive app-only deals and features, enhancing the shopping experience with convenience and efficiency."
          image={`/images/${app.image}`}
        />

        <div className="flex flex-col gap-3 mt-5">
          <p className="text-black font-normal text-base ">
            Eager to prepare for a friend&apos;s birthday, you decided to find the perfect gift that would bring a smile to her face. Knowing her love for skincare, you turned to Walmart, with high hopes of finding a skincare product that would match her taste. As you navigated through the app, you found some options, from moisturizers to cleansers. With a cup of coffee by your side and a determination to find the best, you dived deep into product descriptions, customer reviews, and ingredient lists, ensuring that whatever you chose would be both effective and safe.
          </p>
          <Image src={`/images/scenarios/walmart.png`} className="w-full" unoptimized={true} width={500} height={100} alt="yogurt" style={{ objectFit: "cover" }} />

          <p className="text-black font-normal text-base ">
            However, as the hours ticked by, your initial excitement began to wane. Despite the vast selection and the high promises, none of the products felt quite right. Some had ingredients she was allergic to, others were from brands she didn&apos;t prefer, and a few just didn&apos;t seem special enough for such an occasion. The realization dawned on you that you might not find what you were looking for. Reluctantly, you decided it was time to expand your search to other apps.
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