export function formatDate(date: Date | undefined): string {
    if (!date) {
        throw new Error("Invalid date format.");
    }
    return date.toISOString().split("T")[0];
}