export default function indicatorsStoragedData(ticketsData) {
    //Dados
    var totalStoragedTickets = JSON.parse(localStorage.getItem('totalTickets'));
    const lengthtotalStoragedTickets = ticketsData?.length;
    const lengthAssignedStoragedTickets = ticketsData?.filter(ticket => ticket.assignee_id).length;

    const lastHourHistory = parseInt(localStorage.getItem('lastHour'));
    const currentTime = new Date().getHours() + ":" + new Date().getMinutes()
    const currentTimeInDays = new Date().getDay()

    //ultima hora processada
    if (!lastHourHistory) {
        localStorage.setItem('lastHour', currentTimeInDays)
    } else {
        if (lastHourHistory !== currentTimeInDays) {
            localStorage.removeItem('totalTickets')
            totalStoragedTickets = JSON.parse(localStorage.getItem('totalTickets'));
            localStorage.setItem('lastHour', currentTimeInDays)
        }
    }

    //Caso não exista o localstorage ainda, vou criar
    if (!totalStoragedTickets) {
        const add = {
            total: lengthtotalStoragedTickets,
            assignedTickets: lengthAssignedStoragedTickets,
            currentTime
        }
        localStorage.setItem('totalTickets', JSON.stringify([add]))
        return
    }

    var existTime = false

    //Verificar se já existe o minuto no storaged
    totalStoragedTickets.forEach(time => {
        if (time.currentTime === currentTime) {
            //Sobreescreve os registros.            
            time.total = lengthtotalStoragedTickets;
            time.assignedTickets = lengthAssignedStoragedTickets;
            existTime = true
        }
    });

    if (!existTime) {
        const add = {
            total: lengthtotalStoragedTickets,
            assignedTickets: lengthAssignedStoragedTickets,
            currentTime: currentTime
        }

        totalStoragedTickets.push(add)
        localStorage.setItem('totalTickets', JSON.stringify(totalStoragedTickets))

    }

}