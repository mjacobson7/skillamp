import { AppError } from './app-error';

export class NotFoundError extends AppError {

    constructor(error?: any) {
        super();

        console.log("Not Found ", error)
    }
}

//404