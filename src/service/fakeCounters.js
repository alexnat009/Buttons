function InitialCounters() {
  const initialCounters = [
    { id: 1, value: 0, minValue: 0, maxValue: 10 },
    { id: 2, value: 0, minValue: 0, maxValue: 10 },
    { id: 3, value: 0, minValue: 0, maxValue: 10 },
    { id: 4, value: 0, minValue: 0, maxValue: 10 },
  ];
  return initialCounters;
}
export function getCounters() {
  return InitialCounters();
}
export function getCounter(id) {
  return InitialCounters().find((x) => x.id === id);
}
