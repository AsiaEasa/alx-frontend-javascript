export default function guardrail(mathFunction) {
  const queue = [];

  try {
    const R = mathFunction();
    queue.push(R);
  } catch (error) {
    queue.push(`Error: ${error.message}`);
  } finally {
    queue.push('Guardrail was processed');
  }

  return queue;
}
