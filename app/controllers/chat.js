module.exports.initChat = (application, req, res) => {
  const dataForm = req.body;

  req.assert('apelido', 'Nome ou apelido é obrigatório').notEmpty();
  req.assert('apelido', 'Nome ou apelido deve conter entre 3 e 15 caracteres').len(3, 15);

  const err = req.validationErrors();

  if (err) {
    res.render('index', { validation: err });
    return;
  }

  application.get('io').emit('msg', { apelido: dataForm.apelido, message: 'acabou de entrar no chat' })

  res.render("chat", { dataForm: dataForm });
};