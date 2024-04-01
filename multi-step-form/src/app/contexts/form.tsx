import { createContext, useEffect, useReducer, useState } from 'react';
import { useLocalStorage } from '../hooks/use-local-storage';

type Field = {
  value: string;
  hasError: boolean;
  errorMessage: string;
}

const initialState = {
  value: '',
  hasError: false,
  errorMessage: ''
}

type FormContextData = {
  socialMedia1Field: Field;
  dispatchSocialMedia1Field: React.Dispatch<any>;
  socialMedia2Field: Field;
  dispatchSocialMedia2Field: React.Dispatch<any>;

  shopping1Field: Field;
  dispatchShopping1Field: React.Dispatch<any>;
  shopping2Field: Field;
  dispatchShopping2Field: React.Dispatch<any>;

  nameField: Field;
  dispatchNameField: React.Dispatch<any>;
  emailField: Field;
  dispatchEmailField: React.Dispatch<any>;
  phoneNumberField: Field;
  dispatchPhoneNumberField: React.Dispatch<any>;
  isYearly: boolean;
  setIsYearly: React.Dispatch<React.SetStateAction<boolean>>;
  selectedPlan: Plan;
  setSelectedPlan: React.Dispatch<React.SetStateAction<Plan>>;
  addOns: { title: string, description: string, price: number }[];
  setAddOns: React.Dispatch<React.SetStateAction<{ title: string; description: string; price: number; }[]>>;
  clearForm: () => void;
}

export const FormContext = createContext({
  // Social Media, Shopping, Entertainment, Health, Business, Financial Services, Games
  socialMedia1Field: initialState,
  dispatchSocialMedia1Field: () => { },
  socialMedia2Field: initialState,
  dispatchSocialMedia2Field: () => { },

  // Shopping
  shopping1Field: initialState,
  dispatchShopping1Field: () => { },
  shopping2Field: initialState,
  dispatchShopping2Field: () => { },

  nameField: initialState,
  dispatchNameField: () => { },
  emailField: initialState,
  dispatchEmailField: () => { },
  phoneNumberField: initialState,
  dispatchPhoneNumberField: () => { },
  isYearly: false,
  setIsYearly: () => { },
  selectedPlan: null as any,
  setSelectedPlan: () => { },
  addOns: [],
  setAddOns: () => { },
  clearForm: () => { }
} as FormContextData);

export const ACTIONS = {
  SET_VALUE: 'SET_VALUE',
  SET_ERROR: 'SET_ERROR',
  CLEAR_ERROR: 'CLEAR_ERROR'
}

function handleFormState(
  state: Field,
  action: any
) {
  switch (action.type) {
    case ACTIONS.SET_VALUE:
      return {
        ...state,
        value: action.value,
        hasError: false,
        errorMessage: ''
      }
    case ACTIONS.SET_ERROR:
      return {
        ...state,
        hasError: true,
        errorMessage: action.errorMessage
      }
    case ACTIONS.CLEAR_ERROR:
      return {
        ...state,
        error: '',
        hasError: false
      }
    default:
      return state
  }
}

export type Plan = {
  name: string;
  price: number
}

interface FormProviderProps {
  children: React.ReactNode;
}

export const FormProvider = ({ children }: FormProviderProps) => {
  // Social Media
  const [socialMedia1Field, dispatchSocialMedia1Field] = useReducer(handleFormState, initialState)
  const [socialMedia2Field, dispatchSocialMedia2Field] = useReducer(handleFormState, initialState)

  // Shopping
  const [shopping1Field, dispatchShopping1Field] = useReducer(handleFormState, initialState)
  const [shopping2Field, dispatchShopping2Field] = useReducer(handleFormState, initialState)

  // Your Info
  const [nameField, dispatchNameField] = useReducer(handleFormState, initialState)
  const [emailField, dispatchEmailField] = useReducer(handleFormState, initialState)
  const [phoneNumberField, dispatchPhoneNumberField] = useReducer(handleFormState, initialState)

  // Plan
  const [isYearly, setIsYearly] = useState<boolean>(false);
  const [selectedPlan, setSelectedPlan] = useState<Plan>(null as any);

  // Add Ons
  const [addOns, setAddOns] = useState<{ title: string, description: string, price: number }[]>([]);

  const { getValueFromLocalStorage, removeValueFromLocalStorage } = useLocalStorage()

  function clearForm() {
    // todo: clear state here


    removeValueFromLocalStorage('your-info')
    removeValueFromLocalStorage('plan')
    removeValueFromLocalStorage('add-ons')

    dispatchNameField({ type: ACTIONS.SET_VALUE, value: '' })
    dispatchEmailField({ type: ACTIONS.SET_VALUE, value: '' })
    dispatchPhoneNumberField({ type: ACTIONS.SET_VALUE, value: '' })
    setIsYearly(false)
    setSelectedPlan(null as any)
    setAddOns([])
  }

  useEffect(() => {
    // todo: keep state here


    const yourInfoFromLocalStorage = getValueFromLocalStorage('your-info')
    if (yourInfoFromLocalStorage) {
      dispatchNameField({ type: ACTIONS.SET_VALUE, value: yourInfoFromLocalStorage.name })
      dispatchEmailField({ type: ACTIONS.SET_VALUE, value: yourInfoFromLocalStorage.email })
      dispatchPhoneNumberField({ type: ACTIONS.SET_VALUE, value: yourInfoFromLocalStorage.phoneNumber })
    }

    const planFromLocalStorage = getValueFromLocalStorage('plan')
    if (planFromLocalStorage) {
      setSelectedPlan(planFromLocalStorage.name)
      setIsYearly(planFromLocalStorage.isYearly)
    }

    const addOnsFromLocalStorage = getValueFromLocalStorage('add-ons')
    if (addOnsFromLocalStorage) {
      setAddOns(addOnsFromLocalStorage)
    }
  }, [])

  const value = {
    socialMedia1Field,
    dispatchSocialMedia1Field,
    socialMedia2Field,
    dispatchSocialMedia2Field,

    shopping1Field,
    dispatchShopping1Field,
    shopping2Field,
    dispatchShopping2Field,
    nameField,
    dispatchNameField,
    emailField,
    dispatchEmailField,
    phoneNumberField,
    dispatchPhoneNumberField,
    isYearly,
    setIsYearly,
    selectedPlan,
    setSelectedPlan,
    addOns,
    setAddOns,
    clearForm
  }

  return (
    <FormContext.Provider value={{ ...value }}>
      {children}
    </FormContext.Provider>
  );
};
