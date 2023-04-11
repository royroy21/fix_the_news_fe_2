import moment from 'moment'

export const getHowLongAgo = (dateString) => {
  const now = moment();
  const then = moment(dateString);
  const duration = moment.duration(then.diff(now));
  return duration.humanize(true)
};
