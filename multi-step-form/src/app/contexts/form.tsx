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

  health1Field: Field;
  dispatchHealth1Field: React.Dispatch<any>;

  health2Field: Field;
  dispatchHealth2Field: React.Dispatch<any>;

  entertainment1Field: Field;
  dispatchEntertainment1Field: React.Dispatch<any>;

  entertainment2Field: Field;
  dispatchEntertainment2Field: React.Dispatch<any>;

  games1Field: Field;
  dispatchGames1Field: React.Dispatch<any>;

  games2Field: Field;
  dispatchGames2Field: React.Dispatch<any>;
  question1: Field;
  dispatchQuestion1: React.Dispatch<any>;
  question2: Field;
  dispatchQuestion2: React.Dispatch<any>;
  question3: Field;
  dispatchQuestion3: React.Dispatch<any>;
  question4: Field;
  dispatchQuestion4: React.Dispatch<any>;
  question5: Field;
  dispatchQuestion5: React.Dispatch<any>;
  question6: Field;
  dispatchQuestion6: React.Dispatch<any>;
  question7: Field;
  dispatchQuestion7: React.Dispatch<any>;


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

  // Health
  health1Field: initialState,
  dispatchHealth1Field: () => { },
  health2Field: initialState,
  dispatchHealth2Field: () => { },

  // Entertainment
  entertainment1Field: initialState,
  dispatchEntertainment1Field: () => { },
  entertainment2Field: initialState,
  dispatchEntertainment2Field: () => { },

  // Games
  games1Field: initialState,
  dispatchGames1Field: () => { },
  games2Field: initialState,
  dispatchGames2Field: () => { },

  question1: initialState,
  dispatchQuestion1: () => { },
  question2: initialState,
  dispatchQuestion2: () => { },
  question3: initialState,
  dispatchQuestion3: () => { },
  question4: initialState,
  dispatchQuestion4: () => { },
  question5: initialState,
  dispatchQuestion5: () => { },
  question6: initialState,
  dispatchQuestion6: () => { },
  question7: initialState,
  dispatchQuestion7: () => { },

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

  // Health
  const [health1Field, dispatchHealth1Field] = useReducer(handleFormState, initialState);
  const [health2Field, dispatchHealth2Field] = useReducer(handleFormState, initialState);

  // Entertainment
  const [entertainment1Field, dispatchEntertainment1Field] = useReducer(handleFormState, initialState);
  const [entertainment2Field, dispatchEntertainment2Field] = useReducer(handleFormState, initialState);

  // Games
  const [games1Field, dispatchGames1Field] = useReducer(handleFormState, initialState);
  const [games2Field, dispatchGames2Field] = useReducer(handleFormState, initialState);

  // Questions
  const [question1, dispatchQuestion1] = useReducer(handleFormState, initialState);
  const [question2, dispatchQuestion2] = useReducer(handleFormState, initialState);
  const [question3, dispatchQuestion3] = useReducer(handleFormState, initialState);
  const [question4, dispatchQuestion4] = useReducer(handleFormState, initialState);
  const [question5, dispatchQuestion5] = useReducer(handleFormState, initialState);
  const [question6, dispatchQuestion6] = useReducer(handleFormState, initialState);
  const [question7, dispatchQuestion7] = useReducer(handleFormState, initialState);

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


    removeValueFromLocalStorage('q1')
    removeValueFromLocalStorage('q2')
    removeValueFromLocalStorage('q3')
    removeValueFromLocalStorage('q4')
    removeValueFromLocalStorage('q5')
    removeValueFromLocalStorage('q6')
    removeValueFromLocalStorage('q7')

    dispatchQuestion1({ type: ACTIONS.SET_VALUE, value: '' })
    dispatchQuestion2({ type: ACTIONS.SET_VALUE, value: '' })
    dispatchQuestion3({ type: ACTIONS.SET_VALUE, value: '' })
    dispatchQuestion4({ type: ACTIONS.SET_VALUE, value: '' })
    dispatchQuestion5({ type: ACTIONS.SET_VALUE, value: '' })
    dispatchQuestion6({ type: ACTIONS.SET_VALUE, value: '' })
    dispatchQuestion7({ type: ACTIONS.SET_VALUE, value: '' })

    dispatchNameField({ type: ACTIONS.SET_VALUE, value: '' })
    dispatchEmailField({ type: ACTIONS.SET_VALUE, value: '' })
    dispatchPhoneNumberField({ type: ACTIONS.SET_VALUE, value: '' })
    setIsYearly(false)
    setSelectedPlan(null as any)
    setAddOns([])
  }

  useEffect(() => {
    // todo: keep state here

    const questions = getValueFromLocalStorage('questions')
    if (questions) {
      dispatchQuestion1({ type: ACTIONS.SET_VALUE, value: questions.q1 })
      dispatchQuestion2({ type: ACTIONS.SET_VALUE, value: questions.q2 })
      dispatchQuestion3({ type: ACTIONS.SET_VALUE, value: questions.q3 })
      dispatchQuestion4({ type: ACTIONS.SET_VALUE, value: questions.q4 })
      dispatchQuestion5({ type: ACTIONS.SET_VALUE, value: questions.q5 })
      dispatchQuestion6({ type: ACTIONS.SET_VALUE, value: questions.q6 })
      dispatchQuestion7({ type: ACTIONS.SET_VALUE, value: questions.q7 })
    }

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

    health1Field,
    dispatchHealth1Field,
    health2Field,
    dispatchHealth2Field,

    entertainment1Field,
    dispatchEntertainment1Field,
    entertainment2Field,
    dispatchEntertainment2Field,

    games1Field,
    dispatchGames1Field,
    games2Field,
    dispatchGames2Field,

    question1,
    dispatchQuestion1,
    question2,
    dispatchQuestion2,
    question3,
    dispatchQuestion3,
    question4,
    dispatchQuestion4,
    question5,
    dispatchQuestion5,
    question6,
    dispatchQuestion6,
    question7,
    dispatchQuestion7,

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
