import { Badge } from "@chakra-ui/react"

const formatDataHora = (data) => {
    var formtData = new Date(data),
        dia  = formtData.getDate().toString().padStart(2, '0'),
        mes  = (formtData.getMonth()+1).toString().padStart(2, '0'), //+1 pois no getMonth Janeiro começa com zero.
        ano  = formtData.getFullYear(),
        hora = formtData.getUTCHours().toString().padStart(2, '0'),
        minuto = formtData.getUTCMinutes().toString().padStart(2, '0')

    return `${dia}/${mes}/${ano}, ${hora}:${minuto}`
}

const status = (tipoStatus) => {
    switch(tipoStatus) {
      case 'open':
        return(<Badge colorScheme="teal">{tipoStatus}</Badge>)       
      case 'pending':
        return(<Badge colorScheme="blue">{tipoStatus}</Badge>)
      case 'hold':
       return(<Badge colorScheme="purple">{tipoStatus}</Badge>)
       default:
        return(<Badge colorScheme="teal">{tipoStatus}</Badge>)
    }
      
  }

const priority = (tipoPriority) => {
switch(tipoPriority) {
    case 'low':
    return(<Badge colorScheme="green">Baixa</Badge>)        
    case 'normal':
    return(<Badge colorScheme="yellow">Normal</Badge>)
    case 'high':
    return(<Badge colorScheme="orange">Alta</Badge>)
    case 'urgent':
    return(<Badge colorScheme="red">Urgente</Badge>)
    default:
    return(<Badge colorScheme="teal">N/a</Badge>) 
}  
} 

export {formatDataHora,status,priority}

