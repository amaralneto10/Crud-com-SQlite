import { verifyToken } from "../utils/auth.js";

export const authenticate = (req, res, next) => {

    // Obter o token do header Authorization
    const authHeader = req.headers['authorization']

    const token = authHeader && authHeader.split(' ')[1]

    if (!token) {
        res.status(401).json({mensagem: `Token de acesso não fornecido!`})
        return
    }

    try {
        // Verificar se o token é válido
        // Adicionar os dados decodificados do token na requisição
        const decoded = verifyToken(token)
        // res.json({decoded})
        // return
        req.user = decoded
        next()
    } catch (error) {
        res.status(403).json({mensagem: `Token inválido ou expirado! ${error.message}`})
    }

}