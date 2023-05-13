const date = new Date('Mart 15, 1975 23:15:30')
date.setMinutes(10)
date.setUTCDate(5)

console.log(
  'Minutes:' + date.getMinutes() + ',',
  '',
  'Year:' + date.getFullYear() + ',',
  '',
  'UTCDate:' + date.getUTCDate()
)
