export type PetType = {
    id: number;
    name: string;
    type: string;
    age: number;
    image: string;
    sex: string;
    city: string;
    info: string;
    pedigree: string;
    user_id: number;
};

export type PetFormType = {
    name: HTMLInputElement;
    image: HTMLInputElement & { files: FileList };
    type: HTMLInputElement;
    age: HTMLInputElement;
    sex: HTMLInputElement;
    city: HTMLInputElement;
    info: HTMLInputElement;
    pedigree: HTMLInputElement;
};

export type EditFormType = {
    id: number;
    name: string;
    type: string;
    age: string;
    image: string;
    sex: string;
    city: string;
    info: string;
    pedigree: string;
}