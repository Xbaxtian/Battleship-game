/* eslint-disable import/prefer-default-export */
export const mapNTimes = (_n, transformer) => ([...Array(_n)].map(transformer))
