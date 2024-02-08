import { MessageRepository } from "./messages.repository";

export class MessagesService {
    // This is temporary. We will fix this in the next chapter.
    // Service is creating it own dependency. This is not good.
    // Do not use this in a real app.
    messageRepo: MessageRepository;

    constructor() {
        this.messageRepo = new MessageRepository();
    }

    async findOne( id: string ) {
        return this.messageRepo.findOne( id );
    }

    async findAll() {
        return this.messageRepo.findAll();
    }

    async create( content: string ) {
        return this.messageRepo.create( content );
    }
}