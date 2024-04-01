import Form from "../../Form";
import Image from 'next/image'

export function PostConfirmation() {
  return (
    <div className="sm:my-auto">
      <Form.Card>
        <div className="flex flex-col items-center">
          <Image
            src={'/images/icons/icon-thank-you.svg'}
            alt="Thank you icon"
            width={56}
            height={56}
          />

          <strong className="mt-6 text-2xl	text-denim font-bold">
            Thank you!
          </strong>

          <p className="mt-2 text-base text-grey font-normal leading-6 tracking-[0.5px] text-center">
            Thank you for participating in the privacy test! We hope you learnt more about privacy polices,
            and how your data can be impacted in ways you have not realized before.
            If you have any questions, please feel free to email us at support@privacypatrol.com.
          </p>
        </div>
      </Form.Card>
    </div>
  )
}