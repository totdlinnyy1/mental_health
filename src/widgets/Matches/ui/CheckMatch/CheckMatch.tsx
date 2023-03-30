import {Box, HStack} from '@chakra-ui/react'
import {ComponentType} from 'react'

import {realUser} from '@src/share'
import useMatchesStore from '@widgets/Matches/lib/hooks/useMatchesStore'
import MatchQr from '@widgets/Matches/ui/MacthQr/MatchQr'
import MatchSearch from '@widgets/Matches/ui/MatchSearch/MatchSearch'

const CheckMatch: ComponentType = () => {
  const {isCompleted} = useMatchesStore()

  const {id} = realUser
  return (
    <HStack justifyContent='space-between' alignItems='start'>
      <Box w='70%'>
        <MatchSearch />
      </Box>
      {isCompleted && <MatchQr userId={id} />}
    </HStack>
  )
}

export default CheckMatch
