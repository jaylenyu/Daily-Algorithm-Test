const solution = (phoneNumber) => {
    const regex = /\d(?=[0-9]{4})/g
    return phoneNumber.replace(regex, '*')
}