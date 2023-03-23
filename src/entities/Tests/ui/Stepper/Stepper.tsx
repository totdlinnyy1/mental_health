import {Step, Steps} from 'chakra-ui-steps'
import {ComponentType} from 'react'

interface IProps {
  activeStep: number
  stepCount: number
}

const Stepper: ComponentType<IProps> = ({activeStep, stepCount}) => {
  const steps = [...Array(stepCount).keys()]

  return (
    <Steps colorScheme='blue' activeStep={activeStep}>
      {steps.map(step => (
        <Step key={step} />
      ))}
    </Steps>
  )
}
export default Stepper
