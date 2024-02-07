import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';

@Controller( 'messages' )
export class MessagesController {

    @Get( 'hello' )
    listMessages() {
        return 'hey';
    }

    @Post()
    createMessages( @Body() body: CreateMessageDto ) {
        console.log( body );
    }

    @Get( '/:id' )
    getsingleMessage( @Param() id: string ) {
        console.log( id );
    }
}
