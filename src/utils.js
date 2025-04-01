



const parseDate = (date) => {
    if(!date){return 0}
    const formattedDate = date.replace('T', ' ').slice(0,-5)
    return formattedDate
}

export {parseDate}

