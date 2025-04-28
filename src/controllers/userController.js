export const getAllUsers = (req, res) => {
    res.status(200).json({mensagem: "Rota GET usuários funcionando!"})
}

export const postCreateUsers = (req, res) => {
    const { nome, email } = req.body

    const newUsers = {
        nome,
        email
    }

    res.status(201).json(newUsers)
}