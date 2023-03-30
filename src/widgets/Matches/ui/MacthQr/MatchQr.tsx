import {Box, Button} from '@chakra-ui/react'
import {QRCodeSVG} from 'qrcode.react'
import {ComponentType} from 'react'

interface IProps {
  link: string
}

const MatchQr: ComponentType<IProps> = ({link}) => {
  return (
    <Box w='max-content'>
      <QRCodeSVG size={160} value={link} />
      <Button w='100%' variant='outline' mt='4' fontSize='xs'>
        Скопировать ссылку
      </Button>
    </Box>
  )
}

export default MatchQr
