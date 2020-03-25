const connection = require('../database/connection');
module.exports ={   
    async index(request,response){
        const {id} = request.body;
        const ongs = await connection('ongs')
        .where('id',id)
        .select('name')
        .first();
    
       if(!ongs){
           return response.status(400).json({error: 'Nenhuma ong foi emcontrada com esse id'});
       }
       return response.json(ongs);
    }
   
};