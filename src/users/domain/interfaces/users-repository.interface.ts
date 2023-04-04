import { UserEntity } from "../entities/users.entity";

export interface UserRepositoryInterface {
    getAllUsers(): Promise<UserEntity[]>;
    getUser(email: string): Promise<UserEntity>;
    create(post: UserEntity): Promise<void>;
}