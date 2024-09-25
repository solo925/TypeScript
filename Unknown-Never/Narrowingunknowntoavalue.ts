type APIResponse = { data: { id: string } } | unknown;

const parseValue = (value: unknown): string => {
  // Check if value is an object and has the expected shape
  if (
    typeof value === 'object' &&
    value !== null &&
    'data' in value &&
    typeof (value as { data: { id: string } }).data.id === 'string'
  ) {
    return (value as { data: { id: string } }).data.id;
  }

  throw new Error('Parsing error!');
};
