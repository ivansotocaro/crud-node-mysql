const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn)=>{
    if(err) throw err;
    conn.query('select * from customer', (err, rows)=>{
        if(err){
          res.json(err);
        }
          
          res.render('cliente', {
            data: rows
          });
    });
  });
};

controller.save = (req, res) =>{
  let data = req.body;

  req.getConnection((err, conn)=>{
    if(err) throw err;
    conn.query('insert into customer set ?', [data], (err, rows)=>{
      res.redirect('/');
    });
  });
};


controller.delete = (req, res) =>{
let id = req.params.id;

  req.getConnection((err, conn)=>{
    if(err) throw err;
    conn.query(`delete from customer where id = ${id}`, (err, rows)=>{
      res.redirect('/');
    });
    
  });
};


controller.edit = (req, res) =>{
  let id = req.params.id;

  req.getConnection((err, conn)=>{
    if(err) throw err;
    conn.query(`select * from customer where id = ${id}`, (err, rows)=>{
      res.render('cliente_edit', {
        data: rows[0]
      });
    });
    
  });
};


controller.update = (req, res) =>{
  let id = req.params.id;
  let data = req.body;

  req.getConnection((err, conn)=>{
    if(err) throw err;
    conn.query(`update customer set ? where id = ${id}`, [data], (err, rows)=>{
      res.redirect('/');
    });
    
  });

};



module.exports = controller;