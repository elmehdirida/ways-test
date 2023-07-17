export interface Letter {
    id: number;
    senderAddress: string;
    receiverAddress: string[];
    contact: string[];
    subject: string;
    body: string;
    footNote: string;
}