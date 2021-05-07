import moment from 'moment';

const dateToHuman = (date) => {
    // dd/mm/yyyy X
    // mm/dd/yyyy <-
    let result = moment(date).format("dddd, D MMMM YYYY");
    return result;
}

export {
    dateToHuman
}