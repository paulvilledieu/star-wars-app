import moment from 'moment';


export const sortStringDate = (a: string, b: string, ascending = true) => {
    if (ascending) {
        return moment(a).isBefore(b) ? -1 : 1;
    }
    return moment(a).isAfter(b) ? -1 : 1;
}