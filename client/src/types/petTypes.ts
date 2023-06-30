export type PetType = {
    id: number;
    name: string;
    type: string;
    age: number;
    img: string;
    sex: string;
    city: string;
    about: string;
    pedigree: string;
    user_id: number;
};

export type PetFormType = {
    name: HTMLInputElement;
    file: HTMLInputElement & { files: FileList };
    type: HTMLInputElement;
    age: HTMLInputElement;
    sex: HTMLInputElement;
    city: HTMLInputElement;
    about: HTMLInputElement;
    pedigree: HTMLInputElement;
};

export type EditFormType = {
    id: number;
    name: string;
    type: string;
    age: string;
    // img: string;
    sex: string;
    city: string;
    about: string;
    pedigree: string;
}