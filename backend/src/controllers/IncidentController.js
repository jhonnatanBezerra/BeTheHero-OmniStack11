const connection = require('../database/connection');

module.exports = {

  async index(request, response) {
    const { page = 1 } = request.query;

    const [count] = await connection('incidents').count(); // contador de casos no BD

    const incidents = await connection('incidents')
      .join('ongs', 'ongs.id', '=', 'incidents.ong_id') // entrando na tabela ongs pra mostrar as informações dos incidents junto com dados da ong
      .limit(5) // esquema de paginação
      .offset((page - 1) * 5) // vai trazer de 5 em 5 incidents 
      .select([
        'incidents.*',
        'ongs.name',
        'ongs.email',
        'ongs.whatsapp',
        'ongs.city',
        'ongs.uf'
      ]);

    response.header('X-Total-Count', count['count(*)']);
    //enviando a quantidade de casos para o front atraves do header chamado xtotalcount;


    return response.json(incidents);
  },


  async create(request, response) {
    const { title, description, value } = request.body;
    const ong_id = request.headers.authorization;

    const [id] = await connection('incidents').insert({
      title,
      description,
      value,
      ong_id
    });

    return response.json({ id });

  },


  async delete(request, response) {
    const { id } = request.params;
    const ong_id = request.headers.authorization;

    const incident = await connection('incidents')
      .where('id', id)
      .select('ong_id')
      .first();

    if (incident.ong_id != ong_id) {
      return response.status(401).json({ erros: 'Operation not permited' });

    }
    await connection('incidents').where('id', id).delete();

    return response.status(204).send();

  }
};