import {Container} from '@chakra-ui/react'
import {ComponentType, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

import {Layout} from '../../entities/Layout'
import useEnterTestStore from '../../widgets/EnterTest/lib/hooks/useEnterTestStore'

const Dashboard: ComponentType = () => {
  const {isCompleted} = useEnterTestStore()
  const navigate = useNavigate()
  useEffect(() => {
    if (!isCompleted) {
      navigate('/info')
    }
  }, [isCompleted])
  return (
    <Layout>
      <Container />
    </Layout>
  )
}

export default Dashboard
