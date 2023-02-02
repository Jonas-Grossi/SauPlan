//const admin = require('./admin')
module.exports = app => {
    app.post('/signup', app.api.user.save)
    app.post('/signin', app.api.auth.signin)
    app.post('/validateToken', app.api.auth.validateToken)


    app.route('/users')
        //.all(app.config.passport.authenticate())
        .post(app.api.user.save)
        .get(app.api.user.get)

    app.route('/users/:id')
        //.all(app.config.passport.authenticate())
        //usuario admin
        .put(app.api.user.save)
        .get(app.api.user.getById)
        .delete(app.api.user.remove)

    
        app.route('/colonoscopy')
          //  .all(app.config.passport.authenticate())
            .get(app.api.colonoscopy.get)
            .post(app.api.colonoscopy.save)
    
    
        app.route('/colonoscopy/:id')
          //  .all(app.config.passport.authenticate())
            .get(app.api.colonoscopy.getById)
            .put(app.api.colonoscopy.save)
            .delete(app.api.colonoscopy.remove)
    
    /*
        app.route('/densitometry')
            .all(app.config.passport.authenticate())
            .get(admin(app.api.densito.get))
            .post(admin(app.api.densito.save))
    
    
        app.route('/densitometry/:id')
            .all(app.config.passport.authenticate())
            .get(app.api.densito.getById)
            .put(admin(app.api.densito.save))
            .delete(admin(app.api.densito.remove))
    
    
        app.route('/rectosigmoidoscopy')
            .all(app.config.passport.authenticate())
            .get(admin(app.api.recto.get))
            .post(admin(app.api.recto.save))
    
    
        app.route('/rectosigmoidoscopy/:id')
            .all(app.config.passport.authenticate())
            .get(app.api.recto.getById)
            .put(admin(app.api.recto.save))
            .delete(admin(app.api.recto.remove))
    
        app.route('/surgery')
            .all(app.config.passport.authenticate())
            .get(admin(app.api.surg.get))
            .post(admin(app.api.surg.save))
    
    
        app.route('/surgery/:id')
            .all(app.config.passport.authenticate())
            .get(app.api.surg.getById)
            .put(admin(app.api.surg.save))
            .delete(admin(app.api.surg.remove))
    
    
        app.route('/surgerysus')
            .all(app.config.passport.authenticate())
            .get(admin(app.api.surgsus.get))
            .post(admin(app.api.surgsus.save))
    
    
        app.route('/surgerysus/:id')
            .all(app.config.passport.authenticate())
            .get(app.api.surgsus.getById)
            .put(admin(app.api.surgsus.save))
            .delete(admin(app.api.surgsus.remove))
    
    */




}