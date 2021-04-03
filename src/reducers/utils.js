export const matchesSearch = (search, aClass) => {
  const start = (new Date(search.startDateTime)).valueOf() || 1
  const end = (new Date(search.endDateTime)).valueOf() || (new Date('12/31/2050')).valueOf()
  const classTime = (new Date(aClass.date + ' ' + 
            aClass.startTime.split('.').join('')))
            .valueOf()
  
  let duration = parseFloat(aClass.duration);
  duration = duration >= 15 ? duration : duration*60
  
  return (
    aClass.name.toLowerCase().includes(search.name.toLowerCase())
    &&
    aClass.type.toLowerCase().includes(search.type.toLowerCase())
    &&
    aClass.level.toLowerCase().includes(search.level.toLowerCase())
    &&
    aClass.location.toLowerCase().includes(search.location.toLowerCase())
    &&
    classTime > start && classTime < end
    &&
    (duration <= search.maxDuration || !search.maxDuration)
  )
}