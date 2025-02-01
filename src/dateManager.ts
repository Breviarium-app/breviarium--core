// src/dateManager.ts
let currentDate: Date = new Date();

export function setDay(date?: Date): void {
    currentDate = date ?? new Date();
}

export function getCurrentDate(): Date {
    return currentDate;
}
