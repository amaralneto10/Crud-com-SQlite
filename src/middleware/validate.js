
// Requisição -> Middleware -> Rota(Controllers) -> Resposta

// REFERÊNCIA
// function Middleware(req, res, next) {

//     // 1. Fazer algo com a requisição
//     //   -> Validar as informações
//     //   -> Verificar se o usuário tem conta
//     // 2. Modificar  a resposta
//     //   -> Da uma resposta ao cliente
//     // 3. Chamar o next() para passar para o próximo middleware(agente)
//     //   -> Ou encerra com res.send()
// }



export const validate = (schema) => {
    return (req, res, next) => {
       
        try {
        // Validar o corpo da requisição contra schema fornecido
        const validateData = schema.parse(req.body)
        
        // Substituir o body pelos dados validados
        req.body = validateData

        // Chamo p próximo agente(middleware)
        next()
        } catch (error) {
            return res.status(400).json({mensagem: `Erro de validação: ${error.message}`})
        }
    }
}