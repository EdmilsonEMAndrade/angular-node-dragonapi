export interface DragonInt {
    _id?: string;
    name: string;
    type: string;
    history: string;
    imageURL: string;
    createdAt: Date;    
    updatedAt: Date
}

export type ShowDragon = Omit<DragonInt, "createdAt" | "updatedAt">;
export type registerDragon = Omit<DragonInt, "_id" | "createdAt" | "updatedAt">;
