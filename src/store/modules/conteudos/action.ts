export function addIdBeneficio(id: number) {
  console.log(id)
  return {
    type: 'ADD_ID',
    id,
  };
}
export function menosIdBeneficio(id: number) {
  let total = id - 1
  return {
    type: 'MENOS_UM',
    id: total,
  };
}
