import {Container} from '@chakra-ui/react'
import {ComponentType, useEffect} from 'react'

import {Layout} from '../../entities/Layout'
import useEnterTestStore from '../../widgets/EnterTest/lib/hooks/useEnterTestStore'
import {useNavigate} from 'react-router-dom'

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
