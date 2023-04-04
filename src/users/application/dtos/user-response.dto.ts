export class UserResponseDto {
    id: string;
    email: string;
    createDate: Date;

    constructor(id: string, email: string, createDate:Date) {
        this.id = id;
        this.email = email;
        this.createDate = createDate;
    }
}
