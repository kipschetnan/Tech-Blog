const { format } = require('date-fns')

module.exports = {
  format_time: (date) => {
    return date.toLocaleTimeString();
  },
  format_date: (date) => {
    return format(date, 'MM/dd/yyyy')
    // return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()
    //   }`;
  },
};
