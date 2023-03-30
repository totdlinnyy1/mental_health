import {HStack} from '@chakra-ui/react'
import {ComponentType} from 'react'

import MatchQr from '@widgets/Matches/ui/MacthQr/MatchQr'
import MatchSearch from '@widgets/Matches/ui/MatchSearch/MatchSearch'

const CheckMatch: ComponentType = () => {
  return (
    <HStack justifyContent='space-between' alignItems='start'>
      <MatchSearch />
      <MatchQr
        link={
          'https://kartinkin.net/pics/uploads/posts/2022-09/1663154690_49-kartinkin-net-p-kot-s-pechalnimi-glazami-krasivo-55.jpg'
        }
      />
    </HStack>
  )
}

export default CheckMatch
