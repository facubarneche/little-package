export class Sticker {
    private id: string;
    private team: string;
    private number: number;
    private type: string;
    private difficulty: string;

    constructor(sticker: any) {
        this.id = sticker.id;
        this.team = sticker.team;
        this.number = sticker.number;
        this.type = sticker.type;
        this.difficulty = sticker.difficulty;
    }
}