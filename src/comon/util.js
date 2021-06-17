import moment from 'moment'
export const lefttrim = (str) => {
  if (!str) return str
  return str.replace(/^\s+/g, '')
}
export const createdDate = (created_at) => {
  return moment(created_at, 'YYYY-MM-DD HH:mm:ss').format('DD MMM YYYY hh:mm A')
}
export const createdDayMonth = (created_at) => {
  return moment(created_at, 'YYYY-MM-DD HH:mm:ss').format('DD MMM')
}
export const createdDateOnly = (created_at) => {
  return moment(created_at, 'YYYY-MM-DD HH:mm:ss').format('DD MMM YYYY')
}
export const createdTimeOnly = (created_at) => {
  return moment(created_at, 'HH:mm').format('hh:mm')
}
export const createdTime24Only = (created_at) => {
  return moment(created_at, 'HH:mm').format('HH:mm')
}
export const isBeforeDate = (date) => {
  return moment().isBefore(date)
}
export const isAfterDate = (date) => {
  return moment().isAfter(date)
}
export const isBetweenDate = (dateStart, dateEnd) => {
  return moment().isBetween(dateStart, dateEnd)
}

export const asyncForEach = async (array, callback) => {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array)
  }
}
export const capitalizeFirst = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}
export const setStateAsync = (state, item) => {
  return new Promise((resolve) => {
    item.setState(state, resolve)
  })
}
export const addDay = (date, number) => {
  const new_date = moment(date).clone().add(number, 'days')
  return new_date
}
export const getCurrentDay = (date, number) => {
  const dayString = moment(date).clone().add(number, 'days')
  const dayDate = new Date(dayString)
  const day = dayDate.getDay()

  if (day === 1) {
    return 'T2'
  }
  if (day === 2) {
    return 'T3'
  }
  if (day === 3) {
    return 'T4'
  }
  if (day === 4) {
    return 'T5'
  }
  if (day === 5) {
    return 'T6'
  }
  if (day === 6) {
    return 'T7'
  }
  if (day === 0) {
    return 'CN'
  }
}
