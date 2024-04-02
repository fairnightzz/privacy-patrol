import { useFormStep } from '@/app/hooks/use-form-step';
import Image from 'next/image';
interface HeaderProps {
  title: string
  description: string
  image?: string
}

export function Header({ title, description, image }: HeaderProps) {
  const { moveToApp } = useFormStep()
  return (
    <header className="flex flex-col gap-2 sm:gap-3">
      {
        image === undefined ?
          <h1 className="text-denim font-bold text-2xl sm:text-3xl">{title}</h1>
          :
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row gap-2 items-center">
              <Image src={image} alt="Instagram" width={50} height={50} style={{ objectFit: "contain" }} />
              <h1 className="text-denim font-bold text-2xl sm:text-3xl">{title}</h1>
            </div>
            <button className="text-white bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded" onClick={() => moveToApp("Your Phone")}>
              Go Back
            </button>
          </div>

      }

      <p className="text-grey font-normal text-base ">{description}</p>
    </header>
  )
} 