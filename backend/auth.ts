import {Request, Response} from 'express'


export const handleAuthentication = (req: Request, resp: Response) => {
    const user = req.body
    if (isValid(user)) {

    }else {
        resp.status(403).json({message: 'Dados inválido.'})
    }
}

function isValid(user): boolean {
    return false
}