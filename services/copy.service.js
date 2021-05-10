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

    async getCopy(id){
        return await prisma.copies.findFirst({
            where:{
                copy_id: parseInt(id)
            }
        });
    }

    async getAllCopies(){
        return await prisma.copies.findMany({});
    }

    async updateCopy(data, id){
        const{
            publication_id,
            state_id,
            current_situation
        } = data;
        return await prisma.copies.update({
            where:{
                copy_id: parseInt(id)
            },
            data:{
                publication_id,
                state_id,
                current_situation
            }
        });
    }

    async deleteCopy(id){
        return await prisma.copies.delete({
            where:{
                copy_id: parseInt(id)
            }
        });
    }

}