export function makeAzurePath(
  path: string,
  deploymentName: string,
  apiVersion: string,
) {
  // const fullPath = ${AZURE_OPENAI_BASE}openai/deployments/gpt-35-turbo/chat/completions?api-version=2024-02-15-preview
  return `openai/deployments/${deploymentName}/chat/completions?api-version=${apiVersion}`;
}
