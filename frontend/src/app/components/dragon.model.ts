export interface Dragon {
    _id?: string;
    name: string;
    type: string;
    history: string;
    imageURL: string;
    createdAt: Date;    
    updatedAt: Date
}

export type ShowDragon = Omit<Dragon, "createdAt" | "updatedAt">;

