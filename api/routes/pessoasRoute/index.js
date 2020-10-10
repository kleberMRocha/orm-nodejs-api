
    const {Router} = require('express');
    const PessoaControler = require('../../controllers/PessoaController');

    const router = Router();
    
    router.get('/pessoas', PessoaControler.GetPessoas);
    router.get('/pessoas/:id', PessoaControler.GetUmaPessoa);
    router.post('/pessoas', PessoaControler.CreatePessoa);
    router.put('/pessoas/:id', PessoaControler.UpdatePessoa);
    router.delete('/pessoas/:id', PessoaControler.DeletePessoa);

    //matriculas 
    router.get('/pessoas/:id/matricula/:matriculaId', PessoaControler.GetMatricula);
    router.post('/pessoas/:id/matricula/', PessoaControler.CreateMatricula);
    router.put('/pessoas/:id/matricula/:matriculaId', PessoaControler.updateMatricula);
    router.delete('/pessoas/:id/matricula/:matriculaId', PessoaControler.DeleteMatricula);

    module.exports = router;


