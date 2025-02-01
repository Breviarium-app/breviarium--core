// src/prayers.ts
import { getCurrentDate } from "./dateManager";

function formatDate(date: Date): string {
    return date.toISOString().split("T")[0];
}

export function getLaudes(date?: Date): string {
    const day = formatDate(date ?? getCurrentDate());
    return `Laudes prayer for ${day}`;
}

export function getVesperae(date?: Date): string {
    const day = formatDate(date ?? getCurrentDate());
    return `Vesperae prayer for ${day}`;
}

export function getOfficium(date?: Date): string {
    const day = formatDate(date ?? getCurrentDate());
    return `Officium prayer for ${day}`;
}

export function getTertia(date?: Date): string {
    const day = formatDate(date ?? getCurrentDate());
    return `Tertia prayer for ${day}`;
}

export function getSexta(date?: Date): string {
    const day = formatDate(date ?? getCurrentDate());
    return `Sexta prayer for ${day}`;
}

export function getNona(date?: Date): string {
    const day = formatDate(date ?? getCurrentDate());
    return `Nona prayer for ${day}`;
}

export function getCompletorium(date?: Date): string {
    const day = formatDate(date ?? getCurrentDate());
    return `Completorium prayer for ${day}`;
}

export function getLectiones(date?: Date): string {
    const day = formatDate(date ?? getCurrentDate());
    return `Lectiones prayer for ${day}`;
}

export function getEvangelium(date?: Date): string {
    const day = formatDate(date ?? getCurrentDate());
    return `Evangelium prayer for ${day}`;
}
