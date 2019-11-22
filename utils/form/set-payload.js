/**
 * Set data from field list array to payload object
 * by specified field's names
 * @param {object} payload Specified payload with required fiels
 * @param {Array} fieldList Default form's field list
 * @returns object
 */
export function setPayload (payload, fieldList) {
  for (const key in payload) {
    if (payload.hasOwnProperty(key)) {
      fieldList.forEach((element) => {
        if (element.id === key) {
          payload[key] = element.value
        }
      })
    }
  }
  return payload
}
