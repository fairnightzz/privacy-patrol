import { Fragment } from "react";

import { Footer } from "@/app/components/Footer";
import Form from "@/app/components/Form";

import { useFormStep } from "@/app/hooks/use-form-step";
import { useForm } from "@/app/hooks/use-form";
import { PrivacyTable } from "@/app/components/Table";
import Image from 'next/image';

import apps from '@/data/apps.json'

export function Sephora() {
  // const {} = useForm()

  const app = apps.find(({ App }) => App === "Sephora") || apps[0]
  const { handleNextStep, handlePreviousStep, moveToApp } = useFormStep()

  return (
    <Fragment>
      <Form.Card>
        <Form.Header
          title={app.App}
          description="The Sephora app is a mobile beauty platform that offers users access to a wide range of cosmetics, skincare products, and fragrances, featuring personalized recommendations, virtual try-on tools, and exclusive app-only promotions to enhance the shopping experience."
          image={`/images/${app.image}`}
        />

        <div className="flex flex-col gap-3 mt-5">
          <p className="text-black font-normal text-base ">
            Eager to prepare for a friend&apos;s birthday, you decided to find the perfect gift that would bring a smile to her face. Knowing her love for skincare, you turned to the trusted shopping app, Sephora, with high hopes of finding a skincare product that would match her exquisite taste. As you navigated through the app, you were greeted by an array of options, from rejuvenating serums to nourishing creams. With a cup of tea by your side and a determination to find the best, you dived deep into product descriptions, customer reviews, and ingredient lists, ensuring that whatever you chose would be both effective and safe.
          </p>
          <Image src={`/images/scenarios/sephora.png`} className="w-full" unoptimized={true} width={500} height={100} alt="yogurt" style={{ objectFit: "cover" }} />

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