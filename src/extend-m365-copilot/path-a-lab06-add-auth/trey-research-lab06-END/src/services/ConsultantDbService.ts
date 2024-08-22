import DbService from './DbService';
import { DbConsultant } from '../model/dbModel';
import { Consultant } from '../model/baseModel';

const TABLE_NAME = "Consultant";

class ConsultantDbService {

    // NOTE: Consultants are READ ONLY in this demo app, so we are free to cache them in memory.
    private dbService = new DbService<DbConsultant>(true);

    async getConsultantById(id: string): Promise<Consultant> {
        const consultant = await this.dbService.getEntityByRowKey(TABLE_NAME, id) as DbConsultant;
        return consultant;
    }

    async getConsultants(): Promise<Consultant[]> {
        const consultants = await this.dbService.getEntities(TABLE_NAME) as DbConsultant[];
        return consultants;
    }

    async createConsultant(consultant: Consultant): Promise<Consultant> {
        console.log ('CREATE CONSULTANT HERE');
        return null;
    }

}

export default new ConsultantDbService();
