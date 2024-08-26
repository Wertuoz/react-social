export const formatToClientData = (date?: Date) => {
  if (!date) return ""

  return new Date(date).toLocaleDateString()
}

export function hasErrorMessage(
  err: unknown,
): err is { data: { error: string } } {
  return (
    typeof err === "object" &&
    err !== null &&
    "data" in err &&
    typeof err.data === "object" &&
    err.data !== null &&
    "error" in err.data
  )
}
