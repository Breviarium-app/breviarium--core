export interface BreviariumInterface {
    getLaudes: (date?: Date) => string;
    getVesperae: (date?: Date) => string;
    getOfficium: (date?: Date) => string;
    getTertia: (date?: Date) => string;
    getSexta: (date?: Date) => string;
    getNona: (date?: Date) => string;
    getCompletorium: (date?: Date) => string;
    getMissaleLectiones: (date?: Date) => string;
    getEvangelium: (date?: Date) => string;
    getCurrentDate: () => Date;
    setDate: (date: Date) => void;
}
