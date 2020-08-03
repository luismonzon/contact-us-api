const { Response, Request } = require('express');

module.exports =  function signin (req: Request, res: Response) {
    res.send({
        username: 'luismonzon',
        firstName: 'Luis',
        lastName: 'Monzón',
        age: 25
    });
}