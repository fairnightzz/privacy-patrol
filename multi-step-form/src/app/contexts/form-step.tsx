import { createContext, useEffect, useState } from 'react';
import { useLocalStorage } from '../hooks/use-local-storage';

type FormStepContextData = {
  currentStep: number;
  steps: { title: string; number: number }[];
  handleNextStep: () => void;
  handlePreviousStep: () => void;
  moveToStep(step: number): void;
  setStorageStep(step: number): void;
  moveToApp(app: string): void;
}

export const FormStepContext = createContext({
  currentStep: 2,
  steps: [],
  handleNextStep: () => { },
  handlePreviousStep: () => { },
  moveToStep: () => { },
  setStorageStep: () => { },
  moveToApp: () => { },
} as FormStepContextData);

interface FormStepProviderProps {
  children: React.ReactNode;
}

export const FormStepProvider = ({ children }: FormStepProviderProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [steps, _] = useState([
    { title: 'Your Apps', number: 1 },
    { title: 'Your Phone', number: 2 },
    { title: 'Specfic App', number: 2.01 },
    { title: 'Instagram', number: 2.02 },
    { title: 'Discord', number: 2.03 },
    { title: 'Signal', number: 2.04 },
    { title: 'Notion', number: 2.05 },
    { title: 'Notability', number: 2.06 },
    { title: 'LinkedIn', number: 2.07 },
    { title: 'Walmart', number: 2.08 },
    { title: 'Amazon', number: 2.09 },
    { title: 'Sephora', number: 2.10 },
    { title: 'Delta Airlines', number: 2.11 },
    { title: 'Journal', number: 2.12 },
    { title: 'Fitbit', number: 2.13 },
    { title: 'Ada', number: 2.14 },
    { title: 'Privacy Test', number: 3 },
    { title: 'Summary', number: 4 },
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

  const moveToApp = (app: string) => {
    const step = steps.find(({ title }) => title === app);
    if (step) {
      setCurrentStep(step.number);
      saveValueToLocalStorage('currentStep', `${step.number}`)
    }
  }

  const setStorageStep = (step: number) => {
    saveValueToLocalStorage('currentStep', `${step}`)
  }

  return (
    <FormStepContext.Provider value={{ steps, currentStep, handleNextStep, handlePreviousStep, moveToStep, setStorageStep, moveToApp }}>
      {children}
    </FormStepContext.Provider>
  );
};
