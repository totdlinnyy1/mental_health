import {Box, Button, useToast} from '@chakra-ui/react'
import {QRCodeSVG} from 'qrcode.react'
import {ComponentType} from 'react'

interface IProps {
  userId: number
}

const MatchQr: ComponentType<IProps> = ({userId}) => {
  const URL = window.location.host
  const link = `${URL}/matches?user=${userId}`

  const toast = useToast()

  const onClick = (): void => {
    navigator.clipboard.writeText(link)
    toast({
      title: 'Ссылка скопирована',
      position: 'bottom-right',
      status: 'info'
    })
  }
  return (
    <Box w='max-content'>
      <QRCodeSVG size={160} value={link} />
      <Button w='100%' variant='outline' mt='4' fontSize='xs' onClick={onClick}>
        Скопировать ссылку
      </Button>
    </Box>
  )
}

export default MatchQr
