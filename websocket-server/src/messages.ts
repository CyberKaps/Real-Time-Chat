

import z from 'zod';

// const JOIN_ROOM = "JOIN_ROOM";
// const SEND_MESSAGE = "SEND_MESSAGE";
// const UPDATE_MESSAGE = "UPDATE_MESSAGE";


// const SUPPORTED_MESSAGE_TYPES = [JOIN_ROOM, SEND_MESSAGE, UPDATE_MESSAGE];

export enum SupportedMessage {
    JoinRoom = "JOIN_ROOM",
    SendMessage = "SEND_MESSAGE",
    UpvoteMessage = "JOIN_ROOM", 
}

export const InitMessage = z.object({
    name: z.string(),
    userId: z.string(),
    roomId: z.string(),
})
export type InitMessageType = z.infer<typeof InitMessage>;



export const UserMessageType = z.object({

    userId: z.string(),
    roomId: z.string(),
    message: z.string(),
})
export type UserMessageType = z.infer<typeof UserMessageType>;


export const UpvoteMessageType = z.object({

    userId: z.string(),
    roomId: z.string(),
    chatId: z.string(),
})
export type UpvoteMessageType = z.infer<typeof UpvoteMessageType>;


