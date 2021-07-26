class DragonConstants {
  static get InvalidParams() {
    return 'Parâmetros inválidos.';
  }
  static get RequiredFields() {
    return 'Um ou mais campos obrigatorios não preenchidos';
  }
  static get InvalidImage(){
    return 'Link da imagem ou tipo está errado \n A imagem deve ser do tipo png ou jpg.'
  }
  static get InvalidID(){
    return 'ID inválido.'
  }
}

module.exports = DragonConstants;
