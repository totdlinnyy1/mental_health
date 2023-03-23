import {ComponentType} from 'react'
import {Step, Steps, useSteps} from 'chakra-ui-steps'
import {Flex} from '@chakra-ui/react'
const stepNumber = [
  {id: 1},
  {
    id: 2
  },
  {
    id: 2
  }
]
const Stepper: ComponentType = () => {
  const {nextStep, prevStep, reset, activeStep} = useSteps({
    initialStep: 1
  })

  return (
    <Flex flexDir='column' width='100%'>
      <Steps colorScheme='blue' activeStep={activeStep} background={'63B3ED'}>
        {stepNumber.map(({id}) => (
          <Step key={id}></Step>
        ))}
      </Steps>
    </Flex>
  )
}
export default Stepper
