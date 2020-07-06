const formatDate = (date) => {
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        futureDay = '' + (d.getDate() + 7),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2) day = '0' + day;
    if (futureDay.length < 2) futureDay = '0' + futureDay;

    return [year, month, day].join('/') + ' - ' + futureDay;
}
const addDays = (date, days) => {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}
export {
    formatDate, addDays
}
