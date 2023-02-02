module.exports = app => {
    const { existsOrError } = app.api.validation

    const save = async (req, res) => {
        const patient = { ...req.body }
        if (req.params.id) patient.id = req.params.id

        try {

            existsOrError(patient.name, 'Informe o nome do paciente')
            existsOrError(patient.priory, 'Informe a prioridade')
            existsOrError(patient.cel, 'Informe o seu numero')
            //fazer logica para data
            existsOrError(patient.dateSolicit, 'Informe a data de solicitação')
            existsOrError(patient.dateInput, 'Informe a data de entrada')
            existsOrError(patient.markedData, 'Informe a data da consulta')
            existsOrError(patient.localConsult, 'Informe o local da consulta')
            existsOrError(patient.status, 'Informe o status')
        } catch (msg) {

            return res.status(400).send(msg)
        }

        if (patient.id) {
            app.db('colonoscopy')
                .update(patient)
                .where({ id: patient.id })
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            app.db('colonoscopy')
                .insert(patient)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }



    }
    const remove = async (req, res) => {
        try {
            existsOrError(req.params.id, 'Paciente não existe.')

            const rowsDeleted = await app.db('colonoscopy')
                .where({ id: req.params.id }).del()
            existsOrError(rowsDeleted, 'Paciente não foi encontrado.')

            res.status(204).send()
        } catch (msg) {
            res.status(400).send(msg)
        }
    }

    const get = (req, res) => {
        app.db('colonoscopy')
            .then(colonoscopy => res.json(colonoscopy))
            .catch(err => res.status(500).send(err))
    }
    const getById = (req, res) => {
        app.db('colonoscopy')
            .where({ id: req.params.id })
            .first()
            .then(colonoscopy => res.json(colonoscopy))
            .catch(err => res.status(500).send(err))
    }

    return { save, remove, get, getById }

}