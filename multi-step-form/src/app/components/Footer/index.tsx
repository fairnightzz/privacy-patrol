import { useFormStep } from "../../hooks/use-form-step";

interface FooterProps {
  handleGoBack?: () => void;
  handleGoForwardStep?: () => void;
}

export function Footer({ handleGoBack, handleGoForwardStep }: FooterProps) {
  const { currentStep, steps } = useFormStep();

  const numberOfSteps = steps[steps.length - 1].number;
  const isLastStep = currentStep === numberOfSteps;

  return (
    <footer className="p-4 bg-white flex justify-between items-center">
      <button
        onClick={handleGoBack}
        disabled={handleGoBack === undefined}
        className={`border-none bg-blue-500 hover:bg-blue-700 py-3 px-4 rounded text-sm text-white font-bold ${currentStep === 1 ? 'invisible' : 'visible'} sm:text-base`}
      >
        Go back
      </button>
      {
        handleGoForwardStep &&
        <button
          onClick={handleGoForwardStep}
          className={`${isLastStep ? 'bg-purple' : 'bg-blue-500'} font-bold hover:bg-blue-700 py-3 px-4 rounded text-sm text-white sm:text-base`}
        >
          {isLastStep ? 'Confirm' : 'Next step'}
        </button>
      }
    </footer >
  )
}