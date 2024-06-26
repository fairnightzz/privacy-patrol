import { Fragment } from "react";

import { Footer } from "@/app/components/Footer";
import Form from "@/app/components/Form";

import { useFormStep } from "@/app/hooks/use-form-step";
import { useForm } from "@/app/hooks/use-form";
import { PrivacyTable } from "@/app/components/Table";
import Image from 'next/image';

import apps from '@/data/apps.json'

export function Notability() {
  // const {} = useForm()

  const app = apps.find(({ App }) => App === "Notability") || apps[0]
  const { handleNextStep, handlePreviousStep, moveToApp } = useFormStep()

  return (
    <Fragment>
      <Form.Card>
        <Form.Header
          title={app.App}
          description="Notability is a versatile note-taking app that combines handwriting, typing, and drawing in one place, making it popular among students and professionals for organizing thoughts, lectures, and meetings with ease on digital devices."
          image={`/images/${app.image}`}
        />

        <div className="flex flex-col gap-3 mt-5">
          <p className="text-black font-normal text-base ">
            It was a Tuesday that began like any other in the vibrant hallways of the school where you studied. You had a backpack slung over your shoulder, a schedule filled with classes you were genuinely interested in, and a sense of optimism about the day ahead. However, this sense of normalcy was shattered in an instant when you were blindsided by an unexpected reprimand from your teacher during a class. The criticism was not only harsh but, in your view, grossly unfair, targeting you for a group project delay that was the result of a collective oversight, not an individual mistake. The sting of injustice burned hotly within you, and as the class ended, you felt a cocktail of emotions: anger, frustration, and a sense of betrayal.
          </p>
          <Image src={`/images/scenarios/notability.png`} className="w-full" unoptimized={true} width={500} height={100} alt="yogurt" style={{ objectFit: "cover" }} />

          <p className="text-black font-normal text-base ">
            In the aftermath, with emotions too raw and thoughts too jumbled to confront your teacher or discuss it with classmates, you turned to the one outlet that had always offered solace: your digital journal on Notability. There, under the glow of your phone screen or tablet, you poured out everything. The words flowed from your fingertips, a torrent of feelings and reflections on the day&apos;s events. You detailed the incident, your reactions, and the deep sense of injustice that gnawed at you. Journaling provided a safe space to vent and articulate your thoughts, serving as a therapeutic release. It allowed you to step back, assess the situation more objectively, and devise a plan of action. This digital outpouring not only helped to calm the storm of emotions within you but also became a crucial step in navigating the complexities of school dynamics and advocating for yourself in the days that followed.
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