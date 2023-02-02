module.exports = app => {
    const { existsOrError, notExistsOrError } = app.api.validation

    const save = (req, res) => {
        const surgsus = {
            id: req.body.id,
            name: req.body.name,
            parentId: req.body.parentId
        }
        if (req.params.id) surgsus.id = req.params.id

        try {
            existsOrError(surgsus.name, 'Nome não informado')

        } catch (msg) {
            return res.status(400).send(msg)
        }
        if (surgsus.id) {
            app.db('surgerysus')
                .update(surgsus)
                .where({ id: surgsus.id })
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            app.db('surgerysus')
                .insert(surgsus)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }


    const remove = async (req, res) => {
        try {
            existsOrError(req.params.id, 'Código de usuario  não informado.')
            const rowsDeleted = await app.db('surgerysus')
                .where({ id: req.params.id }).del()
            existsOrError(rowsDeleted, 'Usuario não foi encontrado.')

            res.status(204).send()
        } catch (msg) {
            res.status(400).send(msg)
        }
    }

    const get = (req, res) => {
        app.db('surgerysus')
            .then(surgerysus => res.json(surgerysus))
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        app.db('surgerysus')
            .where({ id: req.params.id })
            .first()
            .then(surgsus => res.json(surgsus))
            .catch(err => res.status(500).send(err))
    }

    return { save, remove, get, getById}
}