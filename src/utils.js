



const parseDate = (date) => {
    const formattedDate = date.replace('T', ' ').slice(0,-5)
    return formattedDate
}

export {parseDate}

