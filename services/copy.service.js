import prisma from "../mysql/prisma/prismaClientObject.js";

export default class CopyService {
    constructor() {}

    async createCopy(data){
        const{
            publication_id,
            state_id,
            current_situation
        } = data;
        return await prisma.copies.create({
            data:{
                publication_id,
                state_id,
                current_situation
            }
        });
    }


}