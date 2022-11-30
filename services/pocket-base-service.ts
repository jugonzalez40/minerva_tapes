import PocketBase from 'pocketbase';
import config from "../config";
import { Cassette } from '../types/base';


class PocketBaseService {

    private instance: PocketBase;

    constructor() {
        this.instance = new PocketBase(config.pocket_base_url);
    }


    async getPublicCassettes(): Promise<Cassette[]> {
        try {
            const result = await this.instance.collection('cassette').getList<Cassette>(1, 50);
            console.log(result);

            return result.items;

        } catch (error) {
            console.log(error);
            return [];
        }
    }

}


export default new PocketBaseService();