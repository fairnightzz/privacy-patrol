import { createContext, useEffect, useState } from 'react';
import { useLocalStorage } from '../hooks/use-local-storage';

type FormStepContextData = {
  currentStep: number;
  steps: { title: string; number: number }[];
  handleNextStep: () => void;
  handlePreviousStep: () => void;
  moveToStep(step: number): void;
  setStorageStep(step: number): void;
}

export const FormStepContext = createContext({
  currentStep: 2,
  steps: [],
  handleNextStep: () => { },
  handlePreviousStep: () => { },
  moveToStep: () => { },
  setStorageStep: () => { },
} as FormStepContextData);

interface FormStepProviderProps {
  children: React.ReactNode;
}

export const FormStepProvider = ({ children }: FormStepProviderProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [steps, _] = useState([
    { title: 'Your Apps', number: 1 },
    { title: 'Your Phone', number: 2 },
    { title: 'Scenario 1', number: 2.1 },
    { title: 'ADD-ONS', number: 3 },
    { title: 'ADD-ONS', number: 4 },
    { title: 'Summary', number: 5 },
  ])

  const { getValueFromLocalStorage, saveValueToLocalStorage } = useLocalStorage()

  useEffect(() => {
    const step = getValueFromLocalStorage('currentStep')
    if (step) setCurrentStep(step)
  }, [getValueFromLocalStorage])

  const handleNextStep = () => {
    const newStepValue = currentStep + 1;
    if (currentStep < steps.length) {
      setCurrentStep(newStepValue);
      saveValueToLocalStorage('currentStep', `${newStepValue}`)
    };
  };

  const handlePreviousStep = () => {
    const newStepValue = currentStep - 1;
    if (currentStep > 1) {
      setCurrentStep(newStepValue);
      saveValueToLocalStorage('currentStep', `${newStepValue}`)
    }
  };

  const moveToStep = (step: number) => {
    setCurrentStep(step);
    saveValueToLocalStorage('currentStep', `${step}`)
  }

  const setStorageStep = (step: number) => {
    saveValueToLocalStorage('currentStep', `${step}`)
  }

  return (
    <FormStepContext.Provider value={{ steps, currentStep, handleNextStep, handlePreviousStep, moveToStep, setStorageStep }}>
      {children}
    </FormStepContext.Provider>
  );
};
