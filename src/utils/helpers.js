export function formatAddress(data) {
  if (!data) {
    return 'no address';
  }
  return `${data.street || ''}, ${data.suite || ''}, ${data.city || ''}, ${
    data.zipcode || ''
  }`;
}

export function formatCompany(data) {
  if (!data) {
    return 'no company';
  }
  return `${data.name || ''}, ${data.catchPhrase || ''}`;
}
