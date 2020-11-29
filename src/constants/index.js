export const axisSystem = ['x', 'y']

export const shipTypes = {
  carrier: { label: 'Carrier', size: 4 },
  crusier: { label: 'Crusier', size: 3 },
  destroyer: { label: 'Destroyer', size: 2 },
  submarine: { label: 'Submarine', size: 1 },
}

export const infinite = 99999

export const defaultLevels = [
  { id: 1, name: 'Eazy', turns: infinite },
  { id: 2, name: 'Medium', turns: 100 },
  { id: 3, name: 'Hard', turns: 50 },
]
